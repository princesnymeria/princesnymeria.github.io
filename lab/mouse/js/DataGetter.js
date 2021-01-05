class DataGetter {

	constructor(defaultSelected=0, animacions) {
		this.currentAnimation = defaultSelected;
		this.slidersValues = [0.4];

		const contSlider = document.getElementById('sliderContainer');
		this.createSlider(contSlider, [], 0);

		const contButton = document.getElementById('buttonContainer');
		for (let i = 0; i < animacions.length; i++)
			this.createButton(contButton, animacions, i);
	}
	
	createSlider(contanidor, animacions, i) {
		var s = document.createElement("input");
		s.type = 'range';
		s.min = 0;
		s.max = 127;
		const that = this;
		s.addEventListener('change', function(ev) {
			var a = s.value;
			a = parseInt(a);
			a = map(a, s.min, s.max, 0, 1);
			that.slidersValues[i] = a;
		});
		contanidor.appendChild(s);
	}

	createButton(contanidor, animacions, i) {
		var anim = animacions[i];
		var b = document.createElement("button");
		b.innerText = anim.getName();
		//b.classList.add('art-deco-button');
		if(i == this.currentAnimation) b.classList.add('selected');
		b.animIndx = i;
		const that = this;
		b.addEventListener('click', function(ev) {
			that.currentAnimation = ev.target.animIndx;
			document.querySelector(".selected").classList.remove('selected');
			ev.target.classList.add('selected');
		});
		contanidor.appendChild(b);
	}

	getCurrentAnimation() {
		return this.currentAnimation;
	}

	getCurrentAlpha() {
		return this.slidersValues[0];
	}

	getSlideValues() {
		return this.slidersValues;
	}

}