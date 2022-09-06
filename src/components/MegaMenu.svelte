<script lang="ts">
    import logo from '/images/logo.webp'
    import logoAlt from '/images/logo-alt.webp'
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
         class="fixed top-0 left-0 h-screen w-screen flex gap-4 bg-gunmetal-gray-dark">
        <div class="hidden md:flex justify-center items-center grow"><img src={logoAlt} alt="logo" class="h-40 w-40">
        </div>
        <div class="flex justify-center items-center grow">
            <ul class="flex flex-col gap-4 items-center justify-center">
                <li>
                    <a class="btn btn-primary btn-xl" href="https://core.undergroundsociety.xyz">
                        <span>Core <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </a>
                </li>
                <li>
                    <a class="btn btn-primary btn-xl" href="https://sector.undergroundsociety.xyz">
                        <span>The Sector <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </a>
                </li>
                <li>
                    <a class="btn btn-primary btn-xl" href="https://cedar.undergroundsociety.xyz">
                        <span>Cedar <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </a>
                </li>
                <li>
                    <a class="btn btn-primary btn-xl" href="https://auctions.undergroundsociety.xyz">
                        <span>Auctions <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
{/if}