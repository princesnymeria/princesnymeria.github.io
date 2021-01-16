const MODE_DEBUG = false;
var CANVAS_WIDTH, CANVAS_HEIGHT, C;
var sun;
var unions = [];


function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	C = CANVAS_WIDTH > CANVAS_HEIGHT ? CANVAS_WIDTH : CANVAS_HEIGHT;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate( MODE_DEBUG ? 12 : 48 );

	background(24);
	angleMode(RADIANS);
	noFill();
	colorMode(HSL);

	loadPlanets();
}


function draw() {
	sun.update();
	unions.forEach(union => {
		const displayLine = union.length == 2;

		const a = union[0].getPosition();
		const b = displayLine ? union[1].getPosition() : 0;
		const c = union[0].getColor();

		strokeWeight( displayLine ? 1 : 10 );
		stroke( c );
		const n = noise(a.x, a.y) * CANVAS_WIDTH * .01;
		if (displayLine) line(a.x, a.y, b.x, b.y); else point(a.x + n, a.y + n);
	});
}


function loadPlanets() {
	sun = new Planet(0, 0, 0);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	const n = floor(random( 2, 12 ));
	const EARTH_RADIUS   =   random(  50,    250  ) ;
	const EARTH_SPEED    =   random( .0005, .001  ) ;
	const MOON_RADIUS    =   random(  100,   400  ) ;
	const MOON_SPEED     =   random( .0005, .005  ) ;
	const SUBMOON_RADIUS =   random(  100,   600  ) ;
	const SUBMOON_SPEED  =   random( .0005, .010  ) ;

	const INCR_ANGLE = TAU/n;
	const INCR_COLOR = 360/n;

	var earth, moon, submoon;
	var angle = 0;
	var colorHue = 0;

	for (let i = 0; i < n; i++) {
		earth = new Planet(EARTH_RADIUS, EARTH_SPEED, 120);
		earth.setFase(angle);
		sun.addSatellite( earth );

		moon = new Planet(MOON_RADIUS, MOON_SPEED, colorHue);
		moon.setFase(angle);
		earth.addSatellite( moon );

		submoon = new Planet(SUBMOON_RADIUS, SUBMOON_SPEED, colorHue);
		submoon.setFase(angle);
		moon.addSatellite( submoon );

		unions.push([submoon]);

		angle += INCR_ANGLE;
		colorHue += INCR_COLOR;
	}
}
