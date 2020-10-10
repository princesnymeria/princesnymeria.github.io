class GoldenSpiral extends Figure {

    /* ┌──────────────────────────────┐
       │          Constructor         │
       └──────────────────────────────┘ */

    constructor(pX, pY) {
        super(pX, pY);
        
        this.name = "Golden Spiral";

        const c = pX > pY ? pX : pY; 
        this.vars = {
            'dim': {
                v: 0,
                default: c * 0.7,
                min: c * 0.1,
                max: c * 1.5,
                integer: false
            },
            'iterations': {
                v: 0,
                default: 4,
                min: 1,
                max: 8,
                integer: true
            }
        }

        this.fi = this.calcGoldenNumber();
    }

    display() {

        if (MODE_DEBUG) stroke('#ff00ff50');
        
        angleMode(RADIANS);

        const d = this.vars['dim'].v;
        const I = this.vars['iterations'].v;
        var rp = d;
        var xp = this.posX;
        var yp = this.posY;

        ellipse(this.posX, this.posY, d, d);

        for (let i = 1; i < I; i++) {

            var r = d / (this.fi * i);

            var dx = (rp + r) * -0.5 + r;
            var dy = dx;

            dx *= cos(HALF_PI * (i+1) - HALF_PI);
            dy *= cos(HALF_PI * i - HALF_PI);

            var x = xp + dx;
            var y = yp + dy;

            ellipse(x, y, r, r);
            
            rp = r;
            xp = x;
            yp = y;
        }

        this.displaySpiral();
    }

    calcFibonacciSeq(iterations) {
        var res = [0, 1];
        for (let i = 0; i < iterations; i++) {
            res.push(res[i] + res[i+1])
        }
        if (MODE_DEBUG) console.log(res);
        return res;
    }
    calcGoldenNumber() {
        const values = this.calcFibonacciSeq(10);
        const res = values[values.length-1] / values[values.length-2];
        if (MODE_DEBUG) console.log("Golden number:", res);
        return res;
    }

    displaySpiral() {
        angleMode(RADIANS);

        const d = this.vars['dim'].v;
        const I = this.vars['iterations'].v;
        var rp = d;
        var xp = this.posX;
        var yp = this.posY;

        stroke('#eeeeeeaa');
        if (MODE_DEBUG) stroke('#ff00ffAA');

        var f = PI;
        arc(this.posX, this.posY, d, d, f, f+HALF_PI, OPEN)
        f += HALF_PI;

        for (let i = 1; i < I; i++) {

            var r = d / (this.fi * i);

            var dx = (rp + r) * -0.5 + r;
            var dy = dx;

            dx *= cos(HALF_PI * (i+1) - HALF_PI);
            dy *= cos(HALF_PI * i - HALF_PI);

            var x = xp + dx;
            var y = yp + dy;

            arc(x, y, r, r, f, f+HALF_PI, OPEN)
            f += HALF_PI;
            
            rp = r;
            xp = x;
            yp = y;
        }
    }

}