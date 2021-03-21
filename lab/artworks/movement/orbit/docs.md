# Connected Orbits

<style>n{color:#0080ff;font-family:"Segoe Print"}</style>

<small>Visit: http://mariaguell.cat/AD/orbit/</small>

>A love story between two circular orbits and milions of high transparency lines

## Descripció

L'objectiu és copiar a [r/ejgen](https://www.reddit.com/r/generative/comments/jqiv25/orbits_in_orbits/) per practicar p5js.

La idea bàsica on gira l'algorisme és crear orbites circulars amb diferents velocitats i dibuixar una línia entre els dos "planetes".

<n>Hi ha un document a la carpeta d'artworks generatius amb les referències del projecte.</n>

## Estètica

Les regles d'estètica general:

* Fons: `8`
* Línies de les figures:
	* **Color**:
		* To: canvia depenent del planeta
		* Saturació: `80%`
		* Brillantor: `70%`
		* Transparència: `0.5/1`
	* **Gruix**: `1` pt

## Detalls tècnics

Per poder gestionar els planetes, s'ha creat la classe `Planet`.

Aquesta classe conté l'atribut `Planet.satellites` que permet que cada planeta tingui diferents *llunes*. Cada lluna és un objecte *Planet* que s'allotgen al Planeta pare de manera recursiva.

<n>Quan s'inicialitza un planeta, es creen diferents slides per controlar les variables d'aquest i els seus satèl·lits. Llàstima que no permet gestionar el número de satèl·lits.</n>

### Estructura de fitxers:

```css
orbit
├── results
│   ├── index.md
│   └── ...
├── references
│   ├── index.md
│   └── ...
├── index.html
├── estils.css
├── p5js.js
├── sketch.js
├── Planet.js
└── docs.md
```

<n>Què són a quests fitxers?</n>

* `/references`: aquesta carpeta conté un recull d'imatges d'altres projectes que he rescatat d'internet i que han servit d'inspiració i aprenentatge amb per desenvolupar aquesta eina.
* `/results`: aquesta carpeta conté un recull d'imatges aconseguides amb aquesta eina i el codi que cal enganxar a la consola del navegador per replicar-les.
* `index.html` i `estils.css`: <n>...</n>
* `p5js.js`: <n>La llibreria</n>
* `sketch.js`: <n>El programa principal</n>
* `Planet.js`: <n>La classe `Planet` ^^</n>
* `docs.md`: <n>Què creus que estàs llegint? ;)</n>

### Programa principal

<n>...</n>

<n>A la llista unions està composta de subllistes que contenen satèl·lits dels quals s'hauria de dibuixar una línia que els uneixi. Si aquestes llistes només contenen un element, es dibuixa un punt.</n>

### Classe `Planet`

<n>...</n>

## Versions

No tinc clar quina és la direcció que he de donar a aquest algoritme, així que de moment hi ha diferents versions del projecte amb diferents enfocaments.

* **v1** (controlable) Lab: la pantalla té diferents *slides* que permeten que l'usuari controli les variables de *radi* i *velocitat* de cada una de les òrbites, però no permet crear noves òrbites ni modificar la jerarquia d'aquestes.
	* ***v1.5***: Com que no resultava gens pràctic, he creat un document amb diferents figures i les comandes js per inicialitzar els planetes amb les seves respectives variables per poder fer *copy&paste* des de la consola i carregar la figura.
* **v2** (random) Generativa: en lloc de ser controlada per l'usuari, es genera de manera aleatòria.
* **v3** LAB: ...

*****

## <n>To Do</n>

* [ ] Documentar la classe `Planet`

<n>¿?  Potser enlloc d'Orbits s'hauria d'anomenar "Generative Drawing".</n>

<n>¿?  Investigar el concepte "Organic Painting"</n>