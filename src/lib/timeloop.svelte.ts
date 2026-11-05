export const LOOP_SECONDS = 1320; // 1320

export const loop = $state({
    elapsed: 0,
    cycle: 0
});

const startedAt = Date.now();
let users = 0;
let timer: ReturnType<typeof setInterval> | undefined;

function tick() {
    const total = (Date.now() - startedAt) / 1000;
    loop.elapsed = total % LOOP_SECONDS;
    loop.cycle = Math.floor(total / LOOP_SECONDS);
}

export function useTimeLoop() {
    if (users++ === 0) {
        tick();
        timer = setInterval(tick, 250);
    }
    return () => {
        if (--users === 0) clearInterval(timer);
    };
}