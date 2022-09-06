<script lang="ts">
    import CTA from './CTA.svelte'
    import logo from '/images/logo.webp'
    import logoAlt from '/images/logo-alt-vert.webp'
    import {fly} from 'svelte/transition'
    import {sineOut} from "svelte/easing"

    let isMenuEnabled = false

    const handleClick = () => {
        isMenuEnabled = !isMenuEnabled
    }
</script>

<img on:click={handleClick} src={logo} class="w-10 h-10 cursor-pointer hover:animate-bounce" alt="logo button">

{#if isMenuEnabled}
    <div transition:fly="{{ y: -200, easing: sineOut, duration: 500 }}" on:click={handleClick}
         class="fixed top-0 left-0 h-screen max-w-screen w-full flex bg-gunmetal-gray-dark">
        <div class="hidden md:flex flex-col gap-8 justify-center items-center w-full">
            <img src={logoAlt} alt="logo" class="h-96 w-96">
            <span class="text-xl text-primary font-mono">Follow the white rabbit <span class="animate-blink">_</span></span>
        </div>
        <div class="flex justify-center items-center w-full">
            <ul class="flex flex-col gap-4 items-start justify-center">
                <li>
                    <CTA link="https://core.undergroundsociety.xyz">
                        Core
                    </CTA>
                </li>
                <li>
                    <CTA link="https://sector.undergroundsociety.xyz">
                        The Sector
                    </CTA>
                </li>
                <li>
                    <CTA link="https://cedar.undergroundsociety.xyz">
                        Cedar
                    </CTA>
                </li>
                <li>
                    <CTA link="https://auctions.undergroundsociety.xyz">
                        Auctions
                    </CTA>
                </li>
            </ul>
        </div>
    </div>
{/if}