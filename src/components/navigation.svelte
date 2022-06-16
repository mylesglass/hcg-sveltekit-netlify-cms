<script>
    let title = "Harbour City Gymnastics"
    let nav_items = [
        {
            "text": "Programmes",
            "link": "/programmes"
        },
        {
            "text": "About",
            "link": "/about"
        },
        {
            "text": "Contact",
            "link": "/contact"
        },
    ]
</script>

<header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl">{title}</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        {#each nav_items as item}
            <a
            href={item.link}
            class="mr-5 hover:text-gray-900"
            >
                {item.text}
            </a>
        {/each}
      </nav>
      <button class="inline-flex items-center bg-blue-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
        <a href="/">
          Login
        </a>
      </button>
    </div>
  </header>