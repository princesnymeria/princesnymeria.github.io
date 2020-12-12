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