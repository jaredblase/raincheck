<script lang="ts">
	import EventForm from './event-form.svelte'
	import Wave from '$lib/components/assets/wave.svelte'
	import Bubble from '$lib/components/assets/bubble.svelte'
	export let data
</script>

<section class="container rounded-xl max-md:bg-white/80 md:pl-12 portrait:bg-white/80">
	<div class="main-height flex flex-col sm:justify-center md:w-[68%] lg:w-1/2">
		<h1 class="mb-8 text-4xl font-medium text-secondary max-sm:mt-6 md:mb-16 md:text-5xl">
			Hi! Let's set up a new event.
		</h1>
		<EventForm data={data.form} class="max-md:pb-6"></EventForm>
	</div>
</section>

<div class="fixed bottom-0 -z-10 h-screen w-screen overflow-hidden">
	<div
		class="absolute bottom-0 right-[-16%] h-[60vh] max-w-[60vw] md:h-[70vh] lg:right-[2%] lg:h-[80vh] lg:portrait:right-[-15%]"
	>
		<Wave class="h-full"></Wave>
		<Bubble
			class="right-[10%] top-0 w-[30%] animate-[side-to-side_2.25s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
		/>
		<Bubble
			class="bottom-1/2 left-[15%] w-[20%] translate-x-1/4 translate-y-1/4 animate-[diagonal_1.75s_ease-in-out_infinite_alternate-reverse] motion-reduce:animate-none"
		/>
		<Bubble
			class="bottom-[-16%] right-[-18%] w-[54%] animate-[side-to-side_2.75s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
		/>
	</div>
</div>
