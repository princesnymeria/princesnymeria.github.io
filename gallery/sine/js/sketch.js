const MODE_DEBUG = true;
var AUDIO_SOURCE = 'mic';//var AUDIO_SOURCE = 'mic';

let input, inpAmp, anim, C;



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

	inpAmp = new p5.Amplitude();
	inpAmp.setInput(input);

	anim = new Classic();
	if ( AUDIO_SOURCE == 'file' ) input.loop();
	//if ( MODE_DEBUG ) input.volume(.2);

	anim.loadStyle();
}

function draw() {
	const v = inpAmp.getLevel();
	if ( MODE_DEBUG ) console.log(v);
	anim.input2parms(v);
	anim.display();
}
