class Croissant extends Walker {

	constructor() {
		super();

		this.name = "Croissant";

		this.color = [0, 80, 70];
		this.size = 100;
		this.reset();

		//..
	}

	update() {
		this.color[0] = (this.color[0] + 1) % 360;
	}

	reset() {
		this.color[0] = random(0, 255);
		fill(this.color[0], this.color[1], this.color[2]);
		stroke(255);
		strokeWeight(1);
	}

	display() {
		this.drawCircle(this.posX, this.posY, this.size);
	}

	drawCircle(posX, posY, size, saturation) {
		circle(posX, posY, size);
		const x = posX + random(-10, 10);
		const y = posY + random(-10, 10);
		const s = size + random(-5, 0);
		const sat = saturation - 20;
		fill(this.color[0], sat, this.color[2]);
		if (size > 10) 
			this.drawCircle(x, y, s, sat);
	}
}