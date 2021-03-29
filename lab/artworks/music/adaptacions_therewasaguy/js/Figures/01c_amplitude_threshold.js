class Ex01c extends Exercice {

	constructor() {
		super();
		this.name = "Ex01c: Amplitude Threshold";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01c_amplitude_threshold/";

		this.graphWidth = 60;
		this.graphBG = 12;
		this.graphFG = 88;

		this.maxAmp = 1.0;
		this.thresholdMin = .1;
		this.decayRate = .85;
		
		this.threshold = this.thresholdMin;
		this.graphHeight = 0;
	}

	amplitude2paarms(amplitude) {
		this.amplitude = amplitude;
		this.graphHeight = map(amplitude, 0, this.maxAmp, height, 0);
	}

	draw() {
		this.drawGraph();
		if (this.amplitude > this.threshold) {
			const s = width * this.amplitude * .25;
			fill(random(0, 360), 60, 60);
			rect(random(this.graphWidth, width), random(0, height), s, s);
			this.threshold = this.amplitude;
		}
		if (this.threshold > this.thresholdMin) this.threshold *= this.decayRate;
	}

	drawGraph() {
		const t = map(this.threshold, 0, this.maxAmp, height, 0);
		fill(0, 0, this.graphBG);
		rect(0, 0, this.graphWidth, height);
		fill(0, 0, this.graphFG);
		rect(0, this.graphHeight, this.graphWidth, height);
		stroke(120, 100, 70);
		line(0, t, this.graphWidth, t);
		noStroke();
	}

	setup() {
		fill(248);
		noStroke();
		background(12);
		colorMode(HSL);
		strokeWeight(2);
	}

}
