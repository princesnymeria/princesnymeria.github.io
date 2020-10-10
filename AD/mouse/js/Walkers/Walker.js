class Walker {

    constructor() {
        this.name = "Walker";

        this.posX = 0;
        this.posY = 0;
        this.isActive = false;
    }

    getName() {
        return this.name;
    }

    setMousePosition(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    setIsActive(isActive) {
        this.isActive = isActive;
    }

    update() {
        console.log("Actualitzar walker");
    }

    display() {
        stroke('#ffffff');
        strokeWeight(10);
        point(this.posX, this.posY);
    }

}