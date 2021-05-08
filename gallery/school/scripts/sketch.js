const MODE_DEBUG = true;
const STROKE = 1024; const FILL = 1025; const LINE = 1026; const POINT = 1027;

const algorithms = [];
var selectedAlgorithm;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate( MODE_DEBUG ? 12 : 48 );

	colorMode(HSL);
	angleMode(RADIANS);

	algorithms.push( new BezierController() );
	algorithms.push( new VoronoiController() );

	xxxx(0);
	createAlgorithmSelectorButtons();
}

function draw() {
	clearCanvas();
	selectedAlgorithm.draw();
}

function clearCanvas() {
	background(8);
}

function setColor(hue, aplha, action, type) {
	const color = [hue, 100, 50, aplha];
	switch (action) {
		case STROKE:	stroke(color);	noFill();	strokeWeight( type == LINE ? 5 : 10 );	break;
		case FILL:		fill(color);	noStroke();											break;
	}
}
