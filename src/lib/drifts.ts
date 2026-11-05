export type Letter = {
    ch: string;
    k: number;
    dy: number;
    rot: number;
}

export function makeLetters(title: string): Letter[][] {
    let n = 0;

    return title.split("\n").map((line) => {
        const chars = [...line.trim()];
        const mid = (chars.length - 1) / 2;

        return chars.map((ch, j) => {
            const i = n++;
            return {
                ch,
                k: mid === 0 ? 0 : (j - mid) / mid,
                dy: -Math.abs(Math.sin(i * 12.9898)) * 14,
                rot: Math.cos(i * 78.233) * 35
            };
        });
    });
}