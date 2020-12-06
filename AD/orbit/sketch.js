var showHelper = true;
var CANVAS_WIDTH, CANVAS_HEIGHT;
const lineColor = { 'H':0, 'S':80 , 'L': 70, 'a': .05 };
const planets = [];


function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate(48);//frameRate( MODE_DEBUG ? 12 : 48 );

	clearCanvas();
	angleMode(RADIANS);
	noFill();
	colorMode(HSL);

	document.getElementById('btnRefresh').addEventListener('click', clearCanvas);
	document.getElementById('btnHelper').addEventListener('click', toggleshowHelper);
	const cont = document.getElementById('sliderContainer');

	planets.push( new Planet(cont, 500, .01, '#00FFFF') );
	planets.push( new Planet(cont, 350, .04, '#FFFF00') );
	planets[0].setOrbitCenter(createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));
}


function draw() {
	if ( showHelper ) clearCanvas();

	const n = planets.length - 1;

	for (let p = 0; p <= n; p++) {
		if ( p > 0 ) planets[p].setOrbitCenter(planets[p-1].position());
		planets[p].update();
		if ( showHelper ) planets[p].displayHelper();
	}

	const c = color(lineColor['H'], lineColor['S'], lineColor['L']);
	c.setAlpha( lineColor['a'] );
	strokeWeight( showHelper ? 4 : 1 );
	stroke( showHelper ? '#FF0000A0' : c );
	

	const a = planets[n-1].position();
	const b = planets[n].position();
	line(a.x, a.y, b.x, b.y);

	//lineColor['H'] = ( lineColor['H'] + 1 ) % 360;
}


function clearCanvas() {
	background(8);
}

function toggleshowHelper() {
	showHelper = !showHelper;
	clearCanvas();
}
