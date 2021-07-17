const SYMS = 8;
const bgColor = 12;
const bgAplha = .05;
const fgColor = 255 - bgColor;
const fgWeight= 5;
var sun, centerPoint;



function setup( ) {
	createCanvas( window.innerWidth, window.innerHeight );

	frameRate( 24 );

	colorMode( HSL );
	stroke( fgColor );
	strokeWeight( fgWeight );
	background( bgColor );

	createPlanets();
}

function draw( ) {
	const c = color( bgColor );
	c.setAlpha( bgAplha );
	background( c );
	sun.update( );
	drawPointSymmetrically( function(){ sun.display() } );
}



function drawPointSymmetrically( drawCallback ) {
	translate( width * .5, height * .5 );
	for ( var i = 0; i < SYMS; i++ ) {
		push( );
		rotate( TAU * i / SYMS );
		drawCallback( );
		pop( );
	}
}

function createPlanets() {
	sun = new Planet( 1, 0 );

	const earth = new Planet( 250, .02 );
	sun.addSatellite( earth );

	const moon = new Planet( 300, .05 );
	earth.addSatellite( moon );

	const submoon = new Planet( 350, .08 );
	moon.addSatellite( submoon );

	submoon.setDrawable( );
}





class Planet {
	constructor ( orbitRadius, speed ) {
		this.orbitCenter = createVector( 0, 0 );
		this.orbitRadius = orbitRadius;
		this.speed = speed;
		this.fase = 0;
		this.drawable = false;
		this.satellites = [ ];
		this.parent = null;
	}

	addSatellite ( planet ) {
		this.satellites.push( planet );
		planet.parent = this;
	}

	setOrbitCenter ( pos ) { this.orbitCenter = pos; }

	setFase ( f ) { this.fase = f; }
	
	setDrawable ( ) { this.drawable = true; }

	get position ( ) {
		const x = this.orbitCenter.x + cos( this.fase ) * this.orbitRadius * 0.5;
		const y = this.orbitCenter.y + sin( this.fase ) * this.orbitRadius * 0.5;
		return createVector( x, y );
	}

	display ( ) {
		if ( this.drawable ) {
			const p1 = this.position;
			const p2 = this.parent.position;
			line( p1.x, p1.y, p2.x, p2.y );
		}
		this.satellites.forEach( satellite => {
			satellite.display( );
		});
	}

	update () {
		this.fase += this.speed;
		if ( this.fase >= TAU ) this.fase = 0;
		const p = this.position;
		this.satellites.forEach( satellite => {
			satellite.setOrbitCenter( p );
			satellite.update();
		});
	}
}
