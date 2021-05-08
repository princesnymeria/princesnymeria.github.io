class AlgorithmController {
	constructor () {
		this.data = {
			'name': '',
			'shortName': '',
			'infolink': ''
		};
		this.currentStepIndex = 0;
		this.steps = [];
		this.inputs = [];
	}

	get title () {
		return this.data.name;
	}

	setStep (stepIndex) {
		this.currentStepIndex = stepIndex;
	}

	setup () {
		this.algorithm.setup();
	}

	draw () {
		this.algorithm.update();
		for (let i = 0; i <= this.currentStepIndex; i++)
			this.steps[i].displayFunction();
	}
}
