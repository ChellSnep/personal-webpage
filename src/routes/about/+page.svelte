<script lang="ts">
    import { onMount, untrack } from "svelte";
    import { loop, useTimeLoop, LOOP_SECONDS } from "#lib/timeloop.svelte.ts";
    import { makeStars } from "#lib/stars.ts";
    import { makeLetters } from "#lib/drifts.ts";

    let mounted = $state(false);

    onMount(() => {
        mounted = true;
        return useTimeLoop();
    });

    let stars = $derived(
        mounted ? makeStars(loop.cycle, untrack(() => loop.elapsed)) : []
    );

    // const title = "If I only could,\nI would make a deal\nwith God and make him\nswap our places";
    const title = "Bearer of the curse, \nSeek \nSeek \nLest"
    const lines = makeLetters(title);
    const label = title.replace(/\n/g, " ");

    let run = $derived.by(() => {
        const cycle = loop.cycle;
        return { cycle, start: mounted ? untrack(() => loop.elapsed) : 0};
    });
</script>

<div class="about">
    <div class="stars" aria-hidden="true">
        {#key loop.cycle}
            {#each stars as s}
                <span
                    class="star"
                    style="left:{s.x}%; top:{s.y}%; --size:{s.size}px; --die:{s.dieIn}s; --tw:{s.tw}s; --td:{s.td}s"
                    ><i></i></span>
            {/each}
        {/key}
    </div>
    <div class="pulse" aria-hidden="true"></div>
    <div class="stack">
        <h1 class="title" aria-label={label} style="--loop:{LOOP_SECONDS}s">
            {#key run}
                {#each lines as line}
                    <span class="line">
                        {#each line as l}
                            <span
                                class="letter"
                                aria-hidden="true"
                                style="--k:{l.k}; --dy:{l.dy}vh; --rot:{l.rot}deg; --start:{run.start}s"
                            >{l.ch}</span>
                        {/each}
                    </span>
                {/each}
            {/key}
        </h1>
        <main class="container">
            <h1>Placeholder</h1>
            <p>About me section</p>
            <p>About me section</p>
        </main>
    </div>
</div>

<style>
    .about {
        --cx: 58%;
        --cy: 41%;
        --size: 25vw;

        position: relative;
        isolation: isolate;
        min-height: 100dvh;
        padding: 2rem;
        display: grid;
        place-items: center;
    }

    .about::after {
        content: '';
        position: fixed;
        inset: 0;
        z-index: -4;
        background: linear-gradient(to bottom, #02030a 0%, #0a1030 60%, #16204a 100%);
    }

    .stars {
        position: fixed;
        inset: 0;
        z-index: -3;
        pointer-events: none;
        overflow: hidden;
    }

    .star {
        position: absolute;
        width: var(--size);
        height: var(--size);
        animation: die 2.5s ease-out var(--die) forwards;
    }

    .star i {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 0 calc(var(--size) * 2) rgba(255, 255, 255, 0.7);
        animation: twinkle var(--tw) ease-in-out var(--td) infinite;
    }

    @keyframes twinkle {
        0%, 100% { opacity: 0.1; scale: 0.6; }
        50%      { opacity: 1; scale: 1.1; }
    }

    @keyframes die {
        to { opacity: 0; scale: 0.2;}
    }

    @font-face {
    font-family: 'Serif Gothic';
    src: url('/fonts/serif-gothic-regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
    }

    .title {
        margin: 0;
        text-align: center;
        font-family: 'Serif Gothic', sans-serif;
        font-size: clamp(2rem, 7vw, 3rem);
        font-weight: normal;
        line-height: 1.1;
        white-space: nowrap;
        justify-self: center;
    }

    .line {
        display: block;
    }

    .letter {
        display: inline-block;
        white-space: pre;
        animation: drift var(--loop) linear forwards;
        animation-delay: calc(var(--start) * -1);
    }

    @keyframes drift {
        to {
            translate: calc(var(--k) * 42vw) var(--dy);
            rotate: var(--rot);
        }
    }

    .pulse {
        position: fixed;
        left: var(--cx);
        top: var(--cy);
        width: var(--size);
        aspect-ratio: 1;
        translate: -50% -50%;
        border-radius: 50%;
        background: #1e6bff;
        z-index: -2;
        pointer-events: none;
        animation: pulse 60s ease-in-out infinite;
    }

    .about::before {
        content: '';
        position: fixed;
        inset: 0;
        z-index: -1;
        background-image: url('/test.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    @keyframes pulse {
        0%, 100% { scale: 1; }
        50%      { scale: 1.3; }
    }

    .stack {
		width: 100%;
		max-width: 40rem;
		display: grid;
		gap: 2.5rem;
	}

    .container {
		position: relative;
		width: 100%;
		max-width: 40rem;
		padding: clamp(1.5rem, 6vw, 3.25rem);
		border: var(--bw) solid var(--ink);
		border-radius: 0;
		background: var(--paper);
		color: var(--ink);
	}
</style>