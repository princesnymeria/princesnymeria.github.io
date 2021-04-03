class Ex05 extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex05: FFT Scale Neighbors";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/05_fft_scaleNeighbors/";

		this.binCount = 1024;

		const smoothing = 0.6;
		this.fft = new p5.FFT(smoothing, this.binCount);
		this.fft.setInput(soundFile);
	}

	draw() {
		background(12);
		const spectrum = this.fft.analyze();
		const quarterSpectrum = spectrum.length * .5;

		beginShape();
		for (var i = 0; i < quarterSpectrum; i++) {
			const point = smoothPoint(spectrum, i, 8);
			var x = map(i, 0, quarterSpectrum, 0, width);
			var y = map(point, 0, 255, height, 0);
			curveVertex(x, y);
		}
		endShape();
	}

	setup() {
		background(12);
		stroke(248);
		noFill();
	}

}

function smoothPoint(spectrum, index, neighbors) {
	var val = 0;
	var smoothedPoints = 0;
	for (var i = (index-neighbors); i < (index+neighbors) && i < spectrum.length; i++)
		if (typeof(spectrum[i]) !== 'undefined') {
			val += spectrum[i];
			smoothedPoints++;
		}
	val = val/smoothedPoints;
	return val;
}
