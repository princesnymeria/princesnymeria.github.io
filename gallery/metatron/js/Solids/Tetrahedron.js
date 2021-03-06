class Tetrahedron extends Solid {

	constructor(p) {
		super(p);
		this.name = "Tetrahedron";
		this.color[0] = 0;
	}
	
	getPoints() {
		let res = {};
		res['center'] = {'x': this.posX, 'y':this.posY};
		for (let i = 0; i < 3; i++) {
			const a = TAU / 3 * i + PI/6;
			res[i] = {};
			res[i]['x'] = this.size * cos(a) * 0.4 + this.posX;
			res[i]['y'] = this.size * sin(a) * 0.4 + this.posY;
		}
		if (MODE_DEBUG) {stroke("#ffff00"); strokeWeight(10); Object.keys(res).forEach(p => {let P = res[p]; point(P['x'], P['y']);});}
		return res;
	}

	drawLines(points) {
		if (MODE_DEBUG) {stroke("#00ffff40"); strokeWeight(4);}
		for (let i = 0; i < 3; i++) {
			const p1 = points[i];
			const p2 = i == 2 ? points[0] : points[i+1];
			this.updateGradienColor(2);
			line(p1['x'], p1['y'], p2['x'], p2['y']);    
		}
		const p2 = points['center'];
		for (let i = 0; i < 3; i++) {
			const p1 = points[i];
			this.updateGradienColor(2);
			line(p1['x'], p1['y'], p2['x'], p2['y']);    
		}
	}

}