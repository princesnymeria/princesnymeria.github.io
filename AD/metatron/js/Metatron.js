class Metatron extends Solid {

	constructor() {
		super();
		this.color = [0, 0, 70];
	}

	display(animated) {
		const centers = this.findPoints();
		stroke(this.color[0], this.color[1], this.color[2]);
		const that = this;
		if (animated) {
			setTimeout(function(){ that.displayCircles(centers[0]); }, 500);
			setTimeout(function(){ that.displayCircles(centers[2]); }, 1500);
			setTimeout(function(){ that.displayCircles(centers[3]); }, 2500);
		}
		else {
			centers.forEach(l => {
				this.displayCircles(l);
			});
			centers.forEach(l => {
				this.displayLines(l);
			});
		}
	}

	findPoints() {
		var pointLayer = [];
		pointLayer.push([{'x':this.posX,'y':this.posY}]);
		angleMode(RADIANS);
		var r = this.size / 5;
		for (let j = 0; j < 3; j++) {
			let n = j < 2 ? 6 * j : 6;
			var points = [];
			for (let i = 0; i < n; i++) {
				var a = TAU / n * i + HALF_PI;
				var point = {};
				point['x'] = r * cos(a) * j + this.posX;
				point['y'] = r * sin(a) * j + this.posY;
				points.push(point);
			}
			pointLayer.push(points);
		}
		return pointLayer;
	}

	displayCircles(points) {
		var r = this.size / 5;
		for (let i = 0; i < points.length; i++) {
			const c = points[i];
			ellipse(c['x'], c['y'], r, r);
		}
	}

	displayLines(points) {
		for (let i = 0; i < points.length; i++) {
			const p1 = points[i];
			for (let j = 0; j < points.length; j++) {
				const p2 = points[j];
				line(p1['x'], p1['y'], p2['x'], p2['y']); 
			}
		}
	}

}