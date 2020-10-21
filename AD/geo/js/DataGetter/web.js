class WebDataGetter {

	constructor(animations, defaultSelected=0) {
		this.inputs = [];
		this.currentAnimation = defaultSelected;
		var C = document.createElement("div");
		C.id = "controllersContainer";
		this.createInputRanges(animations[defaultSelected], C);
		this.createSelectButtons(animations, C, defaultSelected);
		this.createStyles();
		document.body.appendChild(C);
	}

	changeNumberInputSliders(animation) {
		var container = document.getElementById('controllersContainer');
		container.removeChild(container.childNodes[0]);
		this.createInputRanges(animation, container);
	}

	createInputRanges(animation, container) {
		var c = document.createElement("div");
		this.inputs = [];
		c.id = "sliderContainer";
		for (let i = 1; i <= animation.getNumSliders(); i++) {
			var r = document.createElement("input");
			r.type = "range";
			r.id = "ip" + i;
			r.min = 0;
			r.max = 127;
			r.step = 1;
			r.value = animation.getDefaultValue(i-1);
			this.inputs.push(r);
			c.appendChild(r);
		}
		container.insertBefore(c, container.firstChild);
	}

	createSelectButtons(animations, container, idselcted) {
		var c = document.createElement("div");
		c.id = "buttonContainer";
		for (let i = 0; i < animations.length; i++) {
			var b = document.createElement("button");
			b.innerText = animations[i].getName();
			b.classList.add('art-deco-button');
			if(i ==idselcted) b.classList.add('selected');
			b.animIndx = i;
			var self = this;
			b.addEventListener('click', function(ev) {
				self.currentAnimation = ev.target.animIndx;
				self.changeNumberInputSliders(animations[i]);
				document.querySelector(".selected").classList.remove('selected');
				ev.target.classList.add('selected');
			});
			c.appendChild(b);
		}
		container.appendChild(c);
	}

	createStyles() {
		var sheet = document.styleSheets[0];
		this.loadArtDecoStyle();
		sheet.insertRule("@media (min-width: 600px) { #buttonContainer { overflow-y: scroll; height: calc(100vh - 100px)} }");
		sheet.insertRule("@media (max-width: 600px) { #buttonContainer button { display: inline-block; margin: 5px; } }");
		sheet.insertRule("@media (max-width: 600px) { #sliderContainer input { width: 100%; margin: 15px 0 } }");
		sheet.insertRule("@media (max-width: 600px) { #buttonContainer { text-align: center; overflow-x: scroll; display: inline-flex;} }");
		sheet.insertRule("@media (max-width: 600px) { #controllersContainer div { width: 100% } }");
		sheet.insertRule("@media (max-width: 600px) { #controllersContainer { flex-direction: column; margin: 20px; height: calc(100vh - 40px); } }");
		sheet.insertRule("#buttonContainer button:hover, #buttonContainer button.selected { background: #0008 }");
		sheet.insertRule("#buttonContainer button { border: 3px solid #f8f8f8; color: #f8f8f8; font-size: 18px; background: #0000; border-radius: 50px; padding: 10px; margin:20px }");
		sheet.insertRule("#controllersContainer div * { display: block; margin: 10px; width: 250px }");
		sheet.insertRule("#controllersContainer { display: flex; flex-direction: row; justify-content: space-between; margin: 50px }");
		sheet.insertRule("p, button, h1, h2, h3 { font-family: 'Lato', 'Segoe UI Light', 'Segoe UI', Arial, Helvetica, sans-serif; }");
		sheet.insertRule("#defaultCanvas0 { position: absolute; top: 0; left: 0; z-index: -1; }");
		sheet.insertRule("@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;900&display=swap');");
	}

	loadArtDecoStyle() {
		var sheet = document.styleSheets[0];
		sheet.insertRule("@media (max-width: 600px) { #buttonContainer .art-deco-button { margin: 15px; } }");
		sheet.insertRule("#buttonContainer .art-deco-button:hover, #buttonContainer .art-deco-button.selected, #buttonContainer .art-deco-button:hover:before, #buttonContainer .art-deco-button.selected:before, #buttonContainer .art-deco-button:hover:after, #buttonContainer .art-deco-button.selected:after { border-color: #f8f8f8; background: #0000; }");
		sheet.insertRule("#buttonContainer .art-deco-button:before { content: ''; position: absolute; top: 4px; left: -4px; right: -4px; bottom: 4px; border: 1px solid #f8f8f820; z-index: -1; }");
		sheet.insertRule("#buttonContainer .art-deco-button:after { content: ''; position: absolute; top: -4px; left: 4px; right: 4px; bottom: -4px; border: 1px solid #f8f8f835; z-index: -1; }");
		sheet.insertRule("#buttonContainer .art-deco-button { border: 1px solid #f8f8f870; color: #f8f8f8; font-size: 14px; background: #0000; border-radius: 0; }");
		sheet.insertRule("#buttonContainer .art-deco-button { position: relative; margin: 25px; padding: 10px 30px; width: 150px }");
		//sheet.insertRule("#buttonContainer .art-deco-button { font-family: 'Poiret One' }");
		//sheet.insertRule("@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');");
	}

	getCurrentAnimation() {
		return this.currentAnimation;
	}

	getSlideValues() {
		var res = [];
		for (let i = 0; i < this.inputs.length; i++) {
			const element = this.inputs[i];
			res.push(element.value);
		}
		return res;
	}

}