class BezierController extends AlgorithmController {
	constructor () {
		super();
		this.data.name = 'Bezier';
		this.algorithm = new Bezier([
			new Point( createVector(width * .20, height * .75) ),
			new Point( createVector(width * .30, height * .20) ),
			new Point( createVector(width * .80, height * .35) ),
			new Point( createVector(width * .65, height * .65) )
		]);
	}
}



class Bezier {
	constructor (points) {
		this.points = points;
		this.TPoints = [ ];
		this.t = .3;
	}

	get iterations () {
		return this.points.length - 1;
	}

	setup () {
		this.inputT = addVarControllers('INPUT', 't');
	}

	draw () {
		this.update();
		this.display();
		this.points.forEach(point => {
			point.update();
			point.display();
		});
	}

	update () {
		this.t = this.inputT.value * .01;
		for (let i = 0; i <= this.iterations -1; i++) {
			this.TPoints[i] = [];
			for (let j = 0; j < this.iterations-i; j++) {
				if (i == 0) this.TPoints[i].push( this.getTPoint(this.points [j].position, this.points [j+1].position ));
				else this.TPoints[i].push( this.getTPoint(this.TPoints[i-1][j], this.TPoints[i-1][j+1] ));
			}
		}
	}

	display () {
		this.displayAnchors();
		this.displayTPoints();
	}

	displayAnchors () {
		strokeWeight(5);
		const n = this.iterations;
		stroke([60, 100, 50, .4]);
		this.drawAnchorLine(0, 1);
		this.drawAnchorLine(n-1, n);
		stroke([60, 100, 50, .1]);
		for (let i = 1; i < n-1; i++) this.drawAnchorLine(i, i + 1);
	}

	displayTPoints () {
		strokeWeight(5);
		this.TPoints.forEach(points => {
			for (let i = 0; i < points.length - 1; i++) {
				const p1 = points[i];
				const p2 = points[i+1];
				strokeWeight(5);
				stroke([300, 100, 50, .1]);
				line(p1.x, p1.y, p2.x, p2.y);
				strokeWeight(10);
				stroke([300, 100, 50, .5]);
				point(p1.x, p1.y);
				point(p2.x, p2.y);
			}
		});
		const n = this.TPoints.length - 1;
		stroke([0, 100, 60, .3]);
		point(this.TPoints[n][0].x, this.TPoints[n][0].y);
	}

	/*drawCurve () {
		const n = 100;
		for (let t = 0; t < n; t++)
			for (let i = 0; i < points.length - 1; i++) {

			}
	}*/

	drawAnchorLine (index1, index2) {
		line( this.points[index1].position.x, this.points[index1].position.y, this.points[index2].position.x, this.points[index2].position.y );
	}

	getTPoint (point1, point2) {
		return point2.copy().sub(point1).mult(this.t).add(point1);
	}
}



class Point {
	constructor (position) {
		this.position = position;
		this.colorHue = 180;
		this.size = 40;
	}

	draw () {
		this.update();
		this.display();
	}

	update () {
		if (this.hover && mouseIsPressed) this.onClick();
	}

	display () {
		strokeWeight(this.size);
		if (this.hover) {
			stroke([this.colorHue, 100, 50, .4]);
		}
		else {
			stroke([this.colorHue, 100, 50, .15]);
			point(this.position.x, this.position.y);
			stroke([this.colorHue, 100, 50, .30]);
			strokeWeight(this.size * .3);
		}
		point(this.position.x, this.position.y);
	}

	onClick() {
		this.position = createVector(mouseX, mouseY);
	}

	get hover() {
		return dist(mouseX, mouseY, this.position.x, this.position.y) < this.size * .5;
	}
}