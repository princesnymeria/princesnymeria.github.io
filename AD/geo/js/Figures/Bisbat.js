class Bisbat extends Figure {

	constructor(pX, pY) {
		super(pX, pY);

		this.name = "Bisbat";

		const c = pX > pY ? pX : pY; 
		this.vars = { }
		this.vars['dim'] = {
			v: 0,
			default: c * 0.7,
			min: c * 0.1,
			max: c * 1.5,
			integer: false
		}
		this.vars['profunditatDeRecursivitat'] = {
			v: 0,
			default: 3,
			min: 1,
			max: 6,
			integer: true
		}
		this.vars['numCercles'] = {
			v: 0,
			default: 3,
			min: 1,
			max: 12,
			integer: true
		}
	}

	display() {
		const d = this.vars['dim'].v;
		const n = this.vars['numCercles'].v;
		if (MODE_DEBUG) stroke('#00ffff50');
		ellipse(this.posX, this.posY, d, d);
		if (MODE_DEBUG) stroke('#ff00ff50');
		this.rotatingCopies(this.posX, this.posY, d, d*0.465, n);
	}

	rotatingCopies(px, py, bigRadius, littleRadius, numCopies) {
		let g = -TAU/(numCopies + 1);
		angleMode(RADIANS);
		for (let i = 0; i < numCopies; i++) {
			let a = TAU / numCopies * i + g;
			let x = (bigRadius - littleRadius) * cos(a) * 0.5 + px;
			let y = (bigRadius - littleRadius) * sin(a) * 0.5 + py;
			ellipse(x, y, littleRadius, littleRadius);

			const d = this.vars['dim'].v;
			const p = this.vars['profunditatDeRecursivitat'].v;
			if ( littleRadius > d/p )
				this.rotatingCopies(x, y, littleRadius, littleRadius/2, 3);


		}
	}

}