let CANVAS_WIDTH, CANVAS_HEIGHT;
let imageImputs, soundImputs;
let anim;



function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate(10);

	imageImputs = document.querySelectorAll('#imageControllers>input');

	//anim = new Animation();
	anim = new BlurAnimation();
	//anim = new PixelCircleAnimation();

	anim.setSize(CANVAS_WIDTH * 0.5);
	anim.setPosition(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
}

function draw() {
	let v = getInputValues();
	anim.setValues(v);
	anim.update();
	anim.display();
}



function getInputValues() {
	var res = { image : [], sound : [] };
	imageImputs.forEach(input => {
		let v = map(input.value, 0, 127, 0, 100);
		res['image'].push(v);
	});
	return res;
}