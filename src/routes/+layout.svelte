<script lang="ts">
	import favicon from '#lib/assets/favicon.ico';
	import type { LayoutProps } from './$types';

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

{@render children()}

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
		--paper: #000;
		--ink: #fff;
		--muted: #b9bdd6;
		--rule: #fff;
		--accent: #ffc93c;
		--font: 'Determination Mono', ui-monospace, 'Cascadia Mono', Menlo, monospace;
	}

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(body) {
		position: relative;
		margin: 0;
		background-color: var(--paper);
		color: var(--ink);
		font-family: var(--font);
		font-size: 1.0625rem;
		line-height: 1.6;
		-webkit-font-smoothing: none;
	}
</style>