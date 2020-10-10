class PixelCircleAnimation extends Animation {

    constructor() {
        super();

        this.name = "...";
        
        this.rad = 5;
        this.satStep = 2;
        this.color = [0, 80, 70];
        //...
    }

    setColor(c) {
        colorMode(RGB);
        let colRGB = color(c[0], c[1], c[2]);
        this.color[0] = hue(colRGB);
        colorMode(HSL);
    }

    setValues(v) {
        this.setColor(v['image']);
    }

    update() {
        this.color[1] += this.satStep;
        if (this.color[1] >= 100 || this.color[1] <= 70) this.satStep *= -1;
    }

    display() {
        background(12);
        rectMode(CENTER);
        angleMode(RADIANS);
        colorMode(HSL);
        this.draw();
    }

    draw() {
        const s = this.size / this.rad;
        fill(this.color[0], this.color[1], this.color[2]);
        rect(this.posX, this.posY, s, s);
        
        for (let i = 0; i < this.rad; i++) {
            const n = 4 * i;
            for (let j = 0; j < n; j++) {
                const a = j * TAU / n;
                const x = this.posX + s * i * cos(a);
                const y = this.posY + s * i * sin(a);
                const h = (this.color[0] + 20 * i) % 360;
                fill(h, this.color[1], this.color[2]);
                rect(x, y, s, s);
            }
        }
    }

}