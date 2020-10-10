var CANVAS_WIDTH, CANVAS_HEIGHT;
var dataGetter, bgColor;
var walkers = [];

function setup() {
    CANVAS_WIDTH = window.innerWidth;
    CANVAS_HEIGHT = window.innerHeight;
    
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    frameRate(60);
    angleMode(RADIANS);
    colorMode(HSL);

    bgColor = color(12);

    //walkers.push(new Walker());
    walkers.push(new Croissant());
    //walkers.push(new Skeleton());

    dataGetter = new DataGetter(0, walkers);
}

function draw() {
    const w = dataGetter.getCurrentAnimation();
    bgColor.setAlpha(dataGetter.getCurrentAlpha());
    const walker = walkers[w];
    background(bgColor);
    walker.setMousePosition(mouseX, mouseY);
    walker.setIsActive(mouseIsPressed);
    walker.update();
    walker.display();
}