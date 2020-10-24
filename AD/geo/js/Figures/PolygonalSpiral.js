class PolygonalSpiral extends Figure {

	constructor(pX, pY) {
		super(pX, pY);

		this.name = "Polygonal Spiral";

		const c = pX > pY ? pX : pY; 
		this.vars = {
			'dim': {
				v: 0,
				default: c * 0.7,
				min: c * 0.1,
				max: c * 1.5,
				integer: false
			},
			'sides': {
				v: 0,
				default: 7,
				min: 3,
				max: 12,
				integer: true
			},
			't': {
				v: 0,
				default: 0.25,
				min: 0,
				max: 1,
				integer: false
			},
			'iterations': {
				v: 0,
				default: 4,
				min: 1,
				max: 24,
				integer: true
			}
		}
	}

	display() {
		angleMode(RADIANS);

		const d = this.vars['dim'].v;
		const iterations = this.vars['iterations'].v;
		const sides = this.vars['sides'].v;
		const t = this.vars['t'].v;

		if (MODE_DEBUG) stroke('#00ffff50');
		if (MODE_DEBUG) ellipse(this.posX, this.posY, d, d);
		var c = this.displayPolygonInCircle(this.posX, this.posY, d, sides);

		for (let i = 0; i < iterations; i++) {
			var c2 = this.findPoligonChild(c, t);
			this.displayPolygonWithPoints(c2, sides);
			c = c2;
		}
	}

	displayPolygonInCircle(centerX, centerY, dim, sides) {
		var points = [];
		for (let i = 0; i < sides; i++) {
			var a = TAU/sides * i;
			var p = {};
			p['x'] = centerX + cos(a) * dim * 0.5;
			p['y'] = centerY + sin(a) * dim * 0.5;
			points.push(p);
		}
		this.displayPolygonWithPoints(points, sides);
		return points;
	}

	displayPolygonWithPoints(points, sides) {
		if (MODE_DEBUG)points.forEach(p => {stroke('#ffff00'); strokeWeight(10); point(p['x'], p['y']); strokeWeight(4);});
		if (MODE_DEBUG) stroke('#ff00ff50');
		for (let i = 0; i < sides; i++) {
			const p1 = points[i];
			const p2 = i < points.length-1 ? points[i+1] : points[0];
			line(p1['x'], p1['y'], p2['x'], p2['y']);
		};
	}

	findPoligonChild(points, t) {
		var newPoints = [];
		for (let i = 0; i < points.length; i++) {
			const p = points[i];
			const p2 = i < points.length-1 ? points[i+1] : points[0];
			var P = {
				x: p['x'] + (p2['x']-p['x']) * t,
				y: p['y'] + (p2['y']-p['y']) * t
			};
			if (MODE_DEBUG) { stroke('#ffff00');strokeWeight(10);point(P['x'], P['y']);strokeWeight(4) };
			newPoints.push(P);
		};
		return newPoints;
	}

}