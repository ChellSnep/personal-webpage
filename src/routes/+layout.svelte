<script lang="ts">
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
		<span class="plus tl" aria-hidden="true"></span>
		<span class="plus tr" aria-hidden="true"></span>
		<span class="plus bl" aria-hidden="true"></span>
		<span class="plus br" aria-hidden="true"></span>

		{@render children()}
		<Socials />
	</main>
</div>

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
		--bw: 2px;
		--plus: 20px;

		position: relative;
		width: 100%;
		max-width: 40rem;
		padding: clamp(1.5rem, 6vw, 3.25rem);
		border: var(--bw) solid var(--ink);
		border-radius: 0;
		background: var(--paper);
		color: var(--ink);
	}

	.plus {
		position: absolute;
		width: var(--plus);
		height: var(--plus);
		pointer-events: none;
	}

	.plus::before,
	.plus::after {
		content: '';
		position: absolute;
		background: var(--ink);
	}

	.plus::before {
		inset: 50% 0 auto 0;
		height: var(--bw);
		translate: 0 -50%;
	}

	.plus::after {
		inset: 0 auto 0 50%;
		width: var(--bw);
		translate: -50% 0;
	}

	.tl {
		top: calc(var(--bw) / -2);
		left: calc(var(--bw) / -2);
		translate: -50% -50%;
	}

	.tr {
		top: calc(var(--bw) / -2);
		right: calc(var(--bw) / -2);
		translate: 50% -50%;
	}

	.bl {
		bottom: calc(var(--bw) / -2);
		left: calc(var(--bw) / -2);
		translate: -50% 50%;
	}

	.br {
		bottom: calc(var(--bw) / -2);
		right: calc(var(--bw) / -2);
		translate: 50% 50%;
	}
</style>