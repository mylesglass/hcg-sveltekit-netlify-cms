<script>
    export let text = "Button Text"
    export let link = "/"
</script>

<button
    class="pulse flex flex-wrap justify-center bg-cyan-900 text-white border-0 py-4 px-8 focus:outline-none hover:bg-indigo-900 rounded-full font-bold mt-4 md:mt-0"
>
    <a href={link}>{text}</a>
</button>

<style>
    button.pulse {
        animation: borderPulse 2500ms infinite ease-out;
    }

    /* Declare border pulse animation */
    @keyframes borderPulse {
        0% {
            box-shadow: inset 0px 0px 0px 5px rgba(24,76,100,0.4), 0px 0px 0px 0px rgb(24,76,100);
        }
        100% {
            box-shadow: inset 0px 0px 0px 3px rgba(15,23,42,1), 0px 0px 0px 10px rgba(15,23,42,1);
        }
    }
</style>