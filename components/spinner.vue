<template>
	<div class="spinner">
		<div class="spin" :class="`${variant} ${size}`" />
	</div>
</template>
<script>
export default {
	props : {
		variant : {
			type     : String,
			required : false,
			default  : 'primary'
		},
		size : {
			type     : String,
			required : false,
			default  : 'xs'
		}
	}
}
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.spin {
	display: flex;
	border-radius: 50%;
	animation: spinner-border 0.75s linear infinite;
}
.spin.xs {
	width: 1.5rem;
	height: 1.5rem;
	border: 0.25rem solid transparent;
}
.spin.lg {
	width: 2.5rem;
	height: 2.5rem;
	border: 0.4rem solid transparent;
}
.spin.xl {
	width: 3rem;
	height: 3rem;
	border: 0.5rem solid transparent;
}
.spin.white {
	border-color: rgba($white, 0.25);
	border-bottom-color: $white;
}
.spin.blue {
	border-color: rgba($blue, 0.25);
	border-bottom-color: $blue;
}

@keyframes spinner-border {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>