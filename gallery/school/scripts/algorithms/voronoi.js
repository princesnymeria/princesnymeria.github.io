class VoronoiController extends AlgorithmController {
	constructor () {
		super();
		this.info.visible = false;
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
		const newIntersections = [];
		others.forEach(other => {
			if (this.isTouching(other)) {
				const points = getIntersectionBetweenCircles(this.position, this.radius, other.position, other.radius);
				newIntersections.push(points);
			}
		});
		this.intersections = newIntersections;
	}

	bbb () {
		beginShape();
		this.intersections.forEach(p => {
			vertex(p[0].x, p[0].y);
			vertex(p[1].x, p[1].y);
		});
		endShape(CLOSE);
	}

	isTouching (other) {
		const d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
		var res = d < ( this.dim + other.dim ) * .5 && d > 0;
		var ddd = [];
		if (res && this.intersections.length > 0) {
			this.intersections.forEach(intersection => {
				if ( intersectionPt(
					this.position.x,
					other.position.x,
					intersection[0].x,
					intersection[1].x,
					this.position.y,
					other.position.y,
					intersection[0].y,
					intersection[1].y
				) ) {
					ddd.push(Math.round(intersection[0].x));
					//console.log(' * 1: ', Math.round(intersection[0].x));
				}
			});
			other.intersections.forEach(intersection => {
				if ( intersectionPt(
					this.position.x,
					other.position.x,
					intersection[0].x,
					intersection[1].x,
					this.position.y,
					other.position.y,
					intersection[0].y,
					intersection[1].y
				) ) if ( !ddd.includes(Math.round(intersection[0].x)) && !ddd.includes(Math.round(intersection[1].x)) ) res = false;
				//console.log(' * 2: ', Math.round(intersection[0].x), Math.round(intersection[1].x));
			});
		}
		//console.log('--------------------');
		return res;
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








//Code heavily taken from Example Code and Explanations by Paul Bourke at http://paulbourke.net/geometry/pointlineplane/
//
//Function to test for intersections between line segments:
function intersectionPt(x1,x2,x3,x4,y1,y2,y3,y4){
  
	var uA,uB;
  var den,numA,numB;
  var intx, inty;

  den  = (y4-y3) * (x2-x1) - (x4-x3) * (y2-y1);
  numA = (x4-x3) * (y1-y3) - (y4-y3) * (x1-x3);
  numB = (x2-x1) * (y1-y3) - (y2-y1) * (x1-x3);
  
  //Coincident? - If true, displays intersection in center of line segment
   if (abs(numA) == 0 && abs(numB) == 0 && abs(den) == 0) {
      intx = (x1 + x2) / 2;
      inty = (y1 + y2) / 2;
      return(true);
   }

   //Parallel? - No intersection
   if (abs(den) == 0) {
      intx = 0;
      inty = 0;
      return(false);
   }

   //Intersection?
   uA = numA / den;
   uB = numB / den;
  
   //If both lie w/in the range of 0 to 1 then the intersection point is within both line segments.
   if (uA < 0 || uA > 1 || uB < 0 || uB > 1) {
      intx = 0;
      inty = 0;
      return(false);
   }
   intx = x1 + uA * (x2 - x1);
   inty = y1 + uA * (y2 - y1);
   return(true);
}