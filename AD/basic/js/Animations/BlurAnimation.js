class BlurAnimation extends Animation {

    constructor() {
        super();

        this.name = "...";
        
        this.color = [0, 80, 70];
        this.satStep = 2;
        this.step = this.size * 0.01;
    }

    setColor(c) {
        colorMode(RGB);
        let colRGB = color(c[0], c[1], c[2]);
        this.color[0] = hue(colRGB);
        colorMode(HSL);
    }

    update() {
        this.color[1] += this.satStep;
        if (this.color[1] >= 100 || this.color[1] <= 70) this.satStep *= -1;
    }

    display() {
        background(12);
        noStroke();
        colorMode(HSL);
        this.draw();
    }

    draw() {
        let steps = this.size / this.step;
        let s = 50 / steps;
        let r = this.size;
        let a = 0;

        colorMode(HSL);
        for (let i = 1; i < steps; i++) {
            const h = (this.color[0] + 0.5 * i) % 360;
            fill(h, this.color[1], this.color[2], a);
            circle(this.posX, this.posY, r);

            r -= this.step;
            a += 0.01;
        }
        colorMode(RGB);
    }

}