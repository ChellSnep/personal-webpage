// Place holder for now to see if it even searchForWorkspaceRoot. Probably gonna change later so it does more than jst playing sound and/or adding some custom ones
let audio: AudioContext | undefined;

export function playTone(frequency: number, seconds = 0.4, wave: OscillatorType = 'triangle') {
	audio ??= new AudioContext();
	if (audio.state === 'suspended') audio.resume();
 
	const now = audio.currentTime;
	const osc = audio.createOscillator();
	const gain = audio.createGain();
 
	osc.type = wave;
	osc.frequency.value = frequency;
 
	osc.connect(gain).connect(audio.destination);
	osc.start(now);
	osc.stop(now + seconds + 0.05);
}

export function playFile(url: string, volume = 1) {
    const sound = new Audio(url);
    sound.volume = volume;
    sound.play();
}
