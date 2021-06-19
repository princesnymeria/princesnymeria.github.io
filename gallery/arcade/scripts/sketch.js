const MODE_DEBUG = true;

const colors = { };

const games = [];
var selectedGame;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate( 24 );

	colorMode(HSL);

	games.push( new SnakeGame() );

	modifyDOM2SelectedGame(0);
	createGameSelectorButtons();

	colors.y = color(45,  80, 25, .8);
	colors.c = color(180, 80, 25, .8);
	colors.m = color(315, 80, 25, .8);
}

function draw() {
	clearCanvas();
	selectedGame.draw();
}

function clearCanvas() {
	background(8);
}
