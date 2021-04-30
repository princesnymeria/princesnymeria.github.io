const algorithms = [];
var selectedAlgorithm = 0;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(24);

	colorMode(HSL);
	angleMode(RADIANS);

	algorithms.push( new BezierController() );

	loadAlgorithmSelectorButtons();

	algorithms[selectedAlgorithm].setup();
}

function draw() {
	clearCanvas();
	algorithms[selectedAlgorithm].draw();
}

function clearCanvas() {
	background(8);
}

function addVarControllers(type, label) {
	//afegir etiqueta?
	//parametritzar elements
	const element = document.createElement(type);
	element.type = 'range';
	element.min = 0;
	element.max = 100;
	element.value = this.t * 100;
	document.getElementById('varsControllersContainer').appendChild(element);
	return element;
}

function loadAlgorithmSelectorButtons() {
	const cont = document.getElementById('algorithmSelectorsContainer');
	var index = 0;
	algorithms.forEach(algorithm => {
		const btn = document.createElement('BUTTON');
		btn.innerText = algorithm.data.name;
		btn.setAttribute('algorithm-id', index);
		btn.addEventListener('click', function(ev) {
			selectedAlgorithm = ev.target.getAttribute('algorithm-id');
			document.getElementById('varsControllersContainer').inerHTML = '';
			algorithms[selectedAlgorithm].setup();
		});
		cont.appendChild(btn);
		index++
	});
}
