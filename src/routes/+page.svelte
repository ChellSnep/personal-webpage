<script lang="ts">
	import Socials from '../lib/Socials.svelte';
	import Name from '#lib/Name.svelte';
	import Skeleton from '#lib/Skeleton.svelte';
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/determinationmonoweb-webfont.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link rel="preload" href="/soul.png" as="image" />
</svelte:head>

<Skeleton />

<div class="snow snow-front"></div>
<div class="snow snow-back"></div>

<img class="leopard" src="/leopard.gif" alt="" width="190" height="306" />

{#snippet corners()}
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
			
            <h1>* WIP</h1>
            <hr />
            <p>My Boss so Big</p>
			<hr />
		
			<nav class="links">
				<a href="/about">About me</a>
				<a href="/projects">Projects</a>
				<a href="/test">WIP</a>
			</nav>
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

	.snow {
		position: fixed;
		bottom: 0;
		left: 0;
		pointer-events: none;
		will-change: translate;
	}

	.snow-front {
		--snow-size: 116px;
		--snow-h: calc(var(--snow-size) * 64 / 58);
		top: calc(var(--snow-h) * -2);
		right: calc(var(--snow-size) * -1);
		z-index: -1;
		background: url('/snow.png') repeat;
		background-size: var(--snow-size) var(--snow-h);
		animation: snow-drift 30s linear infinite;
	}

	.snow-back {
		--snow-size-2: 80px;
		--snow-h-2: calc(var(--snow-size-2) * 64 / 58);
		top: calc(var(--snow-h-2) * -3);
		right: calc(var(--snow-size-2) * -1);
		z-index: -2;
		background: url('/snow.png') repeat;
		background-size: var(--snow-size-2) var(--snow-h-2);
		opacity: 0.55;
		animation: snow-drift-far 60s linear infinite;
	}

	@keyframes snow-drift {
		to { translate: calc(var(--snow-size) * -1) calc(var(--snow-h) * 2); }
	}

	@keyframes snow-drift-far {
		to { translate: calc(var(--snow-size-2) * -1) calc(var(--snow-h-2) * 3); }
	}

	.leopard {
		--leopard-width: 190px;
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
		--font: 'Determination Mono', ui-monospace, 'Cascadia Mono', Menlo, monospace;
		font-family: var(--font);
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

	h1 {
		margin: 0;
		font-size: clamp(2rem, 7vw, 3rem);
		font-weight: normal;
		line-height: 1.1;
	}
 
	hr {
		margin: 1.5rem 0;
		border: 0;
		border-top: 2px solid var(--rule);
	}
 
	p {
		margin: 0 0 1rem;
	}

	.links {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
	}

	.links a {
		justify-self: center;
	}

	.links a:first-child {
		justify-self: start;
	}

	.links a:last-child {
		justify-self: end;
	}

	@media (max-width: 32rem) {
		.links {
			grid-auto-flow: row;
			gap: 1rem;
		}
	}

	.links a,
	.links a:first-child,
	.links a:last-child {
		justify-self: start;
	}

	a {
		color: var(--ink);
		text-decoration: none;
	}

	a::before {
		content: '*';
		display: inline-block;
		width: 1rem;
		line-height: 1;
		margin-right: 0.75ch;
		text-align: center;
	}

	a:hover, 
	a:focus-visible {
		color: var(--accent);
	}

	a:hover::before,
	a:focus-visible::before {
		color: transparent;
		background: url('/soul.png') center / contain no-repeat;
		width: 1rem;
		height: 1rem;
	}
</style>