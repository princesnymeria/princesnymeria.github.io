var CANVAS_WIDTH, CANVAS_HEIGHT;
var iptSym, iptAlfa, iptSize;
var fillColor = [0, 80, 70];

function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate(96);

	setEvents();
	clearCanvas();
}

function draw() {
	updateColor();
	if (mouseIsPressed)
		drawSymmetrically();
}

function updateColor() {
	var bg = color(12);
	bg.setAlpha(iptAlfa.value);
	background(bg);

	fillColor[0]++;
	if (fillColor[0] > 360) fillColor[0] = 0;
	stroke(fillColor[0], fillColor[1], fillColor[2]);
}

function drawSymmetrically() {
	translate(width/2, height/2);
	var x = mouseX - CANVAS_WIDTH * 0.5;
	var y = mouseY - CANVAS_HEIGHT * 0.5;
	strokeWeight(iptSize.value);
	for (var i = 0; i < iptSym.value; i++) {
		push();
		rotate(TWO_PI * i / iptSym.value);
		point(x, y);
		pop();
	}
}

function clearCanvas() {
	angleMode(RADIANS);
	background(12);
	colorMode(HSL);
}

function setEvents() {
	document.getElementById('btnRefresh').addEventListener('click', clearCanvas);
	iptSym = document.getElementById('inpSymmetries');
	iptAlfa = document.getElementById('inpAlfa');
	iptSize = document.getElementById('inSize');
}