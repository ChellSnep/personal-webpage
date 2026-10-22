<script lang="ts">
    import { onMount } from "svelte";
    import { rollSkeleton } from "./skeleton";

    let skeletomGif: HTMLImageElement;

    onMount(() => {
        const interval = setInterval(() => {
            if (skeletomGif) {
                rollSkeleton(skeletomGif);
            }
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<img 
    bind:this={ skeletomGif } 
    class="did-you-see-that" 
    src="/skeleton-running-transparent.gif" 
    alt=""
    hidden 
/>

<style>
    .did-you-see-that {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		height: 100vh;
		width: 100vw;
		object-fit: cover;
		pointer-events: none;
		user-select: none;
	}
</style>