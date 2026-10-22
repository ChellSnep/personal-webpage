export function rollSkeleton(skeletonGif: HTMLImageElement) {
    const roll = Math.floor(Math.random() * 100);

    if (roll === 67) {
        skeletonGif.hidden = false;

        setTimeout(() => {
            skeletonGif.hidden = true;
        }, 2000);
    }
}