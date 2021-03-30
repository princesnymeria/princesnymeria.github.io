class Ex03 extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex03: Time Domain Oscilloscope";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/03_time_domain_oscilloscope/";
	
		this.samples = [];
		this.numSamples = 1024;
		this.analyzer = new p5.FFT(0, this.numSamples);
		this.analyzer.setInput(soundFile);
	}

	draw() {
		background(12);
		const d = width / this.samples.length;
		translate(0, this.pos.y);
		this.samples = this.analyzer.waveform();
		beginShape();
		for (var i = 0; i < this.samples.length; i++) {
			var x = i * d;
			var y = this.samples[i] * height * .5;
			vertex(x, y);
		}
		endShape();
		if ( audioSource == AUDIO_SOURCE_OSC) this.updateOsc();
	}

	setup() {
		noFill();
		background(12);
		stroke(248);
		strokeWeight(4);
		colorMode(HSL);
	}

	updateOsc() {
		var freq = map(mouseX, 0, width, 1, 440);
		this.input.freq(freq, 0.01);
		var amp = map(mouseY, height, 0, 0, 1);
		this.input.amp(amp, 0.01);
	}
}
