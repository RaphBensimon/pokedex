<template>
	<div id="pokemon">
		<spinner v-if="loading" variant="blue" size="xl" />
		<div v-else>
			<div class="d-flex justify-content-between align-items-center">
				<div class="d-flex align-items-center">
					<h1>{{ pokemon.name }}</h1>
					<img :src="pokemon.sprites.front_default">
				</div>
				<button class="blue" @click="$router.go(-1)">
					Return
				</button>
			</div>
			<div>
				Types :
				<span v-for="(type, i) in pokemon.types" :key="i">
					{{ type.type.name }}
				</span>
			</div>
			<div>
				Abilites :
				<span v-for="(abilitie, i) in pokemon.abilities" :key="i">
					{{ abilitie.ability.name }}
				</span>
			</div>
			<div>
				Statistic :
				<ul>
					<li v-for="(stat, i) in pokemon.stats" :key="i">
						{{ stat.base_stat }} {{ stat.stat.name }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	head : {
		title : 'Pokémon'
	},
	data() {
		return {
			pokemon : null,
			loading : true
		}
	},
	async created() {
		const name = this.$route.query.name
		await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
			this.pokemon = res
			this.loading = false
		})
	}
}
</script>
<style lang="scss" scoped>
#pokemon {
	padding: 0 10px;
}
h1 {
	text-transform: capitalize;
	margin: 0;
}
.spinner {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
</style>