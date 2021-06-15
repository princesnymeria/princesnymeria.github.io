class Snake extends Game {
	constructor () {
		super();
		this.info.title = 'The Snake Game';
		this.info.shortName = 'Snake';
	}

	setup () {
		const center = createVector(width * .5, height * .5);
		this.position = center.copy();
		this.character = new SnakeCharacter( center.copy() );
		const fieldSize = ( width > height ? width : height ) * .45;
		this.field = new SnakeField( center.copy(), fieldSize );
	}

	draw () {
		this.character.display();
		this.field.display();
		if ( !this.character.isColliding(this.field) )
			this.character.move();
	}
}

class SnakeCharacter {
	constructor (position) {
		this.position = position;
		this.direction = 1;
		this.speed = 2;
		this.size = 25;
	}

	move () {
		this.position.x += this.direction * this.speed;
	}

	isColliding (field) {
		var res = false;
		const s = this.size * .5;
		if      ( this.position.x - s <= field.minX ) res = true;
		else if ( this.position.x + s >= field.maxX ) res = true;
		else if ( this.position.y - s <= field.minY ) res = true;
		else if ( this.position.y + s >= field.maxY ) res = true;
		return res;
	}

	display () {
		setColor(50, .2, STROKE, POINT);
		strokeWeight(this.size);
		point(this.position.x, this.position.y);
	}

}

class SnakeField {
	constructor (position, size) {
		this.position = position;
		this.size = size;
	}

	get minX() {
		return this.position.x - this.size * .5;
	}
	get minY() {
		return this.position.y - this.size * .5;
	}
	get maxX() {
		return this.position.x + this.size * .5;
	}
	get maxY() {
		return this.position.y + this.size * .5;
	}

	display () {
		setColor(0, .2, STROKE, LINE);
		rect(this.minX, this.minY, this.size, this.size);
	}
}
