var bezier;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(24);
	colorMode(HSL);

	bezier = new Bezier([
		new Point( createVector(width * .35, height *  .6), 240 ),
		new Point( createVector(width *  .4, height *  .4), 200 ),
		new Point( createVector(width * .65, height *  .5), 200 ),
		new Point( createVector(width * .65, height * .65), 240 )
	]);
}

function draw() {
	clearCanvas();
	bezier.draw();
}

function clearCanvas() {
	background(8);
}


class Bezier {
	constructor (points) {
		this.points = points;
		this.t = .3;
		this.loadSliders();
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
	}

	display () {
		this.displayAnchors();
		this.displayTPoints();
	}

	displayAnchors () {
		stroke([60, 100, 50, .1]);
		strokeWeight(5);
		this.drawAnchorLine(1, 2);
		stroke([60, 100, 50, .3]);
		this.drawAnchorLine(0, 1);
		this.drawAnchorLine(2, 3);
	}

	displayTPoints () {
		strokeWeight(12);
		stroke([300, 100, 50, .4]);
		this.displayTPoint(0, 1);
		this.displayTPoint(1, 2);
		this.displayTPoint(2, 3);
	}

	drawAnchorLine (index1, index2) {
		line( this.points[index1].position.x, this.points[index1].position.y, this.points[index2].position.x, this.points[index2].position.y );
	}

	displayTPoint (index1, index2) {
		const p1 = this.points[index2].position.copy().sub(this.points[index1].position).mult(this.t).add(this.points[index1].position);
		point(p1.x, p1.y);
	}

	loadSliders () {
		this.inputT = document.createElement('INPUT');
		this.inputT.type = 'range';
		this.inputT.min = 0;
		this.inputT.max = 100;
		this.inputT.value = this.t * 100;
		document.getElementById('controllers').appendChild(this.inputT);
	}
}

class Point {
	constructor (position, colorHue) {
		this.position = position;
		this.colorHue = colorHue;
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
			stroke([this.colorHue, 100, 50, .30]);
		}
		else {
			stroke([this.colorHue, 100, 50, .15]);
			point(this.position.x, this.position.y);
			stroke([this.colorHue, 100, 50, .30]);
			strokeWeight(this.size * .25);
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