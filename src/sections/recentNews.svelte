<script>
	import NewsSummary from "../components/newsSummary.svelte";

	let newsItems = [
		{
			date: "2012-01-26T13:51:50.417-07:00",
			category: "MERCHENDISE",
			title: "Ramps vinyl",
			description:
				"Cornhole vice 3 wolf moon, raw denim hoodie taxidermy palo santo kogi raclette gochujang yuccie pinterest.",
		},
		{
			date: "2012-09-16T13:51:50.417-07:00",
			category: "Announcement",
			title: "Small batch",
			description:
				"Salvia godard ennui, hella brooklyn normcore glossier authentic yr echo park. Small batch next level health goth kogi, wolf polaroid pabst readymade leggings air plant offal pitchfork.",
		},
		{
			date: "2012-06-12T13:51:50.417-07:00",
			category: "Programme",
			title: "Tote bag",
			description:
				"Tote bag bicycle rights heirloom williamsburg iceland, tumblr chicharrones mlkshk street art cliche. Migas semiotics retro 3 wolf moon banjo.",
		},
	];
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap -mx-4 -my-8">
			{#each newsItems as item}
				<NewsSummary {...item} />
			{/each}
		</div>
	</div>
</section>
