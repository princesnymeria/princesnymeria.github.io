var showHelper = false;
var noisyMode = false;
var CANVAS_WIDTH, CANVAS_HEIGHT;
var sun;
var unions = [];


window.onload = function() {
	document.getElementById('btnRefresh').addEventListener('click', clearCanvas);
	document.getElementById('btnHelper').addEventListener('click', toggleshowHelper);
}


function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate(96);//frameRate( MODE_DEBUG ? 12 : 48 );

	clearCanvas();
	angleMode(RADIANS);
	noFill();
	colorMode(HSL);

	loadPlanets();
}


function draw() {
	if ( showHelper ) clearCanvas();

	sun.update();
	if ( showHelper ) sun.displayHelper();

	unions.forEach(union => {
		const displayLine = union.length == 2;

		const a = union[0].getPosition();
		const b = displayLine ? union[1].getPosition() : 0;

		if (displayLine) strokeWeight( showHelper ? 8 : 1 ); else strokeWeight( 10 );

		const c = union[0].getColor();
		if ( showHelper ) c.setAlpha(0.6);
		stroke( c );

		const n = noisyMode ? noise(a.x, a.y) * CANVAS_WIDTH * .01 : 0;
		if (displayLine) line(a.x, a.y, b.x, b.y); else point(a.x + n, a.y + n);
	});
}


function loadPlanets() {
	sun = new Planet(null, 1, 0, 60);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));
	unions = [];

	var earth, moon, moon2;

	earth = new Planet(null, 500, .001, 120);
	sun.addSatellite( earth );

	moon = new Planet(null, 350, .004, 180);
	earth.addSatellite( moon );
	unions.push([moon, earth]);

	moon2 = new Planet(null, 350, .004, 210);
	moon2.setFase(PI);
	earth.addSatellite( moon2 );
	unions.push([moon2, earth]);

	clearCanvas();
	noisyMode = false;
}


function clearCanvas() {
	background(8);
}

function toggleshowHelper() {
	showHelper = !showHelper;
	clearCanvas();
}

function keyPressed() { // Mostrar i amagar la interficie gràfica
	if (keyCode === 32) {
		const c = document.getElementById('controllersContainer');
		c.style.display = c.style.display == 'flex' ? 'none' : 'flex';
	}
} 