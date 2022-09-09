<script lang="ts">
    import {onMount} from "svelte";

    let cursor: HTMLElement

    onMount(() => {
        document.addEventListener('mousemove', handleMousemove)
    })

    const handleMousemove = (e) => {
        cursor.style.left = `calc(${e.clientX}px - 40px)`
        cursor.style.top = `calc(${e.clientY}px - 40px)`
    }
</script>
<div bind:this={cursor} id="cursor"
     class="
         hidden z-50 fixed
         -top-[100px] left-[50%]
         lg:flex
         w-[80px] h-[80px]
         pointer-events-none
         transition-all duration-150 ease-out
         bg-[url(/images/cursor.svg)] bg-no-repeat
         animate-cursor
">

</div>
