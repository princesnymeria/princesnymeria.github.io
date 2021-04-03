class Ex05a extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex05a: FFT Particle System";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/05a_fft_particle_system";

		const binCount = 1024;
		const smoothing = 0.8;

		this.fft = new p5.FFT(smoothing, binCount);
		this.fft.setInput(soundFile);

		this.particles =  new Array(binCount);
		for (var i = 0; i < binCount; i++) {
			const pX = map(i, 0, binCount, 0, width * 2);
			this.particles[i] = new Particle1(pX);
		}
	}

	draw() {
		background(12);
		const n = this.particles.length;
		const spectrum = this.fft.analyze(n);
		for (var i = 0; i < n; i++) {
			const p = this.particles[i];
			var thisLevel = map(spectrum[i], 0, 255, 0, 1);
			p.update( thisLevel );
			p.display();
		}
	}

	setup() {
		background(12);
		stroke(0,100);
		noFill();
		colorMode(HSB);
	}

}

class Particle1 {

	constructor(posX) {
		this.pos = createVector(posX, random(0, height) );
		this.scale = random(0, 1);
		this.speed = createVector(0, random(0, 10) );
		this.colorHue = random(0, 360);
		this.colorSat = 60;
		this.colorBri = 60;
	}

	update(someLevel) {
		this.pos.y += this.speed.y / (someLevel * 2);
		if (this.pos.y > height) this.pos.y = 0;
		this.diameter = map(someLevel, 0, 1, 0, 100) * this.scale;
	}

	display() {
		fill(this.colorHue, this.colorSat, this.colorBri);
		circle(this.pos.x, this.pos.y, this.diameter);
	}

}
