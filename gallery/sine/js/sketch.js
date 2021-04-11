const AUDIO_SOURCE_MIC = 1024; const AUDIO_SOURCE_FILE = 1025; const AUDIO_SOURCE_OSC = 1026;

const MODE_DEBUG = false;

const anims = [];

let anim, C, input;
let inpAmp, inpFFT;

var selectedAnim = 0;
var audioSource = AUDIO_SOURCE_FILE;


function preload() {
	setAudioInput(audioSource);
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	C = Math.max(window.innerWidth, window.innerHeight) * .5;
	frameRate(MODE_DEBUG ? 1 : 24);

	loadAnims();
	if ( audioSource == AUDIO_SOURCE_FILE ) input.loop();

	anims[selectedAnim].setup();

	const binCount = 32;
	const smoothing = .6;
	inpAmp = new p5.Amplitude();
	inpAmp.setInput(input);
	inpAmp.smooth(smoothing);
	inpFFT = new p5.FFT(smoothing, binCount);
	inpFFT.setInput(input);
}

function draw() {
	const a = inpAmp.getLevel();
	const s = inpFFT.analyze();
	const w = inpFFT.waveform(1024, 'float32');
	if ( MODE_DEBUG ) console.log('Amplitude: ' + a, 'Spectrum: ' + s, 'Waveform: ' + w);
	anims[selectedAnim].input2parms(a, s, w, 0);
	anims[selectedAnim].draw();
}

function loadAnims() {
	anims.push( new Xavi() );
	anims.push( new XaRia() );
	anims.push( new Wheel() );
	selectedAnim = anims.length - 1;
}

/*function keyPressed() {
	if (key == 'T')
		toggleInput();
}*/

/*function toggleInput() {
	audioSource++;
	if (audioSource > AUDIO_SOURCE_OSC) audioSource = AUDIO_SOURCE_MIC;
	setAudioInput(audioSource);
}*/

function setAudioInput(source) {
	switch (source) {
		case AUDIO_SOURCE_FILE:
			input = loadSound('music/lsd-genius.m4a');//input = loadSound('music/farbro-tectonic.wav');
			break;
		case AUDIO_SOURCE_MIC:
			input = new p5.AudioIn();
			input.start();
			break;
		case AUDIO_SOURCE_OSC:
			input = new p5.Oscillator();
			input.setType('sine'); // sine;  triangle;  square;  sawtooth
			input.start();
			input.amp(0.5);
			input.freq(10);
			break;
	}
}
