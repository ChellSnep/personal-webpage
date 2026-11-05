import { LOOP_SECONDS } from "./timeloop.svelte.ts";

export type Star = {
    x: number; // from the left
    y: number; // from the top
    size: number;
    dieIn: number;
    tw: number; // duration
    td: number; // delay
};

const FIRST_DEATH = LOOP_SECONDS * 0.03; // ~40-ish seconds
const LAST_DEATH = LOOP_SECONDS * 0.90;

function mulberry32(seed: number) {
    return () => {
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

export function makeStars(seed: number, elapsed = 0, count = 260) : Star[] {
    const rnd = mulberry32(seed + 1);
    const range = (min: number, max: number) => min + rnd() * (max - min);

    return Array.from({ length: count }, () => ({
        x: range(0, 100),
        y: range(0, 100),
        size: range(1, 3.2),
        dieIn: range(FIRST_DEATH, LAST_DEATH) - elapsed,
        tw: range(2, 6),
        td: -range(0, 6)
    })).filter((s) => s.dieIn > -3);
}