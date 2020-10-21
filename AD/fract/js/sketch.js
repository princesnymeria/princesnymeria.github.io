var CANVAS_WIDTH, CANVAS_HEIGHT;
let userLayers = [];

let documentStyle = {
	background: 12,
	foreground: 248,
	selected: '#f0f',
	strokeWeight: 2
};

function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	LONG_SIDE_CANVAS = CANVAS_WIDTH > CANVAS_HEIGHT ? CANVAS_WIDTH : CANVAS_HEIGHT;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate(24);
}

function draw() {
	loadStyles();
	drawMandala();
	//...
}



function loadStyles() {
	angleMode(RADIANS);
	colorMode(HSL);
	rectMode(CENTER);
	background(documentStyle['background']);
	stroke(248);
	strokeWeight(documentStyle['strokeWeight']);
	fill(documentStyle['background']);
	translate(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
}

function drawMandala() {
	userLayers.forEach(c => {
		//c.update();
		c.display();
	});
}