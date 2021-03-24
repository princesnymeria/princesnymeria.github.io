class Ex01c extends SineAnim {

	constructor() {
		super();
		this.name = "Ex01c: Amplitude Threshold";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01c_amplitude_threshold/";

		this.graphWidth = 40;
		this.graphBG = 127;
		this.graphFG = 248;
		this.maxAmp = 1.0;
		this.amplitudeThreshold = .1;

		this.graphHeight = 0;
	}

	setParmsFromAmplitude(amplitude) {
		this.amplitude = amplitude;
		this.graphHeight = map(amplitude, 0, this.maxAmp, height, 0);
	}

	draw() {
		this.drawGraph();
		if (this.amplitude > this.amplitudeThreshold) {
			const s = width * this.amplitude * .25;
			fill(random(0, 360), 60, 60);
			rect(random(0, width), random(0, height), s, s);
		}
	}

	drawGraph() {
		fill(this.graphBG);
		rect(0, 0, this.graphWidth, height);
		fill(this.graphFG);
		rect(0, this.graphHeight, this.graphWidth, height);
	}

	setup() {
		fill(248);
		noStroke();
		background(12);
		colorMode(HSL)
	}

}
