const MODE = 'web';

var selectAnimIndx = 0;
var dataGetter;
var animations = [];
var CANVAS_WIDTH, CANVAS_HEIGHT;

function setup() {
    dataGetter = new WebDataGetter(3, ['Flower', 'Star', 'Fibonacci']);
    color = new StyleNColor(12, 6, 80, 70, 1);
    
    CANVAS_WIDTH = window.innerWidth;
    CANVAS_HEIGHT = window.innerHeight;
    
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    frameRate(24);

    animations[0] = new FlowerSphere(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
    animations[1] = new Star(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
    animations[2] = new FibonacciCircle(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
}

function draw() {
    var data = dataGetter.getSlideValues();
    
    var selectedAnimation = animations[selectAnimIndx];

    color.refresh();
    selectedAnimation.setValues(data);
    //selectedAnimation.update();
    selectedAnimation.display();
}