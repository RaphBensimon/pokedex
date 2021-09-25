<template>
	<div id="pokedex">
		<client-only>
			<draggable v-model="team" group="people" @start="drag=true" @end="drag=false" id="pokemon-list"
				v-if="team.length">
				<div class="pokemon" v-for="(pokemon, index) in team" :key="index">
					<div class="name">
						{{ pokemon.name }}
					</div>
					<img class="sprite" :src="pokemon.img">
				</div>
			</draggable>
			<div v-else id="empty-pokemon-list">
				Please select pokemon
			</div>
		</client-only>
	</div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
	components : {
		draggable
	},
	computed : {
		team : {
			get() {
				return this.$store.getters['team/GET']
			},
			set(team) {
				this.$store.commit('team/SET', team)
			}

		}
	},
	methods : {
	}
}
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
#pokedex {
	max-width: 100%;
	width: 100%;
	min-height: 70px;
	position: fixed;
	display: flex;
	bottom: 0;
	z-index: 1;
	align-items: center;
	overflow-x: auto;
	overflow-y: hidden;
	box-shadow: rgba($black, 0.4) 0 -5px 8px 0;
	background-color: $blue;
}
#pokemon-list {
	padding: 10px 1%;
	align-items: center;
	display: flex;
}
#empty-pokemon-list {
	color: $white;
	font-size: 1.5rem;
	width: 100%;
	text-align: center;
}
.pokemon {
	cursor: grab;
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: $border-radius;
	margin-right: 2%;
	background-color: $white;
	border: 1px solid $light-grey;
	box-shadow: rgba($black, 0.2) 0 2px 8px 0;
}
.pokemon.sortable-chosen {
	opacity: 0.5;
}
.dragged {
	display: none;
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