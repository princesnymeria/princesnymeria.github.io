class AlgorithmController {
	constructor () {
		this.data = {
			'nom': '',
			'shortName': '',
			'infolink': ''
		};
	}

	setup () {
		this.algorithm.setup();
	}

	draw () {
		this.algorithm.draw();
	}
}