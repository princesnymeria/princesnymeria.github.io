class Ex01b extends Exercice {

	constructor(input) {
		super(input);
		this.name = "Ex01b: Amplitude Over Time";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01b_amplitude_time/";

		this.inpAmp = new p5.Amplitude();
		this.inpAmp.setInput(input);

		this.historial = [];
		this.colorHue = 0;
	}

	draw() {
		const amplitude = this.inpAmp.getLevel();
		this.historial.push( amplitude * 127 * height * .01 );
		background(12);
		translate(this.pos.x, this.pos.y);
		stroke(this.colorHue, 60, 60);
		for (let i = 0; i < this.historial.length; i++) {
			const l = this.historial[ this.historial.length - i ];
			const x  = i * width * .015;
			line(x, -l, x, l);
			line(-x, -l, -x, l);
		}
		this.colorHue = (this.colorHue + 1) % 360;
	}

	setup() {
		stroke(248);
		strokeWeight(8);
		background(12);
		colorMode(HSL);
	}

}