<template>
	<div id="pokedex">
		<div class="pokemon-list" v-if="team.length">
			<div class="pokemon" v-for="(pokemon, index) in team" :key="index">
				<div class="name">
					{{ pokemon.name }}
				</div>
				<img class="sprite" :src="pokemon.img">
			</div>
		</div>
		<div v-else>
			Please select pokemon
		</div>
	</div>
</template>
<script>
export default {
	computed : {
		team() {
			return this.$store.getters['team/get']
		}
	},
}
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
#pokedex {
	max-width: 100%;
	width: 100%;
	height: 100px;
	position: fixed;
	display: flex;
	align-items: center;
	bottom: 0;
	z-index: 1;
	overflow-x: auto;
	overflow-y: hidden;
	background-color: $blue;
}
.pokemon-list {
	padding: 15px 1%;
	align-items: center;
	display: flex;
}
.pokemon {
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: $border-radius;
	margin: 1%;
	background-color: $white;
	border: 1px solid $light-grey;
	box-shadow: rgba($black, 0.2) 0 2px 8px 0;
}
.name {
	font-weight: bold;
	font-size: 1.2rem;
	text-transform: capitalize;
}
.pokemon img {
	width: 50px;
}
</style>