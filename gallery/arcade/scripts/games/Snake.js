class SnakeGame extends Game {
	constructor () {
		super();
		this.info.title = 'The Snake Game';
		this.info.shortName = 'Snake';
		this.gameController = new SnakeGameController();
		const that = this;
		this.inputs = [
			{ label: 'Play/Pause', callback: function(){ that.gameController.pause() } },
			{ label: 'up',    callback: function(){ that.gameController.updateDirection(UP_ARROW)    } },
			{ label: 'down',  callback: function(){ that.gameController.updateDirection(DOWN_ARROW)  } },
			{ label: 'left',  callback: function(){ that.gameController.updateDirection(LEFT_ARROW)  } },
			{ label: 'right', callback: function(){ that.gameController.updateDirection(RIGHT_ARROW) } }
		];
		this.outputs = [
			{ label: 'Points', model: this.gameController.points }
		];
	}
}



class SnakeGameController extends GameController {
	constructor () {
		super();
	}

	starGame () {
		const numberOfCells = 18;
		
		this.pitch = new SnakePitch( 0, 0, width, height, numberOfCells );
		this.character = new SnakeCharacter( createVector(numberOfCells * .5, numberOfCells * .5), this.pitch );
		this.apple = new SnakeApple( this.pitch );
		this.points = 0;
		this.paused = false;

		noFill();
		strokeJoin(ROUND);
		strokeCap(ROUND);
	}

	draw () {
		this.pitch.display();
		this.character.display();
		if ( !this.character.isCollidingSomething(this.pitch) ) {
			if (!this.paused) this.character.update();
		}
		else
			this.gameover();
		if ( this.character.eats(this.apple) )
			this.sumPoint();
		this.apple.display();
	}

	gameover() {
		alert('Game Over');
		this.starGame();
	}

	sumPoint () {
		this.character.grow();
		this.points++;
		this.apple.relocate();
	}

	updateDirection (d) {
		this.character.updateDirection(d);
	}

	pause () {
		this.paused = !this.paused;
	}
}


class SnakeCharacter {
	constructor (position, pitch) {
		this.pitch = pitch;
		this.positionGrid = position;
		this.tail = [];
		this.speed = .2;
		this.tailLenght = 10;
		this.size = floor (pitch.size / pitch.numberOfCells) * .9;
		this.direction = createVector(this.speed, 0);
	}

	update () {
		this.checkIfUpdateDirection();
		this.tail.push(this.positionGrid.copy());
		if (this.tail.length > this.tailLenght)
			this.tail.shift(); 
		this.move();
	}

	display () {
		stroke(colors.y);
		strokeWeight(this.size);
		beginShape();
		this.tail.forEach(v => {
			const p = this.pitch.col2pos(v.x, v.y);
			vertex(p.x, p.y);
		});
		endShape();
	}

	checkIfUpdateDirection () {
		if (keyIsPressed === true) this.updateDirection(keyCode);
	}

	updateDirection (direction) {
		const s = this.speed;
		//this.positionGrid = createVector(floor( this.positionGrid.x ), floor( this.positionGrid.y ));// ToDo: calibrar a la quadricula
		// ToDo: s'hauria de restringir fer un gir de 180º
		switch (direction) {
			case UP_ARROW:    this.direction = createVector( 0, -s); break;
			case DOWN_ARROW:  this.direction = createVector( 0,  s); break;
			case LEFT_ARROW:  this.direction = createVector(-s,  0); break;
			case RIGHT_ARROW: this.direction = createVector( s,  0); break;
		};
	}

	move () {
		this.positionGrid.add(this.direction);
	}

	eats (apple) {
		const a = this.pitch.col2pos(apple.gridPosition.x, apple.gridPosition.y);// ToDo: es pot comparar la cella directament
		const b = this.pitch.col2pos(this.positionGrid.x, this.positionGrid.y);// ToDo: es pot comparar la cella directament
		return dist(b.x, b.y, a.x, a.y) < this.size;
	}

	isCollidingSomething (pitch) {
		return this.isCollidingWalls(pitch) || this.isCollidingItself();
	}

	isCollidingWalls (pitch) {
		var res = false;
		const b = pitch.col2pos(this.positionGrid.x, this.positionGrid.y);
		const s = this.size * .5;
		if      ( b.x - s <= pitch.minX ) res = true;
		else if ( b.x + s >= pitch.maxX ) res = true;
		else if ( b.y - s <= pitch.minY ) res = true;
		else if ( b.y + s >= pitch.maxY ) res = true;
		return res;
	}

	isCollidingItself () {
		var res = false;
		for (let i = 0; i < this.tail.length - this.size * 3; i++) {// ToDo: no funciona
			const t = this.tail[i];
			const b = this.pitch.col2pos(this.positionGrid.x, this.positionGrid.y);
			const d = dist( b.x, b.y, t.x, t.y );
			if ( d < this.size ) res = true;
		}
		return res;
	}

	grow () {
		this.tailLenght += 5;// ToDo: hauria de ser 1, però no creix prou
	}
}


class SnakeApple {
	constructor (pitch) {
		this.pitch = pitch;
		this.size = floor (pitch.size / pitch.numberOfCells);
		this.relocate();
	}

	relocate () {
		this.gridPosition = createVector(// ToDo: s'hauria d'intentar que no es posi per sobre la serp
			random(0, this.pitch.numberOfCells - 1),
			random(0, this.pitch.numberOfCells - 1)
		);
	}

	display () {
		stroke(colors.m);
		strokeWeight(this.size);
		const p = this.pitch.col2pos(this.gridPosition.x, this.gridPosition.y);
		point(p.x, p.y);
	}
}


class SnakePitch {
	constructor (minX, minY, maxX, maxY, numberOfCells) {
		this.minX = minX;
		this.minY = minY;
		this.maxX = maxX;
		this.maxY = maxY;
		this.numberOfCells = numberOfCells;

		this.size = maxX;
	}

	display () {
		stroke(colors.c);
		strokeWeight(10);
		rect(0, 0, width, height);
		this.displayGrid();
	}

	displayGrid () {
		const s = width / this.numberOfCells;
		stroke('#00FFFF10');// ToDo: Hauria de pillar el valor de la variable `color.c`
		strokeCap(SQUARE);
		strokeWeight(s);
		for (let i = 1; i < this.numberOfCells; i+=2) {
			const I = i * s
			line( I, 0, I, height );
			line( 0, I, width, I );
		}
		strokeCap(ROUND);
	}

	col2pos (col, row) {
		const c = map(col, 0, this.numberOfCells, this.minX, this.maxX );
		const r = map(row, 0, this.numberOfCells, this.minY, this.maxY );
		return createVector(c, r);
	}
}
