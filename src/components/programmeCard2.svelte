<script>
    export let title = "Title"
    export let subtitle, description, image, imageAlt, link, category
</script>
 
<div class="xl:w-1/4 md:w-1/2 p-4">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="bg-cover bg-center h-56 p-4" style="background-image: url({image})" />
        <div class="p-4">
            <p class="uppercase tracking-wide text-sm font-bold text-gray-700">{category}</p>
            <p class="text-3xl text-gray-900">{title}</p>
            <p class="text-gray-700">{description}</p>
        </div>
        <div class="flex p-4 border-t border-gray-300 text-gray-700">
            <div class="flex-1 inline-flex items-center">
              <span class="w-6">
                <img src="/assets/images/cal.svg" alt="Days"/> 
              </span>
                <p><span class="text-gray-900 pl-3">Mon, Tue, Wed</p>
            </div>
            <div class="flex-1 inline-flex items-center">
                <span class="w-6">
                  <img src="/assets/images/age.svg" alt="age"/> 
                </span>
                <p><span class="text-gray-900 font-bold pl-3">3</span> Years Old</p>
            </div>
        </div>
        <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
          <button class="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <span class="">
              <img src="/assets/images/age.svg" alt="age"/> 
            </span>
            Large
          </button>
        </div>
    </div>
</div>
