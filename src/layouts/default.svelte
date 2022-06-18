<script>
	import "../app.css";
	import { getRoutes } from "../metadata";
	import Navigation from "../components/navigation.svelte";
	import Footer from "../components/footer.svelte";

	const routes = getRoutes();

	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<nav>
	<Navigation />
	<ul>
		{#each routes as route}
			<li>
				<a href={route.path}>{route.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<slot />

<Footer />
