class MetatronsCube extends Figure {

	constructor(pX, pY) {
		super(pX, pY);

		this.name = "Metatron's Cube";

		const c = pX > pY ? pX : pY; 
		this.vars = {
			'dim': {
				v: 0,
				default: c * 0.7,
				min: c * 0.1,
				max: c * 5,//max: c * 1.5,
				integer: false,
				pair: false
			},
			'onionLayers': {
				v: 0,
				default: 3,
				min: 1,
				max: 6,
				integer: true,
				pair: false
			}
		}
	}

	display() {
		const d = this.vars['dim'].v;
		if (MODE_DEBUG) stroke('#00ffff50');
		ellipse(this.posX, this.posY, d, d);
		var centers = this.findPoints();
		this.displayCircles(centers);
		var strkWeight = 6;//----------------------------------------[Aconseguir algorismicament]
		strokeWeight(strkWeight/4);
		this.displayLines(centers);
	}

	findPoints() {
		const d = this.vars['dim'].v;
		const l = this.vars['onionLayers'].v;
		var points = [];
		points.push({'x':this.posX,'y':this.posY});
		angleMode(RADIANS);
		var r = d / (l*2-1);
		for (let j = 0; j < l; j++) {
			let n = j < l - 1 ? 6 * j : 6;
			for (let i = 0; i < n; i++) {
				var a = TAU / n * i + HALF_PI;
				var point = {};
				point['x'] = r * cos(a) * j + this.posX;
				point['y'] = r * sin(a) * j + this.posY;
				points.push(point);
			}
		}
		return points;
	}

	displayCircles(circlesCenters) {
		var r = this.vars['dim'].v / (this.vars['onionLayers'].v * 2 - 1);
		if (MODE_DEBUG) stroke('#ff00ff50');
		for (let i = 0; i < circlesCenters.length; i++) {
			const c = circlesCenters[i];
			ellipse(c['x'], c['y'], r, r);
		}
	}

	displayLines(extremPoints) {
		if (MODE_DEBUG) stroke('#ffff0020');
		for (let i = 0; i < extremPoints.length; i++) {
			const p1 = extremPoints[i];
			for (let j = 0; j < extremPoints.length; j++) {
				const p2 = extremPoints[j];
				line(p1['x'], p1['y'], p2['x'], p2['y']); 
			}
		}
	}
}