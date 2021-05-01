const MODE_DEBUG = true;

const STROKE = 1024; const FILL = 1025; const LINE = 1026; const POINT = 1027;

const algorithms = [];
var selectedAlgorithm = 1;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(48);

	colorMode(HSL);
	angleMode(RADIANS);

	algorithms.push( new BezierController() );
	algorithms.push( new VoronoiController() );

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

function setColor(hue, aplha, action, type) {
	const color = [hue, 100, 50, aplha];
	switch (action) {
		case STROKE:	stroke(color);	noFill();	strokeWeight( type == LINE ? 5 : 10 ); break;
		case FILL:		fill(color);	noStroke(); break;
	}
}

function addVarControllers(type, label) {
	//afegir etiqueta?
	//parametritzar elements
	const element = document.createElement(type);
	element.type = 'range';
	element.min = 0;
	element.max = 100;
	element.value = 30;
	document.getElementById('varsControllersContainer').appendChild(element);
	return element;
}

function loadAlgorithmSelectorButtons() {
	const cont = document.getElementById('algorithmSelectorsContainer');
	var index = 0;
	algorithms.forEach(algorithm => {
		const btn = document.createElement('BUTTON');
		btn.innerText = algorithm.data.shortName;
		btn.setAttribute('algorithm-id', index);
		btn.addEventListener('click', changeAlgorithm);
		cont.appendChild(btn);
		if (index == selectedAlgorithm) btn.classList.add('selected');
		index++
	});
}

function changeAlgorithm(ev) {
	const q = document.querySelector('button.selected');
	if (q) q.classList.remove('selected');
	ev.target.classList.add('selected');
	document.getElementById('varsControllersContainer').innerHTML = "";
	selectedAlgorithm = ev.target.getAttribute('algorithm-id');
	algorithms[selectedAlgorithm].setup();
}
