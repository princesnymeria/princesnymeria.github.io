class Ex02 extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex02: Draw Peaks and Playhead";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/02_draw_peaks_and_playhead/";

		this.waveform = [ ];
		this.maxPeaks  = 150;
		this.numPeaks  = 75 ;
	}

	draw() {
		this.waveform = this.input.getPeaks(this.numPeaks);
		console.log(this.waveform)
		this.numPeaks = floor( map(mouseX, 0, width, 1, this.maxPeaks) );
		background(12);
		const d = width / this.numPeaks;
		translate(0, this.pos.y);
		for (let i = 0; i < this.waveform.length; i++) {
			const h = this.waveform[i] * 100;
			const x  = i * d;
			line(x, 0, x, -h);
		}
	}

	setup() {
		background(12);
		stroke(248);
		strokeWeight(4);
		colorMode(HSL);
	}

}
