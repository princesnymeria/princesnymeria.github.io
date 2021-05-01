class BezierController extends AlgorithmController {
	constructor () {
		super();
		this.data.shortName = 'Bezier';
		this.data.name = 'Bézier curve';
		this.data.infolink = 'https://en.wikipedia.org/wiki/B%C3%A9zier_curve';
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
		this.resetCurve();
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
		this.curve[this.t * 100] = this.TPoints[this.iterations -1][0];
	}

	display () {
		this.displayAnchors();
		this.displayTPoints();
		this.drawCurve();
	}

	displayAnchors () {
		const n = this.iterations;
		setColor(60, .4, STROKE, LINE);
		this.drawAnchorLine(0, 1);
		this.drawAnchorLine(n-1, n);
		setColor(60, .1, STROKE, LINE);
		for (let i = 1; i < n-1; i++) this.drawAnchorLine(i, i + 1);
	}

	displayTPoints () {
		strokeWeight(5);
		this.TPoints.forEach(points => {
			for (let i = 0; i < points.length - 1; i++) {
				const p1 = points[i];
				const p2 = points[i+1];
				setColor(300, .1, STROKE, LINE);
				line(p1.x, p1.y, p2.x, p2.y);
				setColor(300, .5, STROKE, POINT);
				point(p1.x, p1.y);
				point(p2.x, p2.y);
			}
		});
		const n = this.TPoints.length - 1;
		setColor(0, .5, STROKE, POINT);
		point(this.TPoints[n][0].x, this.TPoints[n][0].y);
	}

	drawAnchorLine (index1, index2) {
		line( this.points[index1].position.x, this.points[index1].position.y, this.points[index2].position.x, this.points[index2].position.y );
	}

	drawCurve () {
		setColor(0, .4, STROKE, LINE);
		beginShape();
		for (let i = 0; i < this.curve.length; i++)
			if (this.curve[i])
				vertex(this.curve[i].x, this.curve[i].y)
		endShape();
	}

	resetCurve () {
		this.curve = new Array(100);
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
		if (this.hover) {
			setColor(this.colorHue, .4, STROKE, POINT);
			strokeWeight(this.size);
		}
		else {
			setColor(this.colorHue, .15, STROKE, POINT);
			strokeWeight(this.size);
			point(this.position.x, this.position.y);
			setColor(this.colorHue, .3, STROKE, POINT);
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