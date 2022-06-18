<script>
	let address = "37 Ruahine St, Hataitai, Wellington 6021";
	let email = "office@hcg.org.nz";
	let phone = "04 386 4443";
	let title = "Title";
	let description = "Description";
	let nameLabel = "Name Label";
	let phoneLabel = "Phone Label";
	let emailLabel = "Email Label";
	let methodLabel = "Method Label";
	let messageLabel = "Message Label";
	let buttonText = "Button Text";
</script>

<section class="text-gray-400 bg-gray-900 body-font relative">
	<div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
		<div
			class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
		>
			<iframe
				width="100%"
				height="100%"
				title="map"
				class="absolute inset-0"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
				scrolling="no"
				:src="contactdata.maps_url"
				style="filter: opacity(0.7);"
			/>
			<div
				class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"
			>
				<div class="lg:w-1/2 px-6">
					<h2
						class="title-font font-semibold text-white tracking-widest text-xs"
					>
						ADDRESS
					</h2>
					<p class="mt-1">
						{address}
					</p>
				</div>
				<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
					<h2
						class="title-font font-semibold text-white tracking-widest text-xs"
					>
						EMAIL
					</h2>
					<a class="text-purple-400 leading-relaxed" href="/">
						{email}
					</a>
					<h2
						class="title-font font-semibold text-white tracking-widest text-xs mt-4"
					>
						PHONE
					</h2>
					<p class="leading-relaxed">
						{phone}
					</p>
				</div>
			</div>
		</div>
		<div
			class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
		>
			<h2 class="text-white text-lg mb-1 font-medium title-font">
				{title}
			</h2>
			<p class="leading-relaxed mb-5">
				{description}
			</p>
			<form
				action="https://app.99inbound.com/api/e/1Xv-rHdj"
				method="POST"
				target="_blank"
			>
				<div class="relative mb-4">
					<label for="name" class="leading-7 text-sm text-gray-400">
						{nameLabel}
					</label>
					<input
						id="name"
						type="text"
						name="name"
						class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div class="relative mb-4">
					<label for="email" class="leading-7 text-sm text-gray-400">
						{emailLabel}
					</label>
					<input
						id="email"
						type="email"
						name="email"
						class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div class="relative mb-4">
					<label for="tel" class="leading-7 text-sm text-gray-400">
						{phoneLabel}
					</label>
					<input
						id="tel"
						type="tel"
						name="tel"
						class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div class="relative mb-4">
					<label
						for="contact-method"
						class="leading-7 text-sm text-gray-400"
					>
						{methodLabel}
					</label>
					<select
						id="contact-method"
						name="contact-method"
						class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					>
						<option value="email"> Email </option>
						<option value="phone"> Phone </option>
					</select>
				</div>
				<div class="relative mb-4">
					<label
						for="message"
						class="leading-7 text-sm text-gray-400"
					>
						{messageLabel}
					</label>
					<textarea
						id="message"
						name="message"
						class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<button
					class="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
				>
					{buttonText}
				</button>
			</form>
		</div>
	</div>
</section>
