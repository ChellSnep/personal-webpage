let audio: AudioContext | undefined;

const volume = 0.05;

export function playTone(frequency: number, seconds = 0.4, wave: OscillatorType = 'sine') {
	audio ??= new AudioContext();
	if (audio.state === 'suspended') audio.resume();
 
	const now = audio.currentTime;
	const osc = audio.createOscillator();
	const gain = audio.createGain();
 
	osc.type = wave;
	osc.frequency.value = frequency;

	gain.gain.setValueAtTime(0.0001, now);
	gain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
	gain.gain.exponentialRampToValueAtTime(0.0001, now + seconds);

 
	osc.connect(gain).connect(audio.destination);
	osc.start(now);
	osc.stop(now + seconds + 0.05);
}

export function playFile(url: string, volume = 0.8) {
    const sound = new Audio(url);
    sound.volume = volume;
    sound.play();
}
