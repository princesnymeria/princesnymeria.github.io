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
			max: 6,
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
		if (MODE_DEBUG) console.log("Número de polígons:", Math.pow(s, (this.vars['iteracions'].v - 1)) );
	}

	displayRecursivePolygon(sides, centerX, centerY, diameter) {

		const a = TAU / sides;
		const d = diameter * 0.5;
		let v1 = p5.Vector.fromAngle(a, d);

		for (var i = 0; i < sides; i++) {
			push();
			translate(centerX, centerY);
			rotate(a * i);

			var x1 = diameter * 0.5;
			var y1 = 0;



			if (MODE_DEBUG) stroke('#FF00FF50');

			var x2 = v1.x;
			var y2 = v1.y;

			const d = dist(x1, y1, x2, y2);

			var a0 = createVector(x1, y1).angleBetween(createVector(x2, y2));
			a0 += PI * this.getTheMagicNumber(sides);
	
			for (var j = 0; j < sides; j++) {
	
				let v2 = p5.Vector.fromAngle(a0, d);
				
				//if (d > 100) this.displayRecursivePolygon(sides, centerX, centerY, dim);
				//else line(x1, y1, x2, y2);
				line(x1, y1, x2, y2);
	
				x1 = x2;
				y1 = y2;
				x2 = x1 + v2.x;
				y2 = y1 + v2.y;
				a0 += a;
			}



			pop();
		}
	}

	getTheMagicNumber (sides) { return { 3: 0.5, 4: 0.25, 5: 0.1, 6: 0 }[sides] }

}