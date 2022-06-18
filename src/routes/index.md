---
label: Home
title: SvelteKit Netlify CMS
featuredProgrammes: [
    {
        "title": "Programme Benis",
        "category": "Recreational",
        "subtitle": "Category 1",
        "description": "I'm baby tilde master cleanse tote bag, mixtape XOXO glossier kombucha pork belly green juice plaid.",
        "image": "https://dummyimage.com/720x400",
        "imageAlt": "image content",
        "link": "/",
    },
    {
        "title": "Programme 2",
        "category": "Competitive",
        "subtitle": "Category 1",
        "description": "Blue bottle shabby chic squid, pinterest man bun ethical sustainable butcher lo-fi praxis.",
        "image": "https://dummyimage.com/720x400",
        "imageAlt": "image content",
        "link": "/",
    },
    {
        "title": "Programme 3",
        "category": "Fun",
        "subtitle": "Category X",
        "description": "Activated charcoal yes plz try-hard chia.",
        "image": "https://dummyimage.com/720x400",
        "imageAlt": "image content",
        "link": "/",
    },
    {
        "title": "Programme 4",
        "category": "Recreational",
        "subtitle": "Category N",
        "description": "Whatever sartorial before they sold out, cornhole williamsburg shoreditch PBR&B franzen iceland irony cray iPhone gentrify typewriter deep v.",
        "image": "https://dummyimage.com/720x400",
        "imageAlt": "image content",
        "link": "/",
    }
]

---

<script>
    import Hero from '../sections/hero.svelte'
    import Programmes from '../sections/programmes.svelte'
    import RecentNews from '../sections/recentNews.svelte'
    import Contact from '../sections/contact.svelte'
</script>

<Hero />
<Programmes programmes={featuredProgrammes}/>
<RecentNews />
<Contact />