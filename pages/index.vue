<template>
	<div>
		<input type="text" @input="search($event)" placeholder="Search" id="search">
		<div class="pokemon-list">
			<Pokemon v-for="(pokemon, index) in pokemonsFiltered" :key="index" :pokemon="pokemon" />
		</div>
		<Pokedex />
	</div>
</template>

<script>
import { Pokemon, Pokedex } from './list/'
export default {
	head : {
		title : 'Pokédex'
	},
	components : {
		Pokemon,
		Pokedex
	},
	data() {
		return {
			pokemons         : [],
			pokemonsFiltered : []
		}
	},
	async created() {
		await this.loadPokemons()
	},
	methods : {
		loadPokemons() {
			this.$axios.$get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
				this.pokemons = res.results
				this.pokemonsFiltered = res.results
			})
		},
		search($event) {
			this.pokemonsFiltered = this.pokemons.filter((x) => {
				return x.name.includes($event.target.value.toLowerCase())
			})
		}
	}
}
</script>
<style lang="scss" scoped>
#search {
	position: relative;
	left: 10px;
	margin: 10px 0;
}
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