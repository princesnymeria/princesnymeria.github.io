class FlowerLife extends Figure {

    constructor(pX, pY) {
        super(pX, pY);

        this.name = "Flower of Life";

        const c = pX > pY ? pX : pY; 
        this.vars = {
            'dim': {
                v: 0,
                default: c * 0.7,
                min: c * 0.1,
                max: c * 1.5,
                integer: false
            },
            'petals': {
                v: 0,
                default: 6,
                min: 2,
                max: 12,
                integer: true
            },
            'dimRatio': {
                v: 0,
                default: 4,
                min: 1,
                max: 6,
                integer: true
            }
        }

        this.randomVar1 = 2;
        this.randomVar2 = 0.5;
        this.randomVar3 = 1;
    }

    display() {
        angleMode(RADIANS);
        if (MODE_DEBUG) stroke('#00ffff50');
        const d = this.vars['dim'].v;
        const dr = this.vars['dimRatio'].v;
        ellipse(this.posX, this.posY, d, d);
        if (MODE_DEBUG) stroke('#ff00ff50');
        this.drawTourus6(d/dr, this.posX, this.posY, dr+1);
        this.mask(d, this.posX, this.posY);
    }


    /* ┌──────────────────────────────┐
       │        Mètodes pròpis        │
       └──────────────────────────────┘ */

    drawTourus6(rad, posX, posY, n) {
        if ( n > 0 ) {
            ellipse(posX, posY, rad, rad);
            const p = this.vars['petals'].v;
            for (let i = 0; i < p; i++) {
                var a = this.randomVar1 * PI / p * i + HALF_PI;
                var x = rad * cos(a) * this.randomVar2 + posX;
                var y = rad * sin(a) * this.randomVar2 + posY;
                var r = rad / this.randomVar3;
                this.drawTourus6(r, x, y, n-1);
            }
        }
    }

    mask(r, x, y) {
        const bgColor = 12;//------------------------------------------[Aconseguir algorismicament]
        const strkWeight = 6;//----------------------------------------[Aconseguir algorismicament]
        
        const d = this.vars['dim'].v;
        const dr = this.vars['dimRatio'].v;
        
        var s = d / (2 * dr ) + strkWeight + 1;
        stroke(bgColor);
        if (MODE_DEBUG) stroke('#ffff0030');
        strokeWeight(s-strkWeight);
        ellipse(x, y, r+s, r+s);
    }

}