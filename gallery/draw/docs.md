# Magic Drawing

<style> n { color: #0080ff; font-family: "Segoe Print" } </style>

<small>Visit: https://markralovna.github.io/gallery/draw/</small>

Appweb per dibuixar coses relaxants.

## Estructura de fitxers:

```css
draw
├── 1.html
├── 2.html
├── 3.html
├── functions.js
├── estils.css
└── docs.md
```

## <n>Artwork</n>

### Symetrical Drawing (Round) (Mandales)

#### Descripció

La idea és tenir una eina que permeti crear dibuixos atractius sense esforç.

El programa dibuixa punts al punt de la pantalla on l'usuari dibuixa i el replica de manera fractal.

A través de la interfície gràfica, el programa permet:

* Esborrar el llenç (botó)
* Seleccionar el nombre de simetries (input, range)
* Seleccionar quant tarda a esborrar-se la traça (input, range)
* Modificar el gruix de la traça (input, range)
* Canviar el mode * (botó)
* Tornar als valors per defecte dels rangs (botó)

\* El programa funciona de dues maneres:

1. Que a cada iteració del `draw` es dibuixi un punt on hi hagi el cursor.
2. Que a cada iteració del `draw` es dibuixi una línia al punt on hi hagi el cursor i el punt anteror.

#### Estètica

L'estètica de la pantalla passa per:

* **Formes**:
	* Arrodonides
* **Colors**: colors brillants sobre fons fosc
	* **Fons**: `#1F1F1F`
	* **Text**: `#F8F8F8AA`
	* **Elements**:
		* Saturació: 80%, Brillantor: 25%, Transparència: 80%
		* Tons CMYk → 45, 180, 315

#### Detalls tècnics

##### Programa principal

* Declaració de constants i variables:
	* `iptSym`, `iptAlfa`
	* `fillColor = [0, 80, 70]`
* `setup()`
	* Inicialització de les variables per les dimensions del canvas.
	* Creació del canvas.
	* Configuració del *framerate*.
	* Configuració dels events referents al DOM (crida a `setEvents()`)
	* Configuració del canvas (crida a `clearCanvas()`)
* `draw()`
	* Actualització de color (`updateColor()`)
	* Comprobar si el ratolí està pres:
		* Si ho està, dibuixar a la posició clicada (`drawSymmetrically()`)

##### Funcions auxiliars

* `updateColor()`
	* Inicialitzar les variables referents al color de fons depenent de la opcitat i el to.
	* Actualitzar el to de la variable del color principal.
	* Actualitzar el color principal.
* `drawSymmetrically()`
	* capturar la posició del mouse
	* per cada simetria:
		* Rotar el canvas la part proporcional
		* Dibuixar a la part proporcional
* `clearCanvas()`
	* Configurar el mode angular. Radians.
	* Omplir el background.
	* Configurar el mode de color. HSL.
	* Configurar el mode de línia. `noStroke()`. 
* `setEvents()`
	* Afegir l'event al botó per refrescar.
	* Guardar la ruta dels objectes *sliders* del DOM.

### Grid Drawing (Square) (Chess)

<n>Fer!</n>

### Pyramid Drawing (Triangle) (<n>...</n>)

<n>S'ha de fer tot l'artwork</n>
