const MODE_DEBUG = true;
const STROKE = 1024; const FILL = 1025; const LINE = 1026; const POINT = 1027;

const games = [];
var selectedGame;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate( MODE_DEBUG ? 12 : 48 );

	colorMode(HSL);

	games.push( new Snake() );
	//games.push( new VoronoiController() );

	modifyDOM2SelectedGame(0);
	createGameSelectorButtons();
}

function draw() {
	clearCanvas();
	selectedGame.draw();
}

function clearCanvas() {
	background(8);
}

function setColor(hue, aplha, action, type) {
	const color = [hue, 100, 50, aplha];
	switch (action) {
		case STROKE:	stroke(color);	noFill();	strokeWeight( type == LINE ? 5 : 10 );	break;
		case FILL:		fill(color);	noStroke();											break;
	}
}
