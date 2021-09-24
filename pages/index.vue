<template>
	<div class="pokemon-list">
		<Pokemon v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon" />
		<Pokedex />
	</div>
</template>

<script>
import { Pokemon, Pokedex } from './list/'
export default {
	components : {
		Pokemon,
		Pokedex
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
			this.$axios.$get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
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