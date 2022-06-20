---
label: Home
title: SvelteKit Netlify CMS
featuredProgrammes: [
    {
        "title": "Holiday Programme",
        "category": "Recreational",
        "subtitle": "Category 1",
        "description": "I'm baby tilde master cleanse tote bag, mixtape XOXO glossier kombucha pork belly green juice plaid.",
        "image": "/assets/images/hol.png",
        "imageAlt": "image content",
        "link": "/",
    },
    {
        "title": "Ribbon Programme",
        "category": "Competitive",
        "subtitle": "Category 1",
        "description": "Blue bottle shabby chic squid, pinterest man bun ethical sustainable butcher lo-fi praxis.",
        "image": "/assets/images/ribbon.png",
        "imageAlt": "image content",
        "link": "/",
    },
    {
        "title": "Birthday Parties",
        "category": "Fun",
        "subtitle": "Have an awesome, stress-free birthday party at HCG",
        "description": "Hella blue bottle kale chips, gluten-free affogato wayfarers aesthetic. Ennun try-hard salvia, fixie fashion axe hella organic scenester.",
        "image": "/assets/images/bday.png",
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