class Miraculous extends Figure {

    constructor(pX, pY) {
        super(pX, pY);

        this.name = "Miraculous HawkMoth's Windows";

        const c = pX > pY ? pX : pY; 
        this.vars = { }
        this.vars['dim'] = {
            v: 0,
            default: c * 0.7,
            min: c * 0.1,
            max: c * 1.5,
            integer: false
        }
        /*this.vars['dimRatio'] = {
            v: 0,
            default: 0.65,
            min: 0.5,
            max: 1,
            integer: false
        }*/
    }

    display() {
        const D = this.vars['dim'].v;
        const d = D * acos(0.75);//const d = D * this.vars['dimRatio'].v;//
        const x = this.posX;
        const y = this.posY;

        if (MODE_DEBUG) stroke('#00ffff40');
        ellipse(x, y, D, D);
        ellipse(x, y, d, d);

        this.lines(D, d, x, y);

        if (MODE_DEBUG) stroke('#ff00ff40');
        for (let i = 0; i < 4; i++) {
            let a = HALF_PI * i;
            let x = D * cos(a) * 0.25 + this.posX;
            let y = D * sin(a) * 0.25 + this.posY;
            ellipse(x, y, d, d);
        }
        this.mask(D, x, y);
    }

    lines(D, d, x, y) {
        if (MODE_DEBUG) { stroke('#ffff0030'); line(x, y-D/2, x, y+D/2); line(x-D/2, y, x+D/2, y); }
        line(x, y-D/2, x, y-D/2+(D-d)/2);
        line(x, y+D/2, x, y+D/2-(D-d)/2);
        line(x-D/2, y, x-D/2+(D-d)/2, y);
        line(x+D/2, y, x+D/2-(D-d)/2, y);
    }

    mask(D, x, y) {
        const bgColor = 12;//------------------------------------------[Aconseguir algorismicament]
        const strkWeight = 6;//----------------------------------------[Aconseguir algorismicament]
        
        const d = this.vars['dim'].v;
        const dr = this.vars['dimRatio'].v;
        
        var s = d * 0.25 + strkWeight + 1;
        stroke(bgColor);
        if (MODE_DEBUG) stroke('#ffff0030');
        strokeWeight(s-strkWeight);
        ellipse(x, y, D+s, D+s);
    }

}