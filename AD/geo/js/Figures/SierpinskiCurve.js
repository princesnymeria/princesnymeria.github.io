class SierpinskiCurve extends Figure {

	//https://en.wikipedia.org/wiki/Sierpi%C5%84ski_curve
	//https://stackoverflow.com/questions/59703729/making-the-sierpi%c5%84ski-arrowhead-curve-with-p5-js

	constructor(pX, pY) {
		super(pX, pY);

		this.name = "Sierpiński curve";

		const c = pX > pY ? pX : pY; 
		this.vars = { }
		this.vars['dim'] = {
			v: 0,
			default: c * 0.7,
			min: c * 0.1,
			max: c * 1.5,
			integer: false
		}
		this.vars['minDim'] = {
			v: 0,
			default: 50,
			min: 10,
			max: 500,
			integer: true
		}
		/*this.vars['sides'] = {
			v: 0,
			default: 3,
			min: 3,
			max: 8,
			integer: true
		}*/
	}

	display() {
		angleMode(RADIANS);
		const d = this.vars['dim'].v;
		const x = this.posX;
		const y = this.posY;
		if (MODE_DEBUG) stroke('#00ffff50');
		if (MODE_DEBUG) ellipse(x, y, d, d);
		this.displayPolygon(3, x, y, d * 0.5);
	}

	displayPolygon(sides, centerX, centerY, diameter) {

		if (MODE_DEBUG) stroke('#ff00ff50');

		var angle = HALF_PI + PI;
		const a = TAU / sides;
		const dim = diameter * 0.5;

		translate(centerX, centerY);
		for (var i = 0; i < sides; i++) {
			push();
			rotate(a * i);

			const p1x = dim * cos(angle);
			const p1y = dim * sin(angle) - dim;
			angle += a;
			const p2x = dim * cos(angle);
			const p2y = dim * sin(angle) - dim;
			angle += a;
			const p3x = dim * cos(angle);
			const p3y = dim * sin(angle) - dim;
	
			if (dim > this.vars['minDim'].v) this.displayPolygon(sides, 0, - dim, dim );
			else triangle(p1x, p1y, p2x, p2y, p3x, p3y);

			pop();
		}

	}

}