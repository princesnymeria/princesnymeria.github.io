var showHelper = false;
const sun;


window.onload = function() {
	document.getElementById('btnRefresh').addEventListener('click', clearCanvas);
	document.getElementById('btnHelper').addEventListener('click', toggleshowHelper);
}


function setup() {	
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(96);//frameRate( MODE_DEBUG ? 12 : 48 );

	clearCanvas(true);
	angleMode(RADIANS);
	noFill();
	colorMode(HSL);

	loadPlanets();
}


function draw() {
	clearCanvas(showHelper);
	sun.update();
	if ( showHelper )
		sun.displayHelper();
	else
		sun.display();
}


function loadPlanets() {
	sun = new Planet(null, 0, 0, 0);
	sun.setOrbitCenter( createVector(width * .5, height * .5 ));

	const n = floor(random( 2, 12 ));
	const EARTH_RADIUS   = random(  50,    250 ) ;
	const EARTH_SPEED    = random( .0005, .001 ) ;
	const MOON_RADIUS    = random(  100,   400 ) ;
	const MOON_SPEED     = random( .0005, .005 ) ;
	const SUBMOON_RADIUS = random(  100,   600 ) ;
	const SUBMOON_SPEED  = random( .0005, .010 ) ;

	const INCR_ANGLE = TAU/n;

	var earth, moon, submoon;
	var angle = 0;

	for (let i = 0; i < n; i++) {
		const colorHue = noise(i) * 360;
		earth = new Planet(null, EARTH_RADIUS, EARTH_SPEED, 120);
		earth.setFase(angle);
		sun.addSatellite( earth );

		moon = new Planet(null, MOON_RADIUS, MOON_SPEED, colorHue);
		moon.setFase(angle);
		earth.addSatellite( moon );

		submoon = new Planet(null, SUBMOON_RADIUS, SUBMOON_SPEED, colorHue);
		submoon.setFase(angle);
		moon.addSatellite( submoon );

		angle += INCR_ANGLE;
	}
}


function clearCanvas(full) {
	const b = color(8);
	if ( !full ) b.setAlpha(0);
	background(b);

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