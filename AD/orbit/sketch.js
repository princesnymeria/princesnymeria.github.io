var showHelper = false;
var CANVAS_WIDTH, CANVAS_HEIGHT;
const lineColor = { 'H':44, 'S':80 , 'L': 70, 'a': .1 };
var p1, p2;


function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate( showHelper ? 12 : 48 );

	clearCanvas();
	angleMode(RADIANS);
	noFill();
	colorMode(HSL);

	loadInterface(['r1', 'r2', 'v1', 'v2', 'c']);
	document.getElementById('btnRefresh').addEventListener('click', clearCanvas);
	document.getElementById('btnHelper').addEventListener('click', toggleshowHelper);

	p1 = new Planet(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5, 500, .01);
	p2 = new Planet(0, 0, 250, .05);
}


function draw() {
	if ( showHelper ) clearCanvas();
	
	p2.setOrbitCenter(p1.position());

	p1.update();
	p2.update();
	
	if ( showHelper ) {
		p1.displayHelper('#00FFFF');
		p2.displayHelper('#FFFF00');
	}
	
	const c = color(lineColor['H'], lineColor['S'], lineColor['L']);
	c.setAlpha( lineColor['a'] );
	strokeWeight( showHelper ? 4 : 1 );
	stroke( showHelper ? '#FF00FFA0' : c );
	
	const a = p1.position();
	const b = p2.position();
	line(a.x, a.y, b.x, b.y);
}


function clearCanvas() {
	background(8);
}

function toggleshowHelper() {
	showHelper = !showHelper;
	clearCanvas();
}


class Planet {
	constructor (posX, posY, orbitRadius, speed) {
		this.orbitCenter = createVector(posX, posY);
		this.orbitRadius = orbitRadius;
		this.speed = speed;
		this.fase = 0;
	}

	setOrbitCenter (pos) { this.orbitCenter = pos; }
	setSpeed (s) { this.speed = s; }
	setRadius (r) { this.orbitRadius = r; }

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




function loadInterface(slides) {
	const defecte = [64, 32, 2, 10, 10 ];//const defecte = [40, 25, 20, 50, 10 ];//
	const cont = document.getElementById('sliderContainer');
	for (let i = 0; i < slides.length; i++) {
		const inp = document.createElement('INPUT');
		inp.type = 'range';
		inp.id = slides[i];
		inp.min = 0;
		inp.max = 127;
		inp.step = 1;
		inp.value = defecte[i];
		inp.addEventListener('change', updateVars);
		cont.appendChild(inp);
	}
}

function updateVars (ev) {
	const v = ev.target.value;
	switch (ev.target.id) {
		case 'v1':  p1.setSpeed ( map( v, 0, 127, 0, .5   ) );  break;
		case 'v2':  p2.setSpeed ( map( v, 0, 127, 0, .5   ) );  break;
		case 'r1':  p1.setRadius( map( v, 0, 127, 0, 1000 ) );  break;
		case 'r2':  p2.setRadius( map( v, 0, 127, 0, 1000 ) );  break;
		case 'c' :  lineColor['H'] = map( v, 0, 127, 0, 360 );  break;
	}
}