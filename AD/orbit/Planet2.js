class Planet {
	constructor (controllerContainer, orbitRadius, speed, color) {
		this.orbitCenter = createVector(0, 0);
		this.orbitRadius = orbitRadius;
		this.speed = speed;
		this.fase = 0;
		this.color = color;
		this.moons = [];
		this.loadControlers(controllerContainer, speed*254, this.updateSpeed);
		this.loadControlers(controllerContainer, orbitRadius*0.127, this.updateRadius);
	}

	setOrbitCenter (pos) { this.orbitCenter = pos; }
	setFase (f) { this.fase = f; }

	updateSpeed (ev) {
		const v = ev.target.value;
		const that = ev.target.master;
		that.speed = map( v, 0, 127, 0, .5 );
	}

	addMoon (planet) {
		this.moons.push(planet);
	}

	updateRadius (ev) {
		const v = ev.target.value;
		const that = ev.target.master;
		that.orbitRadius = map( v, 0, 127, 0, 1000 );
	}

	loadControlers (container, initValue, callback) {
		const inp = document.createElement('INPUT');
		inp.type = 'range';
		inp.min = 0;
		inp.max = 127;
		inp.step = 1;
		inp.value = initValue;
		inp.master = this;
		inp.addEventListener('change', callback);
		container.appendChild(inp);
	}

	position () {
		const x = this.orbitCenter.x + cos( this.fase ) * this.orbitRadius * 0.5;
		const y = this.orbitCenter.y + sin( this.fase ) * this.orbitRadius * 0.5;
		return createVector(x, y);
	}

	update () {
		this.fase += this.speed;
		if (this.fase >= TAU) this.fase = 0;
	}

	displayHelper () {
		const p = this.position();
		strokeWeight(30); stroke( this.color + '20' );
		point(this.orbitCenter.x, this.orbitCenter.y);
		stroke( this.color + '60' );
		point(p.x, p.y);
		strokeWeight(4); stroke( this.color + '80' );
		circle(this.orbitCenter.x, this.orbitCenter.y, this.orbitRadius);
	}

}