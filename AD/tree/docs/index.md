# Arbre Interactiu amb LeapMotion

<style>n{color:#0080ff;font-family:"Segoe Print"}</style>

## Membres de l'equip

* Maria Güell
* Xavier Moll
* Biel Romaní

## Idea

### Projecció

Es projectarà un arbre a una paret blanca davant de les papereres de reciclatge de la universitat. L'arbre patirà lleugeres transformacions cada vegada que es llanci quelcom a les escompraries.

![Cubells on es projectarà l'arbre](/entrega/lloc_projecci0.jpg)

### Interacció

Quan algú llanci quelcom a les escombreries, l'arbre reaccionarà depenent de la paparera on s'hagi tirat. La següent taula resumeix la interacció:

| Paparera |     Reacció de l'arbre    |
|----------|---------------------------|
| Orgànic  | <n>li surten branques</n> |
| Plàstic  | <n>colors???? </n>        |
| Paper    | <n>L'arbre creix </n>     |

### Estètica

<n>...</n>

#### Musica

La música serà més/menys hostil depenent de la salut de l'arbre:

- **So vent**: https://www.youtube.com/watch?v=zB-Y5OswETY
- **So ocells cantant**: https://www.youtube.com/watch?v=bKRsCZYZAdc

* <n>ARBRE PETIT -> SO HOSTIL</n>
* <n>ARBRE GRAN -> SO AGRADABLE.</n>
* <n>EL VOLUM DEL SO HOSRTIL ES INVERSAMENT PROPORCIONAL A LA MIDA DE L'ARBRE. EL VOLUM DEL SO AGRADABLE HA DE SER PROPORCIONAL A LA MIDA DE L'ARBRE</n>

## Detalls tècnics

### Codi principal

L'estructura del programa principal és:

- Inicialització de variables
- `preload()`
- `setup()`
	- Creació del canvas
	- Definició del *framerate*
	- Inicialització de l'arbre
- `draw()`
	- Lectura de *LeapMotion**
	- Assignació de paràmeters a l'arbre
	- Update and Display

### Classe Tree

La classe Tree és la classe que defineix l'objecte principal del programa: l'arbre. Aquest objecte es construeix dins del `setup()` i se li actualitzen els valors atributs principals a cada iteració del `draw()` on també es redibuixa.

Es redibuixa a través del mètode `Tree.drawTree()` que dibuixa una un tronc i les seves branques de manera recursiva.

* Atributs:
  * **size** (*int[2]*): <n>¿?¿?</n>
  * **color** (*int[3]*): el to (*hue*) del tronc. La saturació i la brillentor estan fixades. Cada branca té un to lleugerament inferior al del seu pare.
  * **vel** (*float(0-15)*): la velocitat en que canvia el color.
  * **numBranches** (*int(0-10)*): el número de branques té el tronc. Les filles tindràn una branca menys a cada generació.
  * **angleBetweenBranches** (*float(0-2PI)*): la separació en *rad* que hia entre branques germanes.
  * **colorDiff** (*float(0-20)*): diferència de color entre generacions de branques.
  * **brLenRatio** (*float(0-1)*): proporció de les branques filla respecte la branca mare.
  * **lenght** (*float*): altura del tronc de l'arbre
  * **backgroundAlpha** (*float(0-1)*): transparencia del fons (sembla que deixi un rastre per on passa el moviment).
* Mètodes
  * **update()**: augmenta `color[0]` del tronc depenent de `vel`.
  * **display()**: <n>...</n>
  * **drawTree()**: <n>...</n>

### Circuit

<n>Circuit</n>

<n>dlkfgjldkfg</n>

#### Components

| Num | Quantitat      |
|-----|----------------|
| 1   | Arduino Uno R3 |
| 3   | 10 kΩ Resistor |
| 3   | Photoresistor  |

<n>codi</n>

<n>...</n>

### Comunicacio Serie

<n>...</n>

## Referències

- [Idea de l'arbre](https://editor.p5js.org/Lukalot/sketches/H1iMK5tum)