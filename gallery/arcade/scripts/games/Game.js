class Game {
	constructor () {
		this.info = {
			title: '...',
			shortName: '...'
		};
		this.inputs = [];
		this.outputs = [];
		this.gameController = new GameController();
	}
	draw () { this.gameController.draw(); }
	setup () {
		this.gameController.setup();
		this.gameController.starGame();
	}
}


class GameController {
	constructor () {
		// ...
	}
	
	starGame () { }

	gameover() {
		alert('Game Over');
		this.starGame();
	}

	// pause () { }

	setup () {
		noFill();
		strokeJoin(ROUND);
		strokeCap(ROUND);
	}

	draw () { }
}
