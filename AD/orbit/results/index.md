# Figures descobertes

Resum de les formes més maques descobertes juntament amb el que cal afegir a la funció `loadPlanets()` per aconseguir-les:

<style>img{ width: 750px; display: block; margin: 0 auto; }</style>

## Basic

Aquest és el model per defecte del programa.

![](basic.png)


```js
function loadPlanets() {
	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 1, 0, 60);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	var earth, moon;

	earth = new Planet(cont, 500, .001, 120);
	moon = new Planet(cont, 350, .004, 180);
	earth.addSatellite( moon );
	sun.addSatellite( earth );
	unions.push([earth, moon]);
}
```

## CMY Eye

![](CMY_Eye.png)

```js
function loadPlanets() {
	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 1, 0, 60);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	var earth, moon;

	earth = new Planet(cont, 500, .001, 120);
	moon = new Planet(cont, 350, .004, 180);//cyan
	earth.addSatellite( moon );
	sun.addSatellite( earth );
	unions.push([earth, moon]);

	earth = new Planet(cont, 500, .001, 120);
	earth.setFase(TAU/1.5);
	moon = new Planet(cont, 350, .004, 60);//yellow
	earth.addSatellite( moon );
	sun.addSatellite( earth );
	unions.push([earth, moon]);

	earth = new Planet(cont, 500, .001, 120);
	earth.setFase(TAU/3);
	moon = new Planet(cont, 350, .004, 300);//magenta
	earth.addSatellite( moon );
	sun.addSatellite( earth );
	unions.push([earth, moon]);
}
```

## Trisquel

![](Trisquel.png)

```js
function loadPlanets() {
	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 0, 0, 0);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	var earth, moon, submoon;

	earth = new Planet(cont, 500, .001, 120);
	earth.setFase(0);
	sun.addSatellite( earth );
	moon = new Planet(cont, 350, .004, 180);//cyan
	moon.setFase(0);
	earth.addSatellite( moon );
	submoon = new Planet(cont, 150, .002, 210);
	submoon.setFase(0);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);

	earth = new Planet(cont, 500, .001, 120);
	earth.setFase(TAU/1.5);
	sun.addSatellite( earth );
	moon = new Planet(cont, 350, .004, 60);//yellow
	moon.setFase(TAU/1.5);
	earth.addSatellite( moon );
	submoon = new Planet(cont, 150, .002, 90);
	submoon.setFase(TAU/1.5);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);

	earth = new Planet(cont, 500, .001, 120);
	earth.setFase(TAU/3);
	sun.addSatellite( earth );
	moon = new Planet(cont, 350, .004, 300);//magenta
	moon.setFase(TAU/3);
	earth.addSatellite( moon );
	submoon = new Planet(cont, 150, .002, 330);
	submoon.setFase(TAU/3);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);
}
```

## Trinquete Cloud

![](Trinquete_Cloud.png)

```js
function loadPlanets() {
	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 0, 0, 0);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	var earth, moon, submoon;

	earth = new Planet(cont, 500, .001, 120);
	earth.setFase(0);
	sun.addSatellite( earth );
	moon = new Planet(cont, 150, .004, 180);//cyan
	moon.setFase(0);
	earth.addSatellite( moon );
	submoon = new Planet(cont, 350, .002, 210);
	submoon.setFase(0);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);

	earth = new Planet(cont, 500, .001, 120);
	earth.setFase(TAU/1.5);
	sun.addSatellite( earth );
	moon = new Planet(cont, 150, .004, 60);//yellow
	moon.setFase(TAU/1.5);
	earth.addSatellite( moon );
	submoon = new Planet(cont, 350, .002, 90);
	submoon.setFase(TAU/1.5);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);

	earth = new Planet(cont, 500, .001, 120);
	earth.setFase(TAU/3);
	sun.addSatellite( earth );
	moon = new Planet(cont, 150, .004, 300);//magenta
	moon.setFase(TAU/3);
	earth.addSatellite( moon );
	submoon = new Planet(cont, 350, .002, 330);
	submoon.setFase(TAU/3);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);
}
```

## TriCloud

![](TriCloud.png)

