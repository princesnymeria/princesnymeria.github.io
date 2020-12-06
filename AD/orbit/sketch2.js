var showHelper = true;
var CANVAS_WIDTH, CANVAS_HEIGHT;
const lineColor = { 'H':0, 'S':100 , 'L': 50, 'a': .05 };
const planetSystem1 = [];
const planetSystem2 = [];
const planetSystem3 = [];


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

	planetSystem1.push( new Planet(cont, 500, .01, '#00FFFF') );
	planetSystem1.push( new Planet(cont, 200, .04, '#FFFF00') );
	planetSystem1.push( new Planet(cont, 350, .04, '#FF00FF') );
	planetSystem1[0].setOrbitCenter(createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	planetSystem2.push( new Planet(cont, 500, .01, '#00FFFF') );
	planetSystem2.push( new Planet(cont, 200, .04, '#FFFF00') );
	planetSystem2.push( new Planet(cont, 350, .04, '#FF00FF') );
	planetSystem2[0].setOrbitCenter(createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));
	planetSystem2[0].setFase(TAU/3);

	planetSystem3.push( new Planet(cont, 500, .01, '#00FFFF') );
	planetSystem3.push( new Planet(cont, 200, .04, '#FFFF00') );
	planetSystem3.push( new Planet(cont, 350, .04, '#FF00FF') );
	planetSystem3[0].setOrbitCenter(createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));
	planetSystem3[0].setFase(TAU/3 *2);
}


function draw() {
	if ( showHelper ) clearCanvas();

	const n = planetSystem1.length - 1;

	for (let p = 0; p <= n; p++) {
		if ( p > 0 ) planetSystem1[p].setOrbitCenter(planetSystem1[p-1].position());
		planetSystem1[p].update();
		if ( showHelper ) planetSystem1[p].displayHelper();
	}

	for (let p = 0; p <= n; p++) {
		if ( p > 0 ) planetSystem2[p].setOrbitCenter(planetSystem2[p-1].position());
		planetSystem2[p].update();
		if ( showHelper ) planetSystem2[p].displayHelper();
	}

	for (let p = 0; p <= n; p++) {
		if ( p > 0 ) planetSystem3[p].setOrbitCenter(planetSystem3[p-1].position());
		planetSystem3[p].update();
		if ( showHelper ) planetSystem3[p].displayHelper();
	}

	const c = color(lineColor['H'], lineColor['S'], lineColor['L']);
	c.setAlpha( lineColor['a'] );
	strokeWeight( showHelper ? 4 : 1 );
	stroke( showHelper ? '#FF0000A0' : c );
	

	var a = planetSystem1[n-1].position();
	var b = planetSystem1[n].position();
	line(a.x, a.y, b.x, b.y);

	a = planetSystem2[n-1].position();
	b = planetSystem2[n].position();
	line(a.x, a.y, b.x, b.y);

	a = planetSystem3[n-1].position();
	b = planetSystem3[n].position();
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
