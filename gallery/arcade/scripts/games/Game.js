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
	draw () { this.gameController.draw() }
	setup () { this.gameController.starGame() }
}


class GameController {
	constructor () {
		// ...
	}
	starGame () { }
	gameOver () { }
	// pause () { }
	draw () { }
}
