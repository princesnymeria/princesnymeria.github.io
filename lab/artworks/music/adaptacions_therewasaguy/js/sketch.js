const AUDIO_SOURCE_MIC = 1024; const AUDIO_SOURCE_FILE = 1025; const AUDIO_SOURCE_OSC = 1026;

const MODE_DEBUG = true;

const anims = [];

let canvas, input, anim, C;

var selectedAnim = 0;
var audioSource = AUDIO_SOURCE_MIC;


function preload() {
	setAudioInput(audioSource);
}

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	C = Math.max(window.innerWidth, window.innerHeight) * .2;
	frameRate(MODE_DEBUG ? 4 : 24);

	loadAnims();
	if ( audioSource == AUDIO_SOURCE_FILE ) input.loop();

	anims[selectedAnim].setup();
}

function draw() {
	anims[selectedAnim].draw();
}

function loadAnims() {
	selectedAnim = 7;
	anims.push( new  Ex01(input) );   // 0
	anims.push( new Ex01b(input) );   // 1
	anims.push( new Ex01c(input) );   // 2
	anims.push( new Ex01d(input) );   // 3
	anims.push( new  Ex02(input) );   // 4
	anims.push( new  Ex03(input) );   // 5
	anims.push( new  Ex04(input) );   // 6
	anims.push( new Ex04b(input) );   // 7
}

function keyPressed() {
	if (key == 'T')
		toggleInput();
}

function toggleInput() {
	audioSource++;
	if (audioSource > AUDIO_SOURCE_OSC) audioSource = AUDIO_SOURCE_MIC;
	setAudioInput(audioSource);
}

function setAudioInput(source) {
	switch (source) {
		case AUDIO_SOURCE_FILE:
			input = loadSound('music/YACHT-summer_song.mp3');
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
