class Exercice {
	
	/* ┌──────────────────────────────┐
	   │          Constructor         │
	   └──────────────────────────────┘ */

	constructor(input) {
		this.name = "Sine";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01_hello_amplitude/";

		this.input = input;

		this.pos = createVector(width * .5, height * .5);
		this.radius = 0;
	}


	
	/* ┌──────────────────────────────┐
	   │       Getters & Setters      │
	   └──────────────────────────────┘ */

	getName() {
		return this.name;
	}



	/* ┌──────────────────────────────┐
	   │        Mètodes comuns        │
	   └──────────────────────────────┘ */

	draw() {
		const amplitude = this.inpAmp.getLevel();
		this.radius = map(amplitude, 0, 1, 50, 500);
		background(12);
		circle(this.pos.x, this.pos.y, this.radius);
	}

	setup() {
		fill(248);
		background(12);
	}

}