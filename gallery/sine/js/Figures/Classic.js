class Classic extends SineAnim {

	constructor() {
		super();
		this.name = "Classic";
		this.historial = [];
		this.colorHue = 0;
	}

	input2parms(values) {
		this.historial.push( values['amplitude'] * height * .01 );
	}

	display() {
		background(12);
		translate(this.pos.x, this.pos.y);
		stroke(this.colorHue, 60, 60);
		for (let i = 0; i < this.historial.length; i++) {
			const l = this.historial[ this.historial.length - i ];
			const x  = i * width * .015;
			line(x, -l, x, l);
			line(-x, -l, -x, l);
		}
		this.colorHue = (this.colorHue + 1) % 360;
	}

	loadStyle() {
		stroke(248);
		strokeWeight(8);
		background(12);
		colorMode(HSL);
	}

}