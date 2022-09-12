<script lang="ts">
    import {slide} from 'svelte/transition'
    import {cubicInOut} from 'svelte/easing'

    export let htmlItems: string[] = []
    export let titles: string[] = []
    let activeIdx: number = 0
</script>

<div class="lg:w-11/12 mx-auto flex flex-col lg:flex-row-reverse bg-base-100 shadow-xl lg:h-[80vh]">
    <div class="w-full z-10 backdrop-blur-sm flex flex-row  lg:w-1/4  lg:flex-col overflow-x-auto lg:overflow-hidden">
        {#each titles as title, index}
            <button
                    on:click={() => activeIdx = index}
                    class="btn btn-ghost bg-base-100 grow
                    {activeIdx === index ? '' : 'brightness-95'}">
                <span class="lg:hidden">{title}</span>
                <img src={`/images/labs-btn-${title.toLowerCase()}-sm.png`} class="max-w-[60%] hidden lg:block"
                     alt="labs-btn">
            </button>
        {/each}
    </div>
    <div transition:slide="{{delay: 50, duration: 300, easing: cubicInOut }}"
         class="p-2 z-10 backdrop-blur-sm lg:p-4 flex flex-col items-center w-full [&_img]:max-w-[16rem] [&_img]:mx-auto overflow-auto">
        {#each htmlItems as item, index}
            {#if index === activeIdx}
                <h3>{titles[index]}</h3>
                {@html item}
            {/if}
        {/each}
    </div>
</div>