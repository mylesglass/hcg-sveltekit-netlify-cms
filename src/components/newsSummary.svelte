<script>
	import {fade} from "svelte/transition"

	export let date, category, title, description;

	$: dateObj = new Date(date);
	$: month = dateObj.toLocaleString("default", { month: "short" });
	$: day = dateObj.toLocaleString("default", { day: "numeric" });
</script>

<div class="py-8 px-4 lg:w-1/3 transition-colors hover:bg-teal-200 transition duration-500">
	<div class="h-full flex items-start">
		<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
			<span class="text-gray-500 pb-2 mb-2 border-b-2 border-cyan-400"
				>{month}</span
			>
			<span
				class="font-medium text-lg text-gray-800 title-font leading-none"
				>{day}</span
			>
		</div>
		<div class="flex-grow pl-6">
			<h2
				class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1 uppercase"
			>
				{category}
			</h2>
			<h1 class="title-font text-xl font-medium text-gray-900 mb-3">
				{title}
			</h1>
			<p class="leading-relaxed mb-5">
				{description}
			</p>
		</div>
	</div>
</div>
