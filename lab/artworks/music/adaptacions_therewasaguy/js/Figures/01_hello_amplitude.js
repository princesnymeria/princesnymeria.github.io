class Ex01 extends Exercice {

	constructor(input) {
		super(input);
		this.name = "Ex01: Hello Amplitude";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01b_amplitude_time/";

		this.inpAmp = new p5.Amplitude();
		this.inpAmp.setInput(input);
		
		this.radius = 100;
		this.maxAmp = 1.0;
		this.posX = width * .5;

		this.posY = 0;
	}

	draw() {
		const amplitude = this.inpAmp.getLevel();
		this.posY = map(amplitude, 0, this.maxAmp, height, 0);
		background(12);
		circle(this.posX, this.posY, this.radius);
	}

	setup() {
		fill(248);
		noStroke(8);
		background(12);
	}

}
