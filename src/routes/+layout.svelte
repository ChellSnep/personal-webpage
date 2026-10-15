<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import Socials from '../lib/Socials.svelte';
	import Name from '#lib/Name.svelte';

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

<img class="leopard" src="/leopard.gif" alt="" width="190" height="306" />

{#snippet corners()}
	<!-- "+" marks on the four corners of the border -->
		<span class="plus tl" aria-hidden="true"></span>
		<span class="plus tr" aria-hidden="true"></span>
		<span class="plus bl" aria-hidden="true"></span>
		<span class="plus br" aria-hidden="true"></span>
{/snippet}

<div class="stage">
	<div class="stack">
		<Name />

		<main class="container">
			{@render corners()}
			{@render children()}
		
			<Socials />
		</main>
	</div>
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
		--snow-size: 116px;
		--snow-h: calc(var(--snow-size) * 64 / 58);
		--snow-speed: 30s;

		--snow-size-2: 80px;
		--snow-h-2: calc(var(--snow-size-2) * 64 / 58);
		--snow-speed-2: 60s;
		--snow-opacity-2: 0.55;

		--leopard-width: 190px;

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

	:global(body)::before {
		content: '';
		position: fixed;
		top: calc(var(--snow-h) * -2);
		right: calc(var(--snow-size) * -1);
		bottom: 0;
		left: 0;
		z-index: -1;
		background: url('/snow.png') repeat;
		background-size: var(--snow-size) var(--snow-h);
		pointer-events: none;
		will-change: translate;
		animation: snow-drift var(--snow-speed) linear infinite;
	}

	@keyframes -global-snow-drift {
		to {
			translate: calc(var(--snow-size) * -1) calc(var(--snow-h) * 2);
		}
	}

	:global(body)::after {
		content: '';
		position: fixed;
		top: calc(var(--snow-h-2) * -3);
		right: calc(var(--snow-size-2) * -1);
		bottom: 0;
		left: 0;
		z-index: -2;
		background: url('/snow.png') repeat;
		background-size: var(--snow-size-2) var(--snow-h-2);
		opacity: var(--snow-opacity-2);
		pointer-events: none;
		will-change: translate;
		animation: snow-drift-far var(--snow-speed-2) linear infinite;
	}
 
	@keyframes -global-snow-drift-far {
		to {
			translate: calc(var(--snow-size-2) * -1) calc(var(--snow-h-2) * 3);
		}
	}

	.leopard {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: -3;
		display: block;
		width: var(--leopard-width);
		height: auto;
		pointer-events: none;
		user-select: none;
	}

	.stage {
		min-height: 100dvh;
		display: grid;
		place-items: center;
		padding: 2rem 1rem;
	}

	.stack {
		width: 100%;
		max-width: 40rem;
		display: grid;
		gap: 2.5rem;
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