<script lang="ts">
	import { cn } from '$lib/utils.js'
	import type { HTMLAttributes } from 'svelte/elements'

	type $$Props = HTMLAttributes<HTMLDivElement>
	let className: $$Props['class'] = undefined
	export { className as class }
</script>

<div class={cn('bubble absolute aspect-square w-24 rounded-full backdrop-blur-md', className)} />

<style>
	.bubble {
		background-image: radial-gradient(rgb(47 151 193 / 0.35), rgb(47 151 193 / 0) 200%);
	}
</style>
