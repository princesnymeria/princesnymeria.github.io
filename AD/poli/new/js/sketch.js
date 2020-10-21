import { GLTFLoader } from './lib/GLTFLoader.js';
import { OrbitControls } from './lib/OrbitControls.js';


/* ╔════════════════════════════════════════════════╗
   ║                                                ║
   ║             PREPERACIÓ DE L'ESCENA             ║
   ║                                                ║
   ╚════════════════════════════════════════════════╝ */

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 2, window.innerWidth / window.innerHeight, 0.1, 1000 );


/* ┌──────────────────────────────┐
   │        Renderització         │
   └──────────────────────────────┘ */

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xC5C5C3 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


/* ┌──────────────────────────────┐
   │             Llum             │
   └──────────────────────────────┘ */
			
var ambientLight = new THREE.AmbientLight( 0xFFFFFF );
scene.add( ambientLight );

var directionalLight = new THREE.DirectionalLight( 0xFF22FF );
directionalLight.position.set( 50, 50, 50 );
scene.add( directionalLight );

var directionalLight2 = new THREE.DirectionalLight( 0xFF22FF );
directionalLight2.position.set( -50, -50, -50 );
scene.add( directionalLight2 );

var pointLight = new THREE.PointLight( 0x44FFFF, 10, 100 );
pointLight.position.set( -50, 50, 50 );
scene.add( pointLight );

var pointLight2 = new THREE.PointLight( 0x44FFFF, 10, 100 );
pointLight2.position.set( 50, -50, -50 );
scene.add( pointLight2 );

var pointLight3 = new THREE.PointLight( 0xFFFF44, 10, 55 );
pointLight3.position.set( 0, 0, 50 );
scene.add( pointLight3 );

var pointLight4 = new THREE.PointLight( 0xFFFF44, 10, 55 );
pointLight4.position.set( 0, 0, -50 );
scene.add( pointLight4 );


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

var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

loader.load(
	'./models/icosahedron.glb',
	function ( gltf ) {
		scene.add( gltf.scene );
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log( 'An error happened' );
	}
);





/* ╔════════════════════════════════════════════════╗
   ║                                                ║
   ║                    ANIMACIÓ                    ║
   ║                                                ║
   ╚════════════════════════════════════════════════╝ */

function animate() {
requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
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
    var line = new THREE.Line( geometry, material );
    scene.add( line );
    renderer.render( scene, camera );
});
