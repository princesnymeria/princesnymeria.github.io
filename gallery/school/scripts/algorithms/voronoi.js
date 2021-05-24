class VoronoiController extends AlgorithmController {
	constructor () {
		super();
		this.info.shortName = 'Voronoi';
		this.info.name = 'Voronoi Diagram';
		this.info.infolink = 'https://en.wikipedia.org/wiki/Voronoi_diagram';
		this.cols = 4;
		this.rows = 4;
		this.algorithm = new Voronoi( this.cols, this.rows );
		const that = this;
		/*this.steps = [
			{
				title: '...',
				explanation: '...',
				displayFunction: function() { that.algorithm.draw() }
			}
		];*/
		this.inputs = [
			{
				minStep: 0,
				type: 'range',
				label: 'Radius',
				initValue: 30,
				callback: function(ev) { that.algorithm.setRadius(ev.target.value) },
				min: 0,
				max: 100
			}
		];
	}

	draw () {
		this.drawGird();
		this.algorithm.draw();
	}

	drawGird () {
		setColor(315, .05, STROKE, LINE);
		const colWidth = width / this.cols;
		var x = 0;
		for (var c = 0; c < this.cols; c++) {
			line(x, 0, x, height);
			x += colWidth;
		}
		const rowHeight = height / this.rows;
		var y = 0;
		for (var c = 0; c < this.cols; c++) {
			line(0, y, width, y);
			y += rowHeight;
		}
	}
}



class Voronoi extends Algorithm {
	constructor ( cols, rows ) {
		super();
		this.cells = [ ];
		this.t = .3;
		const colWidth = width/cols;
		const rowHeight = height/rows;
		for (let c = 0; c < cols; c++)
			for (let r = 0; r < rows; r++) {
				const x = (random(0, 1) + c) * colWidth;
				const y = (random(0, 1) + r) * rowHeight;
				this.cells.push( new VoronoiCell( createVector( x, y ) ) );
			}
		//this.nodes = [];
	}

	/*setup(){
		angleMode(RADIANS);
	}*/

	setRadius (t) {
		this.t = t * .01;
	}

	draw () {
		this.cells.forEach(p => {
			p.updateRadius(this.t);
			p.aaa( this.cells );
			p.display();
		});
	}
}



class VoronoiCell {
	constructor (position) {
		this.position = position;
		this.dim = 1;
		this.potantialRadius = width * .5;//this.potantialRadius = random(.1, .5) * width;
		this.intersections = [];
	}

	get radius() {
		return this.dim * .5;
	}

	updateRadius (t) {
		this.dim = t * this.potantialRadius;
	}

	display () {
		setColor(45, .30, STROKE, POINT);
		point(this.position.x, this.position.y);
		setColor(45, .10, STROKE, LINE);
		circle(this.position.x, this.position.y, this.dim);
		setColor(180, .40, STROKE, LINE);
		this.bbb();
	}

	aaa (others) {
		this.intersections = [];
		others.forEach(other => {
			const d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
			const touching = d < ( this.dim + other.dim ) * .5 && d > 0;
			if (touching) {
				const points = getIntersectionBetweenCircles(this.position, this.radius, other.position, other.radius);
				this.intersections.push(points);
			}
		});
	}

	bbb () {
		const n = 20;
		beginShape();
		/*for (var i = 0; i < n; i++) {
			const a = TAU / n * i;
			const x = this.position.x + cos(a) * this.dim * .5;
			const y = this.position.y + sin(a) * this.dim * .5;
			vertex(x, y);
		}*/
		this.intersections.forEach(p => {
			vertex(p[0].x, p[0].y);
			vertex(p[1].x, p[1].y);
		});
		endShape(CLOSE);
	}
}



function getIntersectionBetweenCircles ( pos1, radius1, pos2, radius2 ) {
	const intersections = [ createVector(-10, -10), createVector(-10, -10)];

	const dx = pos2.x - pos1.x;
	const dy = pos2.y - pos1.y;
	const d2 = dx * dx + dy * dy;
	const di = sqrt(d2);
	const r2 = radius1 * radius1;
	const R2 = radius2 * radius2;
	
	if (di < radius1 + radius2 && di > abs(radius1 - radius2)) {
		const K = r2 - R2 + d2;
		const K2 = K * K;
		const h = sqrt(4 * r2 * d2 - K2);
		const c = 1 / (2 * d2);
		intersections[0].x = pos1.x + (dx * K + dy * h) * c;
		intersections[1].x = pos1.x + (dx * K - dy * h) * c;
		intersections[0].y = pos1.y + (dy * K - dx * h) * c;
		intersections[1].y = pos1.y + (dy * K + dx * h) * c;
	}
	return intersections;
}

/*function getIntersectionBetweenLines (p1, p2, p3, p4) {
	const ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));
	// const ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));

	const x = p1.x + ua * (p2.x - p1.x);
	const y = p1.y + ua * (p2.y - p1.y);
	
	return createVector(x, y);
}*/