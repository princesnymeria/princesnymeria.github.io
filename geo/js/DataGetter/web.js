class WebDataGetter {

    constructor(numSliders, names) {
        this.inputs = [];
        this.currentAnimation = 0;
        this.createInputRanges(numSliders);
        this.createSelectButtons(names);
        this.createStyles();
    }

    createInputRanges(numSliders) {
        var b = document.body;
        var c = document.createElement("div");
        c.id = "sliderContainer";
        for (let i = 1; i <= numSliders; i++) {
            var r = document.createElement("input");
            r.type = "range";
            r.id = "ip" + i;
            r.min = 0;
            r.max = 127;
            r.step = 1;
            this.inputs.push(r);
            c.appendChild(r);
        }
        b.appendChild(c);
    }

    createSelectButtons(names) {
        var c = document.createElement("div");
        c.id = "buttonContainer";
        for (let i = 0; i < names.length; i++) {
            var b = document.createElement("button");
            b.innerText = names[i];
            b.animIndx = i;
            b.addEventListener('click', this.changeAnimation);
            c.appendChild(b);
        }
        document.body.appendChild(c);
    }

    createStyles() {
        var sheet = document.styleSheets[0];
        sheet.insertRule("#sliderContainer, #buttonContainer { position: absolute }");
        sheet.insertRule("#sliderContainer input, #buttonContainer button { display: block; margin-top: 20px }");
        sheet.insertRule("#sliderContainer { top: 50px; left: 50px; }");
        sheet.insertRule("#buttonContainer { top: 50px; right: 50px; }");
        sheet.insertRule("#sliderContainer input { width: 250px; }");
        sheet.insertRule("#buttonContainer button { width: 150px; border-radius: 50px; padding: 10px 20px; background: #0000; }");
        sheet.insertRule("#buttonContainer button { border: 3px solid #f8f8f8; color: #f8f8f8; font-size: 18px; font-family: Arial, Helvetica, sans-serif; }");
        sheet.insertRule("#buttonContainer button:hover { background: #000; }");
    }

    getSlideValues() {
        var res = [];
        for (let i = 0; i < this.inputs.length; i++) {
            const element = this.inputs[i];
            res.push(element.value);
        }
        return res;
    }
    
    getCurrentAnimation() {
        return this.currentAnimation;
    }

    changeAnimation(ev) {
        selectAnimIndx = ev.target.animIndx;
    }

}