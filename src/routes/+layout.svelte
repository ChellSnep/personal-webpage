<script lang="ts">
	import Dock from '../lib/Socials.svelte';

	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
    import Socials from '../lib/Socials.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
		<link
		rel="preload"
		href="/fonts/determinationmonoweb-webfont.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="stage">
	<main class="container">
		{@render children()}
		<Socials />
	</main>
</div>

<Dock />

<style>
	@font-face {
		font-family: 'Determination Mono';
		src:
			url('/fonts/determinationmonoweb-webfont.woff2') format('woff2'),
			url('/fonts/determinationmonoweb-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
 
	:global(:root) {
		--backdrop: #2d3270;
		--paper: #f3f5fb;
		--ink: #1b1e3a;
		--muted: #555b80;
		--rule: #d5d9ea;
		--accent: #ffc93c;
		--dock-bg: #14162e;
		--dock-ink: #e8eaf8;
 
		--font: 'Determination Mono', ui-monospace, 'Cascadia Mono', Menlo, monospace;
	}
 
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}
 
	:global(body) {
		margin: 0;
		background: var(--backdrop);
		color: var(--ink);
		font-family: var(--font);
		font-size: 1.0625rem;
		line-height: 1.6;
		-webkit-font-smoothing: none;
	}
 
	.stage {
		min-height: 100dvh;
		display: grid;
		place-items: center;
		padding: 2rem 1rem;
	}
 
	.container {
		width: 100%;
		max-width: 40rem;
		padding: clamp(1.5rem, 6vw, 3.25rem);
		border-radius: 1.5rem;
		background: var(--paper);
	}
</style>
