class Skeleton extends Walker {

    constructor() {
        super();

        this.name = "Skeleton";

        this.reset();

        this.lastPosX = this.posX;
        this.lastPosY = this.posY;

        //..
    }

    update() {
        
    }

    reset() {
        fill(255);
        stroke(255);
        strokeWeight(1);
    }

    display() {
        let d = int(dist(this.lastPosX, this.lastPosY, this.posX, this.posY));
        if (d > 100) {
            line(this.lastPosX, this.lastPosY, this.posX, this.posY);
            circle(this.posX, this.posY, 10);
            this.lastPosX = this.posX;
            this.lastPosY = this.posY;
        }
    }
}