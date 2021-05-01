class VoronoiController extends AlgorithmController {
	constructor () {
		super();
		this.data.shortName = 'Voronoi';
		this.data.name = 'Voronoi Diagram';
		this.data.infolink = 'https://en.wikipedia.org/wiki/Voronoi_diagram';
		this.algorithm = new Voronoi( 2 );
	}
}



class Voronoi {
	constructor (count) {
		this.cells = [ ];
		this.t = .3;
		for (let i = 0; i < count; i++)
			this.cells.push( new VoronoiCell() );
	}

	setup () {
		this.inputT = addVarControllers('INPUT', 't');
	}

	draw () {
		this.t = this.inputT.value * .01;
		this.cells.forEach(p => {
			p.updateRadius(this.t);
			p.xxx(this.cells);
			p.display();
		});
	}
}



class VoronoiCell {
	constructor () {
		this.position = createVector(random(width*.5-width*.1, width*.5+width*.1), random(height*.5-height*.1,height*.5+height*.1)); /// this.position = createVector(random(0, width), random(0, height));
		this.dim = 1;
		this.potantialRadius = random(.1, .5) * width;
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

	xxx (others) {
		const touchingCells = [];
		others.forEach(other => {
			const d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
			const touching = d < ( this.dim + other.dim ) * .5 && d > 0;
			if (touching) touchingCells.push(other);
		});
		touchingCells.forEach(other => {
			const points = this.getIntersectionBetweenCircles(this.position, this.radius, other.position, other.radius);
			setColor(120, .4, STROKE, POINT);
			point(points[0].x, points[0].y); point(points[1].x, points[1].y);
		});
	}

	getIntersectionBetweenCircles ( pos1, radius1, pos2, radius2 ) {
		const intersections = [ createVector(0, 0), createVector(0, 0)];

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