```js
function loadPlanets() {

	const COLOR1 = 180 ; // cyan
	const COLOR2 = 60  ; // yellow
	const COLOR3 = 300 ; // magenta

	const EARTH_RADIUS   =   300 ;	const EARTH_SPEED    =  .001 ;
	const MOON_RADIUS    =   250 ;	const MOON_SPEED     =  .004 ;
	const SUBMOON_RADIUS =   150 ;	const SUBMOON_SPEED  =  .008 ;

	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 0, 0, 0);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	var earth, moon, submoon;

	earth = new Planet(cont, EARTH_RADIUS, EARTH_SPEED, 120);
	earth.setFase(0);
	sun.addSatellite( earth );
	moon = new Planet(cont, MOON_RADIUS, MOON_SPEED, COLOR1);
	moon.setFase(0);
	earth.addSatellite( moon );
	submoon = new Planet(cont, SUBMOON_RADIUS, SUBMOON_SPEED, 210);
	submoon.setFase(0);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);

	earth = new Planet(cont, EARTH_RADIUS, EARTH_SPEED, 120);
	earth.setFase(TAU/1.5);
	sun.addSatellite( earth );
	moon = new Planet(cont, MOON_RADIUS, MOON_SPEED, COLOR2);
	moon.setFase(TAU/1.5);
	earth.addSatellite( moon );
	submoon = new Planet(cont, SUBMOON_RADIUS, SUBMOON_SPEED, 90);
	submoon.setFase(TAU/1.5);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);

	earth = new Planet(cont, EARTH_RADIUS, EARTH_SPEED, 120);
	earth.setFase(TAU/3);
	sun.addSatellite( earth );
	moon = new Planet(cont, MOON_RADIUS, MOON_SPEED, COLOR3);
	moon.setFase(TAU/3);
	earth.addSatellite( moon );
	submoon = new Planet(cont, SUBMOON_RADIUS, SUBMOON_SPEED, 330);
	submoon.setFase(TAU/3);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);
}
```

## Trinity

![](Trinity.png)

```js
function loadPlanets() {

	const COLOR1 = 180 ; //cyan
	const COLOR2 = 60  ; //yellow
	const COLOR3 = 300 ; //magenta

	const EARTH_RADIUS   =   350 ;	const EARTH_SPEED    =  .001 ;
	const MOON_RADIUS    =   400 ;	const MOON_SPEED     =  .002 ;
	const SUBMOON_RADIUS =   300 ;	const SUBMOON_SPEED  =  .008 ;

	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 0, 0, 0);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	var earth, moon, submoon;

	earth = new Planet(cont, EARTH_RADIUS, EARTH_SPEED, 120);
	earth.setFase(0);
	sun.addSatellite( earth );
	moon = new Planet(cont, MOON_RADIUS, MOON_SPEED, COLOR1);
	moon.setFase(0);
	earth.addSatellite( moon );
	submoon = new Planet(cont, SUBMOON_RADIUS, SUBMOON_SPEED, 210);
	submoon.setFase(0);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);

	earth = new Planet(cont, EARTH_RADIUS, EARTH_SPEED, 120);
	earth.setFase(TAU/1.5);
	sun.addSatellite( earth );
	moon = new Planet(cont, MOON_RADIUS, MOON_SPEED, COLOR2);
	moon.setFase(TAU/1.5);
	earth.addSatellite( moon );
	submoon = new Planet(cont, SUBMOON_RADIUS, SUBMOON_SPEED, 90);
	submoon.setFase(TAU/1.5);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);

	earth = new Planet(cont, EARTH_RADIUS, EARTH_SPEED, 120);
	earth.setFase(TAU/3);
	sun.addSatellite( earth );
	moon = new Planet(cont, MOON_RADIUS, MOON_SPEED, COLOR3);
	moon.setFase(TAU/3);
	earth.addSatellite( moon );
	submoon = new Planet(cont, SUBMOON_RADIUS, SUBMOON_SPEED, 330);
	submoon.setFase(TAU/3);
	moon.addSatellite( submoon );
	unions.push([moon, submoon]);
}
```

## Octinity

![](Octinity.png)

```js
function loadPlanets() {

	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 0, 0, 0);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	const n = 8;

	const EARTH_RADIUS   =   350 ;	const EARTH_SPEED    =  .001 ;
	const MOON_RADIUS    =   400 ;	const MOON_SPEED     =  .002 ;
	const SUBMOON_RADIUS =   300 ;	const SUBMOON_SPEED  =  .008 ;

	const INCR_ANGLE = TAU/n;
	const INCR_COLOR = 360/n;

	var earth, moon, submoon;
	var angle = 0;
	var color = 0;

	for (let i = 0; i < n; i++) {
		earth = new Planet(cont, EARTH_RADIUS, EARTH_SPEED, 120);
		earth.setFase(angle);
		sun.addSatellite( earth );

		moon = new Planet(cont, MOON_RADIUS, MOON_SPEED, color-30);
		moon.setFase(angle);
		earth.addSatellite( moon );

		submoon = new Planet(cont, SUBMOON_RADIUS, SUBMOON_SPEED, color);
		submoon.setFase(angle);
		moon.addSatellite( submoon );

		unions.push([moon, submoon]);

		angle += INCR_ANGLE;
		color += INCR_COLOR;
	}
}
```

<!--

## xxx

![](xxx.png)

```js
function loadPlanets() {
	const cont = document.getElementById('sliderContainer');
	sun = new Planet(cont, 0, 0, 0);
	sun.setOrbitCenter( createVector(CANVAS_WIDTH * .5, CANVAS_HEIGHT * .5 ));

	var earth, moon, submoon;

	//...
	
	//showHelper = true;
}
```

-->