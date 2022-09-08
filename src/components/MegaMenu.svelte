<script lang="ts">
    import CTA from './CTA.svelte'
    import logo from '/images/logo.webp'
    import logoAlt from '/images/logo-alt-vert.webp'
    import {fly} from 'svelte/transition'
    import {quintInOut} from "svelte/easing"

    let isMenuEnabled = false

    const handleClick = () => {
        isMenuEnabled = !isMenuEnabled
    }
</script>

<img on:click={handleClick} src={logo} class="w-10 h-10 cursor-pointer hover:animate-bounce" alt="logo button">
{#if isMenuEnabled}
    <div transition:fly="{{ y: -1500, easing: quintInOut, duration: 600, opacity: 0.5 }}" on:click={handleClick}
         class="hero fixed top-0 left-0 min-h-screen max-w-screen w-full bg-[url('/images/ai/bg-mausoleum.webp')]">
        <div class="hero-overlay bg-opacity-60 backdrop-blur-sm"></div>

        <div class="hero-content">
            <div class="flex flex-col gap-8 justify-center items-center w-full">
                <img src={logoAlt} class="w-72 h-72 hidden lg:block" alt="logo">
                <span class="text-xl text-primary font-mono">Follow the white rabbit <span class="animate-blink">_</span></span>
                <ul class="flex flex-col lg:flex-row gap-4 items-start justify-center">
                    <li>
                        <CTA isDisabled={true} link="https://core.undergroundsociety.xyz">
                            Core
                        </CTA>
                    </li>
                    <li>
                        <CTA isDisabled={true} link="https://sector.undergroundsociety.xyz">
                            The Sector
                        </CTA>
                    </li>
                    <li>
                        <CTA link="https://cedar.undergroundsociety.xyz">
                            Cedar
                        </CTA>
                    </li>
                    <li>
                        <CTA isDisabled={true} link="https://auctions.undergroundsociety.xyz">
                            Auctions
                        </CTA>
                    </li>
                </ul>
            </div>
        </div>
    </div>
{/if}