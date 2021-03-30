class Ex01d extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex01c: Simple Beat Detection";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/01d_beat_detect_amplitude/";

		this.inpAmp = new p5.Amplitude();
		this.inpAmp.setInput(input);
		this.inpAmp.smooth(.9);

		this.threshold = 0;
		this.decayRate = .85;
		this.holdFrames = 30;

		this.size = 200;
		this.posX = width * .15;

		this.frames = 0;
		this.backgroundColorHue = 0;
	}

	draw() {
		const amplitude = this.inpAmp.getLevel();
		background(this.backgroundColorHue, 60, 60);
		//if (amplitude > this.threshold) {
			this.threshold = amplitude;
			this.display(amplitude);
			if (this.frames > this.holdFrames) {
				this.backgroundColorHue = random(0, 360);
				this.frames = 0;
				this.posX *= -1;
			}
		//}
		this.frames++;
		this.threshold *= this.decayRate;
	}

	setup() {
		fill(248);
		noStroke();
		colorMode(HSL);
	}

	display(a) {
		translate(width * .5, height * .5); 
		const s = a * this.size * 5;
		circle(this.posX, 0, this.size + s);//rect(0, 0, 100, 20);//
	}

}
