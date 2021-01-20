class Planet {
	constructor (controllerContainer, orbitRadius, speed, colorHue) {
		this.orbitCenter = createVector(0, 0);
		this.orbitRadius = orbitRadius;
		this.speed = speed;
		this.fase = 0;
		this.color = { 'H':colorHue, 'S':80 , 'L': 70, 'a': .025 };
		this.satellites = [];
		if ( controllerContainer !== null ) {
			this.loadControlers(controllerContainer, speed*254, this.updateSpeed);
			this.loadControlers(controllerContainer, orbitRadius*0.127, this.updateRadius);
		}
	}

	addSatellite (planet) {
		this.satellites.push(planet);
	}

	setOrbitCenter (pos) { this.orbitCenter = pos; }
	setFase (f) { this.fase = f; }

	updateSpeed (ev) {
		const v = ev.target.value;
		const that = ev.target.master;
		that.speed = map( v, 0, 127, 0, .5 );
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

	getColor () {
		const c = color(this.color['H'], this.color['S'], this.color['L']);
		c.setAlpha( this.color['a'] );
		return c;
	}

	getPosition () {
		const x = this.orbitCenter.x + cos( this.fase ) * this.orbitRadius * 0.5;
		const y = this.orbitCenter.y + sin( this.fase ) * this.orbitRadius * 0.5;
		return createVector(x, y);
	}

	update () {
		this.fase += this.speed;
		if (this.fase >= TAU) this.fase = 0;
		const p = this.getPosition();
		this.satellites.forEach(satellite => {
			satellite.setOrbitCenter(p);
			satellite.update();
		});
	}

	displayHelper () {
		const p = this.getPosition();
		const c = color(this.color['H'], this.color['S'], this.color['L']);
		c.setAlpha( 0.2 ); strokeWeight(30); stroke( c );
		point(this.orbitCenter.x, this.orbitCenter.y);
		c.setAlpha( 0.25 ); stroke( c );
		point(p.x, p.y);
		c.setAlpha( 0.4 ); strokeWeight(4); stroke( c );
		circle(this.orbitCenter.x, this.orbitCenter.y, this.orbitRadius);
		this.satellites.forEach(satellite => {
			satellite.displayHelper(p);
		});
	}

}