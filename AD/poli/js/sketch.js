import { GLTFLoader } from './lib/GLTFLoader.js';
import { OrbitControls } from './lib/OrbitControls.js';


/* ╔════════════════════════════════════════════════╗
   ║                                                ║
   ║             PREPERACIÓ DE L'ESCENA             ║
   ║                                                ║
   ╚════════════════════════════════════════════════╝ */

var scene = new THREE.Scene();
window.scene = scene;
var camera = new THREE.PerspectiveCamera( 2, window.innerWidth / window.innerHeight, 0.1, 1000 );


/* ┌──────────────────────────────┐
   │        Renderització         │
   └──────────────────────────────┘ */

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x080808 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


/* ┌──────────────────────────────┐
   │             Llum             │
   └──────────────────────────────┘ */

var directionalLight = new THREE.DirectionalLight( 0x880088 );
directionalLight.position.set( 50, 50, 50 );
scene.add( directionalLight );

var directionalLight2 = new THREE.DirectionalLight( 0x880088 );
directionalLight2.position.set( -50, -50, -50 );
scene.add( directionalLight2 );

var pointLight = new THREE.PointLight( 0x008888, 10, 100 );
pointLight.position.set( -50, 50, 50 );
scene.add( pointLight );

var pointLight2 = new THREE.PointLight( 0x008888, 10, 100 );
pointLight2.position.set( 50, -50, -50 );
scene.add( pointLight2 );

var pointLight3 = new THREE.PointLight( 0x888800, 10, 55 );
pointLight3.position.set( 0, 0, 50 );
scene.add( pointLight3 );

var pointLight4 = new THREE.PointLight( 0x888800, 10, 55 );
pointLight4.position.set( 0, 0, -50 );
scene.add( pointLight4 );


/* ┌──────────────────────────────┐
   │             Fons             │
   └──────────────────────────────┘ */

/*var geometry = new THREE.PlaneGeometry( 5, 20, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );*/


/* ┌──────────────────────────────┐
   │       Càmera i controls      │
   └──────────────────────────────┘ */

camera.position.z = 5;

var controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 20, 100 );
controls.update();





/* ╔════════════════════════════════════════════════╗
   ║                                                ║
   ║                CÀRREGA DEL SOLID               ║
   ║                                                ║
   ╚════════════════════════════════════════════════╝ */

var loader = new GLTFLoader();

window.loadSolid = function(filePath) {
	loader.load(
		filePath,
		function ( gltf ) {
			window.solid = gltf.scene;
			scene.add( solid );
		},
		function ( xhr ) { console.log( ( filePath + ' ' + xhr.loaded / xhr.total * 100 ) + '% loaded' ); },
		function ( error ) { console.log( 'An error happened' ); }
	);
}





/* ╔════════════════════════════════════════════════╗
   ║                                                ║
   ║                    ANIMACIÓ                    ║
   ║                                                ║
   ╚════════════════════════════════════════════════╝ */

function animate() {
requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}
animate();





/* ╔════════════════════════════════════════════════╗
   ║                                                ║
   ║              MATERIAL PER DEBUGAR              ║
   ║                                                ║
   ╚════════════════════════════════════════════════╝ */

/* ┌──────────────────────────────┐
   │            Línies            │
   └──────────────────────────────┘ */

if (window.MODE_DEBUG) {
	var materialLight = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

	var lines = [
		[new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(  50,  50,  50 )],//   VARIABLE: directionalLight          TIPUS: llum (lila)
		[new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -50, -50, -50 )],//   VARIABLE: directionalLight2         TIPUS: llum (lila)
		[new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -50,  50,  50 )],//   VARIABLE: pointLight                TIPUS: llum (blau)
		[new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(  50, -50, -50 )],//   VARIABLE: pointLight2               TIPUS: llum (blau)
		[new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(   0,   0,  50 )],//   VARIABLE: pointLight3               TIPUS: llum (groc)
		[new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(   0,   0, -50 )]//    VARIABLE: pointLight4               TIPUS: llum (groc)
	];

	lines.forEach(points => {
		var geometry = new THREE.BufferGeometry().setFromPoints( points );
		var line = new THREE.Line( geometry, materialLight );
		scene.add( line );
		renderer.render( scene, camera );
	});
}