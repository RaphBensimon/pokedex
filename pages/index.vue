<template>
	<div class="pokemon-list">
		<Pokemon v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon" />
	</div>
</template>

<script>
import Pokemon from './list/Pokemon.vue'
export default {
	components : {
		Pokemon
	},
	data() {
		return {
			pokemons : []
		}
	},
	async created() {
		await this.loadPokemons()
	},
	methods : {
		loadPokemons() {
			this.$axios.$get('https://pokeapi.co/api/v2/pokemon?limit=100').then(res => {
				this.pokemons = res.results
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.pokemon-list {
	display: flex;
	flex-wrap: wrap;
}
</style>