<template>
	<div>
		<div class="pokemon-list">
			<Pokemon v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon" />
		</div>
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
	display: grid;
	grid-template-areas: 'a b c d';
	row-gap: 10px;
	column-gap: 10px;
	padding: 10px;
}

@media screen and (max-width: 1000px) {
	.pokemon-list {
		grid-template-areas: 'a b c';
	}
}

@media screen and (max-width: 650px) {
	.pokemon-list {
		grid-template-areas: 'a b';
	}
}

@media screen and (max-width: 375px) {
	.pokemon-list {
		grid-template-areas: 'a';
	}
}
</style>