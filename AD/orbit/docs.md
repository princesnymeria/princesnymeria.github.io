# Connected Orbits

<style>n{color:#0080ff;font-family:"Segoe Print"}</style>

<small>Visit: http://mariaguell.cat/AD/orbit/</small>

>A love story between two circular orbits and milions of high transparency lines

## Descripció

L'objectiu és copiar a [r/ejgen](https://www.reddit.com/r/generative/comments/jqiv25/orbits_in_orbits/) per practicar p5js.

La idea bàsica on gira l'algorisme és crear orbites circulars amb diferents velocitats i dibuixar una línia entre els dos "planetes".

## Estètica

Les regles d'estètica general:

* Fons: `8`
* Linies de les figures:
	* **Color**:
		* To: canvia depenent del planeta
		* Saturació: `80%`
		* Brillentor: `70%`
		* Transparència: `0.5/1`
	* **Gruix**: `1` pt

## Detalls tècnics

Per poder gestionar els planetes, s'ha creat la classe `Planet`.

Aquesta classe conté l'atribut `Planet.satellites` que permet que cada planeta tingui diferents *llunes*. Cada lluna és un objecte *Planet* que s'allotjen al Planeta pare de manera recursiva.

### Estructura de fitxers:

```css
orbit
├── js
│   └── p5js
├── results
│   ├── index.md
│   └── ...
├── references
│   ├── index.md
│   └── ...
├── index.html
├── estils.css
├── sketch.js
├── Planet.js
└── docs.md
```

### Programa principal

<n>...</n>

### Classe `Planet`

<n>...</n>

## <n>To Do</n>

* [ ] Fer un sistema de importació via consola per poder carregar les figures descobertes anteriorment.