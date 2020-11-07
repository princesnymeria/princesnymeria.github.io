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
		this.vars['iteracions'] = {
			v: 0,
			default: 3,
			min: 2,
			max: 6,
			integer: true
		}
		this.vars['sides'] = {
			v: 0,
			default: 3,
			min: 3,
			max: 8,
			integer: true
		}
		this.colorHue = 0;
	}

	display() {
		if (MODE_DEBUG) this.colorHue = 0;
		angleMode(RADIANS);
		const d = this.vars['dim'].v;
		const s = this.vars['sides'].v;
		const x = this.posX;
		const y = this.posY;
		if (MODE_DEBUG) { stroke('#00FFFF50'); circle(x, y, d); };
		this.displayRecursivePolygon(s, x, y, d * 0.5);
		if (MODE_DEBUG) this.numPologons = Math.pow(s, (this.vars['iteracions'].v - 1));
		if (MODE_DEBUG) console.log("Número de polígons:", this.numPologons);
	}

	displayRecursivePolygon(sides, centerX, centerY, diameter) {
		if (MODE_DEBUG) {
			stroke('#FF000050');
			circle(centerX, centerY, diameter);
			stroke('#0000FF50');
			this.displayPolygonInCircle(centerX, centerY, diameter, sides);
		}
		const a = TAU / sides;
		for (var i = 0; i < sides; i++) {
			push();
			translate(centerX, centerY)
			rotate(a * (i + 0.5));
			const x = diameter * 0.5;
			const y = 0;
			if (MODE_DEBUG) { stroke('#FFFF0050'); circle(x, y, diameter); }
			this.displayPolygonInCircle(x, y, diameter, sides);
			pop();
		}
	}

}