class Exercice {
	
	/* ┌──────────────────────────────┐
	   │          Constructor         │
	   └──────────────────────────────┘ */

	constructor() {
		this.name = "Sine";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01_hello_amplitude/";

		this.pos = createVector(width * .5, height * .5);
		this.radius = 0;
	}


	
	/* ┌──────────────────────────────┐
	   │       Getters & Setters      │
	   └──────────────────────────────┘ */

	getName() {
		return this.name;
	}

	setParmsFromAmplitude(amplitude) {
		this.radius = map(amplitude, 0, 1, 50, 500);
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