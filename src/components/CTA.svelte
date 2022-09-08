<script lang="ts">
    export let isExternal = true
    export let link: string = ''
    export let color: 'primary' | 'secondary' | 'accent' = 'primary'
    export let isDisabled: boolean = false

    const id = `link-${Date.now()}`
</script>

<a id={id} target="_blank" href={link} class={`btn rounded-none btn-${color} ${isDisabled === true ? 'btn-disabled' : ''}`}>
    <span>
        <slot>Click me !</slot>
        {#if isExternal}
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
        {/if}
    </span>
</a>