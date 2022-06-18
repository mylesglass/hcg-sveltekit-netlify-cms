<script>
    export let title = "Title"
    export let subtitle, description, image, imageAlt, link
</script>

<div class="xl:w-1/4 md:w-1/2 p-4">
    <a href={link}>
      <div class="bg-slate-800 bg-opacity-40 p-6 rounded-lg hover:bg-opacity-80 transition duration-500">
        <img class="h-40 rounded w-full object-cover object-center mb-6" src={image} alt={imageAlt}>
        <h3 class="tracking-widest text-blue-300 text-xs font-medium title-font">
          {subtitle}
        </h3>
        <h2 class="text-lg text-white font-medium title-font mb-4">
          {title}
        </h2>
        <p class="leading-relaxed text-base">
          {description}
        </p>
      </div>
    </a>
</div>