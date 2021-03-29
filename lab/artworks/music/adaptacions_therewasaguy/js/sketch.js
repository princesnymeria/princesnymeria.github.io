const MODE_DEBUG = true;
var AUDIO_SOURCE = 'file';//var AUDIO_SOURCE = 'mic';//
const anims = [];
let input, inpAmp, anim, C;
var selectedAnim = 0;


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
	//frameRate(MODE_DEBUG ? 12 : 24);

	inpAmp = new p5.Amplitude();
	inpAmp.setInput(input);
	inpAmp.smooth(0.9);

	loadAnims();
	if ( AUDIO_SOURCE == 'file' ) input.loop();

	anims[selectedAnim].setup();
}

function draw() {
	const a = inpAmp.getLevel();
	anims[selectedAnim].amplitude2paarms(a);
	anims[selectedAnim].draw();
}

function loadAnims() {
	selectedAnim = 3;
	anims.push( new Ex01()  ); // 0
	anims.push( new Ex01b() ); // 1
	anims.push( new Ex01c() ); // 2
	anims.push( new Ex01d() ); // 3
}
