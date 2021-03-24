const MODE_DEBUG = true;
var AUDIO_SOURCE = 'file';//var AUDIO_SOURCE = 'mic';//

let input, inpAmp, anim, C;



function preload() {
	switch (AUDIO_SOURCE) {
		case 'file':
			input = loadSound('music/YACHT-summer_song.mp3');
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

	anim = new Ex01d();
	if ( AUDIO_SOURCE == 'file' ) input.loop();

	anim.setup();
}

function draw() {
	const v = inpAmp.getLevel();
	if ( MODE_DEBUG ) console.log(v);
	anim.setParmsFromAmplitude(v);
	anim.draw();
}
