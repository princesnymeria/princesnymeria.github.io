var showHelper = false;
var CANVAS_WIDTH, CANVAS_HEIGHT;
var sun;
const unions = [];


window.onload = function() {
	document.getElementById('btnRefresh').addEventListener('click', clearCanvas);
	document.getElementById('btnHelper').addEventListener('click', toggleshowHelper);
}


function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate(48);//frameRate( MODE_DEBUG ? 12 : 48 );

	clearCanvas();
	angleMode(RADIANS);
	noFill();
	colorMode(HSL);

	loadPlanets();
}


function loadPlanets() {
	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 1, 0, 60);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	var earth, moon;

	earth = new Planet(cont, 500, .01, 120);
	moon = new Planet(cont, 350, .04, 180);
	earth.addSatellite( moon );
	sun.addSatellite( earth );
	unions.push([earth, moon]);
}


function draw() {
	if ( showHelper ) clearCanvas();

	sun.update();
	if ( showHelper ) sun.displayHelper();

	unions.forEach(union => {
		const a = union[0].getPosition();
		const b = union[1].getPosition();
		const c = union[1].getColor();
		strokeWeight( showHelper ? 8 : 1 );
		if ( showHelper ) c.setAlpha(0.6);
		stroke( c );
		line(a.x, a.y, b.x, b.y);
	});
}


function clearCanvas() {
	background(8);
}

function toggleshowHelper() {
	showHelper = !showHelper;
	clearCanvas();
}