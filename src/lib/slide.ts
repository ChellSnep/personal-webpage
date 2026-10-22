import { linear } from "svelte/easing";

export async function slideAcross(picture: HTMLElement, slide_ms = 4500) {
    if (!picture.hidden) return;

    picture.hidden = false;
    if (picture instanceof HTMLImageElement) await picture.decode().catch(() => {});

    try {
        await picture.animate(
            [{ transform: 'translate(-100%, -50%)' }, { transform: 'translate(100vw, -50%)' }],
            { duration: slide_ms, easing: 'linear'}
        ).finished;
    } catch {
        // page closed mid-slide
    } finally {
        picture.hidden = true;
    }
}