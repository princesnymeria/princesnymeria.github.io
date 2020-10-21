let anim;
let CANVAS_WIDTH, CANVAS_HEIGHT;
var comptadorsValue;
//let soVent, soOcells, soMusica;
//let progress;

/*function preload(){
	soVent=loadSound("./so/vent.mp3");
	soOcells=loadSound("./so/ocells.mp3");
	soMusica=loadSound("./so/musica.mp3");
}*/


function setup() {
	CANVAS_WIDTH = window.innerWidth;
	CANVAS_HEIGHT = window.innerHeight;

	frameRate(10);

	anim = new Tree(CANVAS_WIDTH, 800, 400, 10);
	comptadorsValue = [0, 0, 0];

	/*progress = 0;
	soOcells.setVolume(0);
	soMusica.setVolume(0);*/

	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);  
}


function draw() {
	anim.update();
	anim.display();
}


function contenidorActivat(target) {
	//progress += 0.034;
	//if (progress > 1) progress = 1;
	switch (target.alt) {
		case "Orgànic":
			sumarComptador(0);
			anim.doMakeMoreBranhces(comptadorsValue[0]);
			break;
		case "Plàstic":
			sumarComptador(1);
			anim.doColorfy(comptadorsValue[1]);
			break;
		case "Paper":
			sumarComptador(2);
			anim.doGrow(comptadorsValue[2]);
			break;
	}
	/*soVent.setVolume(1-progress);
	soOcells.setVolume(progress);
	soMusica.setVolume(progress);*/
}

function llegirSensors(){
	var c = -1;
	if(c >- 1){
		switch(c) {
			case 0:
				sumarComptador(0)
				anim.doMakeMoreBranhces(comptadorsValue[0]);
				break;
			case 1:
				sumarComptador(1)
				anim.doColorfy(comptadorsValue[1]);
				break;
			case 2:
				sumarComptador(2)
				anim.doGrow(comptadorsValue[2]);
				break;
		}
	}
}

function sumarComptador(c){
	comptadorsValue[c]++;
}

function mouseClicked() {
	/*soVent.loop();
	soOcells.loop();
	soMusica.loop();*/
}
