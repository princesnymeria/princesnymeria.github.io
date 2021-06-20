var iptSym, iptAlfa, iptSize;
var fillColor = [0, 80, 35]; // var fillColor = [0, 80, 25];
var paintMode = false;
var lastPoint = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	frameRate(48);

	setEvents();
	clearCanvas();

	lastPoint = [width * .5, height * .5];
}

function draw() {
	updateColor();
	if (mouseIsPressed)
		drawSymmetrically();
	lastPoint = [mouseX, mouseY];
}

function updateColor() {
	var bg = color(12);
	bg.setAlpha(iptAlfa.value);
	background(bg);

	fillColor[0]++;
	if (fillColor[0] > 360) fillColor[0] = 0;
	stroke(fillColor);
}

function drawSymmetrically() {
	translate(width/2, height/2);
	const x = mouseX - width * 0.5;
	const y = mouseY - height * 0.5;
	const lx = lastPoint[0] - width * 0.5;
	const ly = lastPoint[1] - height * 0.5;
	strokeWeight(iptSize.value);
	for (var i = 0; i < iptSym.value; i++) {
		push();
		rotate(TWO_PI * i / iptSym.value);
		if (paintMode) point(x, y);
		else line(x, y, lx, ly);
		pop();
	}
}

function clearCanvas() {
	colorMode(HSL);
	angleMode(RADIANS);
	background(12);
}

function setEvents() {
	document.getElementById('btnRefresh').addEventListener('click', clearCanvas);
	document.getElementById('btnMode').addEventListener('click', function(){ paintMode = !paintMode });
	document.getElementById('btnReset').addEventListener('click', function(){ 
		iptSym.value = 8;
		iptAlfa.value = .1;
		iptSize.value = 10;
	 });
	iptSym = document.getElementById('inpSymmetries');
	iptAlfa = document.getElementById('inpAlfa');
	iptSize = document.getElementById('inpSize');
}
