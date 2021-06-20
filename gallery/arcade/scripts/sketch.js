const MODE_DEBUG = true;

const colors = { };

const games = [];
var selectedGame;

function setup() {
	const p = document.getElementById('gameScreen');
	const s = ( p.offsetWidth < p.offsetHeight ? p.offsetWidth : p.offsetHeight );
	createCanvas(s, s).parent('gameScreen');

	frameRate( 24 );

	colorMode(HSL);

	games.push( new SnakeGame() );
	games.push( new MinesWeeper() );

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
	background(12);
}
