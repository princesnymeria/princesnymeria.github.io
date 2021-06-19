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
	setup () { this.gameController.setup() }
	draw () { this.gameController.draw() }
}

class GameController {
	constructor () {
		// ...
	}
	setup () { }
	draw () {}
}
