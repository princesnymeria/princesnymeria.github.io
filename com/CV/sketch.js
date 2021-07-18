var circleRadius = 100, lineHeight = 200, speed = .02;

var fase = 0, a = 0, dir = 1;
var faseMax = 4.712388;

var circlePosition;
var fgColor = [ 180, 60, 50, .1 ];



function setup( ) {
	createCanvas( window.innerWidth, window.innerHeight );

	const c = ( width > height ? width : height ) * .05;
	circleRadius = c, lineHeight = c*2;

	frameRate( 24 );
	setStyle( );
	circlePosition = createVector( width * .5, height * .5 );
}

function draw( ) {
	//displayBackground( );
	displayCurrentLine( );
	updateFase( );
	fgColor[0] += .1;
	if ( fgColor[0] > 360 ) fgColor[0] = 0;
	stroke( fgColor );
}



function setStyle( ) {
	colorMode( HSL );
	angleMode( RADIANS );
	background( 12 );
	strokeWeight( 5 );
	stroke( fgColor );
	noFill();
}

function updateFase( ) {
	fase += speed;
	a += speed * dir;
	if ( fase > faseMax ) changeCircle();
}

function displayBackground( ) {
	const c = color( 12 );
	c.setAlpha( .05 );
	background( c );
}

function displayCurrentLine( ) {
	const p1 = createVector(0, 0); const p2 = createVector(0, 0);
	p1.x = circlePosition.x + cos( a ) * circleRadius;
	p1.y = circlePosition.y + sin( a ) * circleRadius;
	p2.x = circlePosition.x + cos( a ) * ( circleRadius + lineHeight );
	p2.y = circlePosition.y + sin( a ) * ( circleRadius + lineHeight );
	line( p1.x, p1.y, p2.x, p2.y );
}

function ckeckPointInsideCanvas( p ) {
	if ( p.x > width ) p.x = p.x - width;
	else if ( p.x < 0 ) p.x = width + p.x;
	if ( p.y > height ) p.y = p.y - height;
	else if ( p.y < 0 ) p.y = height + p.y;
}

function changeCircle( ) {
	fase = 0;
	circlePosition.x += cos( a ) * ( circleRadius * 2 + lineHeight ) ;
	circlePosition.y += sin( a ) * ( circleRadius * 2 + lineHeight ) ;
	ckeckPointInsideCanvas( circlePosition );
	faseMax = HALF_PI * floor( random( 1, 4 ) );
	a -= PI;
	dir *= -1;
}
