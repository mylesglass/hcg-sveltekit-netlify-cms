<script>
	let title = "Harbour City Gymnastics";
	let description = "Some bullshit about sponsors here";
	let sponsors = [
		{
			name: "Sponsor 1",
			image: "/",
			link: "/",
		},
		{
			name: "Sponsor 2",
			image: "/",
			link: "/",
		},
		{
			name: "Sponsor 31",
			image: "/",
			link: "/",
		},
		{
			name: "Sponsor 4",
			image: "/",
			link: "/",
		},
		{
			name: "Sponsor 5",
			image: "/",
			link: "/",
		},
	];
</script>

<footer class="text-gray-600 body-font">
	<div
		class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
	>
		<div
			class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
		>
			<a
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
				href="/"
			>
				<span class="w-20">
					<img src="/assets/images/logomark-purple.svg" alt="Logo"/>
				</span>
				<span class="ml-3 text-xl font-logo tracking-tighter leading-none">{title}</span>
			</a>
		</div>
		<div
			class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
		>
			<div class="lg:w-1/4 md:w-1/2 w-full px-4">
				<p>{description}</p>
			</div>
			{#each sponsors as sponsor}
				<div class="lg:w-1/4 md:w-1/2 w-full px-4">
					<img :src="sponsor.link" alt="Sponsor Logo" />
				</div>
			{/each}
		</div>
	</div>
	<div class="bg-gray-100">
		<div
			class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
		>
			<p class="text-gray-500 text-sm text-center sm:text-left">
				© {new Date().getFullYear()}
				{title}
			</p>
			<span
				class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
			>
				<a
					class="text-gray-500 text-sm text-center sm:text-left"
					href="/admin">Admin</a
				>
			</span>
		</div>
	</div>
</footer>
