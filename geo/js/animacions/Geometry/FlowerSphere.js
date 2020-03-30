class FlowerSphere {

    /* ┌──────────────────────────────┐
       │          Constructor         │
       └──────────────────────────────┘ */

    constructor(pX, pY) {
        this.posX = pX;
        this.posY = pY;

        this.radius = 175;
        this.numChildren = 8;
        this.vel = 0.01;

        this.r = 0;
    }


    /* ┌──────────────────────────────┐
       │            Setters           │
       └──────────────────────────────┘ */

    setRadius(v) {
        this.radius = map(v, 0, 127, 100, 1000);
    }
    setNumChildren(v) {
        this.numChildren = parseInt(map(v, 0, 127, 3, 30));
    }
    setVelocity(v) {
        this.vel = map(v, 0, 127, 0, 0.1);
    }


    /* ┌──────────────────────────────┐
       │        Mètodes comuns        │
       └──────────────────────────────┘ */

    setValues(d) {
        this.setRadius(d[0]);
        this.setNumChildren(d[1]);
        this.setVelocity(d[2]);
    }

    update() {
        this.r += this.vel;
    }

    display() {
        angleMode(RADIANS);
        for (let i = 0; i < this.numChildren; i++) {
            var a = 2 * PI / this.numChildren * i;
            var x = this.radius * cos(a + this.r) * 0.5 + this.posX;
            var y = this.radius * sin(a + this.r) * 0.5 + this.posY;
            ellipse(x, y, this.radius, this.radius);
        }
    }

}