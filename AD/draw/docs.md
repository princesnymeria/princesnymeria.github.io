# Symmetrical Drawing

<style>n{color:#0080ff;font-family:"Segoe Print"}</style>

<small>Visit: http://mariaguell.cat/AD/draw/</small>

Appweb per dibuixar mandales relaxants.

## Descripció

La idea és tenir una eina que permeti crear dibuixos atractius sense esforç.

El programa dibuixa punts al punt de la pantalla on l'usuari dibuixa i el replica de manera fractal.

A través de la interfície gràfica, el programa permet:

* Esborrar el llenç (botó)
* Seleccionar el nombre de simetries (input, range)
* Seleccionar quant tarda a esborrar-se la traça (input, range)

## Detalls tècnics

### Programa principal

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

### Funcions auxiliars

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

### Estructura de fitxers:

```css
draw
├── js
│   ├── p5js
│   │   ├── ...
│   ├── sketch.js
├── index.html
├── estils.css
└── README.MD
```

## <n>To do</n>

### Coses per fer

* [ ] Dibuixar ratlla entre punt i punt?

### Idees

* [ ] Afegir sliders per poder canviar:
	* [ ] Suració i brillentor del color
	* [ ] To de gris del fons
	* [ ] Gruix del pinzell
	* [ ] Framerate???
	* [ ] fill o stroke?