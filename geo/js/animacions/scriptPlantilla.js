class XXXXX {

    /* ┌──────────────────────────────┐
       │          Constructor         │
       └──────────────────────────────┘ */

    constructor(pX, pY) {
        this.posX = pX;
        this.posY = pY;

        this.radius = 175;
    }


    /* ┌──────────────────────────────┐
       │            Setters           │
       └──────────────────────────────┘ */

    setRadius(v) {
        this.radius = map(v, 0, 127, 100, 1000);
    }


    /* ┌──────────────────────────────┐
       │        Mètodes comuns        │
       └──────────────────────────────┘ */

    setValues(d) {
        this.setRadius(d[0]);
    }

    update() {
        //...
    }

    display() {
        background(12);
        fill(248);
        noStroke();
        this.XXXXX();
    }


    /* ┌──────────────────────────────┐
       │        Mètodes pròpis        │
       └──────────────────────────────┘ */

    XXXXX() {
        ellipse(this.posX, this.posY, this.radius, this.radius);
    }

}