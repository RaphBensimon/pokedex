const state = () => ({
	team : []
})

const getters = {
	GET : state => state.team
}

const mutations = {
	ADD_POKEMON : (state, pokemon) => {
		state.team.push(pokemon)
	},
	REMOVE_POKEMON : (state, pokemon) => {
		const index = state.team.findIndex(x => x.name == pokemon.name)
		state.team.splice(index, 1)
	},
	SET : (state, team) => {
		state.team = team
	}
}
const actions = {
}
export default {
	namespaced : true,
	state,
	getters,
	mutations,
	actions
}