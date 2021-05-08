class VoronoiController extends AlgorithmController {
	constructor () {
		super();
		this.data.shortName = 'Voronoi';
		this.data.name = 'Voronoi Diagram';
		this.data.infolink = 'https://en.wikipedia.org/wiki/Voronoi_diagram';
		this.cols = 4;
		this.rows = 4;
		this.algorithm = new Voronoi( this.cols, this.rows );
		const that = this;
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
		setColor(300, .05, STROKE, LINE);
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



class Voronoi {
	constructor ( cols, rows ) {
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
	}

	setRadius (t) {
		this.t = t * .01;
	}

	setup () {}

	draw () {
		this.cells.forEach(p => {
			p.updateRadius(this.t);
			p.drawContactLines(this.cells);
			p.display();
		});
	}
}



class VoronoiCell {
	constructor (position) {
		this.position = position;
		this.dim = 1;
		this.potantialRadius = width * .5;//this.potantialRadius = random(.1, .5) * width;
	}

	get radius() {
		return this.dim * .5;
	}

	updateRadius (t) {
		this.dim = t * this.potantialRadius;
	}

	display () {
		setColor(180, .3, STROKE, POINT);
		point(this.position.x, this.position.y);
		setColor(60, .1, STROKE, LINE);
		circle(this.position.x, this.position.y, this.dim);
	}

	drawContactLines (others) {
		const contactLines = [];
		others.forEach(other => {
			const d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
			const touching = d < ( this.dim + other.dim ) * .5 && d > 0;
			if (touching) {
				const points = this.getIntersectionBetweenCircles(this.position, this.radius, other.position, other.radius);
				contactLines.push(points);
			}
		});
		contactLines.forEach(l => {
			setColor(120, .15, STROKE, POINT);
			point(l[0].x, l[0].y); point(l[1].x, l[1].y);
			setColor(120, .05, STROKE, LINE);
			line(l[0].x, l[0].y, l[1].x, l[1].y);
		});
	}

	getIntersectionBetweenCircles ( pos1, radius1, pos2, radius2 ) {
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
		return intersections
	}
}
