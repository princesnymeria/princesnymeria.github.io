class SnakeGame extends Game {
	constructor () {
		super();
		this.info.title = 'The Snake Game';
		this.info.shortName = 'Snake';
		this.gameController = new SnakeGameController();
		/*this.inputs = [
			{ label: 'up', callback: function(){} }
		];*/
		this.outputs = [
			{
				label: 'Points',
				id: 'aaaaa',
				/*updater: function() {
					document.
				}*/
			}
		];
	}
}

class SnakeGameController extends GameController {
	constructor () {
		super();
	}

	setup () {
		const pitchSize = ( width > height ? width : height ) * .4;
		const numberOfCells = 24;
		
		const center = createVector(width * .5, height * .5);
		this.pitch = new SnakePitch( center.copy(), pitchSize, numberOfCells );
		this.character = new SnakeCharacter( center.copy(), this.pitch );
		this.apple = new SnakeApple( this.pitch );

		noFill();
	}

	draw () {
		this.character.display();
		this.pitch.display();
		if ( !this.character.isColliding(this.pitch) )
			this.character.update();
		else
			this.endgame();
		if ( this.character.eats(this.apple) )
			this.sumPoint();
		this.apple.display();
	}

	endgame() {
		alert('Endgame');
	}

	sumPoint () {
		this.character.grow();
		// sumar punt
		this.apple.relocate();
	}
}

class SnakeCharacter {
	constructor (position, pitch) {
		this.position = position;
		this.direction = createVector(1, 0);
		this.pitch = pitch;
		this.tail = [];
		this.tailLenght = 20;
		this.size = floor (pitch.size / pitch.numberOfCells);
		this.speed = .01;
	}

	update () {
		this.updateDirection();
		this.tail.push(this.position.copy());
		if (this.tail.length > this.tailLenght)
			this.tail.shift(); 
		this.move();
	}

	display () {
		stroke(colors.y);
		strokeWeight(this.size);
		this.tail.forEach(p => {
			point(p.x, p.y);
		});
	}

	updateDirection () {
		if (keyIsPressed === true) {
			switch (keyCode) {
				case UP_ARROW:    this.direction = createVector( 0, -1); break;
				case DOWN_ARROW:  this.direction = createVector( 0,  1); break;
				case LEFT_ARROW:  this.direction = createVector(-1,  0); break;
				case RIGHT_ARROW: this.direction = createVector( 1,  0); break;
			}
		}
	}

	move () {
		this.position.x += this.direction.x;
		this.position.y += this.direction.y;
	}

	eats (apple) {
		return dist(this.position.x, this.position.y, apple.position.x, apple.position.y) < this.size;
	}

	isColliding (pitch) {
		var res = false;
		const s = this.size * .5;
		if      ( this.position.x - s <= pitch.minX ) res = true;
		else if ( this.position.x + s >= pitch.maxX ) res = true;
		else if ( this.position.y - s <= pitch.minY ) res = true;
		else if ( this.position.y + s >= pitch.maxY ) res = true;
		return res;
	}

	grow () {
		this.tailLenght += this.size;
	}

}
class SnakeApple {
	constructor (pitch) {
		this.numCells = pitch.numberOfCells;
		this.pitch = pitch;
		this.size = floor (pitch.size / pitch.numberOfCells);
		this.relocate();
	}

	relocate () {
		this.position = createVector(
			this.pitch.minX + random(0, this.numCells - 1) * this.size,
			this.pitch.minX + random(0, this.numCells - 1) * this.size
		);
	}

	display () {
		stroke(colors.m);
		strokeWeight(this.size);
		point(this.position.x, this.position.y);
	}
}

class SnakePitch {
	constructor (position, size, numberOfCells) {
		this.position = position;
		this.size = size;
		this.numberOfCells = numberOfCells;
	}

	get minX() { return this.position.x - this.size * .5; }
	get minY() { return this.position.y - this.size * .5; }
	get maxX() { return this.position.x + this.size * .5; }
	get maxY() { return this.position.y + this.size * .5; }

	display () {
		stroke(colors.c);
		strokeWeight(5);
		rect(this.minX, this.minY, this.size, this.size);
		if (MODE_DEBUG) this.displayGrid();
	}

	displayGrid () {
		stroke(colors.c);
		strokeWeight(0.5);
		const s = this.size / this.numberOfCells;
		for (let i = 1; i < this.numberOfCells; i++) {
			const I = i * s
			line(
				this.minX + I,
				this.minY,
				this.minX + I,
				this.maxY
			);
			line(
				this.minX,
				this.minY + I,
				this.maxX,
				this.minY + I
			);
		}
	}
}
