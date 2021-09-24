<template>
	<div class="skeleton" />
</template>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.skeleton {
	height: 1rem;
	width: 100%;
	overflow: hidden;
	background-color: rgba($grey, 0.12);
	border-radius: $border-radius;
	position: relative;
}
.skeleton:after {
	content: '';
	background: linear-gradient(to left, transparent, rgba($white, 0.4), transparent);
	animation: skeleton-animate-wave 1.25s infinite;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

@keyframes skeleton-animate-wave {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(100%);
	}
}
</style>