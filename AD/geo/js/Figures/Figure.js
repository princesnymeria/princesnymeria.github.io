class Figure {
	
	/* ┌──────────────────────────────┐
	   │          Constructor         │
	   └──────────────────────────────┘ */

	constructor(pX, pY) {

		this.name = "Figure";
		
		const c = pX > pY ? pX : pY;

		this.vars = {
			'radius': {
				v: 350,
				default: c * 0.35,
				min: c * 0.05,
				max: c * 0.75,
				integer: false
			}
		}

		this.posX = pX;
		this.posY = pY;
	}


	
	/* ┌──────────────────────────────┐
	   │       Getters & Setters      │
	   └──────────────────────────────┘ */

	getName() {
		return this.name;
	}

	getNumSliders() {
		return Object.keys(this.vars).length;
	}

	setValues(values) {
		const v = Object.keys(this.vars);
		for (let i = 0; i < values.length; i++) {
			const p = this.vars[v[i]];
			p.v = map(values[i], 0, 127, p.min, p.max);
			if (p.integer) p.v = parseInt(p.v);
			if (p.pair) p.v = parseInt(p.v * 0.5) * 2;
		}
	}

	getDefaultValue(i) {
		const v = Object.keys(this.vars);
		const e = this.vars[v[i]];
		return map(e.default, e.min, e.max, 0, 127);
	}



	/* ┌──────────────────────────────┐
	   │        Mètodes comuns        │
	   └──────────────────────────────┘ */

	update() { }

	display() {
		if (MODE_DEBUG) stroke('#00ffff88');
		angleMode(RADIANS);
		const r = this.vars['radius'].v
		ellipse(this.posX, this.posY, r, r);
	}

}