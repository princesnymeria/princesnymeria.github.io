class BezierController extends AlgorithmController {
	constructor () {
		super();
		this.info.shortName = 'Bezier';
		this.info.name = 'Bézier curve';
		this.info.infolink = 'https://en.wikipedia.org/wiki/B%C3%A9zier_curve';
		this.algorithm = new Bezier([
			new Point( createVector(width * .20, height * .80) ),
			new Point( createVector(width * .30, height * .25) ),
			new Point( createVector(width * .80, height * .40) ),
			new Point( createVector(width * .65, height * .70) )
		]);
		const that = this;
		this.steps = [
			{
				title: 'Points',
				explanation: 'Draw four points where you want',
				displayFunction: function() { that.algorithm.displayPoints() }
			},
			{
				title: 'Anchors',
				explanation: 'Draw the anchors',
				displayFunction: function() { that.algorithm.displayAnchors(); }
			},
			{
				title: 'Compute T',
				explanation: '',
				displayFunction: function() { that.algorithm.displayTPoints(0); }
			},
			{
				title: 'Join T points',
				explanation: '',
				displayFunction: function() { that.algorithm.displayTPointsLines(0); }
			},
			{
				title: 'Repeat the points',
				explanation: '',
				displayFunction: function() { that.algorithm.displayTPoints(1); that.algorithm.displayTPointsLines(1); }
			},
			{
				title: 'And Repeat',
				explanation: '',
				displayFunction: function() { that.algorithm.displayFinalTPoint(); }
			},
			{
				title: 'Draw the curve',
				explanation: '',
				displayFunction: function() { that.algorithm.displayCurve(); }
			}
		];
		this.inputs = [
			{
				type: 'range',
				minStep: 2,
				label: 'T',
				initValue: 30,
				callback: function(ev) { that.algorithm.setT(ev.target.value) },
				min: 0,
				max: 100
			}
		];
	}
	//draw () { this.algorithm.draw(); }
}





class Bezier extends Algorithm {
	constructor (points) {
		super();
		this.points = points;
		this.resetCurve();
		this.TPoints = [ ];
		this.t = .3;
	}

	draw () {
		this.update();
		this.display();
	}

	update () {
		this.updateTPoints();
		this.updateDrawedCurve();
	}

	display () {
		this.displayAnchors();
		for (let i = 0; i < this.TPoints.length; i++)
			this.displayTPoints(i);
		this.displayCurve();
		this.displayPoints();
	}

	get iterations () {
		return this.points.length - 1;
	}

	setT(t) {
		this.t = t * .01;
	}

	updateTPoints () {
		for (let i = 0; i <= this.iterations - 1; i++) {
			this.TPoints[i] = [];
			for (let j = 0; j < this.iterations-i; j++) {
				var point = null;
				if (i == 0)
					point =  this.comuteTPoint(this.points[j].position, this.points[j+1].position );
				else
					point = this.comuteTPoint(this.TPoints[i-1][j], this.TPoints[i-1][j+1] );
				this.TPoints[i].push( point );
			}
		}
	}

	updateDrawedCurve () {
		this.curve[this.t * 100] = this.TPoints[this.iterations-1][0];
	}

	displayPoints () {
		this.points.forEach(point => {
			point.update();
			point.display();
		});
	}

	displayAnchors () {
		const n = this.iterations;
		setColor(45, .4, STROKE, LINE);
		this.drawAnchorLine(0, 1);
		this.drawAnchorLine(n-1, n);
		setColor(45, .1, STROKE, LINE);
		for (let i = 1; i < n-1; i++) this.drawAnchorLine(i, i + 1);
	}

	displayTPoints (iteration) {
		const points = this.TPoints[iteration];
		setColor(315, .5, STROKE, POINT);
		for (let i = 0; i < points.length - 1; i++) {
			const p1 = points[i];
			const p2 = points[i+1];
			point(p1.x, p1.y);
			point(p2.x, p2.y);
		}
	}

	displayTPointsLines (iteration) {
		const points = this.TPoints[iteration];
		setColor(315, .1, STROKE, LINE);
		for (let i = 0; i < points.length - 1; i++) {
			const p1 = points[i];
			const p2 = points[i+1];
			line(p1.x, p1.y, p2.x, p2.y);
		}
	}

	displayFinalTPoint () {
		const n = this.TPoints.length - 1;
		setColor(0, .5, STROKE, POINT);
		point(this.TPoints[n][0].x, this.TPoints[n][0].y);
	}

	displayCurve () {
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

	drawAnchorLine (index1, index2) {
		line( this.points[index1].position.x, this.points[index1].position.y, this.points[index2].position.x, this.points[index2].position.y );
	}

	comuteTPoint (point1, point2) {
		return point2.copy().sub(point1).mult(this.t).add(point1);
	}
}





class Point {
	constructor (position) {
		this.position = position;
		this.colorHueOct = 180;
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
			setColor(this.colorHueOct, .4, STROKE, POINT);
			strokeWeight(this.size);
		}
		else {
			setColor(this.colorHueOct, .15, STROKE, POINT);
			strokeWeight(this.size);
			point(this.position.x, this.position.y);
			setColor(this.colorHueOct, .3, STROKE, POINT);
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
