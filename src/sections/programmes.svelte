<script>
	import ProgrammeCard from "../components/programmeCard2.svelte";
	import PulseButton from "../components/pulseButton.svelte"

	let title = "What We Offer";
	let description =
		"Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.";

	export let programmes;
</script>

<section class="text-gray-400 body-font bg-slate-900">
	<div class="container px-5 pt-24 mx-auto">
		<!-- Title and description -->
		<div class="flex flex-wrap w-full pb-10">
			<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
				<h1
					class="title mb-2 text-white"
				>
					{title}
				</h1>
				<div class="h-1 w-20 bg-indigo-900 rounded" />
			</div>
			<p
				class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"
			>
				{description}
			</p>
		</div>

		<!-- Programme Cards -->
		<div class="flex flex-wrap -mx-3 overflow-hidden">
			{#each programmes as programme}
				<ProgrammeCard {...programme} />
			{/each}
		</div>
	</div>

	<!-- Show see all button if on homepage and only 4 items-->
	{#if programmes.length == 3}
		<div
			class="justify-center flex flex-wrap pt-10 pb-16 mx-auto justify-center"
		>
			<PulseButton text="See All Of Our Programmes" link="/programmes"/>
		</div>
	{/if}
</section>
