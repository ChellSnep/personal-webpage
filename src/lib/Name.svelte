<script lang="ts">
    import { playFile, playTone } from "./sound";

	const neon = '#ff8a1f';

    const letters = [
        { char: 'C', color: neon, action: () => playTone(293.66) },
        { char: 'H', color: neon, action: () => playTone(293.66) },
        { char: 'E', color: neon, action: () => playTone(587.33) },
        { char: 'L', color: neon, action: () => playTone(440.0) },
        { char: 'L', color: neon, action: () => playFile('/sounds/voice_sans.mp3') }
    ]

    function pop(letter: HTMLElement) {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        letter.animate(
			[
				{ transform: 'scale(1)', filter: 'brightness(1)', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' },
				{ transform: 'scale(1.12)', filter: 'brightness(1.3)', offset: 0.4, easing: 'cubic-bezier(0.45, 0, 0.3, 1)' },
				{ transform: 'scale(1)', filter: 'brightness(1)' }
			],
			{ duration: 650 }
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

		--glow-strength: 0.7;	
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
		color: color-mix(in srgb, var(--glow) 10%, white);
 
		text-shadow:
			0 0 0.05em color-mix(in srgb, var(--glow) calc(var(--glow-strength) * 100%), transparent),
			0 0 0.16em color-mix(in srgb, var(--glow) calc(var(--glow-strength) * 70%), transparent),
			0 0 0.36em color-mix(in srgb, var(--glow) calc(var(--glow-strength) * 40%), transparent);

 
		transition: scale 320ms cubic-bezier(0.22, 1, 0.36, 1);
	}
 
	@media (hover: hover) {
		.letter:hover {
			scale: 1.18;
			z-index: 1;
		}
	}
 
	.letter:focus-visible {
		outline: 2px solid var(--glow);
		outline-offset: 0.12em;
		scale: 1.1;
		z-index: 1;
	}
</style>