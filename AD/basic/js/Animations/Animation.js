class Animation {
    
    /* ┌──────────────────────────────┐
       │          Constructor         │
       └──────────────────────────────┘ */

    constructor() {

        this.name = "...";
        
        this.color = [0, 0, 0];
        this.posX = 250;
        this.posY = 250;
        this.size = 250;
    }


    
    /* ┌──────────────────────────────┐
       │       Getters & Setters      │
       └──────────────────────────────┘ */

    getName() {
        return this.name;
    }

    setSize(s) {
        this.size = s;
        this.step = this.size * 0.01;
    }

    setPosition(pX, pY) {
        this.posX = pX;
        this.posY = pY;
    }

    setColor(c) {
        this.color = c;
    }



    /* ┌──────────────────────────────┐
       │        Mètodes comuns        │
       └──────────────────────────────┘ */

    setValues(v) {
        this.setColor(v['image']);
    }

    update() {
        //...
    }

    display() {
        background(12);//( 12 i 248 )
        //noStroke();
        //fill(this.color);
        //rectMode(CENTER);
        //angleMode(RADIANS);
        colorMode(HSL);//colorMode(RGB);
        this.draw();
    }



    /* ┌──────────────────────────────┐
       │        Mètodes propis        │
       └──────────────────────────────┘ */

    draw() {
        colorMode(RGB);
        fill(this.color[0], this.color[1], this.color[2]);
        circle(this.posX, this.posY, this.size);
    }

}