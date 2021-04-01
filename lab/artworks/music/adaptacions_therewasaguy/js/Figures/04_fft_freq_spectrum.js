class Ex04 extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex04: FFT freq spectrum";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/04_fft_freq_spectrum/";

		this.binCount = 1024;

		const smoothing = 0.6;
		this.fft = new p5.FFT(smoothing, this.binCount);
		this.fft.setInput(soundFile);
	}

	draw() {
		background(12);
		const spectrum = this.fft.analyze();
		var colorR = 0;
		const COLOR_R_INCR = 255/this.binCount;
		for (var i = 0; i < this.binCount; i++) {
			fill(colorR, 255, 255);
			this.drawBin(i, spectrum[i]);
			colorR += COLOR_R_INCR;
		}
	}

	drawBin(index, value) {
		const x = map(Math.log(index+2), 0, Math.log(this.binCount), 0, width - 200);
		const prev = map(Math.log(index+1), 0, Math.log(this.binCount), 0, width - 200);
		const h = map(value, 0, 255, 10, height);
		const w = prev-x;
		rect(x, height, w, -h);
	}

	setup() {
		background(12);
		noStroke();
		colorMode(HSB);
	}

}
