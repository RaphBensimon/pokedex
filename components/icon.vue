<template>
	<div v-html="require(`!html-loader!@/static/icons/${icon.toLowerCase()}.svg`)" :class="'icon icon-' + icon" />
</template>
<script>
export default {
	name  : 'SvgIcon',
	props : {
		icon : {
			type    : String,
			default : null
		},
	},
	methods : {
		removeFillRecursivly(el) {
			if(el.hasAttribute('fill') && el.getAttribute('fill') != 'none') {
				el.removeAttribute('fill')
			}
			if(el.children.length) {
				for (let i = 0; i < el.children.length; i++) {
					const child = el.children[i]
					this.removeFillRecursivly(child)
				}
			}
		}
	},
	mounted() {
		if (this.$el.firstElementChild.nodeName === 'svg') {
			const svg = this.$el.firstElementChild
			this.removeFillRecursivly(svg)
			svg.setAttribute('height', '1.2em')
			svg.setAttribute('width', '1.2em')
			svg.classList.add('svg-class')
		}
	}
}
</script>
<style scoped>
.icon {
	display: inline-flex;
	fill: currentColor;
}
</style>