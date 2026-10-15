<script lang="ts">
    import { playTone } from "./sound";

    const letters = [
        { char: 'C', color: '#ff3df2', action: () => playTone(293.66) },
        { char: 'H', color: '#ff3df2', action: () => playTone(293.66) },
        { char: 'E', color: '#ff3df2', action: () => playTone(587.33) },
        { char: 'L', color: '#ff3df2', action: () => playTone(440.0) },
        { char: 'L', color: '#ff3df2', action: () => playTone(415.3) }
    ]

    function pop(letter: HTMLElement) {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        letter.animate(
			[
				{ transform: 'scale(1)', filter: 'brightness(1)' },
				{ transform: 'scale(1.22)', filter: 'brightness(1.4)', offset: 0.3 },
				{ transform: 'scale(1)', filter: 'brightness(1)' }
			],
			{ duration: 380, easing: 'ease-out' }
		);
    }
</script>

<header class="title" role="group" aria-label="CHELL">
	{#each letters as { char, color, action }}
		<button
			type="button"
			class="letter"
			style:--glow={color}
			onclick={(event) => {
				pop(event.currentTarget);
				action();
			}}
		>
			{char}
		</button>
	{/each}
</header>
 
<style>
	.title {
		display: flex;
		justify-content: center;
		gap: 0.08em;
		font-size: clamp(4rem, 22vw, 9rem);
		line-height: 1;
	}
 
	.letter {
		margin: 0;
		padding: 0;
		border: 0;
		background: none;
		font: inherit;
		cursor: pointer;
		touch-action: manipulation;
		-webkit-tap-highlight-color: transparent;
 
		position: relative;

		color: #fff;
		color: color-mix(in srgb, var(--glow) 50%, white);
 
		text-shadow:
			0 0 0.03em #fff,
			0 0 0.1em var(--glow),
			0 0 0.22em var(--glow),
			0 0 0.45em var(--glow),
			0 0 0.8em var(--glow);
 
		transition: scale 160ms cubic-bezier(0.3, 1.6, 0.5, 1);
	}
 
	@media (hover: hover) {
		.letter:hover {
			scale: 1.1;
			z-index: 1;
		}
	}
 
	.letter:focus-visible {
		outline: 2px solid var(--glow);
		outline-offset: 0.12em;
		scale: 1.1;
		z-index: 1;
	}
 
	@media (prefers-reduced-motion: reduce) {
		.letter {
			transition: none;
		}
	}
</style>