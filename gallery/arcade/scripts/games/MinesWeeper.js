class MinesWeeper extends Game {
	constructor () {
		super();
		this.info.title = 'Minesweeper';
		this.info.shortName = 'Minesweeper';
		this.gameController = new MinesWeeperController();
		const that = this;
		this.inputs = [
			// { label: 'Play/Pause', callback: function(){ that.gameController.pause() } },
			// ... 
		];
		this.outputs = [
			// { label: 'Points', model: this.gameController.points }
		];
	}
}



class MinesWeeperController extends GameController {
	constructor () {
		super();
		this.numCellsRow = 5;
		this.numMines = floor( this.numCellsRow * this.numCellsRow * .3 );
	}

	starGame () {
		this.reloadCells();
		this.setMines();
	}

	draw () {
		this.drawCells();
	}

	drawCells () {
		stroke(colors.m);
		strokeWeight(10);
		rect(0, 0, width, height);
		this.cells.forEach(row => {
			row.forEach(cell => {
				cell.draw();
			});
		});
	}

	gameover() {
		this.revealAll();
		alert('GameOver');
		this.starGame();
	}

	reloadCells () {
		const size = width / this.numCellsRow;
		this.cells = [];
		for (let r = 0; r < this.numCellsRow; r++) {
			const row = [];
			for (let c = 0; c < this.numCellsRow; c++)
				row.push( new MinesWeeperCell(size, c, r) );
			this.cells.push(row);
		}
	}

	revealAll () {
		this.cells.forEach(row => {
			row.forEach(cell => {
				cell.reveal();
			});
		});
	}

	aaa (r, c) {
		if ( r > 0 ) {
			if ( c > 0 ) this.cells[r-1][c-1].addNeighbour();
			if ( c < this.numCellsRow-1 ) this.cells[r-1][c+1].addNeighbour();
			this.cells[r-1][c].addNeighbour();
		}
		else if ( r < this.numCellsRow-1 ) {
			if ( c > 0 ) this.cells[r+1][c-1].addNeighbour();
			if ( c < this.numCellsRow-1 ) this.cells[r+1][c-0].addNeighbour();
			this.cells[r+1][c].addNeighbour();
		}
		if ( c > 0 ) this.cells[r-0][c-1].addNeighbour();
		if ( c < this.numCellsRow-1 ) this.cells[r-0][c+1].addNeighbour();
	}

	setMines () {
		for (var i = 0; i < this.numMines; i++) {
			const r = floor(random(0, this.numCellsRow));
			const c = floor(random(0, this.numCellsRow));
			this.cells[r][c].addMine();
			this.aaa(r, c);
		}
	}
	
	setup () {
		noFill();
		textSize(64);
		textAlign(CENTER, CENTER);
		strokeJoin(ROUND);
		strokeCap(ROUND);
		//textFont(inconsolata);
	}

}

const estatsCella = {
	cover: {
		id: 0,
		fillColor: [colors.m[0], colors.m[1], colors.m[2], 0]
	},
	hover: {
		id: 1,
		fillColor: [colors.y[0], colors.y[1], colors.y[2], .2]
	},
	flag: {
		id: 2,
		fillColor: [colors.m[0], colors.m[1], colors.m[2], .0]
	},
	reveled: {
		id: 3,
		fillColor: [colors.c[0], colors.c[1], colors.c[2], .2]
	}
};

class MinesWeeperCell {
	constructor (size, column, row) {
		this.size = size;
		this.position = createVector(
			column * this.size,
			row * this.size
		);
		this.mine = false;
		this.state = estatsCella.cover;
		this.neighbourMines = 0;
	}

	draw() {
		this.update();
		this.display();
	}

	reveal() {
		this.state = estatsCella.reveled;
	}

	addMine() {
		this.mine = true;
	}

	addNeighbour() {
		this.neighbourMines++;
	}

	addFlag() {
		// ...
	}

	update() {
		if (this.state.id <= estatsCella.hover.id)
			if (this.hover) {
				this.state = estatsCella.hover;
				if (mouseIsPressed) this.reveal();
			}
			else {
				this.state = estatsCella.cover;
			}
	}
	
	get hover() {
		return (mouseX > this.position.x && mouseX < (this.position.x + this.size) && mouseY > this.position.y && mouseY < (this.position.y + this.size));
	}

	display() {
		strokeWeight(5);
		stroke(colors.m);
		fill( this.state.fillColor );
		rect(this.position.x, this.position.y, this.size, this.size);
		if (this.state.id == estatsCella.reveled.id) {
			const x = this.position.x + this.size * .5;
			const y = this.position.y + this.size * .5;
			if (this.mine) {
				strokeWeight(50);
				stroke( colors.y );
				point(x, y);
			}
			else {
				noStroke();
				fill( colors.y );
				text(this.neighbourMines, x, y);
			}
		}
	}
}
