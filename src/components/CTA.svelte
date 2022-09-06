<script lang="ts">
    let isExternal = true
    let link: string
    let color: 'primary' | 'secondary' | 'accent' = 'primary'
    let isDisabled: boolean = false
</script>
<style>
    .primary {
        @apply btn rounded-none btn-primary;
    }

    .secondary {
        @apply btn rounded-none btn-secondary;
    }

    .accent {
        @apply btn rounded-none btn-accent;
    }
</style>
<div class="flex justify-center">
    {#if isExternal}
        <a disabled={isDisabled} target="_blank" href={link} class={color}>
            <span>
                <slot>Click me !</slot>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
        </a>
    {:else}
        <a disabled={isDisabled} href={link} class={color}>
            <span>
                <slot>Click me !</slot>
            </span>
        </a>
    {/if}
</div>