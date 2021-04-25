# Connected Orbits

<style>n{color:#0080ff;font-family:"Segoe Print"}</style>

<small>Visit: https://markralovna.github.io/gallery/orbit/</small>

> A love story between two circular orbits and millions of high transparency lines

## Descripció

L'objectiu és copiar la idea de [r/ejgen](https://www.reddit.com/r/generative/comments/jqiv25/orbits_in_orbits/) per practicar p5js.

La idea bàsica on gira l'algorisme és crear planetes que girin sobre planetes a diferents velocitats i dibuixar una línia entre els dos "planetes".

## Detalls tècnics

Per poder gestionar els planetes, s'ha creat la classe `Planet`.

Aquesta classe conté l'atribut `Planet.satellites` que permet que cada planeta tingui diferents *llunes*. Cada lluna és un objecte *Planet* que s'allotgen al Planeta pare de manera recursiva.

<n>Quan s'inicialitza un planeta, es creen diferents slides per controlar les variables d'aquest i els seus satèl·lits. Llàstima que no permet gestionar el nombre de satèl·lits.</n>

### Estructura de fitxers:

```css
orbit
├── results
│   ├── index.md
│   └── ...
├── index.html
├── estils.css
├── p5js.js
├── sketch.js
├── Planet.js
└── docs.md
```

<n>Què són aquests fitxers?</n>

* `/results`: aquesta carpeta conté un recull d'imatges aconseguides amb aquesta eina i el codi que cal enganxar a la consola del navegador per replicar-les.
* `index.html` i `estils.css`: <n>...</n>
* `p5js.js`: <n>La llibreria</n>
* `sketch.js`: <n>El programa principal</n>
* `Planet.js`: <n>La classe `Planet` ^^</n>
* `docs.md`: <n>Què creus que estàs llegint? ;)</n>

### Programa principal

<n>...</n>

<n>La funció `loadPlanets()` s'encarrega d'inicialitzar tots els objectes de la classe planeta amb els seus corresponents planetes</n>

<n>Si es clica espai apareix la interfície gràfica...</n>

<n>El programa permet carregar *sliders* per controlar variables, però és gens pràctic</n>

### Classe `Planet`

<n>La classe `Planet` defineix un planeta amb la seva òrbita i color.</n>

#### Atributs

* **Posició del centre de l'òrbita** (`Vector orbitCenter`)
* **Radi de l'òrbita** (`int orbitRadius`)
* **Velocitat** (`float speed`): velocitat en què el planeta gira dins la seva òrbita
* **Fase** (`float(0-TAU) fase`): posició angular (en radians) en que es troba el planeta dins la seva òrbita.
* **Color** (`int(0-360) color`): color (en HSLa) del planeta.
* **Fills** (`Array[Planet] satellites`): llunes del planeta. És una *array* d'objectes de classe Planeta.

#### Mètodes

* `constructor ( DomObj controllerContainer, float orbitRadius, float speed, int colorHue ) : void`: constructor.
* `addSatellite ( Planet planet ) : void`: afegeix el paràmetre donat a l'array `satellites`.
* `setOrbitCenter ( Vector pos) : void`: substitueix l'atribut `orbitCenter` pel paràmetre donat.
* `setFase ( float f) : void`: substitueix l'atribut `fase` pel paràmetre donat.
* `updateSpeed ( Obj ev ) : void`: <n>*callback* pels `input[type=range]` de l'html refernt a l'atribut `speed`.</n>
* `updateRadius ( Obj ev ) : void`: <n>*callback* pels `input[type=range]` de l'html refernt a l'atribut `orbitRadius`.</n>
* `loadControlers ( DomObj container, int initValue, Function callback ) : void`: <n>Afegeix `input[type=range]` al DOM.
* `get position ( ) : Vector`: calcula  i retorna la posició actual del planeta.
* `get isLast ( ) : boolean`: retorna si el planeta és d'última generació (no llunes).
* `update ( ) : void`: actualitza la fase del planeta i els seus fills amb les conseqüents comprovacions.
* `display ( ) : void`: dibuixa la línia que uneix el planeta amb el seu pare. Només en cas de ser un planeta d'última generació.
* `displayHelper ( ) : void`: dibuixa el planeta i la seva òrbita. Va ver per entendre quines planetes hi ha i sobre què giren.
