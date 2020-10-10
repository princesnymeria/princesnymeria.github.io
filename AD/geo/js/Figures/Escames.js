class Escames extends Figure {

    constructor(pX, pY) {
        super(pX, pY);

        this.name = "Escames";

        const c = pX > pY ? pX : pY; 
        this.vars = { }
        this.vars['dim'] = {
            v: 0,
            default: c * 0.7,
            min: c * 0.1,
            max: c * 1.5,
            integer: false
        }
        this.vars['numCapes'] = {
            v: 0,
            default: 3,
            min: 2,
            max: 6,
            integer: true
        }
        this.vars['radiChilds'] = {
            v: 0,
            default: c * 0.7 / 3,
            min: c * 0.05,
            max: c * 0.4,
            integer: true
        }
    }

    display() {
        const d = this.vars['dim'].v;
        if (MODE_DEBUG) stroke('#00ffff50');
        ellipse(this.posX, this.posY, d, d);
        if (MODE_DEBUG) stroke('#ff00ff50');
        if (MODE_DEBUG) fill('#ffff0080');
        for (let i = this.vars['numCapes'].v; i > 0; i--)
        this.pisCercles(i);
        if (MODE_DEBUG) noFill();
    }

    pisCercles(capa) {
        let n = 2**capa;
        let A = TAU / n;
        let r = this.vars['radiChilds'].v;
        let R = 0.5 * this.vars['dim'].v / this.vars['numCapes'].v * capa -r/2;
        for (let i = 0; i < n; i++) {
            let a = A * i;
            let x = cos(a) * R + this.posX;
            let y = sin(a) * R + this.posY;
            ellipse(x, y, r, r);
        }
    }
}