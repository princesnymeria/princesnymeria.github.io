const MODE_DEBUG = false;
var CANVAS_WIDTH, CANVAS_HEIGHT;
var p1, p2;


function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate( MODE_DEBUG ? 12 : 48 );

	clearCanvas();
	angleMode(RADIANS);
	noFill();

	document.getElementById('btnRefresh').addEventListener('click', clearCanvas);

	p1 = new Planet(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5, 500, .01);
	p2 = new Planet(0, 0, 250, .05);
}


function draw() {
	if ( MODE_DEBUG ) clearCanvas();
	
	p2.setOrbitCenter(p1.position());
	
	p1.update();
	p2.update();
	
	if ( MODE_DEBUG ) {
		p1.displayHelper('#00FFFF');
		p2.displayHelper('#FFFF00');
	}
	
	if ( MODE_DEBUG ) { strokeWeight(4); stroke( '#FF00FFA0' ); }
	else { strokeWeight(1); stroke( '#FF00FF20' ); }
	
	const a = p1.position();
	const b = p2.position();
	line(a.x, a.y, b.x, b.y);
}


function clearCanvas() {
	background(12);
}


class Planet {
	constructor (posX, posY, orbitRadius, speed) {
		this.orbitCenter = createVector(posX, posY);
		this.orbitRadius = orbitRadius;
		this.speed = speed;
		this.fase = 0;
	}
	setOrbitCenter (pos) {
		this.orbitCenter = pos;
	}
	position () {
		const x = this.orbitCenter.x + cos( this.fase ) * this.orbitRadius * 0.5;
		const y = this.orbitCenter.y + sin( this.fase ) * this.orbitRadius * 0.5;
		return createVector(x, y);
	}
	update () {
		this.fase += this.speed;
		if (this.fase >= TAU) this.fase = 0;
	}
	displayHelper (color) {
		const p = this.position();
		strokeWeight(30); stroke( color + '20' );
		point(this.orbitCenter.x, this.orbitCenter.y);
		stroke( color + '60' );
		point(p.x, p.y);
		strokeWeight(4); stroke( color + '80' );
		circle(this.orbitCenter.x, this.orbitCenter.y, this.orbitRadius);
	}
}