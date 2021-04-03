class Ex05a2 extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex05a 2: FFT particle_system_color";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/05a_fft_particle_system_color";

		const binCount = 128;
		const smoothing = 0.6;

		this.volume = 0.01;
		this.amplitude;

		this.fft = new p5.FFT(smoothing, binCount);
		this.fft.setInput(soundFile);
		this.amplitude = new p5.Amplitude();

		this.particles =  new Array(binCount);
		for (var i = 0; i < binCount; i++) {
			const pX = map(i, 0, binCount, 0, width * 2);
			this.particles[i] = new Particle2(pX);
		}
	}

	draw() {
		const n = this.particles.length;
		const spectrum = this.fft.analyze(n);

		var hue = map(this.volume, 0, 0.5, 176, 288);
		var sat = map(this.volume, 0, 0.5, 80, 100);
		var bri = map(this.volume, 0, 0.5, 80, 100);
		var alp = map(windowHeight, 0, 0.5, 60, 100);
		background(hue, sat, bri, alp);

		for (var i = 0; i < n; i++) {
			this.particles[i].update( spectrum[i], this.volume );
			this.particles[i].display();
		}
	}

	setup() {
		background(12);
		noFill();
		noStroke();
		colorMode(HSB, 360, 100, 100, 100);
	}

}

class Particle2 {

	constructor(posX) {
		this.pos = createVector(posX, random(0, height) );
		this.scale = random(0, 1);
		this.speed = createVector(0, random(0, 10) );
		this.color = [0, 0, 0, 0];
	}

	update(someLevel, volume) {
		this.pos.y += this.speed.y / (someLevel * 2);
		if (this.pos.y > height) this.pos.y = 0;
		this.diameter = map(someLevel, 0, 1, 0, 100) * this.scale;

		this.color[0] = map(someLevel, 0, 255, 0, 360);	//hue
		this.color[1] = 90;								//sat
		this.color[2] = map(volume, 0, 0.5, 60, 100);	//bri
		this.color[3] = map(volume, 0, 0.5, 60, 100);	//alp
	}

	display() {
		fill(this.color);
		circle(this.pos.x, this.pos.y, this.diameter);
	}

}
