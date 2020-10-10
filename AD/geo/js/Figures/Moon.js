class Moon extends Figure {

    constructor(pX, pY) {
        super(pX, pY);

        this.name = "Moon";

        const c = pX > pY ? pX : pY; 
        this.vars = {
            'dim': {
                v: 0,
                default: c * 0.7,
                min: c * 0.1,
                max: c * 1.5,
                integer: false
            },
            'dimRatio': {
                v: 0,
                default: 0.75,
                min: 0.00001,
                max: 0.99999,
                integer: false
            },
            'iniciObertura': {
                v: 0,
                default: PI,
                min: 0,
                max: TAU,
                integer: false
            },
            'desplacamentRatio': {
                v: 0,
                default: 0.25,
                min: 0.00001,
                max: 0.99999,
                integer: false
            }
        }
    }

    display() {
        const io = this.vars['iniciObertura'].v;
        const dr = this.vars['desplacamentRatio'].v;
        let X, Y, D, R;
            D = this.vars['dim'].v;
            R = D * 0.5;
            X = this.posX;
            Y = this.posY;
        let x, y, d, r;
            d = (D * this.vars['dimRatio'].v);
            r = d * 0.5;
            x = this.posX + (cos(io) * (R - r)) + (cos(io)) * d * dr;
            y = this.posY + (sin(io) * (R - r)) + (sin(io)) * d * dr;
        let I = this.getFaseArcs(x, y, r, X, Y, R);
        if (MODE_DEBUG) { stroke('#ff00ff50');ellipse(X, Y, D, D);stroke('#ff00ff'); }
        arc(X, Y, D, D, I['S'], I['E'], OPEN);
        if (MODE_DEBUG) { stroke('#00ffff50');ellipse(x, y, d, d);stroke('#00ffff'); }
        arc(x, y, d, d, I['s'], I['e'], OPEN);
    }

    getIntersectionPoints(x, y, r, X, Y, R) {
        let x1=0; let x2=0; let y1=0; let y2=0; 

        let dx = X - x;
        let dy = Y - y;	   
        let d2 = dx*dx + dy*dy;
        let di = sqrt(d2);
        let r2 = r * r;
        let R2 = R * R;
        
        if(di < r + R && di > abs(r - R)) {	 
            let K = r2-R2+d2; 
            let K2 = K * K;
            let h = sqrt(4 * r2 * d2 - K2);
            x1 = x + (dx * K + dy * h)/(2*d2);
            x2 = x + (dx * K - dy * h)/(2*d2);
            y1 = y + (dy * K - dx * h)/(2*d2);
            y2 = y + (dy * K + dx * h)/(2*d2);
        }
        if (MODE_DEBUG) { stroke('#ffff00');strokeWeight(10);point(x1, y1);point(x2, y2);strokeWeight(4); }
        return [x1, x2, y1, y2];
    }

    getFaseArcs(x, y, r, X, Y, R) {
        const io = this.vars['iniciObertura'].v;
        const dr = this.vars['desplacamentRatio'].v;
        let A = this.getIntersectionPoints(x, y, r, X, Y, R);
        let x1=A[0]; let x2=A[1]; let y1=A[2]; let y2=A[3];

        var res = {
            S: atan((Y-y1)/(X-x1)),
            E: atan((Y-y2)/(X-x2)),
            s: atan((y-y1)/(x-x1)),
            e: atan((y-y2)/(x-x2)),
        }
        
        if (io > HALF_PI && io < HALF_PI + PI) {
            res['S'] += PI;
            res['E'] += PI;
            res['s'] += PI;
            res['e'] += PI;
        }

        if (((X-x1) < 0) && ((X-x2) > 0))
            if (y1 > y2)res['E'] += PI;
            else res['S'] += PI;
        if (((X-x2) < 0) && ((X-x1) > 0))
            if (y1 > y2) res['S'] += PI;
            else res['E'] += PI;

        if (((x-x1) < 0) && ((x-x2) > 0))
            if (y1 > y2)res['e'] += PI;
            else res['s'] += PI;
        if (((x-x2) < 0) && ((x-x1) > 0))
            if (y1 > y2) res['s'] += PI;
            else res['e'] += PI;
        
        if (MODE_DEBUG) console.log("Desplaçament: "+dr, "\nDim Ratio: "+this.dimRatio, "\nOb: "+io);

        if (atan((y-y1)/(x-x1)) < 0 && atan((y-y2)/(x-x2)) > 0) {
            res['s'] += PI;
            res['e'] += PI;
        }

        return res
    }
}