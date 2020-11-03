const MODE = 'web';
const MODE_DEBUG = true;

var dataGetter;
var animations = [];
var CANVAS_WIDTH, CANVAS_HEIGHT;

function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;
	
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	frameRate(12);

	animations.push(new Torus(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));				// 0
	animations.push(new Star(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));					// 1
	animations.push(new GoldenSpiral(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));			// 2
	animations.push(new Lauburo(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));				// 3
	animations.push(new FlowerLife(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));			// 4
	//animations.push(new MetatronsCube(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));		// 5
	animations.push(new Moon(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));					// 6
	animations.push(new Ones(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));					// 7
	animations.push(new PolygonalSpiral(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));		// 8
	animations.push(new YingYang(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));				// 9
	animations.push(new Snowflake(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));			// 10
	animations.push(new RecursiveTree(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));		// 11
	animations.push(new SierpinskiCurve(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5));		// 12

	dataGetter = new WebDataGetter(animations, 11);
	color = new StyleNColor(12, 6, 80, 70, 1);
}

function draw() {
	var data = dataGetter.getSlideValues();
	
	var selectedAnimation = animations[dataGetter.getCurrentAnimation()];

	color.refresh();
	selectedAnimation.setValues(data);
	//selectedAnimation.update();
	selectedAnimation.display();
}