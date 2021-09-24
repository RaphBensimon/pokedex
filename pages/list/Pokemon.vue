<template>
	<div class="pokemon">
		<div class="name">
			{{ pokemon.name }}
		</div>
		<div class="types" v-for="(type, index) in information.types" :key="index">
			{{ type.type.name }}
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
			information : {}
		}
	},
	async created() {
		await this.loadInformation()
	},
	methods : {
		loadInformation() {
			this.$axios.$get(this.pokemon.url).then(res => {
				this.information = res
			})
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.pokemon {
	padding: 5px 10px;
	width: 23%;
	margin: 1%;
	border: 1px solid $grey;
	border-radius: $border-radius;
}
.name {
	font-weight: bold;
}
</style>
