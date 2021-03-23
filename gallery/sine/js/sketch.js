const MODE_DEBUG = true;
var AUDIO_SOURCE = 'file';//var AUDIO_SOURCE = 'mic';

const inputValues = {
	'volume':    { 'min': 0.0, 'max': 1.0 },
	'amplitude': { 'min': 0.0, 'max': 1.0 }
};

let input, anim, C;



function preload() {
	switch (AUDIO_SOURCE) {
		case 'file':
			input = loadSound('music/farbro-tectonic.wav');
			break;
		case 'mic':
			input = new p5.AudioIn();
			input.start();
			break;
	}
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	C = Math.max(window.innerWidth, window.innerHeight) * .2;
	frameRate(MODE_DEBUG ? 12 : 24);

	loadInputValuesGetter();

	anim = new Classic();
	if ( AUDIO_SOURCE == 'file' ) input.loop();
	//if ( MODE_DEBUG ) input.volume(.2);

	anim.loadStyle();
}

function draw() {
	const v = getInputValues();
	if ( MODE_DEBUG ) console.log(v);
	anim.input2parms(v);
	anim.display();
}



function loadInputValuesGetter() {
	inputValues['volume']['el'] = input;
	inputValues['amplitude']['el'] = new p5.Amplitude();
	inputValues['amplitude']['el'].setInput(input);
}

function getInputValues() {
	const v = map(inputValues['volume']['el'].getLevel(), inputValues['volume']['min'], inputValues['volume']['max'], 0, 127);
	const a = map(inputValues['amplitude']['el'].getLevel(), inputValues['amplitude']['min'], inputValues['amplitude']['max'], 0, 127);
	return {'volume': v, 'amplitude': a}
}