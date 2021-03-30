class Ex01c extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex01c: Amplitude Threshold";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01c_amplitude_threshold/";

		this.inpAmp = new p5.Amplitude();
		this.inpAmp.setInput(input);
		this.inpAmp.smooth(0.9);

		this.graphWidth = 60;
		this.graphBG = 12;
		this.graphFG = 88;

		this.maxAmp = 1.0;
		this.thresholdMin = .1;
		this.decayRate = .85;
		
		this.threshold = this.thresholdMin;
		this.graphHeight = 0;
	}

	draw() {
		this.drawGraph();
		const amplitude = this.inpAmp.getLevel();
		this.graphHeight = map(amplitude, 0, this.maxAmp, height, 0);
		if (amplitude > this.threshold) {
			const s = width * amplitude * .25;
			fill(random(0, 360), 60, 60);
			rect(random(this.graphWidth, width), random(0, height), s, s);
			this.threshold = amplitude;
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
