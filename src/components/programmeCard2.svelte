<script>
	export let title = "Title";
	export let subtitle, description, image, imageAlt, link, category;

</script>

<div id="programme-card" class="my-3 px-3 w-full overflow-hidden md:w-full lg:w-1/3 xl:w-1/3">
	<div class="bg-white shadow-xl rounded-lg overflow-hidden ">
		<div
			class="bg-cover bg-center h-64 p-4"
			style="background-image: url({image})"
		/>
		<div class="p-4 h-44">
			<p class="font-title text-2xl text-gray-900">{title}</p>
			<p class="text-gray-700">{description}</p>
		</div>
		<!--
		<div class="flex p-4 border-t border-gray-300 text-gray-700">
			<div class="flex-1 inline-flex items-center">
				<span class="w-6">
					<img src="/assets/images/cal.svg" alt="Days" />
				</span>
				<p><span class="text-gray-900 pl-3">Mon, Tue, Wed</span></p>
			</div>
			<div class="flex-1 inline-flex items-center">
				<span class="w-6">
					<img src="/assets/images/age.svg" alt="age" />
				</span>
				<p>
					<span class="text-gray-900 font-bold pl-3">3</span> Years Old
				</p>
			</div>
			
		</div>
		-->
		<a
			id="learn-more"
			href={link}
			class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100 flex items-center justify-between transition duration-500 text-gray-500"
		>
			<p>Learn more</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13 7l5 5m0 0l-5 5m5-5H6"
				/>
			</svg>
		</a>
	</div>
</div>

<style>
div:hover > a {
    @apply bg-cyan-900 text-white;
}
</style>