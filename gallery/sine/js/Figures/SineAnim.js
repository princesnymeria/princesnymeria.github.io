class SineAnim {
	
	/* ┌──────────────────────────────┐
	   │          Constructor         │
	   └──────────────────────────────┘ */

	constructor() {
		this.name = "Sine";
		this.pos = createVector(width * .5, height * .5);

		this.radius = 0;
	}


	
	/* ┌──────────────────────────────┐
	   │       Getters & Setters      │
	   └──────────────────────────────┘ */

	getName() {
		return this.name;
	}

	input2parms(values) {
		this.radius = map(values['amplitude'], 0, 127, 50, 500);
	}



	/* ┌──────────────────────────────┐
	   │        Mètodes comuns        │
	   └──────────────────────────────┘ */

	update() { }

	display() {
		background(12);
		circle(this.pos.x, this.pos.y, this.radius);
	}

	loadStyle() {
		fill(248);
		background(12);
	}

}