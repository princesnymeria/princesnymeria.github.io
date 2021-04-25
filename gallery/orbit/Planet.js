class Planet {
	constructor (controllerContainer, orbitRadius, speed, colorHue) {
		this.orbitCenter = createVector(0, 0);
		this.orbitRadius = orbitRadius;
		this.speed = speed;
		this.fase = 0;
		this.color = [ colorHue, 80, 70, .025 ];
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

	get position () {
		const x = this.orbitCenter.x + cos( this.fase ) * this.orbitRadius * 0.5;
		const y = this.orbitCenter.y + sin( this.fase ) * this.orbitRadius * 0.5;
		return createVector(x, y);
	}

	get isLast () {
		return this.satellites.length == 0;
	}

	update () {
		this.fase += this.speed;
		if (this.fase >= TAU) this.fase = 0;
		const p = this.position;
		this.satellites.forEach(satellite => {
			satellite.setOrbitCenter(p);
			satellite.update();
		});
	}

	display () {
		if (this.isLast) {
			stroke(this.color);
			const p1 = this.position;
			const p2 = this.orbitCenter;
			line(p1.x, p1.y, p2.x, p2.y);
		}
		this.satellites.forEach(satellite => {
			satellite.display();
		});
	}

	displayHelper () {
		const p = this.position;
		const c = color(this.color);
		c.setAlpha( 0.2 ); strokeWeight(30); stroke( c );
		point(this.orbitCenter.x, this.orbitCenter.y);
		c.setAlpha( 0.25 ); stroke( c );
		point(p.x, p.y);
		c.setAlpha( 0.4 ); strokeWeight(4); stroke( c );
		circle(this.orbitCenter.x, this.orbitCenter.y, this.orbitRadius);
		this.satellites.forEach(satellite => {
			satellite.displayHelper();
		});
	}

}