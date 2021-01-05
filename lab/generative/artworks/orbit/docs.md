# Connected Orbits

<style>n{color:#0080ff;font-family:"Segoe Print"}</style>

<small>Visit: http://mariaguell.cat/AD/orbit/</small>

>A love story between two circular orbits and milions of high transparency lines

## Descripció

L'objectiu és copiar a [r/ejgen](https://www.reddit.com/r/generative/comments/jqiv25/orbits_in_orbits/) per practicar p5js.

La idea bàsica on gira l'algorisme és crear orbites circulars amb diferents velocitats i dibuixar una línia entre els dos "planetes".

HI HA UNA INTERFICIE GRÀFICA QUE MOSTRA SLIDES PER MODIFICAR CERTS PARAMETRES (que caldria documentar) PERO CASI MILLOR QUE SIGUIN ALEATORIS, NO?????

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

### Classe `Planet`

<n>...</n>

## <n>To Do</n>

* [ ] Fer un sistema d'importació via consola per poder carregar les figures descobertes anteriorment.
* [ ] Documentar la classe `Planet`