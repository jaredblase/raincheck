<script>
	import '../app.pcss'
</script>

<svelte:head>
	<title>Raincheck | Home</title>
</svelte:head>

<header class="container flex h-16 items-center">
	<p class="text-3xl font-medium text-primary">raincheck</p>
	<img src="/logo/icon.svg" alt="blue umbrella logo" class="ml-2 w-7" />
</header>

<main>
	<slot />
</main>
