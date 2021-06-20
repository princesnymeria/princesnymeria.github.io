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
		this.numCells = 10;
	}

	starGame () {
		this.cells = [];
		for (let r = 0; r < this.numCells; r++) {
			const row = [];
			for (let c = 0; c < this.numCells; c++) {
				row.push( new MinesWeeperCell(10, c, r) );
			}
			this.cells.push(row);
		}
	}

	draw () {
		this.drawCells();
	}

	drawCells () {
		this.cells.forEach(row => {
			row.forEach(cell => {
				cell.display();
			});
		});
	}

	gameover() {
		// ... 
	}

}



class MinesWeeperCell {
	constructor (size, column, row) {
		this.size = size;
		this.position = createVector(
			column * this.size,
			row * this.size
		);
	}

	display() {
		rect(this.position.x, this.position.y, this.size, this.size);
	}
}
