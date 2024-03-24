<script lang="ts">
	import EventForm from './event-form.svelte'
	import Wave from '$lib/components/assets/wave.svelte'
	import Bubble from '$lib/components/assets/bubble.svelte'
	export let data
</script>

<section class="grid-cols-16 container rounded-xl max-md:bg-white/80">
	<div class="main-height flex flex-col sm:justify-center md:w-[68%] lg:w-1/2">
		<h1 class="mb-8 text-4xl font-medium text-secondary max-sm:mt-6 md:mb-16 md:text-5xl">
			Hi! Let's set up a new event.
		</h1>
		<EventForm data={data.form} class="max-md:pb-6"></EventForm>
	</div>
</section>

<div class="fixed bottom-0 -z-10 h-screen w-screen overflow-hidden">
	<div class="absolute -right-16 bottom-0 h-[60vh] md:h-[70vh] lg:right-8 lg:h-[80vh]">
		<Wave class="h-full"></Wave>
		<Bubble
			class="right-16 top-0 w-40 animate-[side-to-side_2.25s_ease-in-out_infinite_alternate] motion-reduce:animate-none lg:w-48"
		/>
		<Bubble
			class="bottom-1/2 left-16 w-24 translate-x-1/4 translate-y-1/4 animate-[diagonal_1.75s_ease-in-out_infinite_alternate-reverse] motion-reduce:animate-none lg:w-32"
		/>
		<Bubble
			class="-bottom-24 -right-24 w-80 animate-[side-to-side_2.75s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
		/>
	</div>
</div>
