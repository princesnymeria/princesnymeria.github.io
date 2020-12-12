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