class Circles extends Component {

    constructor() {
        super();
        this.name = "Circles";
        this.nodeProperties['ple'] = {
            "v":  false,
            "name": "Filled?",
            "default": false,
            "type": "bool"
        };
    }

    display() {
        if (this.selected) stroke(documentStyle['selected']);
        const p = this.nodeProperties['ple'].v;
        if (p) fill(documentStyle['foreground']);
        this.rotateViewAndDrawnComponent();
        if (p) fill(documentStyle['background']);
        if (this.selected) stroke(documentStyle['foreground']);
    }
    
    drawComponent(index) {
        let R = this.ringProperties["radi"].v * 0.34;
        let r = this.nodeProperties["radi"].v;
        circle(R, R, r);
    }

}