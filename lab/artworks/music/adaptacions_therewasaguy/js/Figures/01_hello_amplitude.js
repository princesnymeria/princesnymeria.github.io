class Ex01 extends SineAnim {

	constructor() {
		super();
		this.name = "Ex01: Hello Amplitude";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01b_amplitude_time/";
		
		this.radius = 100;
		this.maxAmp = 1.0;
		this.posX = width * .5;

		this.posY = 0;
	}

	setParmsFromAmplitude(amplitude) {
		this.posY = map(amplitude, 0, this.maxAmp, height, 0);
	}

	draw() {
		background(12);
		circle(this.posX, this.posY, this.radius);
	}

	setup() {
		fill(248);
		noStroke(8);
		background(12);
	}

}
