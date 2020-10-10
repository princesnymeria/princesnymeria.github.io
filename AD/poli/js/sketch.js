/* ┌──────────────────────────────────────────────────┐
   │              Declaració de variables             │
   └──────────────────────────────────────────────────┘ */

const MODE_DEBUG = false;

let solids = [];
var selectedSolid;
var currentHue = 0;
var CANVAS_WIDTH, CANVAS_HEIGHT;



/* ┌──────────────────────────────────────────────────┐
   │                    Processing                    │
   └──────────────────────────────────────────────────┘ */

function setup() {    
    CANVAS_WIDTH = window.innerWidth;
    CANVAS_HEIGHT = window.innerHeight;
    
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    frameRate(10);
    clearCanvas();

    solids.push( new Tetrahedron() );
    solids.push( new Cube() );
    solids.push( new Octahedron() );
    solids.push( new Dodecahedron() );
    solids.push( new Icosahedron() );

    selectedSolid = new Cube();

    arrengeInterface();
}

function draw() {
    background(12);//-------------------------[Variable, realcio]
    strokeWeight(2);
    solids.forEach(s => {
        s.setValues([]);
        s.update();
        s.display();
    });
    strokeWeight(5);
    selectedSolid.display();
}



/* ┌──────────────────────────────────────────────────┐
   │                     Funcions                     │
   └──────────────────────────────────────────────────┘ */

function clearCanvas() {
    background(12);//-------------------------[Variable, realcio]
}

function selectSolid(ev) {
    let idSolid = parseInt(ev.target.getAttribute("idSolid"));
    switch(idSolid) {
        case 0: selectedSolid = new Tetrahedron(); break;
        case 1: selectedSolid = new Cube(); break;
        case 2: selectedSolid = new Octahedron(); break;
        case 3: selectedSolid = new Dodecahedron(); break;
        case 4: selectedSolid = new Icosahedron(); break;
    }
    arrengeInterface();
}

function arrengeInterface() {
    let viewRatio = 0.65;
    let menuRatio = 1 - viewRatio;

    let viewX = 0;
    let viewY = 0;
    let viewW = CANVAS_WIDTH * viewRatio;
    let viewH = CANVAS_HEIGHT;
    let menuX = viewW;
    let menuY = 0;
    let menuW = CANVAS_WIDTH * menuRatio;
    let menuH = CANVAS_HEIGHT;

    selectedSolid.setSize(viewW * 0.65);
    selectedSolid.setPosition(viewW * 0.5, viewH * 0.55);

    const container = document.getElementById('solidView');
    container.childNodes[0].innerText = selectedSolid.name;
    container.style.width = viewW.toString() + 'px';
    container.style.height = viewH.toString() + 'px';

    arrengeSObjects2Screen(menuX, menuW, menuH);
}

function arrengeSObjects2Screen(menuPosX, menuWidth, menuHeight) {

    const itemHeight = menuHeight / solids.length;
    const posX = menuPosX + menuWidth * 0.5;
    var posY = itemHeight * 0.5 + itemHeight * 0.1;

    const container = document.getElementById('solidMenu');
    container.style.width = menuWidth.toString() + 'px';

    for (let i = 0; i < solids.length; i++) {
        const object = solids[i];

        object.setSize(itemHeight * 0.6);
        object.setPosition(posX, posY);

        const l = document.createElement("H3");
        l.innerText = object.name;
        l.style.width = menuWidth.toString() + 'px';
        l.style.height = itemHeight.toString() + 'px';
        l.addEventListener('click', selectSolid);
        l.setAttribute("idSolid", i);
        container.appendChild(l);
        
        posY += itemHeight;
    }
}