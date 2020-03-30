class Star {

    /* ┌──────────────────────────────┐
       │          Constructor         │
       └──────────────────────────────┘ */

    constructor(pX, pY) {
        this.posX = pX;
        this.posY = pY;

        this.radius = 175;
        this.childs = 3;
        this.childDistance = 3;
    }


    /* ┌──────────────────────────────┐
       │            Setters           │
       └──────────────────────────────┘ */

    setRadius(v) {
        this.radius = map(v, 0, 127, 100, 1500);
    }
    setChilds(v) {
        this.childs = parseInt(map(v, 0, 127, 3, 40));
    }
    setChildDistance(v) {
        this.childDistance = parseInt(map(v, 0, 127, 1, this.childs/2));
    }


    /* ┌──────────────────────────────┐
       │        Mètodes comuns        │
       └──────────────────────────────┘ */

    setValues(d) {
        this.setRadius(d[0]);
        this.setChilds(d[1]);
        this.setChildDistance(d[2]);
    }

    update() {
        //...
    }

    display() {
        angleMode(DEGREES);
        for (let i = 0; i < this.childs; i++) {
            var a1 = 90 - 360 / this.childs * i;
            var p1x = this.posX + cos(a1) * this.radius * 0.5;
            var p1y = this.posY + sin(a1) * this.radius * 0.5;
            var a2 = 90 - 360 / this.childs * (i + this.childDistance);
            var p2x = this.posX + cos(a2) * this.radius * 0.5;
            var p2y = this.posY + sin(a2) * this.radius * 0.5;
            line(p1x, p1y, p2x, p2y);
        }
    }
}