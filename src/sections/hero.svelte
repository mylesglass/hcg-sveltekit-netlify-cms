<script>
	let title = "Title";
	let description = "Description";

	let button1 = {
		text: "Text",
		link: "/",
	};

	let button2 = {
		text: "Text",
		link: "/",
	};
</script>

<template>
	<section class="text-gray-600 body-font">
		<div
			class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
		>
			<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
				<img
					class="object-cover object-center rounded"
					alt="hero"
					src="/"
				/>
			</div>
			<div
				class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
			>
				<h1
					class="title mb-4 text-gray-900"
				>
					{title}
				</h1>
				<p class="mb-8 leading-relaxed">
					{description}
				</p>
				<div class="flex justify-center">
					<a
						href="button1.link"
						class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
					>
						{button1.text}
					</a>
					<a
						href="button2.link"
						class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
					>
						{button2.text}
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
-->
