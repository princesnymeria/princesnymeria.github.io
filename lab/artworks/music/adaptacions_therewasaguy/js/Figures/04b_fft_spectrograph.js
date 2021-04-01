class Ex04b extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex04b: FFT Spectrograph";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/04_fft_freq_spectrum/";

		this.binCount = 1024;
		this.speed = 4;

		const smoothing = 0.6;
		this.fft = new p5.FFT(smoothing, this.binCount);
		this.fft.setInput(soundFile);
	}

	draw() {
		const spectrum = this.fft.analyze();
		copy(canvas, 0, 0, width, height, -this.speed, 0, width, height);

		for (var i = 0; i < spectrum.length; i++) {
			const l = logScale(i, spectrum.length);
			var value = spectrum[l];
			fill(value, 255, value);
			var y = i / spectrum.length * height;
			rect(width - this.speed, height - y, this.speed, height / spectrum.length);
		}

	}

	setup() {
		background(12);
		noStroke();
		colorMode(HSB);
	}

}

// helper functions via
// https://github.com/borismus/spectrograph/blob/master/g-spectrograph.js
// MIT license

/**
 * Given an index and the total number of entries, return the
 * log-scaled value.
 */

function logScale(index, total, opt_base) {
	var base = opt_base || 2;
	var logmax = logBase(total + 1, base);
	var exp = logmax * index / total;
	return Math.round(Math.pow(base, exp) - 1);
}

function logBase(val, base) {
	return Math.log(val) / Math.log(base);
}