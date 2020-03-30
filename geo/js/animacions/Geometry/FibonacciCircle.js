class FibonacciCircle {

    /* ┌──────────────────────────────┐
       │          Constructor         │
       └──────────────────────────────┘ */

    constructor(pX, pY) {
        this.posX = pX;
        this.posY = pY;

        this.fi = this.calcGoldenNumber();

        this.radius = 175;
        this.iterations = 3;
    }


    /* ┌──────────────────────────────┐
       │            Setters           │
       └──────────────────────────────┘ */

    setRadius(v) {
        this.radius = map(v, 0, 127, 100, 1000);
    }
    setIterations(v) {
        this.iterations = parseInt(map(v, 0, 127, 1, 12));
    }


    /* ┌──────────────────────────────┐
       │        Mètodes comuns        │
       └──────────────────────────────┘ */

    setValues(d) {
        this.setRadius(d[0]);
        this.setIterations(d[1]);
    }

    update() {
        //...
    }

    display() {
        ellipse(this.posX, this.posY, this.radius, this.radius);
        for (let i = 1; i < this.iterations; i++) {
            var x = this.posX;//----------------------------------------------[CALC]
            var y = this.posY;//----------------------------------------------[CALC]
            var r = this.radius / (this.fi * i);
            ellipse(x, y, r, r);
        }
    }


    /* ┌──────────────────────────────┐
       │        Mètodes pròpis        │
       └──────────────────────────────┘ */

    calcFibonacciSeq(iterations) {
        var res = [0, 1];
        for (let i = 0; i < iterations; i++) {
            res.push(res[i] + res[i+1])
        }
        return res;
    }
    calcGoldenNumber() {
        const values = this.calcFibonacciSeq(10);
        const res = values[values.length-1] / values[values.length-2];
        return res;
    }

}