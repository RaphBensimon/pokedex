<template>
	<div class="pokemon" :class="{'loading': loading, 'inTeam': isInTeam}" @click="addPokemonToTeam">
		<div class="name">
			{{ pokemon.name }}
		</div>
		<div v-if="loading">
			<Skeleton class="sprite" />
			<Skeleton />
		</div>
		<div class="information" v-else>
			<div class="types">
				<b>Types :</b>
				<span class="types" v-for="(type, index) in information.types" :key="index">
					{{ type.type.name }}
				</span>
			</div>
			<img class="sprite" :src="information.sprites.front_default">
		</div>
	</div>
</template>
<script>
export default {
	props : {
		pokemon : {
			required : true,
			type     : Object
		}
	},
	data() {
		return {
			information : {},
			loading     : true
		}
	},
	beforeMount() {
		window.addEventListener('scroll', this.watchScroll)
	},
	async mounted() {
		if(window.innerHeight > this.$el.offsetTop) {
			await this.loadInformation()
		}
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.watchScroll)
	},
	computed : {
		isInTeam() {
			const team = this.$store.getters['team/get']
			return team.find(x => x.name == this.pokemon.name)
		}
	},
	methods : {
		loadInformation() {
			this.$axios.$get(this.pokemon.url).then(res => {
				this.information = res
				this.information.img = new Image()
				this.information.img.onload = () => {
					this.loading = false
				}
				this.information.img.src = this.information.sprites.front_default
				window.removeEventListener('scroll', this.watchScroll)
			})
		},
		async watchScroll() {
			if((window.scrollY + window.innerHeight) > this.$el.offsetTop) {
				await this.loadInformation()
			}
		},
		addPokemonToTeam() {
			if(!this.isInTeam) {
				const pokemon = {
					name : this.pokemon.name,
					img  : this.information.img.src
				}
				this.$store.commit('team/ADD_POKEMON', pokemon)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.pokemon {
	width: 23%;
	position: relative;
	min-height: 75px;
	padding: 5px 60px 5px 10px;
	margin: 1%;
	border: 1px solid $light-grey;
	border-radius: $border-radius;
	box-shadow: rgba($black, 0.2) 0 2px 8px 0;
	transition: $transition;
	cursor: pointer;
	&:not(.loading):not(.inTeam):hover {
		background: $light-grey;
	}
}
.inTeam {
	background-color: $blue;
	color: $white;
}
.sprite {
	width: 50px;
	height: 50px;
	position: absolute;
	top: 5px;
	right: 5px;
}
.name {
	font-weight: bold;
	font-size: 1.2rem;
	text-transform: capitalize;
}
</style>
