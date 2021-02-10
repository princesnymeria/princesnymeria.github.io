# Programació per al disseny i les arts

<style>
  img {
    display: block;
    width: 450px;
    margin: 50px auto;
  }
  div.destacat, div.extra {
    /*color: #6a737d;*/
    border-left: .25em solid #dfe2e5;
    padding: 0 1em;
    margin: 0 0 16px 0;
  }
  div.destacat { border-color: #CCEEEE }  div.destacat strong { color: #44AAAA }
  div.extra    { border-color: #EECCEE }  div.extra    strong { color: #AA44AA }
</style>

|   -   |                   -                   |
|-------|---------------------------------------|
| Títol | Programació per al disseny i les arts |
| Autor | Pau Waelder Laso i Paloma G. Díaz     |
|       | PID_00258584                          |
| Font  | [cv.uoc.edu](http://arts.recursos.uoc.edu/programacio-disseny-arts/pagina-demo/) |

L'encàrrec i la creació d'aquest recurs d'aprenentatge UOC han estat coordinats pels professors: Enric Mor i Susanna Tesconi (2019)

## Introducció

Avui dia resulta evident que el programari exerceix un paper fonamental en tots els aspectes de la nostra societat i, en particular, afecta els processos creatius d'artistes i dissenyadors. A partir de la popularització dels ordinadors personals s'ha produït una autèntica revolució en l'accés a eines de creació en un ampli ventall de disciplines que inclouen el disseny gràfic, el disseny de producte, l'arquitectura, les arts plàstiques i multimèdia.

El programari creat per una sèrie de grans empreses domina actualment el panorama professional en aquestes disciplines facilitant el treball dels creadors, però també determinant el que poden fer. Buscant anar més enllà de les possibilitats del programari comercial, alguns dissenyadors i artistes han desenvolupat els seus propis entorns de programació que, al seu torn, faciliten a altres creadors treballar directament amb codi. Això permet a cada creador desenvolupar les seves pròpies eines en funció de les necessitats de cada projecte i, també, compartir-les amb uns altres. L'ús de programari de codi obert no solament els permet accedir a noves possibilitats de creació, sinó que integra el seu treball en les aportacions de tota una comunitat de creadors i facilita la conservació futura dels seus projectes, atès que el codi de què estan fets no és propietat d'una única empresa ni està limitat a la progressiva obsolescència dels formats i les versions dels programes comercials.

Més enllà de les pròpies eines, les possibilitats que introdueix la computació en l'art i el disseny introdueixen profundes transformacions en el paper de l'artista o dissenyador i en la relació entre el producte creat i els seus usuaris.

<div class="destacat"><markdown>
Tant el **disseny paramètric** com l'art **basat en instruccions** determinen un procés de creació destinat no a un producte final, sinó a establir un sistema que permet desenvolupar múltiples solucions i adaptar-se a un conjunt de variables.
</markdown></div>

D'altra banda, la **computació evolutiva** permet generar aquestes solucions de forma automàtica, per mitjà d'una sèrie d'algorismes inspirats en els sistemes naturals. En aquest cas, l'artista o dissenyador es converteix en un selector que decideix, entre un ampli ventall de propostes, quin prototip subministrat per la màquina resulta més adequat i si aquest és el producte final o se sotmetrà a posteriors transformacions.

En el futur de l'art i el disseny assistits per ordinador emergeix la influència de les tecnologies d'intel·ligència artificial, que aporta noves possibilitats i, alhora, planteja importants reptes que redefineixen el rol del creador i la naturalesa de l'usuari, ja no com a individu sinó com a agent integrat en un sistema a què aporta informació i de què es beneficia. En aquest recurs s'exposen i analitzen totes aquestes implicacions de la computació en l'art i el disseny, alhora que planteja la qüestió següent: han de saber programar els artistes i dissenyadors?

### Objectius

Una vegada treballat i estudiat aquest recurs didàctic, els estudiants han d'haver aconseguit els objectius següents:

1. Conèixer el paper del programari en la nostra societat i la seva dimensió cultural.
2. Entendre el control que exerceix el programari en la creació amb mitjans digitals, i també els avantatges de treballar amb programari de codi obert.
3. Explorar les diferents eines de programació creativa i saber diferenciar quina eina és més adequada per a cada projecte.
4. Reconèixer els principis i les implicacions del disseny paramètric.
5. Descriure les aportacions del disseny generatiu i citar alguns exemples d'eines i productes creats amb processos de computació evolutiva.
6. Valorar les implicacions de l'ús de les tecnologies d'intel·ligència artificial en el paper dels dissenyadors i els nous models d'interacció entre l'usuari i la màquina.
7. Argumentar les raons per les quals els dissenyadors haurien de saber programar, o no.

## Programari

![Portada](@attachment/uoc/programacio_disseny_arts/portada1.png)

<cite><a href="http://arts.recursos.uoc.edu/programacio-disseny-arts/1-1-portada/">Veure la portada en funcionament</a></cite>

### Vivim en una societat del programari

<div class="destacat"><markdown>
Des de la popularització dels ordinadors personals, a mitjan anys vuitanta, l'ús de dispositius digitals i de tot tipus de programari s'ha convertit en quelcom quotidià, fins al punt d'intervenir en la majoria de les nostres activitats i experiències diàries.
</markdown></div>

Per a moltes persones, el dia comença amb el so d'una alarma programada al seu telèfon intel·ligent. Durant la nit, el seu son ha estat monitoritzat per un rellotge intel·ligent o una polsera d'activitat. Mentre desdejuna, consulta les notícies i la previsió del temps al telèfon, la tauleta o una TV intel·ligent. Camí del treball, un dispositiu mòbil l'acompanya oferint-li música, *podcasts*, vídeos, articles o novel·les. Quan arriba al treball, molt probablement s'asseurà davant d'un ordinador o haurà de consultar una pantalla. Totes aquestes activitats estan intervingudes pel programari que fa possible interactuar amb els dispositius i accedir als continguts. Però també, més enllà de l'experiència individual, els sistemes i les infraestructures que permeten que els nostres dispositius es connectin a internet i descarreguin arxius, la gestió de les línies de metro i d'autobús, els dispositius de seguretat o la climatització de l'edifici on treballem depenen d'un programari específic.

<div class="destacat"><markdown>
Per tant, el programari s'insereix en la nostra societat facilitant (o dificultant, segons el cas) una gran quantitat de processos i activitats que es produeixen diàriament i formen part del funcionament normal del nostre entorn.
</markdown></div>

Els investigadors **[Rob Kitchin i Martin Dodge][1]** distingeixen quatre **nivells d'activitat** en què intervé el programari, els quals descriuen mitjançant una sèrie de termes que fan referència al codi font:

1. **Objectes codificats (_coded objects_)**: són aquells que requereixen un programari per a funcionar, sia màquines o objectes com ara DVD i targetes de crèdit que poden ser llegits per una màquina que empra un determinat codi.
2. **Infraestructures codificades (_coded infrastructures_)**: són xarxes que connecten objectes codificats i també aquelles que estan regulades pel programari. Les xarxes de telecomunicacions (internet) i també les xarxes de transport i logística, els sistemes financers i, fins i tot, el clavegueram, l'aigua o la xarxa elèctrica pertanyen a aquesta categoria.
3. **Processos codificats (_coded processes_)**: són les transaccions i fluxos de dades que es produeixen en les infraestructures codificades.
4. **Assemblatges codificats (_coded assemblages_)**: sorgeixen de la convergència de diverses infraestructures codificades que funcionen de forma coordinada. Un exemple d'això són els sistemes de transport o els supermercats, que combinen objectes codificats (caixes registradores, targetes dels clients, etc.) amb xarxes de transport i logística, fluxos de dades, etc.

En aquests quatre nivells d'activitat, segons afirmen Kitchin i Dodge, el programari determina les interaccions i transaccions que duem a terme diàriament, donant forma a la nostra experiència i accions en els entorns que formen part del nostre dia a dia.

<div class="destacat"><markdown>
En aquests quatre nivells d'activitat, segons afirmen Kitchin i Dodge, el programari determina les interaccions i transaccions que duem a terme diàriament, donant forma a la nostra experiència i accions en els entorns que formen part del nostre dia a dia.
</markdown></div>

Per exemple, imaginem una porta d'embarcament d'un aeroport internacional: els passatgers poden identificar el seu vol gràcies a la pantalla que indica el número de vol, la seva destinació i també si ha sofert un retard o està llest per a embarcar. En el moment de l'embarcament, un lector permet registrar el bitllet de cada passatger a mesura que aquests pugen a l'avió. Si el programari que s'encarrega de mostrar la informació actualitzada a les pantalles o el que permet registrar els bitllets dels passatgers i acarar aquesta informació amb les reserves que ha venut la companyia deixés de funcionar correctament, el senzill procés d'embarcament seria caòtic. Els passatgers no sabrien quina porta els correspon i, fins i tot, algun d'aquests podria embarcar en un avió amb una destinació diferent a què esperava dirigir-se. No obstant això, la modificació del programari i dels dispositius utilitzats pot comportar canvis positius. Un exemple d'això és el prototip de supermercat desenvolupat per Amazon, Amazon Go, en què no cal passar per caixa perquè aquest establiment té la capacitat de registrar la presència del comprador, detectar quins productes ha adquirit i cobrar-l'hi automàticament quan surt per la porta.

<div class="extra"><markdown>
**Amazon Go, un espai/codi**

Llançat el 2016, el prototip de botiga que no requereix passar per caixa estableix un espai determinat per les capacitats del programari de reconeixement d'imatge, nombrosos sensors i tota una **infraestructura codificada**. El resultat és un establiment que permet fer quelcom fins ara impensable: entrar en una botiga, agafar el que un vol i marxar.

Llegeix més sobre Amazon Go a: http://catedratelefonica.uoc.edu/2016/12/08/interfaces-cotidianas-amazon-go/.
</markdown></div>

Kitchin i Dodge (2011, pàg. 16-17) denominen aquests entorns **espai/codi** (_code/space_), un terme amb què volen incidir en com **el programari i el propi espai físic es construeixen mútuament**, determinant un entorn que depèn totalment de la seva constitució i del funcionament del programari i dels dispositius que l'utilitzen.

Aquesta relació entre **codi** i **espai** posa en relleu que el programari no és un producte neutral o immaterial, sinó que té conseqüències directes en la nostra realitat quotidiana: determina les accions que duem a terme en espais que, en alguns casos, han estat concebuts sobre la base de les funcions que estableix el programari. Inspirant-se en **la teoria de l'actor-xarxa**, que defensa entre d'altres el sociòleg **Bruno Latour**, afirmen que el programari és «un actant al món», és a dir, que té agència per a determinar en diversos nivells com viuen les persones. La manera com els programes informàtics s'insereixen en la gran majoria dels aspectes de la nostra vida quotidiana porta els investigadors a afirmar, fins i tot, que **avui dia no és possible viure aliè a la influència del programari** (Kitchin i Dodge, 2011, pàg. 39, 260).

El teòric **Lev Manovich** incideix en aquesta idea quan afirma que les grans empreses que determinen l'economia global ja no basen el seu negoci en les matèries primeres ni en els productes manufacturats, sinó que ofereixen serveis basats en programari i, algunes d'aquestes, en un reduït nombre de dispositius que utilitzen aquest programari: Google, Facebook, Apple i Microsoft. Al mateix temps, **el paper que exerceix el programari en la societat és ignorat**, ja que s'integra silenciosament en les màquines que utilitzem i sembla limitar-se a executar les nostres ordres, quan de fet determina el marc d'accions que ens és possible realitzar. Això no solament es produeix en l'àmbit del supermercat o la porta d'embarcament de l'aeroport, sinó també en la nostra cultura i els productes de la creativitat d'artistes i dissenyadors. Manovich utilitza el terme **programari cultural** per a referir-se als programes que permeten crear artefactes culturals (sia vídeos, il·lustracions, _films_, composicions de disseny gràfic, etc.), presentar-los i compartir-los. Programes com ara Adobe Illustrator, Photoshop, After Effects o Flaix determinen, per mitjà de les seves opcions i funcionalitats, els productes culturals que es poden crear amb aquests. Al llarg de les últimes tres dècades, s'ha pogut traçar de quina manera l'evolució del programari ha donat lloc a nous estils i formats en la creació de llocs web, projectes de disseny gràfic, fotografia, vídeo i produccions cinematogràfiques. La influència d'aquests i altres programes, tant en el nostre entorn quotidià com en la cultura actual, porta finalment Manovich a afirmar que la nostra és una **societat del programari**:

>En resum: la nostra societat contemporània es pot caracteritzar com la *societat del programari* i la nostra cultura es pot denominar, amb raó, una *cultura del programari*, ja que ara com ara el programari exerceix un paper primordial a l'hora de configurar tant els elements materials com moltes de les estructures immaterials que, conjuntament, conformen la «cultura».
>
><cite>Manovich, L. (2013). El software toma el mando (UOC Press. Comunicación #29, pàg. 37). Barcelona: Editorial UOC.</cite>

En els propers apartats veurem com el programari no solament és un factor essencial de la societat actual, sinó que també compta amb una història intel·lectual que precedeix els mateixos ordinadors, a més d'haver desenvolupat la seva pròpia cultura, sent determinant no solament a nivell d'eines, sinó també a nivell de conceptes i de marc cultural en què els artistes i els dissenyadors elaboren les seves creacions.

### Història intel·lectual del programari

En l'apartat anterior hem comentat la influència del programari en la nostra societat i com ha estat ignorat, en termes generals, en les anàlisis de la cultura contemporània. No obstant això, la història del programari o, més àmpliament, l'ús de codis i instruccions i el seu paper en l'art i el pensament es remunta a segles abans que el matemàtic **John W. Tukey** encunyés el terme _programari_ el 1957 i a la fabricació dels primers ordinadors.

Segons assenyala l'historiador d'art i literatura **Florian Cramer**, un dels defensors del Software art, **el programari compta amb una història intel·lectual que va més enllà de la història dels ordinadors** i connecta amb l'ús d'instruccions i permutacions en art i literatura, i també amb diverses teories vinculades a la creació a partir del text, els signes i l'establiment d'una sèrie de regles que permeten la combinació d'un conjunt limitat d'elements. En el seu llibre _Words made flesh – Code, Culture, Imagination_ Cramer es remunta a la visió pitagòrica d'un ordre matemàtic que s'aplica tant a la naturalesa com a l'art i, per tant, obre la possibilitat de la computació de tots dos.

Cramer afirma:

>El pensament pitagòric \[…\] va encunyar per vegada primera i va expressar de forma sistemàtica la idea d'un codi font simbòlic-matemàtic subjacent a l'univers i descriu tant la naturalesa com la cultura.
>
><cite>F. Cramer  (2005). _Words made flesh – Code, Culture, Imagination_ (pàg. 25). Rotterdam: Media Design Research, Piet Zwart Institute, Willem de Kooning Academy Hogeschool Rotterdam.</cite>

Amb tot, no és amb Pitàgores on trobem la primera formulació d'un ordre universal, sinó que és comú a totes les cultures la idea de la creació a partir de la paraula, sia en els mites, en els textos religiosos o en els ritus vinculats a la màgia, sent els encanteris accions que es desitgen executar en la realitat física a partir de determinades paraules i símbols.

<div class="destacat"><markdown>
Per tant, el programari té les seves arrels culturals en la convicció, llargament mantinguda, que és possible conèixer i manipular el **codi** que fa funcionar el món.
</markdown></div>

Cramer explora nombrosos exemples de models de creació a partir de la paraula, emprant permutacions o càlculs matemàtics, des de la càbala i l'_Ars_ _Combinatòria_ de Ramón Llull als experiments literaris dels dadaistes, els situacionistes o el col·lectiu OuLiPo i, finalment, els artistes que han treballat directament amb els llenguatges de programació actuals. Per exemple, el text de **Tristán Tzara** (1920), _Para hacer un poema dadaísta_ consisteix en un conjunt d'instruccions que es poden entendre com un algorisme per a la creació artística: en primer lloc, es defineixen els elements a emprar (un diari, unes tisores, una bossa) i, posteriorment, un conjunt d'accions que, executades en ordre, donen lloc a una sèrie de poemes formats per la combinació aleatòria de paraules extretes d'un text ja elaborat (l'article). És senzill convertir aquest experiment dadaista en un programa que extregui les paraules d'un article de qualsevol lloc web de notícies, les barregi aleatòriament i les disposi en un poema, repetint aquesta acció tantes vegades com es vulgui.

<div class="extra"><markdown>
**Tristán Tzara (1920), Para hacer un poema dadaísta**

Agafi un diari.

Agafi unes tisores.

Esculli un article del diari de la longitud que vulgui donar al seu poema.

Retalli l'article.

Retalli, de seguida amb cura, cadascuna de les paraules que formen l'article i posi-les en una bossa.

Agiti la bossa suaument.

Ara tregui cada retall, un darrere l'altre.

Copiï les paraules conscienciosament en l'ordre en què hagin sortit de la bossa.

El poema s'assemblarà a vostè.

I vostè un escriptor infinitament original i d'una sensibilitat encisadora, encara que incompresa per la plebs.
</markdown></div>

<div class="destacat"><markdown>
La intenció de Cramer, quan estableix aquestes comparacions, és definir el programari no solament com a codi font, sinó incloent l'execució i l'apropiació cultural per part dels usuaris.
</markdown></div>

Per exemple, quan es parla de _xatejar_ o _descarregar un document_, són accions que sorgeixen de l'ús del programari i s'incorporen a la nostra cultura. També podem parlar d'un programari que existeix purament en la imaginació, com per exemple quan desitgem que una nova versió d'un programa que estem utilitzant incorpori funcions encara inexistents o creiem que l'ordinador està infectat per un virus si funciona malament o molt lentament. En aquest sentit, si bé el programari està lligat a la computació, no sempre requereix un maquinari ni tampoc ser executat. Per tant, Cramer proposa la definició següent:

>El programari, per tant, és una pràctica cultural composta per (a) algorismes, (b) possiblement, però no necessàriament en combinació amb màquines reals o imaginàries, (c) interacció humana en l'ampli sentit de qualsevol forma d'apropiació cultural i ús, i (d) imaginació especulativa.
>
><cite>F. Cramer (2005). Words made flesh – Code, Culture, Imagination (pàg. 125). Rotterdam: Media Design Research, Piet Zwart Institute, Willem de Kooning Academy Hogeschool Rotterdam.</cite>

Si examinem detalladament aquesta definició podem comprendre millor les ramificacions de la concepció del programari com a pràctica cultural que proposa l'historiador:

1. **Algorismes**: des de les permutacions místiques de Sefer Yetzirah dels noms de Déu fins a la poesia proteica del segle XVI i les experimentacions de Burroughs i Gysin el 1960, els algorismes estan presents no solament com a càlculs, sinó també com a material per a la creativitat artística, sia com a mètode per a desenvolupar possibilitats gairebé infinites, introduint l'atzar com en els retalls de Tristan Tzara o creant restriccions que han de ser superades de manera creativa com en els experiments d'OuLiPo el 1949. Els algorismes es converteixen en una eina que va molt més enllà del context dels ordinadors.
2. **Possiblement, però no necessàriament, en conjunció amb màquines imaginàries o reals**: el programari no depèn del maquinari i aquest no sempre és físic. Les màquines concebudes per Ramón Llull, Georg Phillip Harsdörffer o la mateixa màquina de Turing són imaginàries, les seves operacions són producte de la reflexió intel·lectual i no de l'acció dels sistemes mecànics o electrònics. D'altra banda, el programari no necessita un ordinador per al seu *funcionament*, com ho demostren les accions basades en les instruccions realitzades pel grup Fluxus, entre d'altres. A més, la idea del programari es pot estendre a l'acció política o social, com ho demostra el moviment de programari lliure de Richard Stallman.
3. **Interacció humana en un sentit ampli de qualsevol apropiació i ús cultural**: Noël Arnaud (1968) en el seu llibre _Algol_ va fer un primer intent d'utilitzar un llenguatge de programació com a material per a composicions poètiques. Més tard, l'argot _hacker_ (_leet_), els _codeworks_ d'Alan Sondheim i el _mezangelle_ de Marie Anne Breeze apliquen el codi com a material que es pot recompondre per a crear una forma particular de llenguatge escrit que imita el codi font, però és llegible com una variant de l'anglès. De la mateixa manera que James Joyce va experimentar amb el llenguatge a _Finnegan's Wake_, aquestes noves formes d'escriptura creen la seva pròpia semàntica i un metallenguatge amb implicacions socials i culturals. D'altra banda, l'obra de Georges Perec, Jodi, el grup I/O/D, Netochka Nezvanova o l'Auto-Illustrator d'Adrian Ward introdueixen el que Cramer defineix com a **distòpia del programari**, la reflexió sobre el programari no com un assistent servil, domesticat, sinó com _un gólem_ temible, fosc i incomprensible que es pot rebel·lar contra nosaltres en qualsevol moment o prendre les seves pròpies decisions. Des d'aquesta perspectiva, el programari es converteix en molt més que una eina, és part d'un concepte més ampli de la cultura.
4. **Imaginació especulativa**: el sistema combinatori de Ramón Llull per a desenvolupar tots els atributs possibles de Déu va influir profundament en una gran sèrie de filòsofs i pensadors, que van des dels enciclopedistes del segle XVII fins al programari per a la poesia assistida per ordinador i la recerca en intel·ligència artificial. Com a forma de pensament, la computació ofereix la possibilitat d'imaginar l'infinit, d'abastar tot el coneixement possible, com es descriu en el conte «La Biblioteca de Babel» de Jorge Luis Borges.

Tots aquests exemples assenyalen l'herència cultural del programari, que deixa de quedar ocult sota la interfície de l'usuari com una mera eina muda i neutral, adquirint una nova dimensió com a element carregat de significats i aconseguint ser considerat més enllà del context de la computació. L'argumentació de Cramer té per objectiu atorgar al programari un protagonisme que li havia estat negat, però alhora obre una nova perspectiva sobre el procés creatiu assistit per ordinador, tant en les seves possibilitats com en les seves implicacions culturals.

<div class="extra"><markdown>
**Pot una màquina produir totes les imatges possibles?**

Aquesta pregunta és la que porta l'artista John F. Simon Jr. a crear Every Icon (1996), un _applet_ de Java que executa totes les combinacions possibles d'un reticle de 32 x 32 cel·les en què cada element pot ser blanc o negre. Teòricament, aquest procés generarà totes les imatges possibles en les condicions en què es van crear les icones dels primers sistemes operatius. Segons els càlculs de l'artista, a un ritme de 100 icones per segon, el programa triga 1,36 anys a mostrar totes les variacions de la primera fila, mentre que per a completar la segona trigaria 5.850 milions d'anys. Per tant, el programa es resol a nivell conceptual, però és impossible executar-lo íntegrament. Aquesta obra d'art ens permet imaginar quelcom que escapa de les nostres capacitats, a més de plantejar els límits de la creació humana enfront del poder del processament de la màquina.

La peça es pot executar a http://numeral.com/appletsoftware/eicon.html.
</markdown></div>

### El programari com a cultura

Com hem vist, el programari forma part de la nostra societat i està profundament integrat a les infraestructures i els sistemes que determinen les nostres accions quotidianes. A més, el programari té una dimensió cultural que connecta amb el desig de crear i manipular el món per mitjà de la paraula o d'un conjunt de codis (present en les religions i rituals de totes les cultures), i també mitjançant els experiments amb instruccions i permutacions en art i literatura.

La relació entre programari i literatura és possible atès que el codi font és en realitat text, un text que no solament es pot llegir sinó que s'executa, fa quelcom en el context en què ha estat creat mitjançant un llenguatge específic. Però el codi font no és simplement abstracte o matemàtic, ha estat creat per persones en un determinat moment històric i partint d'idees que responen a un context social i cultural específic. En el llibre _10 PRINT CHR$(205.5+RND(1)); : GOTO 10_ deu autors duen a terme de forma col·lectiva un estudi d'una única línia de codi en llenguatge BASIC que es va popularitzar en la guia d'usuari del Commodore 64 el 1982, atès que permetia generar un patró geomètric sempre diferent (figura 1). Aquesta simple instrucció dona lloc a una exploració del context social i cultural en què es van utilitzar els primers ordinadors personals, la manera com s'escrivien els llenguatges de programació i el desenvolupament d'estratègies per a crear composicions algorítmiques. Els autors conclouen:

>Finalment, el codi és un recurs cultural, no trivial ni solament instrumental, sinó vinculat al canvi social, als projectes estètics i a la relació de les persones amb els ordinadors. En lloc de ser descartat com a críptic i irrellevant per a qüestions humanes com l'art i l'experiència de l'usuari, el codi hauria de ser valorat com a text amb significat tant per a la màquina com per als humans, quelcom que es produeix i opera dins la cultura.
>
>\[…\] Quan s'escriuen programes d'ordinador, s'escriuen utilitzant paraules clau que contenen restes de la història de les tecnologies textuals i altres tecnologies, i s'escriuen en llenguatges de programació amb passats complexos i dimensions culturals, que trobem en la intersecció de dotzenes d'altres pràctiques socials i materials.
>
><cite>N. Montfort, P. Baudoin, P. J. Bell et al. (2013). 10 PRINT CHR$(205.5+RND(1)); : GOTO 10 (pàg. 8 i 262). Cambridge/Londres: The MIT Press.</cite>

Com a artefacte cultural, el programari mereix ser estudiat i criticat de la mateixa manera que s'analitzen altres productes culturals. L'investigador en mitjans de comunicació **Matthew Fuller** afirma que és possible emprar les eines de les diverses teories culturals, socials, polítiques i estètiques per a **estudiar el programari i, així, superar «el mite de la seva neutralitat com a eina»** (Fuller, 2003, pàg. 16). Habitualment, veiem els ordinadors com a màquines d'una sola peça, impenetrables i misterioses, amb què interactuem per mitjà de les eines que ens facilita el programari i que, segons hem assumit, són exactament les que necessitem. No obstant això, com indica Fuller, cada programa determina com veiem, comprenem i actuem al món, sent al seu torn un reflex de com els creadors del programari entenen que s'ha de veure el món i actuar en aquest. Per tant, és adoptar una actitud crítica cap al programari i qüestionar la màquina que tenim davant, que no és un objecte únic sinó un assemblatge de circuits electrònics, un sistema operatiu, nombrosos programes, les seves respectives interfícies; i també llicències d'ús, protocols de connexió a les xarxes i un llarg etcètera. Tots aquests elements han estat dissenyats segons uns criteris que han modelat tant les intencions dels dissenyadors i programadors com els imperatius econòmics, legals i els interessos de les empreses que els comercialitzen. En aquest sentit, **cada element de l'ordinador i el programari que l'executa poden ser analitzats i criticats** (Fuller, 2003, pàg. 21).

<div class="extra"><markdown>
**Sistemes heretats**

La pràctica dels sistemes heretats en la indústria del programari exemplifica la seva complexitat. Segons assenyala la programadora Ellen Ulman, la inversió que es fa en programari és tan gran que no es pot descartar un cop queda obsolet, de manera que s'ha d'adaptar, retocar, actualitzar. Amb el temps, ningú no sap com funciona, però cal seguir usant-lo. Ulman recorda haver treballat amb un programa en llenguatge COBOL que tenia 16 anys d'antiguitat i en què havien treballat 96 programadors. Tenia errors que ningú no havia sabut arreglar en deu anys (Ulman, 1997, pàg. 116). Segons l'expert en computació Peter J. Bentley, a causa dels sistemes heretats «\[…\] el codi d'avui dia no funciona. Hem aconseguit el límit de la complexitat del programari i les úniques opcions que queden són reduir la complexitat o trobar una altra manera d'escriure codi» (Stocker i Schöpf, 2003, pàg. 34).
</markdown></div>

Matthew Fuller enumera tres tipus de programari que obren la possibilitat de realitzar una anàlisi crítica del programa i, per mitjà del mateix, qüestionar tant el seu propi disseny com les seves implicacions en l'experiència de l'usuari i el context cultural en què ha estat creat:

1. **Programari crític**: és el programari que fa visible la seva pròpia estructura i els seus elements de manera que revela amb quins pressupostos ha estat creat, de vegades com un programa que funciona però que ha estat desproveït dels seus elements més decoratius o narratius. Aquest és el cas, per exemple, del projecte SOD (1999) del duo d'artistes JODI (Joan Heemskerk i Dirk Paesmans), que consisteix en una modificació del videojoc _Wolfenstein 3D_ en què s'han substituït els decorats i altres elements per textures abstractes en blanc i negre.
2. **Programari social**: és el programari creat a partir d'una interacció o socialització més estreta entre els usuaris i els programadors que dona lloc a uns programes les funcions dels quals teòricament s'apropen més a les necessitats reals dels primers. El programari de codi obert entra en aquesta categoria si bé, com adverteix Fuller, «qui està “més a prop de la màquina” posseeix l'espai de possibilitats en què s'exploren aquestes relacions \[entre els usuaris i el programa\]» (Fuller, 2003, pàg. 26).
3. **Programari especulatiu**: és el programari que explora les possibilitats potencials de la programació pensant més enllà de les categories i els usos establerts, és a dir, el que permetria reinventar el programari partint de nous supòsits que, idealment, no es veurien limitats per la tecnologia actual, els llenguatges de programació existents o els imperatius de la indústria tecnològica dins un mercat capitalista.

«El programari sempre és un problema no resolt», afirma Fuller, qui apunta així a la necessitat de pensar-lo com a procés en els aspectes que van més enllà del propi programa. Aquest és l'objectiu de la disciplina coneguda com a **Software studies**, establerta entre el 2006 i el 2008 a partir de les aportacions de teòrics com ara **Marshall McLuhan**, **Friedrich Kittler**, **Lev Manovich** o el mateix Fuller, un dels seus impulsors principals.

<div class="destacat"><markdown>
Emprant perspectives teòriques, culturals i orientades a la pràctica, els Software studies exploren els objectes i processos del programari a partir de les aportacions de programadors, dissenyadors, enginyers i artistes.
</markdown></div>

Integra, així, les disciplines de les humanitats i la sociologia amb les ciències de la computació, l'art i el disseny. Com indica Fuller en el pròleg de _Software Studies_. A _Lexicon_ la disciplina s'identifica com uns _estudis_, textos crítics i especulatius que proposen un «exercici de prototipatge ràpid d'aproximacions transversals i crítiques» al programari (Fuller, 2008, pàg. 1). Aquest plantejament respon als continus i accelerats canvis que es produeixen en la indústria tecnològica i que requereixen estudiar el programari des d'una perspectiva més àgil, que eviti visions monolítiques i reconegui els seus múltiples estrats i ramificacions.

Una branca dels estudis del programari se centra concretament en l'anàlisi del codi font: són els **Critical code studies (CSS)**, que apliquen la teoria crítica al codi font no solament al text sinó també en la manera com està construït i reflecteix un determinat context. Segons afirma un dels seus impulsors:

>\[…\] per mitjà dels CSS, els investigadors poden criticar els sistemes informàtics i humans, des del nivell de l'ordinador al de la societat en què aquests objectes elaborats amb codi circulen i exerceixen la seva influència.
>
> <cite>M. Marino (2006, desembre). «Critical Code Studies». _Electronic book review_ [en línia]. \<http://www.electronicbookreview.com/thread/electropoetics/codology\></cite>

<div class="extra"><markdown>
**JODI, SOD (1999)**

Joan Heemskerk i Dirk Paesmans (JODI) elaboren, a les acaballes dels anys 90, una sèrie de modificacions de videojocs en què experimenten amb les seves possibilitats estètiques i analitzen la seva estructura modificant l'aspecte dels seus elements mantenint la interacció. Un dels videojocs modificats és _Wolfenstein 3D_ (id Software, 1992) que es converteix en una composició geomètrica abstracta per la qual es pot navegar, obrint portes i matant els enemics, ara convertits en formes geomètriques.

El videojoc es pot descarregar des d'http://sod.jodi.org/ malgrat que no és compatible amb els sistemes operatius més nous.
</markdown></div>

### El programari pren el control

El text que esteu llegint ha estat redactat en un programa d'edició de text emprant, en part, recursos obtinguts a internet, llibres electrònics i altres publicacions que es distribueixen en format pdf. El text original ha estat maquetat en un document i editat per la UOC en els múltiples formats en què es faciliten els recursos d'aprenentatge a l'aula virtual. Per a llegir-lo, probablement ara mateix estareu usant un navegador web, un lector de llibres electrònics, un reproductor de _podcasts_ o un lector de pdf.

<div class="destacat"><markdown>
Per tant, en tot el procés que va de l'escriptura a la lectura d'aquest text hi intervenen una gran quantitat i varietat de programes que determinen (per mitjà dels seus protocols, formats i interfícies) la manera com es poden produir i rebre aquestes línies.
</markdown></div>

Normalment ignorem la intervenció del programari que, com assenyala **Matthew Fuller**, és concebuda com una eina neutral. No obstant això, és clar que això no és així, especialment si ens trobem en la situació que el format d'un _ebook_ no és compatible amb el dispositiu que usem per a llegir-lo, la interfície no ens permet navegar correctament pels seus continguts o els permisos assignats pel distribuïdor de la publicació ens impedeixen subratllar el text o copiar-lo en un altre document.

Com hem vist amb anterioritat, el teòric **Lev Manovich** afirma que el que denomina com a **programari cultural** (el conjunt de programes que permeten crear artefactes culturals, presentar-los i compartir-los) té un paper determinant en la configuració dels elements i estructures de la cultura en la nostra societat. Manovich (2013, pàg. 26-27) especifica que el programari cultural permet dur a terme una sèrie d'accions que classifica en set categories:

1. **Crear objectes culturals i serveis interactius que contenen representacions**, idees, creences i valors estètics (per exemple, editar un videoclip o dissenyar un lloc web).
2. **Accedir, adjuntar, compartir i remesclar aquests objectes** o els seus components (per exemple, llegir un diari a la xarxa o veure un vídeo a YouTube).
3. **Crear i compartir informació i coneixements per internet** (per exemple, editar una entrada a la Viquipèdia).
4. Comunicar-se amb uns altres per mitjà de correus electrònics, missatges instantanis, text en línia, xats o xarxes socials.
5. **Participar en experiències culturals interactives** (per exemple, jugar a un videojoc).
6. **Participar en l'ecologia de la informació a la xarxa** expressant preferències i afegint metadades (per exemple, fer una cerca a Google).
7. **Desenvolupar eines de programari i serveis que facilitin totes aquestes activitats** (per exemple, crear un _plugin_ de Photoshop o una plantilla de WordPress).

Aquestes categories inclouen la majoria dels programes que utilitzem diàriament com a usuaris, i també les eines que empren comunament els dissenyadors, els realitzadors, els artistes i altres professionals creatius.

<div class="destacat"><markdown>
En la majoria de casos, no es tracta de documents estàtics, productes finals com ho pugui ser una pintura, un llibre, una partitura o un film, sinó que es tracta d'un conjunt de documents digitals que han d'interactuar amb un programari específic per a ser vists.
</markdown></div>

Veure un document pdf requereix no solament l'arxiu sinó també un programari de visualització que defineix les opcions que té l'usuari per a navegar pels continguts, editar-los o compartir-los, com hem afirmat al principi. A fi d'emprar el programari, l'usuari s'ha d'adaptar als modes d'ús predeterminats pels desenvolupadors.

En aquest sentit, es compleix el que Matthew Fuller descriu com la fatal conclusió de la interacció habitual entre l'humà i la màquina:

>\[La màquina\] apodera els usuaris modelant-los i, quan ho fa, genera la seva desaparició, ja que aquests s'incorporen als seus propis models.
>
><cite>M. Fuller (2003). Behind the Blip. Essays on the Culture of Software (pàg. 13). Nova York: Autonomedia.</cite>

La creativitat de l'usuari es veu modelada per les opcions que li permet el programa i, de fet, pensa dins dels paràmetres que estableix el programari. Un exemple il·lustratiu de com el programari determina el producte final el trobem en la peça de programari art **Auto-Illustrator** de l'artista i programador **Adrian Ward**. D'aspecte idèntic a un programa d'edició de gràfics de vectors, el programari de Ward incorpora funcions mitjançant les quals el programa genera els seus propis gràfics i limita el control de l'usuari. D'aquesta manera, queda patent que no és una mera eina neutral, sinó que pot tenir un paper molt més decisiu si ha estat programat per a això. Òbviament, el programari comercial no es «rebel·la» de la manera que ho fa el de Ward, però en la seva pròpia concepció defineix una certa visió del món.

<div class="extra"><markdown>
**Prenent el control: Auto-Illustrator**

El 2001, l'artista i programador Adrian Ward va llançar per mitjà de la seva empresa Signwave el programa Auto-Illustrator, una «paròdia d'Adobe Illustrator» que afegeix a les funcions habituals d'un programari de gràfics de vectors una sèrie de sistemes autònoms basats en intel·ligència artificial que introdueixen una certa «creativitat» del programa a les composicions que crea l'usuari. Per tant, aquest últim no té un control absolut sobre el resultat, sinó que ha de bregar amb les aportacions del mateix programari. Aquest programa planteja clarament l'existència d'una certa agència del programari ja que treu a l'usuari una part del seu domini sobre el producte que està creant. Abans d'Auto-Illustrator, Ward havia creat Autoshop (1999) que aplica els mateixos principis a l'editor d'imatges Adobe Photoshop.

https://web.archive.org/web/20010722021739/http://www.signwave.co.uk/

http://www.artelectronicmedia.com/artwork/auto-illustrator
</markdown></div>

El 1991, l'enginyer cap de Xerox PARC **Mark Weiser** publica l'assaig «**The Computer for the 21st Century**», un text que prefigura el desenvolupament actual de les cases intel·ligents i dispositius com ara les tauletes o els altaveus controlats per veu que comercialitzen Amazon, Google i Apple. Weiser introdueix el concepte **computació ubiqua**, que proposa deixar de centrar l'atenció en la màquina (o la pantalla) i fer que la tecnologia passi a un segon pla. L'enginyer descriu el dia a dia en un entorn automatitzat que correspon a la vida d'una zona residencial de Silicon Valley, amb l'habitual desplaçament amb cotxe a una oficina equipada amb tecnologia avançada. Aquest text exemplifica una visió del món que apliquen els desenvolupadors i que, òbviament, no és la que comparteixen tots els habitants del planeta, ni es correspon amb el seu entorn ni amb les seves necessitats. Sovint s'ha criticat que la reduïda experiència del «món real» que es té a les empreses de Silicon Valley defineix uns productes que es creuen universals quan no ho són, però forcen els usuaris a adaptar-se als models que imposen. La programadora Ellen Ulman descriu aquesta situació amb claredat:

>M'agradaria creure que els ordinadors són neutrals, una eina com qualsevol altra, un martell que pot construir una casa o picar un crani. Però hi ha quelcom en el propi sistema, en la lògica formal dels programes i les dades, que recrea el món a la seva pròpia imatge. […] L'únic problema és aquest: com més ens envoltem d'una noció limitada de l'existència, més limitada es torna l'existència. Ens ajustem a l'amplitud de moviment que permet el sistema. Hem de ser més ordenats, més lògics. Contesti la pregunta, Sí o No, OK o Cancel·lar. […] Creiem que estem creant el sistema, però el sistema també ens està creant a nosaltres. Construïm el sistema, vivim en el seu mitjà i ens veiem transformats.
>
><cite>E. Ulman (1997). _Close to the machine: technophilia and its discontents_ (pág. 89-90). San Francisco: City Lights Books.</cite>

Remuntant-se als projectes pioners en el desenvolupament dels ordinadors personals i, en concret, al grup d'investigadors dirigit per **Alan Kay** del centre Xerox PARC a Palo Alto (Califòrnia), Lev Manovich incideix en la manera com es va crear tant la interfície gràfica d'usuari (GUI) com els primers programes de creació i manipulació de continguts.

<div class="destacat"><markdown>
L'ordinador ja s'estableix des dels seus inicis com un «metamitjà», és a dir un mitjà que incorpora altres mitjans anteriors (text, dibuix, fotografia, vídeo, etc.), els mescla i els expandeix amb noves possibilitats.
</markdown></div>

Els programes de creació i edició que es van crear en els anys 80 i 90 com ara MacWrite i MacPaint (1984), Word, PageMaker i VideoWorks (1985), SoundEdit (1986), Freehand i Illustrator (1987), Photoshop (1990), Premiere (1991), After Effects (1993) no solament emulen eines anteriors sinó que introdueixen funcions innovadores que no eren possibles sense un ordinador. Manovich també assenyala que la visió original d'Alan Kay i el seu equip incloïa un llenguatge de programació, Small talk, que permetia a qualsevol usuari escriure les seves pròpies eines expandint les possibilitats del mitjà. No obstant això, quan Apple va llançar el Macintosh el 1984 (el primer ordinador d'èxit comercial, que es deu molt a les innovacions de Xerox PARC) aquesta facilitat per escriure programes propis es va veure dràsticament reduïda (Manovich, 2013, pàg. 95). A mesura que es popularitzen, els ordinadors personals van eliminant la necessitat de programar o, fins i tot, de conèixer l'existència dels llenguatges de programació i se centren en el consum, la creació i la manipulació de continguts per mitjà de programes que defineixen el que els usuaris poden fer establint estàndards en les indústries creatives.

## Crear amb codi

![Portada](@attachment/uoc/programacio_disseny_arts/portada2.png)

<cite><a href="http://arts.recursos.uoc.edu/programacio-disseny-arts/2-1-portada/">Veure la portada en funcionament</a></cite>

### Què és la programació creativa?

En l'apartat anterior hem vist la **importància del programari en la nostra societat**, i també la seva consideració com a **artefacte cultural** enfront de la percepció dels programes que emprem diàriament com a meres eines neutrals. L'últim apartat d'aquest apartat ens recorda que **el programari**, **lluny de ser innocu, exerceix un paper decisiu en la pròpia creativitat** facilitant, mitjançant els diferents programes de creació, edició i difusió de continguts, que han fet de l'ordinador no solament un mitjà en si mateix, sinó un «metamitjà» que incorpora i expandeix els mitjans existents, com assenyala Lev Manovich. En aquest apartat, explorarem les possibilitats de la creació de continguts de tot tipus basada en llenguatges de programació i els entorns i plataformes que els fan accessibles als usuaris no habituats a treballar amb codi font.

<div class="destacat"><markdown>
Com hem vist, el **programari cultural** (sia Photoshop, Illustrator, Premiere, Maya i un llarg etcètera) permet a un sector cada vegada més ampli de professionals accedir a la creació de continguts multimèdia i, alhora, determina què poden fer.
</markdown></div>

Cada vegada que un desenvolupador llança l'última versió d'un programa amb noves funcions, aquestes són benvingudes pels dissenyadors i creadors, els quals les incorporen al seu flux de treball i, de vegades, desenvolupen nous estils basats en les possibilitats que els ha obert el programa. Així, encara que tenen una clara dependència del programari, que estableix el que poden i no poden fer, no veuen una altra opció que la d'esperar que el desenvolupador tregui una nova versió que s'adapti a les seves necessitats o els permeti crear d'una altra forma. El programari es distribueix com un producte tancat i, per tant, no es concep crear una eina nova o desenvolupar tot un programari nou, que implica programar, ja que és una habilitat en què la majoria d'artistes i dissenyadors no ha rebut formació.

La creació vinculada a les noves tecnologies habitualment ha tingut com a protagonistes artistes i dissenyadors que treballen en col·laboració amb programadors, o els escassos individus que han sabut compaginar els seus coneixements de programació i matemàtiques amb inclinació cap a la creativitat artística.

<div class="destacat"><markdown>
A mitjan dècada dels 60, quan els ordinadors eren voluminoses màquines de càlcul en centres de recerca, alguns enginyers i matemàtics exploraven la manera de convertir-los en eines de creació artística.
</markdown></div>

El 1965, tres exposicions mostraven al públic els resultats d'aquests experiments. La primera va tenir lloc a l'Institut de Tecnologia de la Universitat d'Stuttgart, en el seminari del filòsof **Max Bense**, on es van exposar els dibuixos algorítmics del matemàtic **Georg Nees**. Dos mesos més tard, la galeria Howard Wise de Nova York mostrava obres de **Michael Noll** i **Bela Julesz** creades amb computadores. A l'acabament d'aquest any, la galeria Wendelin Niedlich d'Stuttgart va reunir una selecció d'obres de **Frieder Nake** amb el títol _Computer Graphics_. A aquests pioners, tots ells vinculats a l'àmbit de la ciència i la tecnologia, se sumarien poc després artistes formats en arts visuals com ara **Charles Csuri**, **Manfred Mohr** i **Vera Molnar**. Aquests creadors tenien en comú l'interès per emprar les computadores amb una finalitat per la qual no havien estat creades, i també l'accés a les màquines i els coneixements per a treballar amb el codi de programació i els traçadors en què es plasmaven les seves creacions algorítmiques. Mohr, per exemple, va aconseguir tenir accés a l'ordinador de l'Institut de Meteorologia de França, a París, on treballava cada nit realitzant les seves creacions amb l'ajuda d'un traçador que s'emprava per a dibuixar la predicció meteorològica de tota Europa. Posteriorment, l'artista va adquirir les seves pròpies màquines i, fins i tot, va construir els seus propis ordinadors per a generar certes peces.

<div class="destacat"><markdown>
En un moment en què no existien els ordinadors personals, pioners com Mohr, Nake o Molnar van aconseguir desenvolupar les possibilitats creatives de les grans màquines de càlcul gràcies a la seva habilitat per a crear els seus propis programes.
</markdown></div>

En les dècades següents, un nombre cada vegada major d'artistes, habitualment vinculats a centres de recerca o amb coneixements d'enginyeria i informàtica, han anat creant projectes artístics amb tecnologies emergents en l'àmbit del que s'ha denominat **art electrònic**, **art digital** o **art de nous mitjans**. La creixent popularitat d'aquest vessant de l'art contemporani, unida a la profunda integració dels mitjans digitals a tots els àmbits de la vida quotidiana, ha demostrat que els ordinadors són eines excel·lents per a la creativitat i ha portat al desenvolupament de nombroses iniciatives que busquen compaginar la cultura tecnocientífica i la humanística. Un exemple paradigmàtic és el **MIT Media Lab**, fundat el 1985 com un laboratori de recerca que uneix la tecnologia, la ciència, l'art i el disseny. Espai creador de nombrosos avenços tecnològics, el Media Lab no solament ha acollit el treball de destacats enginyers i dissenyadors, sinó que ha fomentat la fusió de les disciplines tradicionals i la innovació mitjançant el disseny. Fruit de la mentalitat generada al MIT sorgeix la iniciativa **STEM to STEAM**, que promou integrar l'art i el disseny en la formació i la recerca científica. Un dels promotors d'aquesta idea és l'enginyer i dissenyador **John Maeda**, professor del MIT Media Lab entre el 1996 i el 2008 i una de les figures internacionals principals en l'àmbit de la innovació en disseny. El treball de Maeda com a director of the Aesthetics + Computation Group (ACG) al MIT Media Lab es va donar a conèixer notablement amb la publicació del llibre _Creative Code: Aesthetics + Computation_ el 2004, que va contribuir a popularitzar el que se sol denominar **_creative coding_** o **programació creativa**, l'ús del codi font per a finalitats estètiques.

<div class="extra"><markdown>
**D'STEM a STEAM**

Aquesta iniciativa, impulsada des de fa més d'una dècada als Estats Units per la Rhode Island School of Design (RISD), planteja integrar l'art i el disseny en la formació científica. S'afegeix l'«A» d'art + disseny al conjunt «STEM», de les sigles en anglès de ciència + tecnologia + enginyeria + matemàtiques. La simbiosi entre les arts i les ciències va més enllà de la creació artística amb les noves tecnologies i es planteja com un mètode d'innovació radical. Segons afirmen els seus impulsors:

«L'objectiu és fomentar la veritable innovació que suposa la combinació de la ment d'un científic o tecnòleg amb la d'un artista o dissenyador. El pensament flexible, l'assumpció de riscos i la resolució creativa de problemes també es poden aplicar als desafiaments més complexos i urgents de l'actualitat, des de l'atenció mèdica fins a la revitalització urbana i l'escalfament global.»

[http://stemtosteam.org](http://stemtosteam.org/)
</markdown></div>

Precisament són dos antics alumnes del MIT Media Lab, a què va assessorar Maeda, els creadors del llenguatge de programació més emprat en programació creativa. **Casey Reas** i **Benjamin Fry** van desenvolupar **Processing** en el context de Media Lab, el 2001, com un entorn d'aprenentatge que permetés a persones sense coneixements de programació (especialment artistes i dissenyadors) endinsar-se en la creació amb codi.

<div class="destacat"><markdown>
De la mateixa manera que pioners com Manfred Mohr, **Reas** i **Fry** combinen una formació en art i disseny amb coneixements de programació, la qual cosa els fa conscients del potencial creatiu del codi, a més de les dificultats que se li planteja a una persona formada en una cultura visual endinsar-se en la lògica d'un llenguatge de programació.
</markdown></div>

Creat amb la intenció de facilitar l'accés a l'aparentment àrida i complexa tasca d'escriure instruccions, Processing és tant un llenguatge de programació com un programari que genera un entorn en què l'usuari pot treballar amb el codi d'una manera senzilla i visualitzar els resultats de forma ràpida. Des del seu llançament, Processing ha generat una creixent i activa comunitat d'usuaris i s'ha convertit en una de les eines principals de creació per a artistes i dissenyadors que treballen amb noves tecnologies. Juntament amb altres recursos de codi obert, ha facilitat a nombrosos creadors desenvolupar tot tipus de projectes tant en l'àmbit de les arts visuals com de l'arquitectura, el disseny, l'enginyeria i molts d'altres.

<div class="destacat"><markdown>
La **programació creativa** neix d'una concepció transdisciplinària del treball amb les eines digitals i contribueix a difuminar la separació entre l'art i el disseny, ja que permet als creadors portar les seves idees a entorns molt diversos.
</markdown></div>

Un exemple d'això és el creixent nombre de col·lectius i estudis de disseny i comunicació que desenvolupen projectes tant en el context d'exposicions d'art com en campanyes publicitàries, _branding_ o instal·lacions interactives per a grans empreses. **FIELD**, un estudi londinenc creat per **Marcus Wendt** i **Vera-Maria Glahn**, destaca en aquest sentit per un treball que inclou instal·lacions i dissenys per a grans empreses com Nike, Adidas o General Electric, juntament amb pintures digitals i escultures cinètiques. La fluïdesa amb què aquests creadors es mouen entre els diferents contextos és un reflex de les àmplies possibilitats que ofereix treballar amb codi.

Hem parlat de programari i de la importància de saber programar les nostres pròpies eines. El que sol descoratjar els artistes i programadors respecte a la programació és l'aparent complexitat del codi font i la dificultat de treballar en un context que s'allunya de l'instintiu i visual.

<div class="destacat"><markdown>
No obstant això, cal entendre que el codi font és bàsicament un conjunt d'instruccions, un algorisme escrit en un llenguatge de programació que controla determinades operacions en un ordinador.
</markdown></div>

Aquestes instruccions han de ser precises i no donar lloc a ambigüitats, per tant els llenguatges de programació segueixen una sintaxi específica que no admet errors. Un símbol fora de lloc pot produir un resultat totalment diferent i això porta a constants revisions del codi, depuracions (_debugging_) i comprovacions de la pròpia estructura de les instruccions que pot resultar tediosa o massa complexa per a una ment intuïtiva com la d'un artista o dissenyador. Ara bé, superar aquestes reticències porta els creadors a obtenir un major control dels seus projectes.

<div class="destacat"><markdown>
Segons assenyala Casey Reas, el coneixement del codi font permet alliberar-se dels paràmetres establerts per les empreses de programari i, alhora, comprendre millor com funcionen els programes per a crear no solament eines, sinó sistemes, entorns i modes d'expressió totalment nous (Reas i McWilliams, 2010, pàg. 25).
</markdown></div>

L'artista i programador que ha cocreat el llenguatge i entorn de programació Processing incideix en la necessitat d'adaptar els llenguatges de programació a persones acostumades a treballar en entorns visuals, alhora que assenyala que **els artistes i dissenyadors haurien de tenir unes nocions de programació per a entendre el mitjà amb què estan treballant**:

>Molta gent pensa que els programadors són un tipus únic de persona, diferent a tots els altres. Una de les raons per les quals la programació roman dins els límits d'aquest tipus de personalitat és que la gent amb una mentalitat similar sol crear els llenguatges de programació. És possible crear diferents tipus de llenguatges de programació que involucrin persones amb ments visuals i espacials. Els llenguatges alternatius expandeixen l'espai de programació a persones que pensen diferent. \[…\] El domini de la programació requereix molts anys d'ardu treball, però la comprensió dels principis bàsics del mitjà està a l'abast de tots. Al meu entendre, tot artista que utilitzi programari hauria de tenir coneixements de programari.
>
><cite>G. Stocker, C. Schöpf (eds.) (2003). _Ars Electronica. CODE – The Language of our Time_ (pàg. 178-179). Osterfildern-Ruit: Hatje Cantz.</cite>

Com veurem en l'apartat següent, Processing i altres entorns de programació ofereixen una aproximació al codi font pensada per a artistes i dissenyadors, que facilita altres maneres de crear amb codi.

### Eines de programació creativa

#### Introducció

En l'última dècada s'han multiplicat les eines destinades a facilitar l'ús de la programació en projectes d'arts visuals i disseny, en part impulsades per la filosofia del programari de codi obert i també per la necessitat que han experimentat un grup creixent d'artistes i dissenyadors d'anar més enllà de les possibilitats que els oferia el programari comercial.

Si bé algunes tenen una llarga història, com ara el programari de música electrònica **Max** creat per **Miller S. Puckette** en els anys 80 i desenvolupat en diferents versions (entre les quals les més conegudes són **Max/MSP** i **Pure Data**), la majoria es creen a partir de l'any 2000 en el context d'estudis de disseny, escoles i centres de recerca o agrupacions d'artistes i programadors. L'objectiu comú d'aquests entorns de programació és facilitar la creació d'un tipus de projectes que escapen a la finalitat de la majoria dels programes de programari comercial, centrats a generar un producte final, sia una imatge, una animació o un vídeo.

<div class="destacat"><markdown>
La generació d'imatges i sons en temps real a partir de dades obtingudes a internet o d'altres formes d'interacció requeria un nou tipus de programari. Programes com Processing, openFrameworks, Max/MSP, Pure Data, VVVV i Cinder són alguns exemples.
</markdown></div>

La diversitat d'eines i entorns de programació respon tant a la història del desenvolupament de cada programa com a les necessitats que busca cobrir i al fet que hi ha diferents maneres d'abordar la programació creativa. **Casey Reas**, cocreador de Processing, afirma que cada llenguatge de programació s'ha de veure com un material diferent, de forma similar a com un fuster treballa amb diferents tipus de fusta en funció de les propietats específiques de les mateixes (Reas i McWilliams, 2010, pàg. 17). En aquest sentit, els diferents entorns de programació resulten més o menys útils en funció dels coneixements previs de l'usuari (alguns resulten més complexos que d'altres) i també del que es pretengui aconseguir amb aquests, ja que uns, per exemple, són més adequats per a generar composicions sonores en temps real mentre que uns altres serveixen per a crear animacions d'objectes geomètrics.

>Així com hi ha molts llenguatges humans diferents, hi ha molts llenguatges de programació diferents. De la mateixa manera que els diferents conceptes poden ser transmesos per mitjà de diversos llenguatges humans, els diferents llenguatges de programació permeten als programadors escriure diferents estructures de programari. \[…\] Pot ser útil pensar en cada llenguatge de programació com un material amb prestacions i limitacions úniques. Diferents idiomes són apropiats depenent del context.
>
><cite>G. Stocker, C. Schöpf (ed.) (2003). _Ars Electronica. CODE – The Language of our Time_ (pàg. 175). Osterfildern-Ruit: Hatje Cantz.</cite>

A continuació, revisarem els principals entorns de programació, eines i llibreries que s'empren actualment en la creació d'instal·lacions interactives, animacions generatives, _performances_ audiovisuals i molts altres projectes creatius.

#### Processing

<div class="destacat"><markdown>
**Processing** és un llenguatge i entorn de programació creat pels artistes i programadors **Ben Fry** i **Casey Reas** el 2001 quan eren estudiants de l'Aesthetics and Computation Group del **MIT Media Lab**, en classes impartides pel dissenyador **John Maeda**. En el seu programa Design by Numbers (DBN), Maeda té per objectiu **ensenyar els artistes i dissenyadors a crear amb codi**, la qual cosa constitueix la base del projecte que donarà lloc a Processing.
</markdown></div>

Segons afirmen Reas i Fry:

>La missió original de Processing era crear programari que fes que aprendre a programar fos accessible per als creadors visuals (dissenyadors, artistes, arquitectes) i ajudar els usuaris més tècnics a treballar amb gràfics de manera fluïda. Aspiràvem a facilitar a la gent a estar instruïda en programari, a aprendre a llegir i escriure programari.
>
><cite>C. Reas, B. Fry (2018, maig). «A Modern Prometheus. The History of Processing by Casey Reas and Ben Fry». _Medium_ \[en línia\]. \<[https://medium.com/processing-foundation/a-modern-prometheus-59aed94abe85](https://medium.com/processing-foundation/a-modern-prometheus-59aed94abe85)\></cite>

Els creadors de Processing no solament tenen per objectiu fer que els artistes i dissenyadors puguin programar, sinó també plantejar una aproximació diferent a la programació.

<div class="destacat"><markdown>
Com indica el seu propi nom, aquest programari se centra en el procés més que en el producte final i, per tant, facilita una concepció més dinàmica del propi acte d'escriure codi.
</markdown></div>

L'entorn de programació permet anar veient quins resultats genera el codi en una interfície visual i, per tant, anar descobrint de forma intuïtiva què es pot fer i com aconseguir-ho. Reas i Fry ho denominen **esbossar (_sketching_) amb codi**. Aquesta expressió al·ludeix clarament la pràctica d'esbossar amb un llapis una idea o un dibuix preparatori, quelcom habitual tant en les arts com en el disseny i també una manera efectiva d'anar donant forma a un projecte per mitjà d'un procés ràpid i intuïtiu. Quan es crea amb codi, esbossar les idees en un quadern pot ser menys efectiu, ja que el que s'expressa amb text o dibuixos s'ha de traduir posteriorment en un llenguatge de programació. Per això, Processing es concep com un «quadern d'esbossos» de programari, en què l'esbós es realitza escrivint codi i examinant els resultats en el mateix mitjà en què es crea el producte final.

Processing s'estructura en tres parts principals:

1. **Llenguatge de programació**. Creat a partir de Java, està pensat per a ser fàcilment comprensible i permetre un treball intuïtiu. Un programa escrit en Processing es denomina **esbós** (_sketch_), per a emfatitzar la possibilitat de programar de forma oberta a l'experimentació i el mètode d'assaig i error.
2. **Entorn de programació**. És un programa que ofereix a l'usuari una interfície gràfica, el Processing Development Environment (PDE), que permet escriure codi i veure els resultats a mesura que es treballa, a més de ser l'espai en què s'emmagatzemen els «esbossos» per al seu ús posterior.
3. **Comunitat**. La comunitat d'usuaris de Processing és un aspecte essencial d'aquest projecte, atès que els creadors comparteixen el codi que han escrit en nombroses llibreries que faciliten a altres usuaris desenvolupar els seus propis projectes.

<div class="destacat"><markdown>
Processing ha aconseguit una gran popularitat entre els artistes i els dissenyadors, i compta amb una àmplia comunitat d'usuaris que han fet d'aquest programari un dels més usats en programació creativa, alhora que han expandit les seves intencions inicials.
</markdown></div>

Més enllà de la creació de gràfics i l'aprenentatge intuïtiu amb codi de programació, Processing s'ha aplicat en innombrables projectes, incloent instal·lacions interactives, visualització de dades, art sonor, peces robòtiques i un llarg etcètera.

El seu èxit es deu no solament al fet que facilita en gran manera l'accés a la programació a artistes i dissenyadors, sinó també que es tracta **de programari de codi obert, gratuït i disponible en els sistemes operatius Windows, Linux i MacOS** i, per tant, els projectes generats amb Processing són compatibles amb tots aquests.

<div class="extra"><markdown>
**Explora Processing**

Al web [www.processing.org](http://www.processing.org/) us podeu descarregar el programari gratuït (disponible per Windows, Linux i MacOS), veure nombrosos projectes realitzats amb aquest entorn de programació i accedir a tutorials i recursos, a més d'enllaços a llibres que aprofundeixen en l'ús de Processing.
</markdown></div>

L'ús de Processing és força senzill. El programari presenta a l'usuari una interfície senzilla composta per una finestra en què s'escriu el codi de programació i una altra en què es visualitzen els resultats (figura 2). Després d'escriure unes línies de codi, n'hi ha prou amb clicar el botó «Play» per a executar el programa, de manera que resulta fàcil comparar el codi amb el resultat que aquest produeix. A la part inferior de la pantalla, la pestanya «Errors» informa de qualsevol fallada en la sintaxi del codi, quelcom que pot ocórrer freqüentment, atès que la posició de cada parèntesi, coma o punt i coma (i també els noms de les variables, etc.) afecta la correcta execució del programa.

Una instrucció senzilla, proposta en el tutorial escrit per Reas i Fry que es pot consultar al web de Processing, és la següent:

```js
ellipse(50, 50, 80, 80);
```

Aquesta línia de codi indica al programa que ha de dibuixar una el·lipse el centre de la qual se situï a 50 píxels de la vora esquerra i 50 píxels de la vora superior de l'àrea de visualització, amb un ample i alt de 80 píxels. De la mateixa manera, es poden dibuixar altres formes geomètriques (arc, línia, punt, quadrat, rectangle, triangle) i composicions més complexes. Però el més interessant és la possibilitat de generar composicions de forma automàtica o introduir la interacció amb l'usuari, per exemple per mitjà de la posició del ratolí i l'opció de fer clic. El segon exemple que trobem en el tutorial és el següent:

```js
void setup() {
  size(480, 120);
}
void draw() {
  if (mousePressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
```

Amb aquest codi s'introdueixen noves funcions, com ara la de definir la grandària de l'espai de visualització (`void setup`), dibuixar una determinada forma seguint la posició del ratolí (`ellipse(mouse X, mouseY, 80, 80);`) i introduir canvis quan l'usuari prem el botó del ratolí (`mousePressed`). Aquestes línies de codi senzilles ens mostren les possibilitats del programari, que inclouen tant la creació d'objectes com l'assignació de comportaments i la interacció amb altres elements, que poden ser tant el clic del ratolí com els _inputs_ generats per un sensor o un flux de dades.

Processing facilita la creació d'una gran varietat de projectes d'una complexitat molt diversa, partint de les instruccions més bàsiques i afegint, posteriorment, elements importats de llibreries i la interacció amb tot tipus de dispositius. Els nombrosos exemples que es presenten al web del projecte, i també la gran quantitat de tutorials i recursos disponibles, faciliten fer els primers passos amb Processing i inspirar-se per a desenvolupar projectes més elaborats.

<div class="extra"><markdown>
**Processing per a web**

[Processing.js/](http://processingjs.org/) permet traslladar els projectes creats amb Processing al web sense necessitat de modificar el codi ni afegir _plugins_. El programari permet executar el codi directament en un navegador web compatible amb HTML5 i també compta amb una àmplia comunitat de desenvolupadors.
</markdown></div>

#### openFrameworks

De forma similar a Processing, **openFrameworks (OF)** també és un programari de codi obert creat per un artista i programador. **Zachary Lieberman**, coautor de nombrosos projectes artístics, entre els quals els guardonats _Messa di Voce_ (amb Golan Levin) o _The_ Eyewriter (amb FAT Lab i Grafiti Research Lab), llança openFrameworks v.0.01 el 2005 i poc després desenvolupa la versió 0.03 amb la col·laboració dels seus estudiants de Parsons School of Design (Nova York). Posteriorment, el contínua desenvolupant amb **Theo Watson** i **Arturo Castro** juntament amb una creixent comunitat de programadors i dissenyadors.

<div class="destacat"><markdown>
OF comparteix amb Processing el plantejament de ser un programari creat per a apropar les possibilitats de la programació a artistes i dissenyadors, però té les seves pròpies característiques.
</markdown></div>

**openFrameworks és un conjunt d'eines en llenguatge C++** que combina recursos d'ús comú com ara OpenGL (per a gràfics), FreeType (tipografia), FreeImage (gestió d'imatges), Quicktime (vídeo), OpenCV (visió artificial) o Assimp (3D) en un entorn de programació senzill i intuïtiu. A més, és compatible amb els sistemes operatius principals (Windows, OSX, Linux, iOS, Android) i compta amb una comunitat d'usuaris, llibreries i recursos compartits.

<div class="destacat"><markdown>
OF es basa en la filosofia **DIWO** (_Do-It-With-Others_, faci-ho amb altres persones) que promou la creació col·lectiva i col·laborativa, a partir de recursos desenvolupats per una comunitat els resultats de la qual es reverteixen en la mateixa.
</markdown></div>

Lieberman i Watson incideixen en la importància del caràcter col·laboratiu del seu projecte, que consideren una forma de considerar l'art com a recerca:

>\[…\] som artistes desenvolupant eines per a altres artistes. Quan treballem, agafem idees que hem après i procurem portar-les a openFrameworks perquè uns altres puguin usar-les. Ens fa millors programadors i també significa que tenim un major impacte que si simplement fem un projecte amb els nostres noms. L'objectiu és prendre's seriosament el concepte d'art com a recerca i aquesta és una manera de publicar els resultats de la nostra recerca.
>
><cite>R. Kirschner (2008). «openFrameworks. Zachary Lieberman and Theodore Watson interviewed by Friedrich Kirschner». A: G. Stocker, C. Schöpf (ed.). _Ars Electronica 2008. A New Cultural Economy. The Limits of Intellectual Property_ (pàg. 209-213). Ostfildern: Hatje Cantz.</cite>

<div class="destacat"><markdown>
Segons admet Watson, una part de la motivació per a treballar en un projecte com OF sorgeix de la **necessitat de desenvolupar la pròpia creativitat sense veure's limitat pels programes comercials** de disseny gràfic o edició d'imatges, vídeo i àudio (entre d'altres).
</markdown></div>

El programari comercial facilita a qui no sap programar la creació de tot tipus de coses amb un ordinador, però alhora el porta a dependre de la compatibilitat d'aquest programari amb determinats sistemes operatius (com ocorre, notablement, amb Adobe Flash, que ha deixat de ser compatible amb iOS i deixarà d'usar-se oficialment el 2020). Com hem comentat, saber programar allibera els artistes i dissenyadors de les limitacions del programari comercial, però requereix uns coneixements que pocs tenen.

Per aquest motiu, **OF busca la major simplicitat possible en l'ús de les seves eines**. Partint d'uns coneixements bàsics del llenguatge C++, és possible treballar emprant exemples que es poden modificar, aprenent al mateix temps com funciona el codi de programació. A més, els projectes creats en OF són compatibles amb Processing, la qual cosa facilita la transició d'una plataforma a una altra.

<div class="destacat"><markdown>
Una vegada desenvolupat l'openFrameworks, Lieberman i Watson afirmen haver establert un sistema modular que permet als no-iniciats començar a treballar de manera senzilla, però alhora facilita una extensa varietat de recursos més avançats als usuaris.
</markdown></div>

En aquest aspecte, el llenguatge C++ resulta adequat, atès que permet programar en diferents nivells i compta amb nombrosos recursos, tant per a aprendre a usar-lo com per a desenvolupar projectes complexos. Com que és un entorn multiplataforma, també permet que qualsevol pugui usar-lo sense haver de canviar de sistema operatiu i, d'altra banda, facilita que el producte acabat sigui fàcilment exportable, per exemple de Windows a MacOSX o Linux. Aquesta compatibilitat és especialment útil per als artistes, que sovint han d'adaptar els seus projectes a diferents plataformes o màquines.

<div class="extra"><markdown>
**Som-hi amb openFrameworks**

El web [www.openframeworks.cc](http://www.openframeworks.cc/) conté tota la informació sobre OF, documentació, una galeria d'exemples i el propi programari a descarregar. Segons recomanen els seus creadors, el millor és partir d'una idea i buscar en els exemples el codi que ens permetrà desenvolupar el nostre projecte.
</markdown></div>

<div class="destacat"><markdown>
El web d'OF resumeix en quatre passos el procés d'instal·lació i primer ús de les eines: descarregar el programari, explorar exemples, crear un projecte i consultar tutorials.
</markdown></div>

D'aquesta manera, el treball amb OF no parteix d'un aprenentatge pas a pas des dels conceptes més bàsics, sinó que anima l'usuari a anar directament als exemples que necessita per a desenvolupar la idea que té en ment. Aquests es poden consultar en diferents categories, com ara 3D, comunicació, visió artificial, so, vídeo, etc. Cada exemple permet a l'usuari aprendre com aplicar les funcions necessàries per a aconseguir un objectiu determinat. Per exemple, en la categoria visió artificial (_Computer Vision_), trobem un arxiu creat amb OpenCV que permet captar, per mitjà d'una càmera, la presència d'una persona o objecte en un espai i seguir els seus moviments. Quan estudia el codi d'aquest arxiu, l'usuari aprèn a capturar vídeos per mitjà d'una càmera o arxiu pregravat, usar el vídeo per a generar algun tipus de càlcul i diferenciar entre l'objecte o persona i el fons.

Seguint el **principi de caixa d'eines**, es dona més importància al propi projecte, l'execució del qual ha de facilitar el programari gràcies a les múltiples combinacions que es poden fer del gran nombre de recursos que faciliten les llibreries i els projectes realitzats. OF s'ha emprat en tot tipus de projectes, des d'instal·lacions audiovisuals i interactives a _performances_, projectes de recerca científica, disseny d'interfícies, joguines, robots i nombroses peces desenvolupades amb intel·ligència artificial, realitat virtual i altres tecnologies.

#### MaxMSP/PureData

**MaxMSP** i **PureData** són dues eines desenvolupades per **Miller S. Puckette**, un investigador interessat en la música per ordinador. Puckette crea en els anys 80 el programari **Max** com a part del seu treball de recerca en música electroacústica a **l'IRCAM** (Institut de Recherche et Coordination Acoustique/Musique) de París i, de fet, bateja el programari en honor a **Max Vernon Mathews**, pioner de la música per ordinador. El programari, creat per MacOS, és àmpliament utilitzat i es desenvolupa posteriorment en diverses versions, des de la que va dissenyar IRCAM el 1989 per a NeXT, Silicon Graphics i Linux, coneguda com a Max Faster Than Sound (**Max/FTS**) fins a la versió comercial (**Max**), ampliada per **David Zicarelli**, que distribueix la seva empresa **Cycling'74** des de 1999, juntament amb altres versions com **Max/MSP**, que introdueix el 1997 la possibilitat de manipular senyals d'àudio digital en temps real, o **nat.0+55**, creada per **Netochka Nezvanova**, que permet controlar vídeos en temps real i ha estat molt popular entre els artistes de nous mitjans fins al començament de l'any 2000. D'altra banda, Puckette també ha desenvolupat una versió completament nova de Max, anomenada **Pure Data**, que s'ha consolidat com una alternativa de codi obert a Max/MSP.

<div class="destacat"><markdown>
Tant Max/MSP com Pure Data permeten a l'usuari processar senyals d'àudio i vídeo en temps real i connectar diversos objectes.
</markdown></div>

Per tant, no són simples editors d'àudio o vídeo, sinó que duen a terme tots els seus processos en temps real, a la manera d'un instrument que es pot ampliar de diverses maneres. Per exemple, Max/MSP es pot connectar amb altres sistemes i dispositius com ara un controlador MIDI (amb què es poden executar accions mitjançant botons, dials o teclats), una placa Arduino (que permet interactuar amb sensors electrònics, motors i altres components), sintetitzadors, sistemes d'il·luminació interactius i reactius (que responen a la música), projectors de vídeo, instruments musicals, micròfons i un llarg etcètera. Actualment, Max és compatible amb MacOS X i Windows, mentre que Pure Data es pot instal·lar en els sistemes operatius MacOS X, Windows i Linux.

<div class="extra"><markdown>
**Max, una eina de creació multimèdia**

Max es pot descarregar des del web de [Cycling'74](https://cycling74.com/products/max/), que comercialitza el programari en diverses versions (pagament únic o subscripció) i s'encarrega d'actualitzar-lo regularment.
</markdown></div>

##### Max/MSP

<div class="destacat"><markdown>
Com ocorre en altres entorns de programació com Processing i openFrameworks, Max permet crear sense necessitat de tenir coneixements previs sobre programació.
</markdown></div>

Max es divideix en diverses parts:

* **Max**: operacions de càlcul i MIDI.
* **MSP**: processament de senyals i àudio.
* **Jitter**: manipulació de vídeos i gràfics.

Quan obrim l'entorn de programació, creem un programa (_patch_), en què s'agrupen les diferents instruccions que haurà d'executar la màquina, sia per a produir so, manipular senyals de vídeo o produir una determinada interacció. Aquest programa es presenta com un full en blanc en què es van afegint objectes amb diferents funcions. Aquests objectes es connecten entre si per mitjà de línies que s'estenen des d'un dels enllaços de sortida d'un objecte a un enllaç d'entrada en un altre, establint una relació unidireccional de control o transmissió de dades.

<div class="destacat"><markdown>
D'aquesta manera, cada programa es configura visualment com un esquema format per diversos objectes (caixes diminutes) i les relacions entre aquests (línies) en un espai que es va adaptant a la complexitat de les instruccions que s'escriuen en aquest.
</markdown></div>

La interfície visual permet aquí manejar els diferents elements de manera més intuïtiva i examinar com s'ha construït el procés que genera el programa per a modificar-lo o corregir errors.

La flexibilitat d'aquest sistema permet construir el que es pot considerar com un instrument, que es pot executar en temps real, la qual cosa permet efectuar canvis i conèixer els resultats de manera immediata. Així, és possible crear una composició d'àudio o vídeo que es crea automàticament a partir de determinats _inputs_, com ara dades recollides en temps real de diverses fonts, amb la qual cosa s'obté una peça generativa o interactiva. Per exemple, a _Synaesthetic Object (Coltrane)_, l'artista **R. Luke Dubois** (cocreador de Jitter), crea una _performance_ audiovisual emprant una anàlisi computeritzada de l'àlbum _Ascension_ (1965) del músic John Coltrane per a generar una forma en 3D en temps real. Controlant diversos paràmetres, l'artista manipula la forma en 3D, que al seu torn genera diferents sons en funció de la seva contínua alteració de l'aspecte.

<div class="extra"><markdown>
**_Synaesthetic Object (Coltrane)_**

En aquesta _performance_ audiovisual, l'artista R. Luke Dubois converteix la música de John Coltrane en una forma en 3D creada en temps real. Podeu veure la _performance_ a [https://vimeo.com/15690272](https://vimeo.com/15690272). L'artista explica el seu treball amb Max/MSP i Jitter en una conferència disponible a [https://vimeo.com/5480466](https://vimeo.com/5480466).
</markdown></div>

A més de la seva capacitat per a treballar amb continguts generats en temps real, Max/MSP destaca per la seva capacitat per a connectar diversos objectes entre si i controlar diferents dispositius. **ReacTIVision** és una eina de codi obert que, combinada amb Max/MSP, permet captar la posició d'objectes dotats de marcadors per mitjà d'una càmera, de manera que és possible manipular-los per a modificar una composició en temps real o obtenir una instal·lació interactiva. Un altre dispositiu compatible amb Max/MSP que ha estat molt popular és **Xbox Kinect**, ideada per a la consola de videojocs de Microsoft. Aquesta càmera amb sensors de moviment permet seguir amb precisió els moviments de les diferents parts del cos. També és possible emprar les plaques **Arduino**, que permeten crear instal·lacions interactives i incorporar nombroses funcions a objectes i sensors.

##### Pure Data

**Pure Data (Pd)** és bàsicament la versió gratuïta i de codi obert de Max/MSP, escrita principalment pel seu creador Miller S. Puckette. També està pensada perquè els artistes visuals i músics puguin crear programari sense escriure codi a fi de processar i generar so, vídeos, gràfics 2D i 3D, interfícies i MIDI. Pd es distribueix en dues versions:

1. **Pd vanilla**: centrat en senyals d'àudio i processos MIDI.
2. **Pd extended**: inclou un gran nombre de llibreries escrites per la comunitat de col·laboradors i es pot emprar per a processar gràfics, _streaming_ audiovisual, ús de sensors, etc.

<div class="destacat"><markdown>
L'avantatge de Pd és la seva compatibilitat amb múltiples plataformes (GNU/Linux, Windows i MacOSX) i dispositius (Raspberry Pi, ordinadors portàtils i de sobretaula, tauletes i telèfons intel·ligents), per la qual cosa és molt popular entre els artistes visuals que treballen amb noves tecnologies, particularment en projectes generats a partir de fluxos de dades.
</markdown></div>

<div class="extra"><markdown>
**Pure Data, la versió en codi obert de Max**

Al web [www.puredata.info](http://www.puredata.info/) us podeu descarregar el programari i consultar les llibreries, exemples i recursos per a treballar amb Pure Data. Es tracta d'una plataforma creada per la comunitat que es va actualitzant regularment.
</markdown></div>

<div class="destacat"><markdown>
De la mateixa manera que Max/MSP, Pd empra un llenguatge de programació de flux de dades, en què es col·loquen una sèrie d'objectes (funcions algorítmiques) en un «llenç» i es connecten entre si per mitjà de línies que determinen com flueixen les dades d'un objecte a un altre.
</markdown></div>

Cada objecte executa una tasca específica, des d'operacions aritmètiques a funcions complexes d'àudio o vídeo com ara descodificació de vídeo o reverberació. Pd es beneficia dels nombrosos programes que han creat els desenvolupadors i artistes que l'empren, la qual cosa permet treballar amb qualsevol d'aquests _patches_ i aplicar-ho, amb o sense modificacions, en un projecte nou.

Més enllà dels recursos facilitats en els llocs web de Max/MSP i Pure Data, la millor manera de conèixer aquests programes és explorar els usos que fan d'aquests els artistes visuals i músics en els vídeos sobre Pure Data penjats a Vimeo i YouTube i els recursos «Made with Max» i «Projects» al web de Cycling'74.

#### vvvv

**vvvv** va ser creat el 1998 per **Max Wolf** i **Sebastian Oschatz** com una eina per a la creació de projectes multimèdia. Juntament amb **Sebastian Gregor** i **Joreg**, tots ells membres de l'estudi **MESO**, van decidir desenvolupar el seu propi programari quan van comprovar que les eines comercials amb què llavors comptaven (Opcode Max, Macromedia Director, Flaix i d'altres) no els oferien suficient llibertat creativa. Després d'un treball que es va estendre durant cinc anys, van desenvolupar l'entorn de programació que es va llançar el 2002 i, posteriorment, van aconseguir una gran acceptació entre els programadors i dissenyadors. Com a programari gratuït (per a ús no-comercial), vvvv se segueix desenvolupant sobre la base de les aportacions d'una extensa comunitat d'usuaris i el **vvvv group**, que formen els quatre creadors originals.

<div class="destacat"><markdown>
L'objectiu de Wolf, Oschatz, Gregor i Joreg era poder programar en temps real per a produir entorns multimèdia complexos que es poguessin modificar per mitjà d'una interfície gràfica.
</markdown></div>

Aquest plantejament fa de vvvv una eina ideal per VJs que creen espectacles en directe, i també per a artistes que desenvolupen instal·lacions interactives o dissenyadors que busquen crear prototips de productes d'una manera ràpida i efectiva. Entre les seves característiques principals hi ha el fet que permet treballar amb codi alhora que es visualitzen els resultats, podent organitzar els diferents elements que formen un programa i les relacions entre si per mitjà d'una interfície gràfica.

Com altres entorns de programació, vvvv compta amb llibreries i _plugins_ desenvolupats pels mateixos usuaris, que expandeixen les seves possibilitats i faciliten el desenvolupament de projectes sense haver de començar de zero. Els usos principals de vvvv són l'animació **2D i 3D**, **instal·lacions multipantalla** (gràcies a una tècnica denominada _boygrouping_ és possible controlar i sincronitzar diversos ordinadors des d'un ordinador-servidor), **_motion graphics_**, **video _mapping_**, **visualització de dades** (a partir d'un arxiu de base de dades o de dades obtingudes a la xarxa), **informàtica física** (vvvv és compatible amb Wii, Leap, Kinect, Oculus Rift, Arduino i altres dispositius), **so** (si bé admet no arribar al nivell de PureData i MaxMSP) i **visió artificial** (inclou detecció del moviment, rostre, color, gest, etc.). Les possibilitats de creació que facilita aquest entorn de programació són immenses i han estat explorades per nombrosos artistes i dissenyadors.

Una part important del desenvolupament i la popularització de vvvv es dona en el context de l'organització **NODE Forum for Digital Arts**, fundada el 2010 a Frankfurt. Aquesta organització sense ànim de lucre crea esdeveniments, com ara tallers de programació, exposicions, _performances_ i debats que tenen lloc en un festival biennal que, durant una setmana, reuneix professionals, estudiants i artistes de tot el món. Entre les col·laboracions desenvolupades a NODE, cal destacar la convocatòria oberta als artistes que ofereix l'empresa **FRM**, creadora del marc d'art digital **FRAMED\***, un dispositiu compost per una pantalla de 24 polzades amb un ordinador, càmera i sensors integrats pensat per penjar-se a la paret com si es tractés d'un quadre i que pot mostrar una àmplia varietat d'obres digitals creades amb tecnologies com ara openFrameworks, Processing, vvvv, Cinder o HTML5, entre d'altres. D'aquesta manera, FRM promou la creació d'obres d'art amb vvvv exclusivament per a un dispositiu dissenyat per a acollir-les.

<div class="extra"><markdown>
**FRAMED\*, un marc d'art digital**

Desenvolupat des de 2010 per l'empresa FRM, [FRAMED\*](https://frm.fm/) és un dispositiu pensat per a mostrar art digital i objectes digitals de disseny que es penja a la paret com un quadre. És compatible amb nombrosos entorns de programació creativa com openFrameworks, Processing, vvvv o Cinder.
</markdown></div>

El treball en vvvv es duu a terme en una finestra en què no hi ha absolutament res. Aquesta finestra es denomina _**patch**_ (la programació en aquest entorn es coneix com a _patching_) i és l'espai on es col·locaran els nodes, que són els elements amb què es construeix un determinat programa. Cada node genera, processa o envia informació i ho fa per mitjà d'una sèrie d'entrades (_inlets_) i sortides (_outlets_). En aquestes entrades o sortides es creen enllaços amb altres nodes per a anar construint el programa. Un tipus de caixes particular són les IOBoxes, que permeten introduir valors que posteriorment es comuniquen amb un node perquè aquest processi o enviï la informació rebuda. Per a visualitzar els resultats del programa que s'està creant amb els diferents nodes, cal introduir un node denominat _renderer_, que duu a terme la renderització en temps real del codi que s'està escrivint quan es connecten les caixes.

<div class="destacat"><markdown>
En vvvv, per tant, la programació es basa en nodes que es connecten entre si.
</markdown></div>

Les dades circulen d'un node a un altre en funció de si els enllaços s'estableixen en els seus _inlets_ o _outlets_ i els resultats es fan visibles per mitjà d'un _renderer_. Quan es modifiquen les dades, és possible veure com els canvis afecten la visualització en temps real. Com a eina pensada per a treballar amb dades en temps real, la seva interfície presenta similituds amb la de Max/MSP i Pure Data, si bé presenta les seves pròpies particularitats i pot resultar més complexa d'usar.

<div class="extra"><markdown>
**Programar amb vvvv**

El web [vvvv.org](http://vvvv.org/) reuneix els recursos per a conèixer i començar a treballar amb aquest programari. Els primers passos poden resultar poc intuïtius. Per tant, es recomana seguir la guia pas a pas. Entre els recursos d'aprenentatge, podeu consultar un tutorial bàsic en espanyol a l'enllaç [https://vvvv.org/documentation/sp.tutorial-001](https://vvvv.org/documentation/sp.tutorial-001).
</markdown></div>

#### Cinder

**Cinder**, llançada el 2010, és un llibreria de programació en C++ de codi obert creada per **Andrew Bell** amb aportacions de Hai **Nguyen**.

<div class="destacat"><markdown>
La llibreria permet crear programes independents emprant dades obtingudes a internet o generades a partir de la interacció amb el teclat, el ratolí o pantalles tàctils, entre d'altres.
</markdown></div>

Es poden crear gràfics en 3D, formes generades amb algorismes, processament d'imatges, treball amb text i tipus de lletra personalitzats i edició d'àudio i vídeo. A més, Cinder és una multiplataforma, de manera que el mateix codi funciona en MacOS, Windows, Linux, iOS i Windows UWP. Per les seves característiques, es compara sovint amb openFrameworks i també es considera una alternativa per a C++ d'altres entorns com ara Processing (basat en Java), Microsoft Silverlight o Adobe Flash. Cinder s'empra sovint en instal·lacions interactives i basades en les visualització de dades o la simulació de propietats físiques.

<div class="extra"><markdown>
**Entorns evolutius**

El 2011, l'estudi FIELD va crear una sèrie de vídeos i animacions generatives pel _video wall_ de la seu del Deutsche Bank de Hong Kong. Una de les animacions, desenvolupada amb Cinder, simula l'efecte d'una ona amb petites partícules que es desplacen per la pantalla. Podeu visualitzar-ho a l'enllaç [https://www.field.io/project/hi-res-realtime-artworks/](https://www.field.io/project/hi-res-realtime-artworks/).
</markdown></div>

<div class="destacat"><markdown>
Si bé presenta similituds amb Processing o openFrameworks, Cinder resulta una mica més complex d'utilitzar i no és la millor opció per qui comença a crear projectes de programació creativa.
</markdown></div>

Els mateixos creadors afirmen que és millor començar amb exemples creats i anar aprenent a partir d'aquests, per la qual cosa és possible accedir a nombrosos programes de mostra (allotjats a **GitHub**) i també emprar les eines **Tinderbox**, pensades per a facilitar la creació de nous projectes i **Cinderblocks**, una col·lecció de llibreries i codi que es combinen amb Tinderbox per a integrar ràpidament certes funcions en un projecte.

Crear un projecte amb Cinder requereix estar familiaritzat amb el llenguatge C++ i l'ús d'OpenGL. Hi ha **tres funcions principals** que estructuren qualsevol projecte:

* `setup( )` inicialitza les variables quan arranca el programa.
* `update( )` modifica aquestes variables.
* `draw( )` visualitza el resultat a la pantalla.

<div class="destacat"><markdown>
Per mitjà d'aquestes tres funcions es defineixen els elements del programa i les rutines que s'executen en un bucle infinit.
</markdown></div>

A aquestes funcions, cal sumar-ne dues més:

* `prepareSettings` permet definir diversos paràmetres del programa abans d'iniciar-lo, com ara la grandària de la finestra o els fotogrames per segon.
* `shutdown` se situa just quan se surt de l'aplicació, per a alliberar memòria o apagar dispositius.

Cinder usa l'espai de noms (_namespace_) de C++ per a distingir les funcions, de manera que tots els elements emprats en aquesta llibreria estan dins de l'espai de noms cinder:: (abreujat ci::). L'ús d'aquesta convenció exemplifica com el treball amb Cinder es basa en un coneixement previ de C++, i és que, **a diferència d'altres entorns, aquí cal escriure codi coneixent la sintaxi i els diferents recursos que disposa la llibreria**. En el lloc web es facilita una llista de referències per categories que pot servir per a trobar una funció concreta, però (com sol ocórrer amb altres llenguatges de programació) és mitjançant exemples ja realitzats com es poden descobrir millor les possibilitats de Cinder.

En aquest sentit, el primer ús de Cinder passa per crear un projecte nou amb Tinderbox i explorar algun dels projectes de mostra. Amb Tinderbox escollim la localització i el nom del projecte, i també el tipus de projecte a realitzar i, finalment, triem un compilador (XCode o Visual C++2010). El programa crea el projecte i les referències a la llibreria de Cinder, a més d'un codi de mostra i un exemple amb què es pot començar a treballar. A més, la guia **Hello Cinder** ofereix un recorregut informal per les fases de creació d'un projecte, des de la creació de la finestra en què es mostraran els resultats a la inserció i manipulació d'imatges, extracció de dades, control per mitjà del teclat i ratolí, creació d'un entorn en 3D i treball amb partícules aplicant regles, entre d'altres.

<div class="extra"><markdown>
**Primers passos i receptes de Cinder**

La complexitat de Cinder fa recomanable explorar les guies pas a pas, com ara el tutorial Hello Cinder de Robert Hodgin ([https://libcinder.org/docs/guides/tour/hello\_cinder.html](https://libcinder.org/docs/guides/tour/hello_cinder.html)) i els llibres com, per exemple, _Cinder Creative Coding Cookbook_ de Dawid Gorny i Rui Madeira (Packt Publishing, 2013), que facilita l'aprenentatge de Cinder per mitjà d'una sèrie de «receptes» que porten l'usuari novell a descobrir pas a pas les diferents possibilitats que aquest li facilita per a crear tot tipus de projectes.
</markdown></div>


#### Entorns Javascript

Hi ha una gran quantitat d'entorns i llibreries de Javascript per a programació creativa que permeten mostrar animacions interactives, visualitzacions de dades, jocs i tot tipus de creacions a qualsevol navegador web. L'avantatge d'usar Javascript és que, com que és un projecte accessible des d'un navegador, no depèn dels sistemes operatius i es pot distribuir molt més fàcilment. A continuació destaquem alguns dels entorns i llibreries més emprats.

##### p5.js

Creat per l'artista i programadora **Lauren McCarthy** el 2014, [**p5.js**](https://p5js.org/) és una **reinterpretació de Processing per a web**, usant Javascript i HTML. Més enllà d'una simple adaptació de Processing, p5.js persegueix els mateixos objectius (fer que programar sigui fàcil per als artistes i dissenyadors) però treballant a partir de Javascript en lloc de Java. Això permet que els projectes creats amb p5.js s'integrin naturalment a un lloc web i aprofitin totes les possibilitats d'aquest entorn. Per exemple, amb p5.js es pot crear una animació que s'estengui per tota la finestra del navegador i no es limiti a un requadre que s'insereix a la pàgina. De forma similar a Processing i amb el suport dels seus creadors, p5.js se segueix desenvolupant gràcies a una extensa comunitat de desenvolupadors.

##### Three.js

La **creació i visualització d'animacions en 3D** en un navegador web és la funció principal de [**Three.js**](https://threejs.org/), una llibreria de Javascript i API desenvolupada per **Ricardo Cabello** i **Branislav Ulicny** el 2010. Emprant el Javascript i WebGL, Three.js permet crear animacions en 3D complexes sense necessitat de _plugins_ i evitant, per tant, la càrrega de processament que suposaria el seu ús. Un dels avantatges que ofereix als artistes i dissenyadors és la seva facilitat d'ús, ja que no requereix coneixements avançats de Javascript ni WebGL, alhora que compta amb nombrosos exemples que faciliten incorporar codi directament a un projecte i també emprar altres llibreries de Javascript.

##### Paper.js

Conegut com «la navalla suïssa de la programació amb gràfics de vectors», [**Paper.js**](http://paperjs.org/) permet crear **animacions interactives amb gràfics de vectors i corbes bezier** dins l'element <canvas> en HTML5, la qual cosa facilita integrar qualsevol projecte en un lloc web. Les animacions creades amb Paper.js són compatibles amb qualsevol navegador i sistema operatiu, incloent dispositius mòbils. Desenvolupat per **Jürg Lehni** i **Jonathan Puckey**, aquest entorn està pensat per a facilitar la programació als artistes i dissenyadors, de manera que resulta fàcil d'aprendre i presenta una interfície clara i consistent.

##### D3.js

Una eina molt popular en la integració de la visualització de dades a llocs web és [**D3.js**](https://d3js.org/), una llibreria de Javascript que empra els estàndards SVG, HTML5 i CSS per a crear **visualitzacions de dades interactives** que es poden mostrar a qualsevol navegador web. Desenvolupada a partir de 2011, D3.js s'empra en milers de llocs web, particularment per a integrar gràfics interactius i mapes als llocs web de diaris i agències de notícies. A més, atès que crea arxius SVG, D3.js també permet exportar projectes per al seu ús en publicacions en paper. La llibreria empra funcions de Javascript per a crear objectes en format SVG, donar-los un estil, crear efectes dinàmics o també emprar bases de dades a què s'assignen objectes SVG per a generar diagrames i gràfics interactius.

### Per què emprar programari de codi obert?

Avui dia, els artistes i dissenyadors depenen del programari d'una manera que no s'havia donat abans en la relació entre els creadors i les eines, i els materials que empren per a dur a terme els seus projectes.

<div class="destacat"><markdown>
Un disseny, o una obra d'art, es pot veure definida pràcticament íntegrament per les possibilitats que el programari facilita a l'usuari, sent clau el desenvolupament de determinats programes (sia de retoc fotogràfic, maquetació, dibuix vectorial o animació 3D, per exemple) en el sorgiment de noves tendències en disseny gràfic, il·lustració, animació o art visual. A més, la seva pròpia existència com a arxiu digital (editable) depèn de la compatibilitat del programari amb què ha estat creat i la continuïtat del mateix.
</markdown></div>

El popular programa d'animació Adobe Flash, que va dominar la inclusió d'elements multimèdia als llocs web al començament de l'any 2000, deixarà d'actualitzar-se el 2020, deixant obsolets milions de videojocs, animacions, _microsites_ i altres components que es van crear durant aquests anys i que des de 2010 han deixat de ser compatibles amb el sistema operatiu iOS d'Apple. Aquesta situació ha portat artistes com **Rafael Rozendaal**, una part de l'obra del qual consisteix en animacions destinades a ser vistes en un navegador web, a migrar les seves obres de Flaix a HTML5. Com ell, molts altres creadors que van optar per emprar un programari propietari no tenen més remei que fer la transició a un altre programa o llenguatge de programació, o deixar que el seu treball desaparegui, ja que no es pot visualitzar amb els navegadors actuals.

<div class="extra"><markdown>
**Rafael Rozendaal: _Websites_**

Des de 2001, l'artista Rafael Rozendaal realitza obres per a ser vistes en un navegador web el títol del qual és el seu nom de domini i que el col·leccionista adquireix amb l'obligació de mantenir en línia i lliurement accessible. Cada obra és, en definitiva, una sèrie de línies de codi HTML i comandaments en Javascript que es poden veure (juntament amb la signatura de l'artista) quan s'activa la vista del codi font del lloc web. Podeu veure l'obra a l'enllaç [https://www.newrafael.com/websites/](https://www.newrafael.com/websites/).
</markdown></div>

L'obra de Rozendaal és un bon exemple de la fusió entre l'obra i les eines que la fan possible. Tal com afirmen els artistes **Aymeric Mansoux** i **Marloes de Valk**, «el programari _és_ l'obra i el seu codi és una part integral del mateix» (Mansoux i de Valk, 2008, pàg. 6). Per tant, cal que el codi no depengui d'una empresa que facilita l'accés al mateix per mitjà de llicències de programari, sinó que sigui lliure i gratuït. Aquesta és la premissa del programari de codi obert, també denominat **FLOSS (_Free/Lliure/Open Source Software_)**, que aporta nombrosos avantatges als creadors. Mansoux i de Valk resumeixen els **avantatges** d'emprar el FLOSS en projectes creatius de la manera següent:

* **El programari lliure compta amb quatre llibertats**: la llibertat d'usar el programari amb qualsevol objectiu, la llibertat d'estudiar i modificar el codi font, la llibertat de compartir i redistribuir el programari i, finalment, la llibertat de millorar el programari i publicar una versió pròpia.
* **El programari lliure posa en contacte els creadors amb una comunitat** en què es comparteixen recursos i és possible crear noves eines combinant o modificant les ja existents.
* Quan es distribueix una creació amb programari lliure, **augmenta significativament el nombre d'espectadors o usuaris potencials**, i es facilita la pròpia conservació de l'obra.
* **El codi és part de l'obra i, per tant, ha de ser accessible per a la seva anàlisi**, de manera que es pugui comprendre millor el procés que fa possible l'obra i inspirar-se en el mateix.
* **Emprar FLOSS implica una declaració d'intencions**: reconeix la importància del programari en el procés creatiu i la necessitat d'alliberar-lo del control de les empreses (Mansoux i de Valk, 2008, pàg. 7-12).

<div class="destacat"><markdown>
Els artistes reconeixen que la majoria d'estudiants de les universitats i escoles d'art no coneixen el programari de codi obert perquè predomina la formació en els programes de programari propietari més usats en la indústria.
</markdown></div>

Cal saber manejar els programes que empren les principals empreses i estudis de disseny, atès que facilita als estudiants accedir a llocs de treball. Però això no s'aplica als artistes, que tenen la llibertat de crear amb qualsevol eina, i també resulta útil per a qualsevol creador conèixer i saber utilitzar més eines que les comunament utilitzades en la indústria.

L'artista **Pedro Soler**, expert en processos artístics i director dels centres de producció de Hangar (Barcelona) i LABoral Centro de Arte y Creación Industrial (Gijón), incideix en la importància d'emprar programari lliure ja que, segons afirma:

>\[Un artista\] es pot veure completament bloquejat per un codi que està protegit \[per drets d'autor\] i fora del seu abast. \[…\] **El programari \[lliure\] permet passar del mode de solament lectura al de llegir i escriure**.
>
><cite>A. Mansoux, M. de Valk (ed.) (2008). _FLOSS+ART_ (pàg. 14). Poitiers: GOTO10.</cite>

Això s'aplica a tot tipus de creadors i es pot donar de moltes maneres. Un programari propietari pot deixar de ser compatible amb determinats dispositius o sistemes operatius (com ocorre amb Adobe Flash) i, fins i tot, amb versions anteriors del mateix producte, pot resultar excessivament car, pot presentar fallades de seguretat que comprometin un projecte, fa dependre els usuaris del seu propi calendari de desenvolupament i, finalment, com hem comentat, limita les possibilitats de creació a les funcions que s'han introduït al programari i no sempre aconsegueixen cobrir les necessitats dels creadors.

<div class="destacat"><markdown>
Els artistes i dissenyadors no solen tenir els recursos i coneixements per a desenvolupar els seus propis programes, per la qual cosa el desenvolupament d'eines **de programació creativa** com **Processing**, **openFrameworks**, **PureData** o **VVVV**, entre d'altres, han constituït una autèntica revolució.
</markdown></div>

En l'actualitat, un nombre creixent d'artistes i dissenyadors desenvolupen els seus projectes amb aquestes eines, que tenen a la seva base la filosofia de codi obert i no podrien existir sense les aportacions d'una extensa comunitat d'usuaris. Segons afirmen **Casey Reas** i **Ben Fry** (creadors de Processing):

>Probablement, Processing no existiria sense les seves connexions amb el programari de codi obert. Usar projectes existents de codi obert com a guia, a més de per a importants components de programari, ha fet possible que el projecte es desenvolupi en menys temps i sense un gran equip de programadors.
>
><cite>C. Reas, B. Fry (2007). _Processing: a programming handbook for visual designers and artists_. Cambridge/Londres: The MIT Press.</cite>

Aquesta comunitat es converteix, al seu torn, en una de les raons apuntades per Mansoux i de Valk per emprar FLOSS, ja que els creadors no han d'elaborar els seus projectes en solitari, sinó que es nodreixen de les aportacions d'altres i compten tant amb les llibreries de codi com amb els fòrums i espais d'intercanvi en què poden resoldre els problemes que plantegi el projecte o iniciar col·laboracions.

<div class="destacat"><markdown>
La preservació de les obres d'art o projectes de disseny creats amb programari de codi obert també resulta més fàcil quan els recursos emprats estan àmpliament distribuïts entre els membres de la comunitat.
</markdown></div>

El 2015, amb motiu d'una retrospectiva de la seva obra al MUAC de Mèxic DF, l'artista Rafael Lozano-Hemmer va decidir distribuir el codi font i els esquemes de les 42 peces exposades en una memòria USB. Aquesta iniciativa se suma al compte que l'estudi de l'artista manté en el repositori GitHub, en què es pot accedir als programes creats per a alguns dels seus projectes artístics. Pel que fa a la lliure distribució d'aquests recursos, Lozano-Hemmer afirma el següent:

>Volem que el programari i els mètodes es basin més en el diàleg, siguin menys exclusius i més oberts, més virals. Si els meus servidors es bloquegen i cap museu no té còpies de seguretat, la meva obra seguirà estant present en les bifurcacions de dotzenes o centenars de projectes que altres artistes-programadors hauran desenvolupat usant el codi font creat en el meu estudi. Contagiar amb el nostre codi els projectes futurs és la nostra nova estratègia de conservació.
>
><cite>R. Lozano-Hemmer (2015, novembre). «Best practices for conservation of media art from an artist's perspective». _GitHub_ \[en línia\]. <[https://github.com/antimodular/Best-practices-for-conservation-of-media-art](https://github.com/antimodular/Best-practices-for-conservation-of-media-art)\></cite>

L'artista coincideix amb els principis expressats per Mansoux i de Valk, tant en l'aspecte de la conservació com en el fet fonamental que «el programari és l'obra» i, per tant, ha de ser creat amb eines que no depenguin d'empreses que el puguin fer econòmicament inaccessible, incompatible amb determinats sistemes o simplement obsolet. Però a més, aquest programari que dona forma a l'obra ha de ser compartit, no solament amb la finalitat d'assegurar la seva continuïtat, sinó també per a nodrir els projectes futurs. De la mateixa manera que les obres d'art i els objectes de disseny han inspirat la generació següent d'artistes i dissenyadors, el programari de codi obert facilita el desenvolupament de la creativitat i la innovació en l'ús de les noves tecnologies.

<div class="extra"><markdown>
**GitHub**

GitHub és una de les plataformes més populars de desenvolupament col·laboratiu. Allotja el codi de nombrosos projectes usant el sistema Git, que permet portar un control de les versions que es fan de les aplicacions i també compartir el codi amb altres desenvolupadors. Nombrosos artistes i dissenyadors publiquen el codi font dels seus projectes amb GitHub, amb la finalitat de conservar-lo i, alhora, fer-lo accessible a uns altres, al mateix temps que empren els recursos disponibles d'aquesta plataforma per als seus propis projectes. El lloc web de la plataforma ([https://github.com/](https://github.com/features)) conté informació detallada sobre el seu ús.
</markdown></div>

## Disseny i programació

![Portada](@attachment/uoc/programacio_disseny_arts/portada3.png)

<cite><a href="http://arts.recursos.uoc.edu/programacio-disseny-arts/3-1-portada/">Veure la portada en funcionament</a></cite>

### Introducció

Des de 2015, el dissenyador i emprenedor **John Maeda** presenta cada any el **Design in Tech Report**, un informe elaborat amb un grup d'investigadors sobre el paper que exerceixen el disseny i els dissenyadors en les indústries tecnològiques. El 2017, [Maeda][2] va introduir una divisió del disseny en tres categories:

* **Disseny clàssic**: és el que s'associa tradicionalment al concepte de disseny (gràfic, de producte, etc.) i concep la creació d'un producte complet basat en criteris funcionals i estètics.
* **_Design thinking_**: situat en l'àmbit de l'empresa, busca innovar en relació amb el consumidor, responent a l'alta competitivitat del mercat per a aconseguir una diferenciació i fidelització del consumidor.
* **Disseny computacional**: associat a l'àmbit de les noves tecnologies, es caracteritza per la necessitat d'adaptar el disseny a un intercanvi constant de dades en temps real.

En aquesta divisió resulta particularment rellevant la comparació que estableixen Maeda i el seu equip entre el **disseny clàssic** i el **disseny computacional**. Segons afirmen, hi ha una gran diferència entre tots dos: mentre el primer se centra en la lenta i precisa elaboració d'un producte amb materials físics, que es presenta en el seu estat final i es destina a un públic relativament reduït; el segon es desenvolupa i distribueix ràpidament emprant dades, algorismes i continguts virtuals, està sempre obert als canvis i evolucions, i es destina a un públic massiu. Aquesta comparació resulta molt similar a la que es podria fer entre l'**art clàssic** i l'**art computacional**, sent el primer el que es caracteritza per la creació de pintures, escultures i altres objectes artístics per mitjà de tècniques més o menys tradicionals; mentre que el segon implica la creació artística per mitjà d'algorismes i dades obtingudes en temps real.

El primer que s'extreu de la classificació que presenten Maeda i el seu equip és que **quan es treballa amb ordinadors, els dissenyadors poden no solament emprar-los com a simples eines que faciliten el seu treball** (de fet, es pot dir que avui dia tots els dissenyadors usen ordinadors en el seu treball), **sinó que també incorporen la computació en el propi procés creatiu**, per mitjà de l'ús de models, algorismes i fluxos de dades, que en definitiva poden donar lloc a un producte dinàmic i adaptable (com una interfície d'usuari o una visualització de dades en temps real) o a un producte físic acabat (per exemple, una cadira o la portada d'un llibre), però fruit d'un procés en què hi han intervingut tant el dissenyador com el programa que ha emprat. En aquest tipus de disseny no es parteix d'una idea concreta d'un producte que es desenvolupa fins a completar-lo, sinó que s'estableixen uns paràmetres i condicions que contribueixen a definir el producte i, alhora, obren un marc de possibilitats.

<div class="destacat"><markdown>
Els elements del disseny no formen una única composició, sinó que es relacionen entre si com a part d'un sistema. De fet, el producte final és una de les múltiples solucions existents per al problema plantejat inicialment.
</markdown></div>

En aquest apartat veurem algunes de les maneres com la computació està transformant el disseny, partint de principis que antecedeixen els ordinadors personals en **el disseny paramètric**, la participació directa de l'ordinador per mitjà d'algorismes inspirats en els sistemes naturals en **el disseny generatiu** i, finalment, la projecció futura de les possibles col·laboracions entre l'humà i la màquina en els projectes de **disseny** i **intel·ligència artificial**.

### Disseny paramètric

El **disseny paramètric** s'avança als programes informàtics per mitjà d'una concepció del disseny com a **sistema regit per uns paràmetres** que descriuen totes les seves possibilitats dins una estructura predeterminada. L'investigador **Robert Woodbury** descriu clarament què diferencia el disseny paramètric del disseny «clàssic» i, alhora, com es transforma la relació entre el disseny i el producte que està creant:

>El mitjà del disseny arquetípic és el llapis i el paper. Més precisament: el llapis, la goma d'esborrar i el paper. El llapis suma i la goma d'esborrar resta. \[…\] El modelatge paramètric \[…\] introdueix un canvi fonamental: les «marques», és a dir, aquelles parts d'un dibuix o model que es relacionen i canvien juntes de manera coordinada. Els dissenyadors ja no han de simplement afegir i esborrar. Ara agreguen, esborren, relacionen i reparen. \[…\] En lloc que el dissenyador creï la solució del disseny (mitjançant la manipulació directa) com sol ocórrer amb les eines de disseny convencionals, la idea és que el dissenyador estableixi les relacions mitjançant les quals les peces es connecten, construeixi un disseny utilitzant aquestes relacions i editi les relacions observant i seleccionant entre els resultats produïts.
>
><cite>R. Woodbury (2010). _Elements of Parametric Design_. Londres / Nova York: Routledge.</cite>

Per tant, el dissenyador ha de treballar en la definició de les relacions entre els elements que formen part del disseny, més que pensar en un producte final que respongui intuïtivament a una idea concebuda íntegrament des del principi.

<div class="destacat"><markdown>
Cada decisió de disseny ha d'adoptar una forma explícita, que permeti ser identificada, editada i executada en funció de les variables que s'introdueixin (Woodbury, 2010, pàg. 26).
</markdown></div>

Així, el disseny es converteix en un conjunt d'algorismes, instruccions que determinen com es relacionen els seus elements constitutius i el fan infinitament adaptable, alhora que sempre delimitat en unes regles precises i inequívoques.

La dissenyadora i investigadora **Rosa Llop** incideix en el fet que els diferents mitjans que s'empren en la comunicació gràfica (sia revistes, llibres, tauletes, telèfons intel·ligents o ordinadors, cadascun amb un format diferent) fan impossible predir sobre quin suport es plasmarà un missatge i, per tant, cal aplicar una **mentalitat sistemàtica** al procés de disseny (Llop, 2014, pàg. 20). El disseny paramètric, indica Llop, permet aplicar un llenguatge similar a la programació que facilita el treball interdisciplinari. És per això que proposa les condicions que ha de complir un llenguatge visual basat en paràmetres, aplicat al disseny gràfic (Llop, 2014, pàg. 21-25):

* Ha de **contenir una estructura que permeti visualitzar** correctament com es relacionen entre si els diferents paràmetres.
* Ha d'incloure **tot el coneixement** sobre el llenguatge visual que ha consolidat l'ofici dels dissenyadors gràfics.
* Ha de **permetre un marc de treball** sobre el qual les decisions no es prenen de zero, sinó sobre la base d'una experiència i uns coneixements previs.

Treballar dins d'un sistema visual preestablert, segons Llop, permet als dissenyadors dedicar-se a les parts més creatives del disseny, mantenint la necessària funció comunicativa i la coherència entre els elements del disseny i també entre els diferents dissenys que formen part d'una sèrie, com ocorre per exemple amb les portades dels llibres d'una mateixa col·lecció o editorial. Potser l'exemple més conegut d'aquest tipus de sistema visual són les portades dels llibres de l'editorial Penguin, fundada el 1935 al Regne Unit i pionera en la publicació de llibres de butxaca. El primer disseny de les portades, que s'ajustava a una plantilla horitzontal, va ser creat per **Edward Youngs** i assignava una posició i un tipus de lletra a cada element de la portada, a més d'adoptar un codi de colors que identificava el contingut del llibre (taronja per a ficció, verd per a novel·la negra, blau fosc per a les biografies, vermell cirera per a viatges i aventura, vermell per a textos teatrals). Aquesta plantilla va ser redissenyada pel cèlebre tipògraf alemany **Jan Tschichold**, qui va establir unes **regles precises de composició de les portades i de l'ús de la tipografia en els llibres**. La nova plantilla, creada el 1947, no suposa un canvi radical respecte a la de Youngs, però estilitza el conjunt i aconsegueix una major coherència entre els elements de la portada.

<div class="extra"><markdown>
**Jan Tschichold, _Penguin Composition Rules_ (1947-1949)**

Durant el seu breu període com a cap de tipografia i producció a Penguin Books, Tschichold es va centrar a establir estàndards en l'ús de la tipografia que asseguressin la coherència entre tots els elements del llibre. Les seves normes de composició, redactades en un fullet de quatre pàgines, defineixen un estil tipogràfic clar i precís, que s'ha mantingut durant dècades (Baines, 2005, pàg. 51). El text es pot consultar a: [https://www.courses.psu.edu/art/art101\_ jxm22/tschichold.html](https://www.courses.psu.edu/art/art101_jxm22/tschichold.html).
</markdown></div>

Els canvis introduïts per Tschichold i les normes que aplica en l'ús de la tipografia són exemples de l'establiment d'un sistema de disseny paramètric, que precedeix el disseny assistit per ordinador. No obstant això, és un model que inspira posteriorment altres dissenyadors que el podran aplicar en programes d'autoedició i, fins i tot, automatitzar-lo, com veurem en l'apartat dedicat al disseny generatiu.

En altres àmbits del disseny d'elements de comunicació visual també s'apliquen els principis del disseny paramètric. Un d'aquests àmbits és el **disseny d'experiències d'usuari**: el disseny de la interfície d'una _app_ no es pot concebre simplement com una composició de disseny gràfic (com ocorreria, per exemple, en el disseny de la portada d'una revista, que no es pot alterar una vegada impresa), sinó que s'ha d'entendre com **un sistema que respon a la interacció amb l'usuari**. Cada element (botons, textos, imatges, contingut multimèdia, sons, missatges emergents, etc.) es modifica en funció de les accions de l'usuari, el format de la pantalla i altres condicionants. Alhora, ha de mantenir una relació coherent amb el conjunt per a facilitar l'experiència d'usuari i establir una comunicació fluïda en què a cada acció li correspongui un element clarament identificable de la interfície i un resultat que l'usuari pugui preveure.

<div class="destacat"><markdown>
Programes de disseny d'interfície com ara **Sketch**, **Figma** o **Tova XD** apliquen la idea del disseny com un diagrama format per nodes connectats entre si i amb relacions de dependència: cada element pertany a una classe i es pot modificar de manera que els canvis s'apliquin de manera global a tota la interfície.
</markdown></div>

El dissenyador (o equip de dissenyadors, ja que aquests programes faciliten la col·laboració d'un conjunt de professionals de diferents àmbits) determina quins elements executen determinades accions i com es disposen a la pantalla, i també les microinteraccions que permeten a l'usuari entendre quins processos s'estan executant o quines accions són possibles amb un element determinat.

En l'àmbit de l'experiència d'usuari, el llenguatge gràfic **Material Design** desenvolupat per Google pren exemple del disseny paramètric i dels sistemes gràfics com els elaborats per a les portades dels llibres de Penguin Books. Basat en **els principis clàssics del bon disseny**, aquest sistema de disseny computacional porta la idea de la materialitat del paper i l'estructura del reticle a la pantalla, ampliant les seves possibilitats per mitjà del disseny adaptatiu, els tipus de lletra variables i les animacions. La interfície creada a Material Design es defineix per una sèrie de superfícies planes que projecten una ombra discreta per a diferenciar-se en diversos nivells i juguen amb les vores per a crear composicions basades en un reticle que divideix l'espai de la pantalla i determina diverses jerarquies.

<div class="destacat"><markdown>
Un conjunt de regles estrictes que determinen, per exemple, que dos elements no poden estar superposats, tots els elements han de ser opacs i no es poden doblegar o arrugar.
</markdown></div>

En conjunt, és un llenguatge visual basat en formes senzilles que limita els efectes que es poden aplicar i s'oposa clarament a l'esqueuformisme que ha caracteritzat les interfícies d'usuari des dels seus inicis. Com que es basa en aquests elements i regles comunes, el sistema es pot adaptar a tot tipus de pantalles i projectes mantenint una consistència visual que s'experimenta de la mateixa manera a diferents plataformes, sia els sistemes operatius Android, iOS o un lloc web.

<div class="extra"><markdown>
**Material Design**

Llançat el 2014 com a resposta al gir cap al disseny pla que caracteritzava els sistemes operatius Windows 8 (2012) i iOS7 (2013), [Material Design](https://material.io/) és un llenguatge visual desenvolupat per Google que es basa en un programari de codi obert. Descrit com un sistema adaptatiu de disseny, es pot emprar en la creació d'experiències d'usuari en múltiples plataformes.
</markdown></div>

Un altre àmbit en què s'està aplicant el disseny paramètric és el de la tipografia, amb les anomenades **fonts variables**. Segons indica l'artista i programador **Casey Reas**, els sistemes d'escriptura sempre s'han caracteritzat per respondre a uns paràmetres que permeten crear diferents tipus mantenint les característiques que fan que cada lletra sigui recognoscible (Reas i McWilliams, 2010, pàg. 107). Famílies tipogràfiques com **Univers**, creada el 1954 per Adrian Frutiger, es configuren com un sistema de fonts que responen als paràmetres d'ample, pes i inclinació, si bé no són adaptables en la forma com ho serien les fonts creades amb el programari **Metafont** que va desenvolupar **Donald E. Knuth** el 1979. Més que una família tipogràfica, Metafont és un llenguatge de programació que interpreta una sèrie d'instruccions per a crear centenars de tipus de lletra diferents a partir d'unes quantes línies de codi. En aquest cas, el dissenyador estableix els valors dels diferents paràmetres que defineixen l'aspecte de cada glif.

<div class="extra"><markdown>
**Metafont, un llenguatge de programació de fonts**

Donald E. Knuth crea Metafont el 1979 com un llenguatge de programació mitjançant el qual és possible definir els traços d'una ploma que «dibuixa» cada glif seguint una sèrie d'equacions. Aquest projecte pioner va inspirar posteriorment altres formats tipogràfics oberts i  encara està disponible al [web](http://metafont.latex.free.fr/) creat originalment per Knuth, amb nombrosos recursos addicionals aportats per una comunitat de col·laboradors.
</markdown></div>

Des de 2016, Tova, Apple, Google i Microsoft han desenvolupat conjuntament la tecnologia que actualment s'empra en la creació de fonts variables. Aquestes fonts es caracteritzen per incloure en un únic arxiu de font tot un ventall de variacions tipogràfiques que abans haurien requerit arxius separats, per tant, generant una major càrrega de dades en les aplicacions web i mòbils.

<div class="destacat"><markdown>
Un arxiu de font variable conté els contorns de la família de fonts i també les variables de pes, ample, interlletratge o grandària òptica.
</markdown></div>

De manera similar a com el disseny web adaptable (_responsive_) ajusta la grandària i la disposició dels seus elements en funció de la grandària de la finestra del navegador, pantalla o tipus de dispositiu, les fonts variables poden modificar el seu aspecte en relació amb les característiques de l'entorn en què es mostren (de nou, tipus de dispositiu o grandària de pantalla, per exemple), i també en resposta a una determinada interacció.

<div class="destacat"><markdown>
Cada tipus deixa de ser un contorn únic per a situar-se al centre d'un espai format per diversos eixos que determinen, per exemple, la seva altura, ample o pes.
</markdown></div>

Així, canviant els valors dels diferents eixos és possible obtenir innombrables variacions d'un mateix tipus, que es mouen entre el que tradicionalment consideraríem una negreta, cursiva o regular. La capacitat que tenen les fonts variables a adaptar-se a qualsevol espai d'un entorn digital les fa molt útils, però també poden generar confusió si no es delimiten els seus paràmetres dins de la llegibilitat del text.

Aquest últim exemple es pot entendre com una de les característiques clau del disseny paramètric: ja no es tracta de crear un únic producte, sinó de pensar en un sistema que pot produir un nombre il·limitat d'opcions. En aquest context, el treball del dissenyador consisteix no solament a establir el sistema, sinó també a definir quines opcions es mantenen dins la intenció original del projecte. Així, com hem vist, Material Design es defineix com un sistema adaptable però regit per unes normes estrictes que responen al concepte de tractar la interfície com un full de paper. Les fonts variables, de forma similar, presenten moltes possibilitats, però en certs contextos s'han de cenyir als principis bàsics de llegibilitat i també al tipus de missatge que comunica la forma dels tipus, ateses les associacions que es fan, per exemple, amb les fonts de pal sec o amb _serif_. En definitiva, com indica Casey Reas: «la parametrització crea connexions entre la intenció del dissenyador i el sistema que descriu» (Reas i Woodbury, 2010, pàg. 95).

Fins a quin punt s'imposa aquesta intenció en el sistema creat és quelcom que dependrà de cada projecte.

<div class="extra"><markdown>
**Experimentar amb les fonts variables**

[Font Playground](https://play.typedetail.com/) és un lloc web creat pel dissenyador Wenting Zhang que presenta una interfície en què és possible jugar amb una selecció de fonts variables, modificant el seu aspecte en temps real. Font Playground també permet copiar el codi CSS per a introduir una font amb els valors escollits en un disseny web.
</markdown></div>

### Disseny generatiu

Si el disseny paramètric consisteix a aplicar una sèrie de regles i relacions entre els elements d'un disseny per a crear no un únic producte final, sinó un sistema capaç de generar un gran nombre de solucions possibles, el **disseny generatiu** va un pas més enllà, ja que confia al programa la creació automatitzada d'aquestes solucions. De la plantilla que determina el marc de resultats possibles (com il·lustra clarament Material Design de Google) passem a un sistema aparentment autònom que és capaç de generar dissenys sense la intervenció humana, partint d'una sèrie de regles que sovint s'inspiren en les lleis de l'evolució natural i els organismes vius.

<div class="destacat"><markdown>
L'artista i investigador **Philip Galanter** destaca la relativa autonomia del sistema emprat com la característica principal de l'art (i el disseny) generatiu. La seva coneguda definició de l'art generatiu incideix en el paper actiu del sistema (sia un ordinador, un procés químic o un organisme viu) i en el fet que l'artista cedeix una part o tot el control del procés.
</markdown></div>

>L'art generatiu es refereix a qualsevol pràctica artística en què l'artista utilitza un sistema, sia un conjunt de regles de llenguatge natural, un programa d'ordinador, una màquina o un altre procés, que es posa en marxa amb un cert grau d'autonomia, contribuint així a la realització d'una obra d'art o donant com a resultat una obra d'art completa.
>
><cite>P. Galanter (2016). «Generative Art Theory». A: Christiane Paul (ed_._). _A Companion to Digital Art_ (pàg. 151). Nova York: John Wiley & Sons.</cite>

L'autonomia del sistema emprat es tradueix en el fet que no requereix que l'artista (o dissenyador) prengui decisions a cada pas, com ho faria si se cenyís a una plantilla o seguís un conjunt de regles de composició. En una segona definició de l'art generatiu, Galanter dona encara més importància a aquest aspecte:

>L'art generatiu es refereix a qualsevol pràctica artística en què l'artista cedeix el control a un sistema amb autonomia funcional que contribueix o resulta en una obra d'art acabada. Els sistemes poden incloure instruccions en llenguatge natural, processos biològics o químics, programes de computació, màquines, materials autoorganitzats, operacions matemàtiques i altres processos.
>
><cite>P. Galanter (2016). «Generative Art Theory». A: Christiane Paul (ed_._). _A Companion to Digital Art_ (pàg. 154). Nova York: John Wiley & Sons.</cite>

L'art generatiu està actualment en auge gràcies al desenvolupament de les nombroses **eines de programació creativa** que hem vist en l'apartat «Crear amb codi». En concret, Processing, Pure Data, vvvv, openFrameworks, Cinder i Max/MSP faciliten la creació de projectes d'art i disseny generatiu, ja que permeten no solament compondre una única peça (sia una animació, composició sonora, instal·lació interactiva, etc.), sinó també programar un procés automatitzat que pot generar infinites composicions. Un exemple il·lustratiu de les possibilitats del disseny generatiu el trobem a **_10.000 Paintings_**, un projecte que l'estudi londinenc **Field** va realitzar per encàrrec del fabricant de paper **G. F. Smith**. Els dissenyadors van crear un programa que generava automàticament diferents vistes d'una complexa estructura geomètrica, en diferents colors. Cadascuna d'aquestes «vistes», fins a completar les deu mil unitats, es va imprimir amb una impremta digital a la portada d'un catàleg de G. F. Smith, de manera que cada exemplar era diferent als altres. Nominat entre els dissenys de l'any 2012 per The Design Museum (Londres), aquest projecte tenia per objectiu mostrar les possibilitats de la impressió digital, i també les del disseny generatiu.

<div class="destacat"><markdown>
Emprant variacions d'un mateix objecte (les diferents vistes d'una forma imaginària tridimensional), els dissenyadors van aconseguir crear una composició única per a cada exemplar, però alhora vinculada a totes les altres, de manera que el resultat no es veu com quelcom purament aleatori, sinó que manté una coherència visual.

El mateix nombre de dissenys produïts deixa clar que no podrien haver estat creats per una persona (o un equip de persones), sinó que són necessàriament fruit d'un procés automatitzat. Amb tot, els dissenyadors van intervenir en una part del mateix, seleccionant les «vistes», que generava el programa, que els resultaven més interessants.
</markdown></div>

<div class="extra"><markdown>
**Generant 10.000 portades diferents**

El 2011, l'estudi Field va crear 10.000 _paintings_ per a un encàrrec amb l'objectiu d'il·lustrar una sèrie de fullets que el fabricant de paper [G. F. Smith](https://www.field.io/project/digital-paintings/) envia als dissenyadors i estudis amb la finalitat de donar a conèixer les possibilitats de la impressió digital. Els dissenyadors van crear una escultura virtual en 3D i després van escriure un algorisme que cobria l'objecte amb una textura similar a la del paper i l'acoloria amb diferents degradats. Les portades dels fullets mostren una selecció de deu mil vistes de l'escultura virtual.
</markdown></div>

Field aconsegueix en aquest projecte un equilibri entre la creació automatitzada i la participació directa del dissenyador. Aquest equilibri (que es presenta de forma similar en el disseny paramètric) és particularment rellevant en els projectes de disseny d'un producte, en què més enllà d'una simple variació de les composicions es busquen les solucions més adequades a un problema específic, emprant la **computació evolutiva**. Ja amb els primers ordinadors sorgeix la idea d'aplicar els principis de l'evolució natural en la resolució de problemes. Aquest concepte es desenvolupa en els anys 60 i 70 amb la computació evolutiva (_evolutionary computation_), que gràcies a la impressió en 3D ha fet el salt del programari al maquinari i el que **Agoston Eiben** i **Jim Smith** (2015) denominen **objectes evolutius**. En termes generals, l'ús d'algorismes evolutius permet generar ràpidament un ampli espectre de solucions possibles per a un problema. Solament cal determinar els paràmetres del problema i el nivell d'adequació de les solucions que ens ofereix el programa. Amb tot, segons adverteixen els investigadors, «no hi ha garanties que aquesta cerca \[de solucions\] sigui efectiva o eficient» (Eiben i Smith, 2015, pàg. 477). Això no impedeix que els algorismes evolutius s'emprin de forma cada vegada més estesa, ja que presenten una sèrie d'avantatges (Eiben i Smith, 2015, pàg. 480):

* Els algorismes no suposen idees preconcebudes sobre el problema.
* Són flexibles, ja que es poden combinar amb altres mètodes.
* Són robusts i adaptables als canvis.
* No se centren en una única solució i permeten prendre decisions una vegada es fan patents quines opcions són possibles.
* Poden produir solucions inesperades, però efectives.

<div class="destacat"><markdown>
Els investigadors conclouen que l'ús d'algorismes evolutius, combinat amb sistemes de producció robòtics, poden transformar el procés de disseny i producció en un de selecció i reproducció, en què la intervenció humana podria deixar de ser necessària (Eiben i Smith, 2015, pàg. 480).
</markdown></div>

Si bé aquest extrem encara no s'ha donat, sí que és cert que els projectes de disseny generatiu són fruit d'un procés més proper a la col·laboració amb la màquina que al seu ús com a mera eina. Aquesta distinció és fonamental en la definició que fa **Jordan Brandt**, assessor tecnològic d'**Autodesk**: mentre el disseny «explícit» consisteix a dibuixar una idea que el dissenyador duu al cap, el disseny generatiu consisteix a indicar a l'ordinador els objectius del disseny i deixar que el programa creï nombroses opcions, entre les quals s'escolliran les millors per a crear noves opcions fins a arribar al prototip definitiu (Rhodes, 2015). Un canvi substancial en el resultat d'aquest procés de disseny no és únicament la participació més activa de l'ordinador, sinó també la generació de solucions totalment inesperades.

Com assenyalen Eiben i Smith, els algorismes no tenen idees preconcebudes sobre el disseny que han de realitzar, no es deixen portar per qüestions estètiques o exemples de grans dissenys del passat, que sí que són factors de pes en la ment d'un dissenyador.

<div class="destacat"><markdown>
Encara que el dissenyador participi en la selecció i refinament del prototip final, ja ho fa amb formes que possiblement no hauria imaginat i que, curiosament, s'assemblen a les formes que crea la naturalesa.
</markdown></div>

Estructures similars a esquelets d'animals o a les ramificacions d'un arbre demostren ser les més efectives per a distribuir les forces que ha de resistir una determinada estructura, emprant la mínima quantitat de matèria possible. Aquests dissenys «ossuts» solen ser posteriorment adaptats a models més regulars en el cas de peces de maquinària i altres elements de disseny industrial, però també es conserven en alguns dissenys d'objectes quotidians que permeten jugar amb la particular estètica d'unes formes que semblen orgàniques.

<div class="destacat"><markdown>
L'empresa **Autodesk**, coneguda pel programa **AutoCAD**, d'ús àmpliament estès en disseny i arquitectura, ha desenvolupat una sèrie d'aplicacions que permeten treballar amb computació evolutiva en tot tipus de projectes de disseny.
</markdown></div>

L'empresa destaca, entre els beneficis del disseny generatiu, la possibilitat d'explorar una àmplia varietat d'opcions, crear dissenys que no es podrien fabricar amb mètodes tradicionals i optimitzar l'ús dels materials, els mètodes de fabricació i els costos. El programari d'Autodesk s'empra en quatre tipus de processos de disseny generatiu:

1. **Síntesi de formes**: el programa produeix una sèrie d'alternatives a partir dels objectius i limitacions establerts pels dissenyadors.
2. **Optimització de superfícies i reticles**: el programa crea entramats i reticles interns en un objecte per a fer-lo més lleuger i resistent.
3. **Optimització topològica**: el programa redueix el pes d'un objecte realitzant una anàlisi que permet eliminar el material innecessari, sense perdre força o resistència.
4. **Estructures trabeculars**: el programa crea porus en estructures sòlides per a imitar ossos en implants mèdics.

A cadascun d'aquests processos li correspon un programa específic. Entre aquests, **Dreamcatcher** és el que resulta més interessant quant a la possibilitat de generar nous dissenys des de zero.

<div class="destacat"><markdown>
Aquest programa permet als dissenyadors indicar els objectius del disseny, els seus requisits, els materials a emprar, el mètode de fabricació i el cost màxim, entre d'altres variables. A partir d'aquestes dades es generen nombrosos prototips que exploren diverses maneres d'atendre les indicacions inicials.
</markdown></div>

Aquests prototips són examinats pels mateixos dissenyadors, els quals indiquen quins els semblen millors i així s'inicia un nou procés en què el programa busca noves solucions a partir dels prototips escollits. Per a ajustar-se millor a les situacions reals, Dreamcatcher compta amb una extensa llibreria d'objectes predefinits, les característiques dels quals s'assemblen a les dels objectes que es volen dissenyar. D'aquesta manera, el disseny resulta d'un procés de diàleg entre el dissenyador i el programa, que es nodreix d'interaccions prèvies.

<div class="extra"><markdown>
**Disseny generatiu amb Autodesk**

[Autodesk](https://www.autodesk.com/solutions/generative-design), un dels principals desenvolupadors de programari de disseny 2D i 3D en enginyeria, arquitectura i construcció, ha creat un conjunt de programes centrats en el disseny generatiu que permeten aplicar els principis de la computació evolutiva en el disseny de peces d'ús industrial. A les funcions habituals del programari s'afegeix la generació automàtica de models, entre els quals el dissenyador escull la solució més adequada.
</markdown></div>

Entre els dissenys que s'han realitzat amb computació evolutiva en els últims anys, destaquem els exemples següents, en què les solucions facilitades pel procés algorítmic han donat lloc a peces de mobiliari inusuals o particularment eficaces:

* **Bone Chair (2006)**: creada per **Joris Laarman**, aquesta cadira és el resultat d'una col·laboració entre el dissenyador i l'International Development Centre Adam Opel GmbH, un centre de recerca on **Prof. Lothar Harzheim** ha desenvolupat un programa que aplica la computació evolutiva en el disseny de peces per a automòbils. El programa, desenvolupat el 1998, crea una simulació de l'objecte en què calcula la pressió que rebrà en diferents parts i elimina tot el material que no és necessari. El disseny de Laarman es va generar atenent les especificacions de l'alumini, que va permetre crear una peça molt més esvelta. No obstant això, la major dificultat no va ser la que va suposar desenvolupar aquest model sinó aconseguir fabricar-lo en un únic motlle, per a no mostrar les juntes de les soldadures entre les diferents peces. Actualment, la Bone Chair forma part de les col·leccions de diversos museus, com el Rijksmuseum, MoMA i Vitra Design Museum.
* **Lily (2009)**: l'estudi d'arquitectura i disseny **MOS Architecture** va encarregar al desenvolupador **George Michael Brower** que creés un programa de simulació d'una estructura basada en una sèrie de cercles que es dobleguessin amb la finalitat de generar una superfície elevada, a manera de banc o taula. Els cercles es combinen doblegant els seus extrems de manera que tota l'estructura es mantingui estable. Per mitjà d'aquesta simulació és senzill crear una estructura que s'adapti a un determinat espai i posteriorment encarregar la seva producció, que es resumeix a tallar i doblegar de forma precisa una sèrie de planxes metàl·liques i finalment pintar-les.
* **Elbo Chair (2016)**: creada per **Arthur Harsuvanakit** i **Brittany Prestin** al laboratori de disseny generatiu d'Autodesk , aquesta cadira inspirada en el disseny escandinau sorgeix d'indicar a un programa a quina altura ha d'estar el seient, quin pes ha de suportar i amb quin material s'ha de produir. Els dissenyadors també van facilitar al programa un model 3D d'una cadira inspirada en els dissenys de Hans Wegner, amb la finalitat de dirigir els prototips cap a una configuració determinada. Entre els centenars de prototips generats per l'ordinador, Harsuvanakit i Prestin en van escollir alguns, a partir dels quals el programa va generar nous prototips fins a arribar a la forma final (Rhodes, 2016).
* **Swish (2016)**: un projecte de l'estudi de **Carlo Ratti**, director del Senseable City Lab de MIT, aquest tamboret ha estat dissenyat per a l'empresa **Cassina** com una peça de mobiliari útil i elegant. En aquest cas, Ratti va partir d'un disseny previ, un tamboret format per 27 làmines de fusta que s'haurien de poder plegar i desplegar amb precisió per a formar el seient i sostenir degudament el pes d'una persona. El que van determinar els algorismes va ser la forma de cadascuna de les juntes que uneixen aquestes làmines i que tenen diferents formes per a col·locar cada peça en la posició que li correspon. D'aquesta manera, la computació evolutiva facilita resoldre un problema tècnic complex, però no determina la forma final de l'objecte, que sembla haver estat creat de forma totalment artesanal.

El disseny generatiu introdueix noves eines en el procés de disseny i pot transformar el paper del dissenyador, si bé, com demostra la cadira Swift, no sempre ha de canviar de forma radical l'aspecte de l'objecte, sinó que pot introduir millores en la seva estructura que resultin, en última instància, invisibles.

<div class="destacat"><markdown>
Els projectes que hem vist en aquest apartat, tant les cadires com les 10.000 portades creades per l'estudi Field, mostren de quina manera en el disseny generatiu s'estableix un equilibri entre la producció automatitzada d'un sistema controlat per l'ordinador i les decisions que pren el dissenyador en la confecció del producte final.
</markdown></div>

### Disseny i intel·ligència artificial

En els apartats anteriors hem vist com el **disseny paramètric** i el **disseny generatiu** se centren a prefixar o automatitzar parts del procés de disseny, la qual cosa estableix una nova relació entre el dissenyador i el producte que està creant, més propera al diàleg i a la col·laboració que a la materialització directa d'una idea preconcebuda. L'actual desenvolupament de les tecnologies d'intel·ligència **artificial (IA)** promet introduir canvis fonamentals en el treball dels dissenyadors que segueixen en la línia del descrit anteriorment.

La proliferació i el ràpid desenvolupament dels assistents de veu basats en programes d'IA, des de Siri a iOS als dispositius per a la llar d'Amazon (Echo), Google (Home) i Apple (HomePod), han plantejat una creixent transformació en la interacció entre l'usuari i els dispositius que empra diàriament.

<div class="xxx"><markdown>
Això afecta directament el futur del disseny d'experiències d'usuari, però també el mateix paper dels dissenyadors, que passen a ser curadors o selectors; s'han de centrar no tant en un acte de creació únic, sinó a treballar amb uns paràmetres que es faciliten al programa i a partir dels quals es va escollint la solució més òptima a partir dels nombrosos prototips que es generen automàticament.
</markdown></div>

Com va ocórrer amb la irrupció de l'autoedició, l'evolució i la popularització dels programes de disseny que empren la tecnologia d'intel·ligència artificial (com ara Dreamcatcher d'Autodesk, que hem comentat en l'apartat anterior), l'IA implicarà que un nombre cada vegada major de dissenyadors podrà crear i veurà augmentada la seva capacitat de producció. Amb tot, això no afectarà l'estatus dels grans dissenyadors, ja que factors com la creativitat i la capacitat per trobar les millors solucions seguiran sent diferenciadors. L'IA aportarà millors eines però, de moment, no és previsible que pugui suplantar la capacitat creativa d'un bon dissenyador ni generar per si mateixa idees innovadores. Segons afirma Rob Girling, cofundador de l'estudi Artefact:

>\[…\] en el futur els dissenyadors ensenyaran a les seves eines d'IA a resoldre problemes de disseny creant models basats en les seves preferències.
>
><cite>R. Girling (2017, juny). «AI and the Future of Design: What will the designer of 2025 look like?». _Artefact_ \[en línia\]. <[https://www.artefactgroup.com/articles/ai\_design\_2025/](https://www.artefactgroup.com/articles/ai_design_2025/)\></cite>

El problema que es presenta actualment és que la majoria dels dissenyadors d'experiències d'usuari no estan preparats per treballar amb interfícies centrades en la intel·ligència artificial. Això es deu al fet que hi ha poc coneixement sobre aquesta tecnologia i que l'aprenentatge automàtic (_machine learning_) encara no forma part de la formació en disseny, ni està present en les eines principals que empren els dissenyadors.

<div class="xxx"><markdown>
Per «ensenyar» a un ordinador cal tenir un coneixement avançat de matemàtiques, dades i estadística que no està a l'abast de molts dissenyadors ni forma part del seu mètode habitual de treball.
</markdown></div>

En aquest aspecte, com també ha passat amb l'autoedició, algunes empreses estan creant programes que resolen una part d'aquest procés complex. Una d'aquestes empreses és **Cognitive Scale**, que ha desenvolupat la plataforma **Cortex**, un programari pensat per simplificar el disseny, el desenvolupament i el manteniment dels sistemes d'IA. Cortex presenta una interfície dissenyada per a facilitar la comprensió de com funciona un sistema d'intel·ligència artificial, de forma similar a com els programes WYSIWYG substitueixen les línies de codi per un entorn visual el funcionament del qual es pot entendre de forma intuïtiva. En conjunt, Cortex està pensat per ser molt accessible per als dissenyadors, de manera que podria popularitzar l'ús dels sistemes d'IA en tot tipus de productes i solucions per a empreses. Amb tot, això també planteja riscos, atès que encara no es coneixen totes les implicacions que pugui tenir l'ús dels sistemes d'intel·ligència artificial, tant pel que fa a la possibilitat de reemplaçar els humans en nombroses tasques com els perills potencials de confiar a un conjunt d'algorismes decisions que requereixen el raonament d'una persona.

<div class="extra"><markdown>
**Cortex, IA per a dissenyadors**

[Cortex](https://www.cognitivescale.com/cortex5/) és un programari pensat per al disseny i manteniment dels sistemes d'intel·ligència artificial, que facilita entre d'altres tasques: personalitzar els perfils d'usuari, generar informes de manera comprensible per a les persones, coordinar diversos programes per a automatitzar processos que requereixen la participació d'un humà, malgrat que resultarien tediosos, aprendre contínuament a partir de dades obtingudes en temps real i controlar tot el procés dut a terme pel sistema d'IA. És una solució dirigida a les empreses, que, a més, compta amb un mercat intern en què és possible adquirir models ja desenvolupats, paquets de dades específiques, algorismes i serveis professionals.
</markdown></div>

El desenvolupament de la intel·ligència artificial no solament afecta el treball dels dissenyadors, sinó també la mateixa percepció que l'usuari té del seu entorn i de si mateix. **Mark Rolston**, cofundador de l'estudi **Argo Design**, empra el terme **meta jo** **(_MetaMe_)** per a referir-se a la projecció del jo a les xarxes socials i entorns virtuals amb què interactuem diàriament (Rolston, 2017). Aquest «meta jo» es converteix progressivament en un _gólem_ que controlem cada vegada menys i que, per mitjà de l'IA, es converteix en una entitat amb una certa consciència. Actualment, la presència en línia de l'usuari se sol incentivar per mitjà de notificacions que el conviden a prémer un botó per a executar una acció o publicar una resposta, però aviat, fins i tot aquest botó, podria desaparèixer a mesura que el «meta jo» de l'usuari tingui la informació suficient per a actuar de forma autònoma. El disseny dels programes que ajudaran a gestionar aquest «meta jo» per mitjà de les tecnologies d'IA requerirà, per tant, prendre una sèrie de decisions que tenen conseqüències reals en la vida de l'usuari i requereixen uns sistemes de control, tant a nivell social com legal, per a minimitzar les conseqüències d'un «pas en fals» de l'assistent.

**Mark Stefix**, investigador de PARC (la divisió d'R+D de Xerox) parla, fins i tot, d'un nou tipus d'usuari, l'usuari **centaure**, que és el producte de la combinació entre la intel·ligència humana i la intel·ligència artificial i presenta els avantatges següents respecte de la concepció separada de les aportacions humanes i de la màquina (PARC, 2017):

* Un **ordinador** té l'avantatge de treballar amb rapidesa i processar una gran quantitat de dades. No obstant això, les solucions que genera són incompletes al món real, atès que les dades no reprodueixen totes les condicions possibles.
* Un **equip humà** té l'avantatge que li aporten els seus coneixements i sentits, l'experiència de viure al món real i combinar aquesta experiència en equips interdisciplinaris. Així i tot, coordinar aquests equips pot resultar complex.
* Un **equip humà-ordinador** aconsegueix els millors resultats quan combina diverses formes de coneixement que compensen les febleses de cadascun. Ara bé, cal tenir més experiència, teoria i coneixements per a crear bons equips entre humans i ordinadors.

<div class="xxx"><markdown>
Per als dissenyadors centrats en l'experiència d'usuari, això suposa tenir en compte un usuari molt diferent, no únicament humà, sinó un híbrid entre l'usuari i el seu assistent d'intel·ligència artificial.
</markdown></div>

La combinació humà-màquina requereix un nou paradigma de disseny: mentre actualment la majoria dels productes tecnològics se centren en l'usuari i saben atendre les seves necessitats quotidianes (comprar, socialitzar-se, moure's per la ciutat), no aconsegueixen comprendre com els usuaris poden interactuar i veure's afectats pels sistemes polítics, econòmics, culturals, tecnològics i socials a gran escala. Per tant, cal dissenyar aplicacions que tinguin en compte tant l'usuari com el sistema en què es veu implicat i, de vegades, posar l'usuari al servei del sistema, en benefici de tots els usuaris implicats. Un exemple d'això és **Waze**, una _app_ de navegació a la ciutat que guia l'usuari tenint en compte no solament la seva localització i la ruta més ràpida, sinó els desplaçaments del conjunt d'usuaris de Waze en temps real. D'aquesta manera, es dona preferència al sistema per sobre de l'usuari, però alhora es permet a l'usuari aportar informació al sistema per a millorar-lo: els usuaris de Waze poden indicar canvis en les condicions de la carretera (accidents, desviaments provisionals, obres, embussos, etc.) i recomanar rutes alternatives. Així, l'experiència i coneixement dels humans contribueixen a millorar els càlculs del sistema, la qual cosa repercuteix en una navegació més efectiva per a tots els usuaris. Dissenyar aplicacions pensades per als «usuaris centaure» suposa, per tant, un repte, ja que els humans han de confiar en el sistema i estar disposats a aportar els seus propis coneixements.

<div class="extra"><markdown>
**Waze**

Creada el 2006 i adquirida per Google el 2013, [Waze](https://www.waze.com/es/) és una aplicació gratuïta de navegació GPS que compta amb les aportacions d'una comunitat d'usuaris per a actualitzar la informació de l'estat del trànsit i altres dades útils en temps real.
</markdown></div>

L'aspecte de l'IA en què els dissenyadors poden treballar més directament en aquest moment és el de l'aprenentatge automàtic o _machine learning_.

<div class="xxx"><markdown>
El **_machine learning_** és la branca de la intel·ligència artificial que se centra en el fet que els ordinadors siguin capaços de generalitzar els comportaments a partir d'una sèrie d'exemples, per tant «aprendre» a partir d'una quantitat de dades subministrades (generalment gran).
</markdown></div>

Els sistemes d'aprenentatge artificial poden detectar patrons i, en particular, anomalies, la qual cosa els fa molt efectius en aplicacions com ara la detecció del frau en targetes de crèdits o els correus brossa. Actualment, grans empreses com Amazon, Google i Apple han fet accessibles als desenvolupadors algunes de les seves eines d'aprenentatge automàtic, que descrivim a continuació:

* **ML Kit de Google** ofereix un conjunt d'eines optimitzades per a dispositius mòbils i amb solucions predissenyades que faciliten el seu ús en tot tipus de projectes. Les funcions principals que ofereix són l'etiquetatge d'imatges (identificació d'objectes, llocs, activitats, productes, etc.), reconeixement de text, detecció de rostres, escanejat de codis de barres, identificació de llocs populars i molt recognoscibles i, en un futur proper, una funció de resposta automàtica amb suggeriments de text.
* **AWS d'Amazon** compta amb una sèrie completa de recursos d'aprenentatge automàtic que inclou productes com **SageMaker**, que permet crear, entrenar i implementar models de _machine learning_, a més d'adaptar-los als fluxos de treball existents i **DeepLens**, una càmera de vídeo que s'integra a Amazon SageMaker i altres serveis d'AWS per a emprar algorismes d'aprenentatge automàtic en visió computeritzada.
* **Core ML d'Apple**, integra models d'aprenentatge automàtic en qualsevol _app_. El model empra les dades introduïdes per a realitzar determinades prediccions, anàlisis d'imatge, processament de llenguatge natural i altres funcions.

És essencial per als dissenyadors ser capaços d'entendre el que poden fer aquestes eines, amb la finalitat de poder treballar amb els programadors en les seves possibles aplicacions. El dissenyador **Sam Drozdov** (2018) destaca les següents:

* Per mitjà del _machine learning_ (ML) es poden crear **productes centrats en l'usuari**, que responen a les dades facilitades per aquest i donen lloc a una experiència més personalitzada.
* Una aplicació en què destaca l'ML és la **detecció d'anomalies**, la qual cosa és especialment útil en la prevenció del frau, manipulació de continguts i altres escenaris similars.
* Per mitjà de la visió computeritzada i la interpretació del llenguatge natural, l'ML facilita una millor **interacció entre l'usuari i la màquina**, que progressivament allibera l'usuari d'haver d'expressar-se en els termes que la màquina pot entendre.
* Una altra aplicació és l'**anàlisi dels grups d'usuaris**.
* Finalment, com que prediu l'acció següent de l'usuari, l'ML es pot emprar per a **facilitar la càrrega de contingut que amb major probabilitat serà consultat per l'usuari**, agilitant el funcionament d'un programa.

Per a entendre millor com emprar les eines d'ML, també és important conèixer quin tipus d'aprenentatge automàtic empren habitualment les mateixes. L'**aprenentatge supervisat** usa dades prèviament etiquetades per a realitzar prediccions sobre les noves dades segons s'introdueixin. Per exemple, a partir de milers de fotos etiquetades amb _hashtags_, el programa pot determinar quins _hashtags_ correspondrien a una nova foto. L'**aprenentatge no supervisat** es basa a facilitar un gran volum de dades sense etiquetar i deixar que l'ordinador identifiqui patrons i faci prediccions basant-se en aquests patrons, com ocorre, per exemple, amb els suggeriments de productes a Amazon, basats en compres similars per part d'altres clients. Finalment, el tipus més interessant és l'**aprenentatge per reforç**, que no empra un conjunt previ de dades, sinó que crea un agent que recopila dades en un determinat entorn, perseguint un determinat «premi» que suposa un reforç positiu.

L'aprenentatge automàtic és, per tant, un recurs que pot ser molt beneficiós per a desenvolupar un producte, si bé cal conèixer tant les limitacions d'aquesta tecnologia com les seves capacitats, determinar quin tipus d'ML s'adapta millor al projecte a desenvolupar i entendre que sempre hi ha un marge d'error. Aquest marge d'error implica experiències negatives en els usuaris i, per tant, s'han de considerar les conseqüències de l'ús d'algorismes d'ML. Fins i tot les grans empreses encara estan aprenent fins a on poden arribar amb l'aprenentatge automàtic.

Un altre aspecte en què s'està desenvolupant l'IA, com hem comentat al principi, està vinculat a l'auge dels assistents de veu a les llars. La **intel·ligència artificial conversacional** és una tecnologia que permet entaular una conversa amb una màquina com si es tractés d'una persona i transmetre-li ordres i preguntes amb un llenguatge natural en lloc d'etzibar expressions clau que el dispositiu pugui reconèixer. El desenvolupament d'aquest tipus d'IA s'emmarca en el que es denomina **disseny conversacional**, una especialització del disseny de producte basat en la conversa humana com a model per a la interacció amb sistemes digitals.

<div class="xxx"><markdown>
**Erika Hall**, cofundadora de **Mule Design Studio** i autora del llibre _[Conversational Design][3]_, afirma que en lloc de simplement centrar-se en les funcions que ha de complir el producte a dissenyar, cal plantejar-se com serà la interacció entre aquest producte i les persones que l'emprin, quins intercanvis es produiran, no solament en termes d'una interfície gràfica sinó més àmpliament en el diàleg que s'estableix entre el dispositiu i l'usuari.
</markdown></div>

Programar un programari que sigui capaç de mantenir una conversa amb una persona resulta enormement complex, ja que comporta ensenyar a la màquina no solament a ser capaç de reconèixer les paraules que pronuncia l'usuari sinó també a parlar de coses banals o emplenar el diàleg amb petites expressions quotidianes.

<div class="xxx"><markdown>
Per a una màquina programada per facilitar una resposta a una sol·licitud concreta, no és senzill mantenir una xerrada trivial.
</markdown></div>

Aquest recurs de la nostra interacció diària amb altres persones és quelcom que hem après al llarg de múltiples experiències i que s'ajusta a un context específic que sabem percebre i a la informació que tenim, o podem intuir, sobre el nostre interlocutor. Tot això introdueix un enorme nombre de variables i requereix recopilar una quantitat d'informació contextual que normalment va més enllà de les possibilitats del dispositiu. Amb tot, és possible simular una conversa natural recorrent a les expressions que s'empren més sovint en trobades en què se sap poc de l'interlocutor o hi ha poca cosa a dir, combinant aquestes expressions amb dades que es poden obtenir a internet.

Actualment s'aposta per tres línies possibles de desenvolupament dels sistemes d'IA que puguin mantenir una conversa natural amb una persona (Vlahos, 2018):

1. **Aprenentatge automàtic**: alimentar una xarxa neuronal artificial amb milers de continguts de text, incloent converses i cadenes de missatges a plataformes populars com Reddit i Twitter. A partir de les dades recopilades en aquesta enorme quantitat d'interaccions entre els humans, el bot pot deduir quina resposta és més adequada en cada ocasió, si bé això pot portar al fet que el bot mantingui converses apàtiques o respongui de maneres impredictibles.
2. **Confecció d'una sèrie de regles**: aquesta opció requereix molt més treball i implica determinar una sèrie de temes i respostes adequades a diferents situacions, que serveixen al bot de guia a mesura que identifica el tema de la conversa. El problema d'aquesta estratègia és que sovint condueix el bot a tractar de plantejar converses molt pautades, que clarament porten l'humà a parlar dels seus llibres favorits, pel·lícules o música dins d'un patró repetitiu.
3. **Un model híbrid**: combinant les dues estratègies anteriors, és possible introduir una certa espontaneïtat en la conversa, alhora que es manté una certa direcció en les respostes.

Aquestes estratègies s'han dut a terme en el context de la primera edició de l'**Alexa** **Prize**, un concurs de talents convocat per Amazon i destinat als estudiants universitaris, que planteja el repte de programar un bot capaç de mantenir una conversa coherent amb una persona durant 20 minuts. Els resultats d'aquesta convocatòria han demostrat que el model híbrid és més eficient, però també que cal recopilar una enorme quantitat de dades, la qual cosa suposa entaular converses amb moltíssimes persones en diferents contextos. Actualment, Amazon està recopilant dades per mitjà de les interaccions dels usuaris amb la seva línia d'assistents de veu, mentre d'altres empreses busquen solucions similars, que, de vegades, poden resultar desastroses. Aquest va ser el cas de **Tay**, un _chatbot_ d'intel·ligència artificial desenvolupat per **Microsoft** i llançat a Twitter el 23 de març de 2016. El bot pretenia simular la personalitat d'una noia nord-americana de 19 anys i estava programat per a aprendre de les seves converses amb altres usuaris. No obstant això, una de les característiques de Tay era usar elements de les respostes dels seus interlocutors, la qual cosa va ser ràpidament aprofitat per molts usuaris, els quals van començar a ensenyar-li a publicar missatges racistes i xenòfobs. En amb prou feines 16 hores i després de publicar més de 96.000 missatges, el compte de Tay va ser eliminat de Twitter. L'experiment no solament va portar a cancel·lar el desenvolupament del _chatbot_ a la xarxa social, sinó que també va suposar una mala imatge per a l'empresa.

Les limitacions actuals de l'IA han conduït, de moment, a limitar l'àmbit en què es pretén aconseguir una conversa natural entre una màquina i un ésser humà. **Google** ha aplicat aquesta estratègia amb **Duplex**, una tecnologia centrada a realitzar de forma automàtica converses amb un llenguatge natural per telèfon per a dur a terme tasques quotidianes, com ara reservar una taula en un restaurant. En aquest tipus de conversa, les opcions són molt limitades. Habitualment, el diàleg consisteix a saludar, demanar hora (possiblement oferir un rang d'hores possibles si l'hora que se sol·licita no està disponible), confirmar els detalls de la cita i acomiadar-se. Totes aquestes opcions es poden preveure i desenvolupar respostes que es faciliten a l'IA, i permeten mantenir el diàleg una mica més semblant a un diàleg natural.

<div class="xxx"><markdown>
En aquest sentit, el projecte de Google no ajusta la tecnologia al món real, sinó que la situa en un context molt específic del món real que s'ajusta a les possibilitats actuals de l'IA.
</markdown></div>

A més, el plantejament d'aquesta solució és unidireccional: solament pensa en l'usuari o l'empresa que s'estalvia la molèstia de trucar per telèfon, però no té en compte la persona que atén el telèfon al comerç o empresa de serveis que rep la trucada. Aquesta persona és tractada com un mer facilitador d'informació o registrador d'una cita, per tant, es tracta com un robot o una base de dades. Al seu torn, això planteja un conflicte ètic i la possible resposta negativa de les persones que han d'interactuar amb aquesta IA. Per tant, el disseny de la intel·ligència artificial conversacional comporta considerar les complexes implicacions de la interacció entre els humans i les màquines, i també les múltiples maneres en què es desenvolupa la comunicació humana, que no sempre es pot limitar a unes quantes fórmules preestablertes.

### Els dissenyadors han de saber programar?

Per a tancar aquest apartat, plantegem una pregunta que proposa una reflexió transversal sobre els continguts d'aquest material. Com hem vist en el primer apartat, el codi de programació és el que dona forma al programari i, en conseqüència, determina què poden fer els dissenyadors amb els programes que empren diàriament. Al llarg de les últimes dècades, les innovacions que han introduït les empreses de desenvolupament de programari en els seus productes han tingut una forta influència en les tendències de disseny, ja que han fet possible noves maneres de crear composicions de disseny gràfic, objectes de consum o interfícies d'usuari. Amb la finalitat de superar aquesta dependència del programari, es planteja una qüestió que s'ha estat debatent durant els últims anys: **els dissenyadors han de saber programar?**

<div class="destacat"><markdown>
Segons l'enginyer i dissenyador **John Maeda**, un dels promotors principals del _creative coding_ o programació creativa, saber programar és un coneixement imprescindible per als dissenyadors del segle XXI.
</markdown></div>

Maeda afirma que el rol del dissenyador està canviant i que ja no es tracta solament de conèixer o anticipar les necessitats de l'usuari, sinó també de tenir la capacitat de programar i treballar amb el disseny generatiu, el _machine learning_ o altres tecnologies d'intel·ligència artificial. En les recents edicions del **Design in Tech Report**, Maeda i el seu equip plantegen la comparació entre el dissenyador «clàssic», que crea objectes per a un conjunt limitat de persones (com ocorre en el disseny gràfic, disseny de producte o disseny de mobiliari) i el dissenyador computacional, que treballa amb productes en constant evolució.

<div class="destacat"><markdown>
Maeda defineix el **dissenyador computacional** com un professional que entén la computació (té un coneixement dels llenguatges de programació i sap què es pot fer amb aquests), reflexiona de forma crítica sobre la tecnologia (considerant els aspectes positius i negatius en relació amb el projecte) i aprèn sobre les últimes innovacions tecnològiques, com ara els avenços en intel·ligència artificial.
</markdown></div>

Si bé Maeda donaria una resposta categòricament afirmativa a la pregunta que encapçala aquest text i té arguments per a defensar la seva postura, cal considerar altres punts de vista. En una sèrie d'articles publicats a la plataforma Medium, el dissenyador de programari **Alan Cooper**, creador de l'entorn de programació Visual BASIC i pioner en el camp del disseny d'interacció, planteja les **raons per les quals els dissenyadors no han de saber programar**. D'entrada, Cooper (2017) planteja una sèrie de raons per les quals no cal imposar als dissenyadors la necessitat d'aprendre a programar:

* **És possible saber com es fa alguna cosa sense fer-ho directament**. Molts professionals (directors, coreògrafs, entrenadors, etc.) dirigeixen altres persones sense fer el seu treball, però sabent com s'ha de fer.
* **Fer quelcom no suposa automàticament conèixer les seves implicacions**. Saber programar no implica entendre els efectes del codi que s'ha creat en el producte final o a l'organització que l'empra.
* **La separació entre «dissenyadors» i «desenvolupadors» és simplista i no reflecteix la complexitat de tots dos rols ni com aquests interactuen**. En aquest sentit, Cooper indica que si bé pot ser bo que els dissenyadors dediquin un temps a programar, els programadors també haurien de dedicar un temps a dissenyar, és a dir a participar en el procés de disseny que inclou conèixer les necessitats dels usuaris.
* **Hi ha pocs bons programadors i dissenyadors**. Per tant, per a Cooper «és absurd i un desaprofitament obligar-los a treballar en un àmbit aliè a les seves habilitats especials».

Alan Cooper culpa d'aquesta divisió entre el disseny i la programació a la mateixa indústria del programari, que es regeix pels beneficis econòmics i un ritme de producció que impedeix que el 80% dels projectes s'arribi a materialitzar:

>Hem creat sistemes de programari rònecs durant dècades i, pel que sembla, no som capaços de trobar la manera de fer-ho de forma efectiva. La majoria dels projectes no tiraran endavant. Els que ho aconsegueixen són sovint versions patèticament febles que manquen de força i flexibilitat.
>
><cite>A. Cooper (2017, maig). «Should Designers Code?» \[en línia\]. _Medium_. \<[https://medium.com/@MrAlanCooper/should-designers-code-f7b745b-8cd03](https://medium.com/@MrAlanCooper/should-designers-code-f7b745b8cd03)\></cite>

Els programes i plataformes que s'han anat desenvolupant en l'última dècada, molts d'aquests en codi obert, contribueixen a resoldre aquest problema, si bé hi segueix havent una bretxa entre els dissenyadors i programadors.

<div class="destacat"><markdown>
Per a salvar aquesta distància, en el que coincideixen Cooper i Maeda és que els dissenyadors han de conèixer el potencial dels llenguatges de programació i el que suposa treballar amb aquests.
</markdown></div>

D'aquesta manera, poden col·laborar més efectivament amb els programadors i saber què demanar-li en funció de les necessitats del projecte. Això també és beneficiós per al programador, ja que el seu treball vincula l'ordinador amb l'usuari, però com indica Cooper, mai no tracta amb l'usuari, solament amb l'ordinador. El dissenyador, el treball del qual se centra a entendre les necessitats de l'usuari, pot aportar aquesta part al programador sabent què pot demanar-li i què no, encara que no sàpiga programar, si entén les capacitats i limitacions del codi.

## Art computacional i interactiu

![Portada](@attachment/uoc/programacio_disseny_arts/portada4.png)

<cite><a href="http://arts.recursos.uoc.edu/programacio-disseny-arts/4-1-portada/">Veure la portada en funcionament</a></cite>

### Segle XX: bases de l'art computacional

A mitjan segle XX, el foment de la recerca sobre la convergència entre les tecnologies de la comunicació i la informació van transformar radicalment la societat. De la **tecnocràcia**, impulsada per diversos estats i organismes supranacionals després de la Segona Guerra Mundial, s'anirà evolucionant fins a donar lloc a la **societat de la informació** de la dècada de 1970. Els efectes col·laterals de processar la informació de manera automàtica per mitjà de diversos dispositius i eines van transformar radicalment el panorama polític, econòmic i cultural. La creació, evidentment, no va ser aliena a tots aquests canvis, encara que els començaments van ser més lents i complicats del que es pensa en l'actualitat.

Per a analitzar obres d'**art** **computaritzat** (_computer art_), és important repassar la història i l'evolució dels ordinadors, i contextualitzar tot un seguit d'aportacions que van ser desenvolupades amb gran esforç i tenacitat per científics, enginyers i equips de treball interdisciplinaris, interessats a oferir **noves possibilitats expressives gràcies a les eines innovadores**. Tal com es recalca en l'apartat «Disseny i programació», la creació vinculada a les noves tecnologies és fruit de l'**esforç individual, però també de la col·laboració**: compartir coneixements, grans dosis d'enginy i, de vegades, la mera casualitat van donar lloc a noves línies de treball.

> De la mateixa manera que el dadaisme va ser en part una reacció a la industrialització de la guerra i la reproducció mecànica de textos i imatges, l'**art dels nous mitjans** es pot entendre com una resposta a la revolució de les tecnologies de la informació de diversos models culturals.

La capacitat de crear amb un ordinador es distancia en els seus inicis d'un altre tipus d'«ismes» consolidats a les acaballes del segle XIX. Els moviments estètics (romanticisme, impressionisme) i les etapes de reacció a l'estètica anterior no conformen un moviment en si mateix en les primeres albors de l'art computaritzat. Alguns teòrics, com **George Fifield**, assenyalen que, encara que el seu potencial resultava il·limitat al seu començament, la confraternització entre l'art i la tecnologia era incòmoda. El que podria haver estat una relació fructífera havia de bregar, sobretot, amb la **necessitat de crear un llenguatge propi**. Per aquest motiu, els conceptes exposats per **Walter Benjamin** a _La obra de arte en la era de su reproductibilidad técnica_ (1936) tornen a ser qüestionats a mitjan dècada dels anys seixanta. La utilització de l'**ordinador** **com a mitjà artístic** posa en una situació difícil la seva reproducció i, per tant, la seva **autenticitat** i la seva **autoria**.

<div class="destacat"><markdown>
L'**«aura»**, o el que és el mateix, «el valor únic de l'obra d'art “autèntica”» desapareix en la creació computacional atenent els principis del filòsof germà (Benjamin, 2012, pàg. 14), que paradoxalment reconeix que la reproducció tecnològica podria aconseguir una **democratització de la imatge**. Amb els anys, aquesta peculiaritat dona lloc a **noves formes de producció** característics de la tecnologia digital.
</markdown></div>

#### Conformació i pioners

<div class="destacat"><markdown>
La necessitat de **calcular de forma molt precisa i evitar errors**, i el **tractament de les dades a gran escala** per part de l'administració i les empreses, són els dos factors que van impulsar el desenvolupament de les **calculadores**.
</markdown></div>

Tal com apunta Lev Manovich, calien tant els aparells mediàtics com els informàtics per al funcionament de les societats de masses dels segles XIX i XX:

>La capacitat de difondre els mateixos textos, imatges i sons a milions de ciutadans –per a garantir així unes mateixes creences ideològiques– resultava tan essencial com la capacitat de mantenir un registre dels naixements, les dades d'ocupació i els historials mèdics i policials.
>
><cite>L. Manovich (2005). _El lenguaje de los nuevos medios de comunicación: La imagen en la era digital_ (pàg. 3-7). Barcelona: Planeta.</cite>

No obstant això, l'avenç dels mitjans **moderns** (fotografia, cinema, impressió _offset_, ràdio i televisió) i els **informàtics** no es van entrellaçar fins que l'enginyer alemany **Konrad Zuse** en va construir un al saló de la casa dels seus pares a Berlín entre 1936 i 1938 (figura 1). Va ser el primer ordinador que va funcionar. Utilitzava el llenguatge binari en els seus programes, foradant descarts de pel·lícula de 35 mm a manera de cinta perforada. Les seves aportacions, juntament amb les de **Babbage**, **Jacqard**, **Hollerith** o **Turing** evolucionaran fins a conformar els primers **ordinadors electrònics**, en la dècada dels anys quaranta, a causa de la necessitat de perfeccionar els sistemes de defensa militar durant la Segona Guerra Mundial. Les tensions entre els blocs capitalista i comunista, enfrontats durant la guerra freda, van augmentar la necessitat d'explorar i innovar sobre les seves utilitats durant les dècades dels anys cinquanta i seixanta.

![Figura 1](@attachment/uoc/programacio_disseny_arts/412_1.jpg)

<cite>Figura 1. Cronologia de la història de l'ordinador.</cite>

<div class="extra"><markdown>
**Màquina analítica**

![Figura 2](@attachment/uoc/programacio_disseny_arts/412_2.jpg)

<cite>Figura 2. Màquina analítica de Charles Babbage (segle XIX).<br><small>Font: https://culturacientifica.com/app/uploads/2015/06/Babbages\_Analytical\_Engine\_1834-1871.\_9660574685.jpg</small></cite>

S'han utilitzat diversos sistemes de càlcul al llarg de la història (l'àbac, la màquina aritmètica de Pascal, la calculadora de Leibnitz, etc.), però els antecedents directes dels ordinadors es remunten a l'any 1833, data en què el britànic **Charles Babbage** va començar a desenvolupar, al costat d'**Ada** **Lovelace** –considerada com la primera programadora de la història–, la **màquina analítica** (Schneider, Gersting i Miller, 2006, pàg. 408-409). Aquell prototip funcional antecedent dels actuals ordinadors digitals disposava d'un sistema de memòria, un de control, un processador, fitxes perforades d'entrada i fitxes impreses de sortida, que s'utilitzaven per a efectuar i emmagatzemar operacions matemàtiques (Barceló, 2008).
</markdown></div>

<div class="extra"><markdown>
**Tabulador electromagnètic**

![Figura 3](@attachment/uoc/programacio_disseny_arts/412_3.jpg)

<cite>Figura 3. Hollerith davant el seu tabulador (1908).<br><small>Font: https://www.energy.gov/sites/prod/files/styles/borealis_photo_gallery_large_respondxl/public/2018/09/f55/hollerithmach-1908-horizontal.jpg?itok=m1d-kM_c</small></cite>

A les acaballes del segle XIX, **Herman Hollerith**, tècnic en estadística novaiorquès, va desenvolupar un **tabulador electromagnètic** que utilitzava targetes perforades. El seu sistema permetia analitzar i registrar milions de dades d'una manera ràpida i eficaç. Les recerques de Hollerith van permetre que arribés a realitzar càlculs (Austrian, 2016). Amb aquests avenços, va establir la Tabulating Machine Company, empresa que es convertiria, després de diverses fusions, en la International Business Machine (IBM).
</markdown></div>

<div class="extra"><markdown>
**ENIAC**

![Figura 4](@attachment/uoc/programacio_disseny_arts/412_4.jpg)

<cite>Figura 4. Vista general de l'ENIAC.<br><small>Font: https://es.wikipedia.org/wiki/ENIAC#/media/File:Two\_women\_operating\_ENIAC.gif</small></cite>

El primer ordinador del món, el computador i integrador numèric electrònic (**ENIAC**, per les seves sigles en anglès), es va desenvolupar a partir de l'any 1943 a la Universitat de Pennsilvània, sota la direcció de **John P. Eckert** i **John W. Mauchly**, amb l'objectiu de calcular les taules de tir de l'artilleria. Els retards en el seu desenvolupament van impedir que es reduís enormement el temps invertit en complexos càlculs logístics de caràcter bèl·lic (de 20 hores a 30 segons). Encara que tenia fallades evidents de manteniment, ja que funcionava amb més de 17.000 tubs de buit, la seva construcció va donar lloc a l'**actual** **estructura lògica dels ordinadors** (Gay, 2000).
</markdown></div>

A mitjan dècada dels anys seixanta, els grans ordinadors estaven a centres de recerca relacionats amb la tecnologia informàtica, en què es tenien en compte expressions creatives per diversos motius:

* L'elevat finançament dels primers ordinadors estava destinat, en exclusiva, a buscar solucions per al càlcul i l'experimentació científica.
* El llenguatge d'accés a cada ordinador era inaccessible.
* Eren molt pocs els investigadors familiaritzats amb les expressions creatives.
* Els artistes es van veure amenaçats per les computadores, de manera similar a com havia passat amb els pintors davant la irrupció de la fotografia.
* Les màquines eren associades al capitalisme: molts creadors van centrar la seva obra a criticar-les, ja que les associaven al control exercit pel poder.

Crida l'atenció que en aquests anys alguns científics van començar a crear els primers gràfics per ordinador. La curiositat i, de vegades, la casualitat van portar alguns a investigar sobre **què podien arribar a fer les màquines**, i alguns ho van fer sota la influència del marc teòric establert pel professor de filosofia i teoria científica **Max Bense**, professor de l'Institut de Tecnologia de la Universitat d'Stuttgart. Juntament amb el sociòleg **Abraham A. Moles**, docent de l'Escola d'Ulm, va desenvolupar l'_Estètica de la informació_ (_Information Aesthetics_), obra molt influenciada per la cibernètica de **Wiener**, que va incitar Bense a elevar l'art computacional a una nova experiència estètica de profund calat, amb implicacions en altres àmbits. Els seus textos van ser publicats tant a Alemanya com a França, on van tenir una gran repercussió.

![Figura 5](@attachment/uoc/programacio_disseny_arts/412_5.jpg)

<cite>Figura 5. Portada de la primera publicació de _Bit International 1. The theory of information and the new aesthetics_ (1968).<br><small>Font: https://monoskop.org/images/b/b3/bit\_international\_1\_the\_theory\_of\_informations\_and\_the\_new\_aesthetics\_1968.jpg</small></cite>

#### Primers gràfics per computadora: de l'experimentació a l'exposició

Encara que al llarg de la història de l'art l'interès per representar la llum i el moviment ha estat una constant, fins a l'any 1920 no es van fer obres que van trencar radicalment amb els conceptes estàtics d'**espai** i **temps**. Gràcies als **mitjans electrònics**, les obres cinètiques van oferir a l'espectador innovadores experiències allunyades de l'estatisme de l'art en voga en aquella època. _Rotary Glass Plates (Precision Optics)_ (1920), de **Marcel Duchamp**, _Kinetic Construction: Standing Wave_ (1920), de **Naum Gabo**, o _Light-Space Modulator_ (1923-1930), de **Laszlo Moholy-Nagy** són alguns dels exemples més destacats.

<div class="extra"><markdown>
**_Kinetic Construction: Standing Wave_**

![Figura 6](@attachment/uoc/programacio_disseny_arts/413_6.jpg)

<cite>Figura 6. Kinetic Construction_: Standing Wave (1920), de Naun Gabo.<br><small>Font: https://mymodernmet.com/wp/wp-content/uploads/2017/03/Naum-Gabo-Kinetic-Construction-Standing-Wave-1919-metal-wood-electric-motor-e1490387238540.jpg</small></cite>

_Kinetic Construction: Standing Wave_ (1920), de Naum Gabo, és una escultura cinètica que s'activava electrònicament per a rotar i generar volum. De fet, el terme cinètic va ser emprat per primera vegada en relació amb l'art visual a _The Realistic Manifesto_ publicat aquest mateix any per Gabo i el seu germà Antoine Pevsner. Diverses peces d'obres de Duchamp, com la icònica _Bicycle Wheel_ (1913), van anticipar la recerca sobre la percepció del moviment en els anys vint.
</markdown></div>

<div class="extra"><markdown>
**_Rotary Glass Plates (Precision Optics)_**

![Figura 7](@attachment/uoc/programacio_disseny_arts/413_7.jpg)

<cite>Figura 7. _Rotary Glass Plates_ (_Precision Optics_) (1920), de Marcel Duchamp.<br><small>Font: https://artgallery.yale.edu/collections/objects/43792</small></cite>

_Rotary Glass Plates (Precision Optics)_ (1920) incorporava cinc plaques de vidre pintat muntades sobre un eix motoritzat. Quan giraven a gran velocitat, feien l'efecte de ser cercles concèntrics en un mateix plànol. L'obra necessitava temps i moviment per a produir aquest efecte en els espectadors.
</markdown></div>

<div class="extra"><markdown>
**_Light-Space Modulator_**

![Figura 8](@attachment/uoc/programacio_disseny_arts/413_8.jpg)

<cite>Figura 8. _Light-Space Modulator_ (1923-30), de Moholy-Nagy.<br><small>Font: https://i1.wp.com/farm1.static.flickr.com/218/475974913\_e6fabe280e.jpg</small></cite>

A _Light-Space Modulator_ (1923-1930), de Moholy-Nagy, diversos motors movien l'escultura d'acer brillant mentre la il·luminació elèctrica de la galeria reflectia la llum sobre la peça i el seu entorn (Shanken, 2013, pàg. 14-16).
</markdown></div>

<div class="destacat"><markdown>
L'evolució del cinema i de la fotografia, i la consolidació de la música electrònica, van afavorir la recerca pel que fa a noves formes d'expressió.
</markdown></div>

**Ben Laposky**, matemàtic nord-americà, és considerat el **primer artista computacional**. La seva recerca sobre la relació entre la ciència i l'art, utilitzant com a eina un oscil·loscopi analògic que manipulava manualment, el va portar a plasmar una nova estètica creativa. El 1950, va aconseguir registrar fotogràficament, utilitzant una pel·lícula d'alta velocitat, la primera imatge d'una sèrie que va donar a conèixer com a O_scil·lons_ o A_bstraccions electròniques_ (Laposky, 1975). Cinquanta imatges van conformar la primera exposició, que es va inaugurar al Museu Sanford, a Cherokee (Iowa) i va ser presentada a tretze ciutats nord-americanes entre 1953 i 1954: Laposky va saber redirigir els seus coneixements científics cap a la creació artística, la qual cosa li va atorgar, increïblement, certa fama internacional entre les persones interessades en l'experimentació tecnològica (Taylor, 2014, pàg. 64-66). L'artista i teòric alemany **Herbert W. Franke** va aconseguir resultats similars en la seva sèrie _Oscil·logrames_ (_Oscillons_) el 1956. Una selecció d'aquestes va formar part de la mostra «Experimentale Asthetik» al Museum of Applied Art de Viena el 1959. En paral·lel, Laposky i Franke van generar, sense molt èxit en el món artístic, exemples d'imatges electròniques que no tenen res a envejar a les propostes d'art generatiu actual (vegeu apartat [«Disseny i programació»](http://arts.recursos.uoc.edu/programacio-disseny-arts/3-1-introduccio/)).

![Figura 9](@attachment/uoc/programacio_disseny_arts/413_9.jpg)

<cite>Figura 9. Retrat de Ben Laposky.<br><small>Font: [https://en.wikipedia.org/wiki/Ben\_F.\_Laposky#/media/File:Ben\_F.\_Laposky.png](https://en.wikipedia.org/wiki/Ben_F._Laposky#/media/File:Ben_F._Laposky.png)</small></cite>

![Figura 10](@attachment/uoc/programacio_disseny_arts/413_10.jpg)

<cite>Figura 10. Oscil·logrames 10, 18 i 41.<br>Font: J. S. Madachy (1961). _Recreational Mathematics Magazine_.<br><smallhttp://ruinsorbooks.com/2013/03/electronic-abstractions-mathematics-in-design-recreational-mathematics-ben-f-laposky/</small></cite>

L'enginyer **Ivan Sutherland** va iniciar el seu doctorat al MIT, el 1961. Durant dos anys, va desenvolupar el primer sistema de gràfics interactiu per ordinador: l'**Sketchpad**. En el seu procés de creació, també va generar la **programació orientada a objectes**: d'aquesta manera va revolucionar tant la creació visual per ordinador com les ciències computacionals. En la mateixa època, entre el 1961 i el 1962, **Kurd Aslehem** i **Cord Passow** van crear corbes amb una computadora analògica al Deutsches Elektronen Synchrotron (DESY) de Hamburg, i **Michael Noll** va programar i va imprimir dibuixos en microfilm al laboratori de Murray Hill (Nova York). Pas a pas, es va anar establint una nova estètica sense que cap dels protagonistes conegués les recerques de la resta de participants.

<div class="extra"><markdown>
A continuació, podeu veure el vídeo «Ivan Sutherland Donem Sketchpad, 1963» sobre la tesi de Sutherland.

https://www.youtube.com/watch?v=3wrn9cxlgls
</markdown></div>

Del 5 al 19 de febrer de 1965, en el seminari de Bense a Stuttgart, es va produir un gran esdeveniment: el matemàtic **John Nees** va exposar _Computergrafik_. Totes les peces constituïen les seves primeres creacions desenvolupades a Siemens, l'empresa que havia adquirit el Graphomat Zuse Z64, un graficador desenvolupat per l'empresa del pioner **Konrad Zuse**. Evidentment, Nees va tenir l'oportunitat de poder aplicar les seves teories sobre nous usos per a aquelles màquines: l'ús de l'ordinador digital i la plasmació resultant gràcies a l'ús del **plòter** que oferia uns resultats peculiars, diferents a qualsevol representació mecànica coneguda fins al moment. Com no podia ser d'una altra manera, la paraula _art_ no semblava convèncer, així que la seva línia de recerca es va donar a conèixer públicament com a **gràfica estadística**.

>Gairebé ningú, el 1965, tenia idea de què era un ordinador o un «programa», amb prou feines hi havia pantalles. Ningú no posseïa un ordinador. \[…\] Un artista de l'acadèmia d'Art d'Stuttgart va prendre la paraula: «Pot fer que la màquina firmi amb el meu traç?» \[…\]. Nees va reflexionar un instant: «Sí, ho podria fer, si em digués exactament quin és el seu traç». En el diàleg entre l'artista i l'enginyer hi havia –en el moment en què l'art per ordinador apareixia per primera vegada en escena– el gran secret.
>
><cite>W. Lieser, T. Baumgartel, W. Herzogenrath, H. Dehlinger, T. Edler (2010). _The World of Digital Art_ (pàg. 40). Berlín: Langenscheidt Publishing Group.</cite>

Els artistes de l'acadèmia van abandonar la sala malhumorats. Mentre sortien, Bense va cridar: «Senyors meus, el que aquí estem tractant és art artificial» (Lieser i altres, 2010, pàg. 40). La diferenciació va marcar l'origen del que avui entenem per **programar**: Peter Weibel ho denominaria el 2004 com **«la revolució algorítmica»** (ZKM, 2004). Mesos més tard, la galeria Wendelin Niedlich d'Stuttgart va reunir una selecció d'obres d'experimentació de **Frieder Nake** i **Georg Nees** amb el títol _Computer Graphics_. Ambdós matemàtics havien explorat independentment sobre les possibilitats estètiques que podien oferir les computadores.

A Nova York, del 6 al 24 d'abril del mateix any, **Michael Noll** i **Béla Julesz** mostraven la seva obra _Computer Generated Pictures_ a la Howard Wise Gallery. Malgrat les expectatives dels artistes i galeristes, no es va vendre cap obra i solament un mitjà va cobrir l'esdeveniment.

![Figura 11](@attachment/uoc/programacio_disseny_arts/413_11.jpg)

<cite>Figura 11. Imatges de _Computer Generated Pictures_ a la Howard Wise Gallery de Nova York (1965).<br><small>
Font: http://dada.compart-bremen.de/imageUploads/medium/Noll\_Wise2.jpg i https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DrOSEV7mwiz6jFul\_a9jQkswTZER14cqI5jsmp2njG\_1PWd3</small></cite>

Els treballs de Noll i de Julesz mostraven composicions associades a les seves respectives recerques a Bell Labs, un espai en què es van generar treballs experimentals d'altres pioners (Noll, 2016). El primer oferia els resultats de **processos casuals**, i el segon, **experiments sobre percepcions**. A tots dos els unia el fet que ells mateixos programaven: l'accés a la màquina i al seu llenguatge algorítmic era un privilegi en l'època.

<div class="extra"><markdown>
**Michael Noll**

[Michael Noll](http://noll.uscannenberg.org/) és professor emèrit de comunicació a la Universitat del Sud de Califòrnia. La seva sèrie de treballs computacionals simulant els quadres de Mondrian (_Computer Composition With Lines_), de 1964, és tot un clàssic, però no ho són menys les composicions de la sèrie _Computer-Generated Ballet_ (1968-1970). En aquesta utilitzava l'ordinador per a crear les primeres seqüències d'imatges digitals de figures en moviment en un espai virtual. També va treballar en aquesta època en els primers dispositius interactius tridimensionals, referents dels sistemes de realitat virtual actuals.

![Figura 12](@attachment/uoc/programacio_disseny_arts/413_12.jpg)

<cite>Figura 12. _Computer Composition With Lines_ (1964).<br><small>Font: http://www.dam.org/mix/noll-all-artworks-4-computer-patterns-with-lines--dam-11493-gUmmn-de-2.jpg</small><cite>

En el vídeo següent podeu veure les primeres seqüències d'imatges digitals de figures en moviment en un espai virtual: https://www.youtube.com/watch?v=phVN_HS5Fy8&feature=emb_title
</markdown></div>

A Japó, **Hiroshi Kawano** va desenvolupar el seu primer gràfic per ordinador, a la Universitat de Tòquio el 1964, amb un OKITAC 5090A. La seva formació en filosofia i la gran influència dels textos de Bense, el van portar a encarar cadascuna de les seves propostes des d'un punt de vista diferent als seus coetanis nord-americans o europeus. _Digital Mondrians_ intenta oferir a l'espectador peces algorítmiques d'un alt valor estètic, evocant les formes i el color del reconegut pintor holandès (Kawano, 1990).

![Figura 13](@attachment/uoc/programacio_disseny_arts/413_13.jpg)

<cite>Figura 13. «Disseny 3-1. Sèrie 4, 5, 6, 6, 6» (1964) de Hiroshi Kawano.<br><small>
Font: http://cdn8.openculture.com/2017/05/11203105/DigitalMondrian1-e1494568247824.jpg</small></cite>

Dos anys més tard, es va crear una associació transversal d'estudiants d'art i enginyeria emparada per Japan IBM: el **Computer Technique Group** **(CTG)**. Les seves línies de recerca incloïen tant el desenvolupament de peces, com la venda a galeries. El 9 d'octubre de 1967 van organitzar un simposi a Tòquio sobre «Ordinador i art», en què van donar a conèixer el seu _CTG Manifesto_ i _Computer Art is New Art_.

>Domarem l'encant transcendental de l'ordinador i impedirem que serveixi al poder establert. Aquest és el plantejament adequat per a solucionar els problemes complexos en la societat de les màquines.
>
><cite>W. Lieser, T. Baumgartel, W. Herzogenrath, H. Dehlinger, T. Edler (2010). _The World of Digital Art_ (pàg. 25). Berlín: Langenscheidt Publishing Group.</cite>

Després de participar en diverses exposicions itinerants, el grup es va dissoldre el 1969. Únicament Komura va seguir desenvolupant el seu treball creatiu lligat als ordinadors.

#### Els artistes prenen el comandament

Entre el rebuig generalitzat dels artistes davant les primeres obres d'art computacional, hi ha excepcions com la de l'alemany [**Manfred Mohr**](https://www.emohr.com/). Llicenciat en Belles arts a París, les seves peces algorítmiques, d'un estil molt personal, giren entorn de dues constants: el **ritme** i la **repetició** (Waelder, 2011), conceptes lligats a la seva carrera com a músic de jazz.

>Les paraules de Mohr assenyalen una profunda transformació en la relació entre l'artista i la seva pròpia obra, ja que aquest passa de ser l'absolut creador de la forma (si bé amb un cert nivell de diàleg amb els materials, participació de col·laboradors, etc.) a ser qui es limita a establir un camp d'acció en què una màquina determinarà el resultat, podent generar, a més, innombrables variacions d'una composició (o idea) inicial \[…\].
>
>Mohr va poder emprar algunes de les màquines més potents del moment gràcies al fet que va aconseguir la col·laboració de l'Institut de Meteorologia de París, on va treballar de 1970 a 1983. El 1970, Pierre Guadibert, director d'Animation-Recherche-Confrontation (ARC), departament d'art contemporani del Museu d'Art Modern de la Ciutat de París, va visitar el centre de computació de l'Institut \[…\] i va quedar impressionat pel treball de Mohr, a qui va convidar a preparar una exposició al museu.
>
><cite>P. Waelder (2011, 7 de juliol). «Manfred Mohr: una estètica programada» \[en línia\]. _Arte y cultura digital_ (blog). \[Data de consulta: 26 de maig de 2019\]. http://laboralcentrodearte.uoc.edu/?p=1936.</cite>

La seva exposició «Une esthétique programmée» al Museu d'Art Modern de la Ciutat de París el 1971 ofereix una retrospectiva de les seves obres realitzades exclusivament per ordinador. A més, li va brindar l'oportunitat de mostrar públicament com crear una obra «en directe», utilitzant com a dispositiu de sortida un **plòter Benson flatbed** de més de 800 quilos (Mohr, 1971).

Una altra creadora europea, [**Vera Molnar**](http://www.veramolnar.com/), pintora i historiadora de l'art formada a Budapest, s'iniciava en la creació de gràfics computacionals a les acaballes dels anys seixanta al centre de recerca de la Universitat de París. De les seves pintures abstractes inicials, va passar a explorar, mitjançant la programació, nous processos en què factors com ara la **imprevisió**, la **llibertat** o l'**imaginari** enriqueixen el seu treball creatiu.

>M'imaginava que tenia un ordinador. Inventava un programa i llavors, pas a pas, realitzava sèries senzilles, finites, però que coincidien en si mateixes, és a dir, que no ometien cap combinació de formes. Quan vaig poder, vaig substituir l'ordinador imaginari per un de debò.
> 
><cite>V. Molnar (2009). _Vera Molnar_ (pàg. 16). http://www.veramolnar.com/.</cite>

Per a poder treballar amb l'ordinador que utilitzava, que estava destinat a «tasques científiques serioses», ho feia fora de l'horari habitual dels empleats i els caps de setmana. En les obres de Molnar destaquen les **línies** i els **quadrats**, seguint unes premisses estètiques molt definides, mentre que en els treballs de Mohr s'emfatitza la **constant descomposició algorítmica del cub**.

A continuació s'exposen treballs d'ambdós autors perquè pugueu apreciar les diferències.

![Figura 14](@attachment/uoc/programacio_disseny_arts/414_14.jpg)

<cite>Figura 14. _Estructura de quadres_ (1971), obra de Vera Molnar.<br><small>Font: https://ahrc.ukri.org/research/readwatchlisten/imagegallery/2014galleries/ahistoryofdigitalart/vera-molnar/</small></cite>

![Figura 15](@attachment/uoc/programacio_disseny_arts/414_15.jpg)

<cite>Figura 15. _P-197pz_ (1977–1978), obra de Mahnfred Mohr.<br><small>Font: https://www.artforum.com/print/reviews/201201/manfred-mohr-38897</small></cite>

Amb una formació similar a la de Molnar, **Charles Csuri** va començar a experimentar amb gràfics per ordinador a la Universitat d'Ohio des de 1963. La seva obra _Sine Curve Man_ (1967), peça figurativa modificada del perfil d'un ancià, canvia la visió repetitiva i avorrida de la geometria imperant en la creació tecnològica de l'època. És tal la innovació estilística de la peça, que va guanyar el primer premi del Computer Art Contest aquest mateix any (McCormack i d'Inverno, 2012, pàg. 77-80). El 1965, va iniciar la seva carrera en l'animació amb propostes senzilles, com el seu famós _Colibrí_, realitzat en col·laboració amb **James Shaffer**, amb el qual van guanyar el premi del IV Festival internacional de Cinema Experimental de Brussel·les, el 1967. Amb una tècnica similar, **John Whitney, Sr.**, cineasta experimental, va crear peces com _Catalog_ (1961) o _Permutations_ (1968). La reputació dels seus treballs va ser tal que IBM el va fitxar per continuar explorant sobre el potencial dels seus ordinadors (James, 2005, pàg. 262-269).

![Figura 16](@attachment/uoc/programacio_disseny_arts/414_16.jpg)

<cite>Figura 16. _Colibrí_ (1965), de Csuri.<br><small>Font: https://www.oh-tech.org/sites/oh-tech.org/files/blog-img/humbird.jpeg</small></cite>

![Figura 17](@attachment/uoc/programacio_disseny_arts/414_17.jpg)

<cite>Figura 17. _Sine Curve Man_ (1967), de Csuri<br><small>Font: https://i.redd.it/e1g0begz2vn21.png</small></cite>

En els vídeos següents podeu veure _Colibrí_, _Catalog_ i _Permutations_:


https://www.youtube.com/watch?v=c4jo-b-5rDI

https://www.youtube.com/watch?v=TbV7loKp69s

https://www.youtube.com/watch?v=kdYxJ85RSds

#### Grans exposicions sobre el binomi art i ciència

Hi va haver tres grans exposicions que van marcar un punt d'inflexió pel que fa al **reconeixement de l'art computacional** per part de les institucions:

1. «Cybernetic Serendipity», comissariada per Jasia Reichardt, que va tenir lloc a l'Institute of Contemporary Arts (ICA) de Londres del 2 d'agost al 20 d'octubre de 1968.
2. «The Machine as Seen at the End of the Mechanical Age» es va celebrar al Museu d'Art Modern de Nova York entre el 1969 i el 1970.
3. «Software Information Technology: Its New Meaning for Art» es va presentar al Museu Jueu de Nova York el 1970.

![Figura 18](@attachment/uoc/programacio_disseny_arts/415_18.jpg)

<cite>Figura 18. _Sine Curve Man_ (1967), de Csuri<br><small>Font: https://pallantbookshop.com/wp-content/uploads/2016/11/cyber-001.jpg</small></cite>

![Figura 19](@attachment/uoc/programacio_disseny_arts/415_19.jpg)

<cite>Figura 19. Portada del catàleg de «The Machine as Seen at the End of the Mechanical Age» (1968)<br><small>Font: https://monoskop.org/The\_Machine\_as\_Seen\_at\_the\_End\_of\_the\_Mechanical\_Age#mediaviewer/File:The\_Machine\_as\_Seen\_at\_the\_End\_of\_the\_Mechanical\_Age\_1968.jpg</small></cite>

![Figura 20](@attachment/uoc/programacio_disseny_arts/415_20.jpg)

<cite>Figura 20. Portada del catàleg de «Software Information Technology: Its New Meaning for Art» (1970).<br><small>Font: http://www.fondation-langlois.org/media/CRD/acquisitions/Software-s.jpg</small></cite>

En la mostra londinenca, s'explorava la relació que hi havia entre la **tecnologia** i la **creativitat** (Reichardt, 2018, pàg. 6). Artistes i científics de tot el món mostraven com la col·laboració entre els dos àmbits donava lloc a **noves línies de recerca aplicables a les arts**, la ciència, la comunicació i l'oci. La mostra incloïa dibuixos digitals, fotografies, robots, música, màquines que pintaven, màquines que escrivien haikus, instal·lacions i audiovisuals, i constantment es nodria d'esdeveniments paral·lels (xerrades, _performances_, debats).

https://www.youtube.com/watch?v=n8TJx8n9UsA

![Figura 21](@attachment/uoc/programacio_disseny_arts/415_21.jpg)

<cite>Figura 21. «Cybernetic serendipity» (1968).<br><small>Font: http://www.medienkunstnetz.de/exhibitions/serendipity/images/2/ i https://cyberneticserendipity.net/image/7244494338</small></cite>

La mostra, que posteriorment va viatjar a diversos punts dels Estats Units d'Amèrica, va ser essencial per a promoure una visió positiva del nou perfil dels creadors tecnològics i oferir un panorama heterogeni de les incipients creacions digitals. Propostes d'artistes com Naim June Paik, Jean Tinguely o John Cage s'entremesclaven amb les de Laposky, Nake, Noll, John Whitney o el Computer Technique Group (CTG).

<div class="destacat"><markdown>
El gran èxit de públic –va rebre més de 40.000 visitants– va influir en l'assimilació dels nous conceptes i en tota una generació de nous creadors fascinats pel potencial dels ordinadors del moment.
</markdown></div>

En el cas de «The machine, as seen at the end of the mechanical age», comissariada per Hultén Pontus, es contrasta l'evolució de la tecnologia amb els valors humanístics de la creació des de diversos punts de vista. A més, advoca perquè els artistes es converteixin en guies que promoguin una **millor relació entre l'ésser humà i la màquina** (Hultén i Museum of Modern Art of New York, 1968, pàg. 252). Un any més tard «Software Information Technology: Its New Meaning for Art» va conjugar el resultat d'**experiments científics i creacions d'art conceptual**. **Jack Burman**, el seu comissari, va saber traçar paral·lelismes entre projectes basats en dispositius per a transmetre informació (**_media art_**) i aquells que utilitzaven el llenguatge com a material sense recórrer a la tecnologia. La proposta criticava de ple les teories de McLuhan, tan influent en aquells anys: per a Burnham, la relació home-màquina fomentava la creativitat i la innovació, no l'alienació (Jewish Museum of New York i altres, 1970, pàg. 70-71). A més de promoure la col·laboració entre els científics i els artistes, va originar l'**intercanvi entre el museu d'art i la indústria**: American Motors va patrocinar la producció tècnica i diverses empreses van prestar components tecnològics per a la producció d'algunes peces exposades.

<div class="destacat"><markdown>
En paral·lel a aquests grans esdeveniments culturals, el 1968, el món acadèmic havia inaugurat un sistema de comunicació i intercanvi de dades per mitjà de l'ordinador, un antecedent d'internet. Les universitats d'Stanford i Los Angeles van aconseguir dur a terme la seva conferència bianual amb un sistema que canviaria globalment la manera de comunicar-nos.
</markdown></div>

**Douglas Engelbart**, enginyer electrònic, va ser un dels participants més aclamats després de la seva intervenció titulada «The mother of all demos» (vegeu vídeo). Des de la seva computadora de l'Stanford Research Institute (SRI), va exposar a un públic de dos mil persones situades en un auditori de Sant Francisco, a 48 quilòmetres del seu despatx, la **primera demostració pública del sistema informàtic oN-Line System (NLS)**, que incloïa, entre d'altres innovacions, l'ús del ratolí, el correu electrònic, la teleconferència, l'hipertext o l'edició col·laborativa (Sack, 2019, pàg. 146-150). L'evolució del sistema trigaria tant a desenvolupar-se que, quan es van popularitzar alguns components, com és el cas del ratolí del Macintosh d'Apple el 1984, la seva patent havia caducat, així que ni ell ni els seus col·laboradors no van rebre cap compensació econòmica.

<div class="destacat"><markdown>
En tot cas, sí que van deixar palès una realitat inquietant: les eines i metodologies informàtiques, que s'havien convertit en símbols del poder, seguien en mans dels científics i militars nord-americans.
</markdown></div>

#### Gràfics per ordinador, animacions i 3D

Tal com recalcàvem al començament de l'apartat sobre la societat de la informació dels anys setanta, la qüestió se centrava en el desenvolupament de la indústria informàtica com a sector estratègic, de què es beneficien especialment els serveis secrets internacionals. Gràcies als sistemes de vigilància de dades (_dataveillance_) (Clarke, 1987), es va augmentar i millorar l'eficàcia de les recerques, la qual cosa va produir innombrables efectes col·laterals en àmbits socials, polítics, econòmics i culturals.

No és gens estrany que empreses com IBM patrocinessin en els anys setanta peces clau d'art computacional com, per exemple, _Arabesque_ (1975), de John Whitney, Jr., considerada una obra mestra de l'animació, o que s'impliquessin en l'edició de dos fullets: «Arte digital en París» (1975) i «Arte digital en Stuttgart» (1978). En tots dos es reconeix la tasca de pioners com: Csuri, Mohr, Molnar, Nees, Noll o Zajec (Lieser i altres, 2010, pàg. 27), encara que la creació no fos l'objectiu principal de la multinacional.

https://www.youtube.com/watch?v=w7h0ppnUQhE

>A diferència del que ocorria en el videoart, els artistes de prestigi no es van apropar, en els anys seixanta i setanta, als ordinadors per la seva complexitat i, sobretot, per «l'important sentiment antitecnològic i la contracultura».
>
><cite>M. Rush (2002). _Nuevas expresiones artísticas a finales del siglo XX_ (pàg. 176). Barcelona: Destino.</cite>

El 1977, es van posar a la venda els primers Apple II, el primer ordinador pensat per a adaptar-se a qualsevol necessitat: el seu disseny i una tenaç campanya de màrqueting van catapultar les seves vendes. El 1981, IBM va llançar al mercat l'IBM 5150 (conegut popularment com a PC IBM), que va apostar per establir un estàndard de programari i maquinari al mercat. Un any més tard, es va posar a la venda el Commodore C64, el primer ordinador amb interfície d'usuari. Els tres afavoreixen, gràcies als seus preus, que el món de la creació s'aproximi a l'art computaritzat. El nou format trencava radicalment amb el mite del gran ordinador amb intel·ligència artificial que mostra Stanley Kubrick el 2001: _Una odissea de l'espai_ (1968).

![Figura 22](@attachment/uoc/programacio_disseny_arts/416_22.jpg)

<cite>Figura 22. Primer anunci d'Apple II (1977)<br><small>Font: https://hipertextual.com/files/2016/04/apple-2.jpg</small></cite>

En els vídeos següents podeu veure el funcionament d'un IBM 5150 i el llançament del Commodore C64:

https://www.youtube.com/watch?v=kmCMkD1vv0E

Gradualment, es van anar ampliant les recerques transdisciplinàries com la de **Benoit Mandelbrot**, que va desenvolupar al Laboratori de Recerca d'IBM a Nova York _Mandelbrot Set_ (1979), una complexa imatge algorítmica «que va despertar gran interès en la geometria fractal i en la teoria de la complexitat, i va inspirar una àmplia gamma d'exploracions artístiques» (Shanken, 2013, pàg. 39). Poc després, es van donar a conèixer els primers treballs realitzats en 3D i en art generatiu. **Yoichiro Kawaguchi**, que va iniciar la seva carrera artística en 2D, va incorporar a les seves propostes algorítmiques una àmplia gamma cromàtica i simulacions de creixement que atrapaven l'espectador. Al llarg de la seva carrera, ha investigat sobre les possibilitats creatives de l'alta definició i de la interactivitat.

En el vídeo següent podeu veure l'obra _Embryo_ (1988) de Yoichiro Kawaguchi:

https://www.youtube.com/watch?v=HDZ6mNYX_-4

El creador britànic [**William Latham**](https://www.doc.gold.ac.uk/~mas01whl/media/images.htm) va desenvolupar al Laboratori científic d'IBM a la Gran Bretanya una sèrie d'obres amb aparença d'assajos genètics d'organismes vius amb aspecte d'assajos biològics, encara que realment només existien a l'ordinador. Es van presentar per primera vegada en dues mostres itinerants: «The Conquest of Form» i «The Empire of Form» (1998). El contingut d'ambdues era el començament del seu projecte sobre l'_organic art_, pel qual va desenvolupar una aplicació específica, «Mutator», amb l'ajuda del matemàtic **Stephen Todd**.

![Figura 23](@attachment/uoc/programacio_disseny_arts/416_23.jpg)

<cite>Figura 23. William Latham al seu laboratori d'IBM a Hursley (1987).<br><small>Font: http://computer-arts-society.com/images/46_5abd36321d6c6608130623/original.jpg</small></cite>

![Figura 24](@attachment/uoc/programacio_disseny_arts/416_24.jpg)

<cite>Figura 24. _The evolution of forms_ (1990).<br><small>Font: http://www.doc.gold.ac.uk/~mas01whl/imgs/home.jpg</small></cite>


En el vídeo _Evolutionary Art and Computers_ podeu escoltar la xerrada de William Latham per la TEDx Oxford (2015):

https://www.youtube.com/watch?v=MZGOr94468w

Altres àmbits creatius també es van adonar del potencial de la màquina i es van començar a generar interessants col·laboracions. Un projecte paradigmàtic en aquest sentit és el videoclip _Musique Non Stop_ del grup alemany de música electrònica Kraftwerk, desenvolupat per un equip dirigit per [**Rebecca Allen**](http://www.rebeccaallen.com/home) el 1986.

>Per a la seva elaboració es va desenvolupar un programari d'animació facial \[…\]. Allen volia crear una «estètica visual digital» que plasmés les personalitats dels membres \[del grup\] i l'essència de la seva imatge, que complementaria el seu so digital amb una nova forma de fer art utilitzant ordinadors.
>
><cite>R. Allen (1986). _Musique Non Stop_. \[Data de consulta: 28 de maig de 2019\]. [http://www.rebeccaallen.com/projects/musique-non-stop](http://www.rebeccaallen.com/projects/musique-non-stop).</cite>

Es va emetre amb gran èxit a l'MTV i a altres programes internacionals de videomusicals i va ser exhibit tant a galeries com a museus. Aquest mateix any, els Dire Straits van guanyar el premi del Vídeo de l'Any dels Premis MTV amb una altra peça en 3D: _Money for Nothing_, dirigida per **Ian Pearson** i **Gavin Blair**, i d'aspecte visual més rudimentari que el d'Allen, més proper al _cyberpunk_, gènere distòpic de la ciència ficció en què l'humà i el mecànic es fusionen.

![Figura 25](@attachment/uoc/programacio_disseny_arts/416_25.jpg)

<cite>Figura 25. Esquerra _Musique Non Stop_ (1986), dreta _Money for Nothing_ (1986).<br><small>Font: https://rebecca-allen.s3.amazonaws.com/sites/5400705c65601cfc84000002/content_entry5400725165601cfc84000016/54048ebd5848a5d6730005b4/files/ra2101.jpg?1489202893 i https://en.wikipedia.org/wiki/Money_for_Nothing_(song)#/media/File:Money_for_Nothing_Music_Video.jpg</small></cite>

En els vídeos següents podeu veure els respectius videoclips:

https://www.youtube.com/watch?v=O0lIlROWro8

https://www.youtube.com/watch?v=wTP2RUD_cL0

#### Apropiacionisme

Creadors com **David Hockney**, **Andy Warhol** o **Keith Haring** van utilitzar en la dècada dels anys vuitanta ordinadors per a desenvolupar algunes peces, encara que la majoria es va limitar a reproduir la mateixa estètica que utilitzaven en les seves creacions «no digitals». De fet, alguns d'aquests van ser usats com a reclam publicitari per les grans companyies promotores dels nous ordinadors personals.

<div class="extra"><markdown>
**Andy Warhol**

Wharhol, per exemple, va signar, l'estiu de 1985, un contracte amb Commodore pel qual es va convertir en l'ambaixador de l'Amiga 100. En la presentació oficial, retransmesa en directe per televisió des d'un Lincoln Center replet de públic, va realitzar un retrat de la cantant Debie Harry (_Blondie_), utilitzant el ProPaint. Posteriorment, va crear una sèrie de dibuixos digitals entre els quals s'inclou una nova versió de la seva famosa llauna de sopa Campbell's i de la Venus de Boticelli.
</markdown></div>

![Figura 26](@attachment/uoc/programacio_disseny_arts/417_26.jpg)

<cite>Figura 26. Andy Warhol i Debie Harry en la presentació de l'_Amiga 100_ (1985)<br><small>Font: https://images.computerhistory.org/blog-media/andy-warhol-and-debbie-harry_original.jpg</small></cite>

Encara que els creadors inicials van optar per crear formes abstractes, molts dels quals van començar a utilitzar el PC o els nous Macintosh, van tornar a la **figuració** reprenent les imatges i el llenguatge de les pintures clàssiques. Una de les més recurrents va ser la _Mona Lisa_ de Leonardo da Vinci:

>La _Mona Lisa_ sintetitzada d'Yvaral \[…\] consistirà en una reconstrucció estructural de la famosa cara, basada en l'anàlisi numèrica. La Mona/Leo d'Schwartz combina la meitat de la cara de la Mona Lisa amb la meitat de la de Leonardo.
>
><cite>M. Rush (2002). _Nuevas expresiones artísticas a finales del siglo_ _XX_ (pàg. 198). Barcelona: Destino.</cite>

Tots dos artistes van aplicar l'**apropiacionisme** típic de l'època, donant-li un gir tecnològic i intentant reactivar el rostre del creador italià. El filòsof **Karl Popper** va destacar l'intent de «crear fenòmens visuals en què la figuració i l'abstracció ja no són antagòniques» (Rush, 2002, pàg. 198).

![Figura 27](@attachment/uoc/programacio_disseny_arts/417_27.jpg)

<cite>Figura 27. Esquerra _Mona Lisa_ de Jean Pierre Yvaral (1989), dreta Lilian Swartz amb una còpia de _Mona/Leo_, obra de 1987.<br><small>Font: https://irea.files.wordpress.com/2008/03/jeanpierreyvaral-arte-cinetico3.jpg?w=497](https://irea.files.wordpress.com/2008/03/jeanpierreyvaral-arte-cinetico3.jpg?w=497</small></cite>

Un bon nombre de prestigiosos fotògrafs van investigar per compte propi, cadascun amb un estil definit, la manera de realitzar _collages_ de bona qualitat abans que eines com ara Adobe Photoshop permetessin manipular les imatges, però els resultats no van ser els esperats fins a la meitat dels anys noranta. Destaquen algunes excepcions, com la sèrie _Fictitious portraits_ (1992), de **Keith Cottigham**, que fusionen amb encert la fotografia amb la manipulació digital, de manera que sembla increïble que els tres protagonistes siguin realment còpies d'un mateix jove.

![Figura 28](@attachment/uoc/programacio_disseny_arts/417_28.jpg)

<cite>Figura 28. _Fictitious portraits_ (1992), de Keith Cottigham.<br><small>Font: http://www.keithcottingham.com/1992-fictitious-portraits</small></cite>

La parella artística **Antony Aziz** i **Sammy Cucher** (**Aziz** **+** **Cucher**), per la seva banda, van cobrir de pell tant individus com objectes en les sèries _Dystopia_ (1994-1995) i _Plasmorphica_ (1996). En ambdues, desapareix qualsevol tret característic diferenciador, la qual cosa origina una certa claustrofòbia a l'espectador. Els seus projectes, propers a la **biotecnologia** i l'**enginyeria genètica** marquen les noves tendències en imatge digital.

#### Festivals internacionals

<div class="destacat"><markdown>
El 1989, la _World Wide Web_ _(WWW)_, dissenyada per **Tim Berners-Lee**, feia els seus primers passos. L'accés a internet propiciava, entre d'altres coses, la creació de fòrums sobre art i disseny. Era un sistema excel·lent per a compartir i debatre coneixements sobre l'art computacional.
</markdown></div>

Es complementava la important tasca d'altres fòrums internacionals, com l'[**Ars** **Electronica**](https://ars.electronica.art/news/), esdeveniment que se celebra des de 1979 a Linz (Àustria). El prestigiós festival, considerat un dels més influents del món, presenta cada tardor les propostes més innovadores relacionades amb l'art, la tecnologia i la societat. Des de 1987, atorga el premi més important en _media art_: el [**Prix Ars Electronica**](http://archive.aec.at/prix/). També organitza exposicions a la seva seu, l'Ars Alectronica Center, on s'exhibeixen tant clàssics de l'art computacional com les noves tendències.

Als Estats Units d'Amèrica, l'[**ACM SIGGRAPH**](https://www.siggraph.org/) es va configurar el 1974 com un petit grup de suport per a donar a conèixer les noves disciplines generades després de la incursió dels ordinadors en la nostra societat. Les seves activitats se centren en la seva conferència anual internacional d'infografia (computació gràfica), però també s'ha hagut de diversificar al llarg dels anys: ha comissariat i desenvolupat diverses exhibicions, formant nous creadors i apostant per la col·laboració per al desenvolupament de gràfics computacionals i tècniques interactives.

Des de 1988, se celebra la **Transmediale**, festival d'art i cultura digital de Berlín. En els seus inicis es va donar a conèixer com a VideoFilmFest, esdeveniment patrocinat per la Berlinale. Els seus canvis en la línia de treball (des del vídeo, passant pel multimèdia o el _software art_) reflecteixen l'evolució de la tecnologia i la seva repercussió en la nostra societat.

Els tres esdeveniments són pioners en el seu camp. En els seus inicis van ser àgores de la creació relacionada amb els ordinadors, però en l'actualitat competeixen amb molts altres disseminats per tot el món: des del [**Sònar**](https://sonar.es/) al [**MUTEK**](http://www.mutek.org/en/), passant per **[ZERO](http://zero1.org/)**. En tot cas, cal reconèixer el seu mèrit a l'hora d'impulsar tant el desenvolupament com el reconeixement de les noves metodologies i estètiques a les acaballes del segle XX.

### Net.art

La dècada dels anys noranta es va convertir en una **època de transició** en l'art computacional: les exposicions seguien sense oferir els resultats esperats per galeries i museus. La _World Wide Web_ feia els seus primers passos públics el 1994: Netscape presentava el seu primer navegador comercial, la qual cosa va obrir noves possibilitats de comunicació fora dels àmbits científics o acadèmics, encara que el seu aspecte estètic inicial no resultava convincent ni atractiu. Les pàgines web i el correu electrònic es van configurar com a forts transmissors de conceptes i àgores d'artistes. Aquest intercanvi d'idees va oferir a totes les pràctiques creatives (digitals o no) fòrums d'expressió oberts i fructífers en una fase en què es dubtava de:

* El grau d'acceptació de la www per part de l'usuari.
* Les possibilitats reals de l'hipertext, basat en els plantejaments exposats en els anys quaranta per **Vannevar Bush** i en els cinquanta per **Ted Nelson**. La narració no lineal s'havia experimentat en obres literàries com _Rayuela_, de **Julio Cortázar** (1963), però aquesta característica, sumada a la vinculació de cada document digital, obligava a realitzar una important tasca d'aprenentatge i assimilació del nou sistema.

#### Crear per a la xarxa

<div class="destacat"><markdown>
El terme **_net.art_** o art d'internet fa referència a totes aquelles peces creades exclusivament per a la xarxa.
</markdown></div>

>\[…\] explotant el seu potencial de comunicació i interacció amb l'usuari i la seva capacitat per crear continguts a partir d'estructures complexes que enllacen imatges, textos i sons. Són treballs que utilitzen simultàniament el potencial de la xarxa com a espai d'exposició i com a mitjà de creació.
>
><cite>L. Cilleruelo, L. B. Ballarín (2005). _NET.ART. Prácticas estéticas y políticas en la Red_ (pàg. 7) \[en línia\].https://www.academia.edu/9917780/NET.ART.\_Pr%C3%A1cticas\_est%C3%A9ticas\_y\_pol%C3%ADticas\_en\_la\_Red.</cite>

<div class="destacat"><markdown>
Els creadors computacionals es van apropiar del mitjà ràpidament, aportant grans dosis d'innovació i un alt nivell crític. S'obrien, entre d'altres opcions, tal com destaca Wolf Lieser, la possibilitat de presentar al públic idees i treballs sense la mediació de comissaris, galeries o museus (Lieser i altres, 2010).
</markdown></div>

L'espectador podia ser part activa de les propostes, aspecte que estudiarem en l'apartat «Orígens de l'art interactiu». Recordem que sorgeix en una època en què el terme _ciberespai_, creat per William Gibson pel _seu Neuromancer_, es va expandir fora de l'àmbit de la ciència ficció en nombrosos textos, com si es tractés de la gran panacea tecnològica:

>El ciberespai. Una al·lucinació consensual experimentada diàriament per bilions d'operadors legítims, a totes les nacions.
>
><cite>W. Gibson (2006). _Neuromante_. Barcelona: Minotauro.</cite>

Un dels pioners, el creador eslovè **Vuk Ćosić**, li va assignar el nom de manera casual el 1995:

>Vaig rebre un correu electrònic anònim, el text del qual resultava il·legible per una incompatibilitat de programari. Entre indesxifrables caràcters ASCII, l'únic fragment que tenia sentit era net.art. Immediatament vaig saber que la xarxa m'havia trobat un nom per a definir el que estava fent.
>
><cite>R. Bosco, S. Caldana (2016, 13 de febrer). «1995. La historia produce sus propias leyendas» \[en línia\]. _El Arte en la Edad del Silicio_. \[Data de consulta: 30 de maig de 2019\]. [https://arteedadsilicio.com/1995-2/](https://arteedadsilicio.com/1995-2/).</cite>

<div class="extra"><markdown>
**Vuk Ćosić**

Pioner del net.art, [Vuk Ćosić](http://www.ljudmila.org/~vuk/) va trencar els esquemes amb _Net.art per se_ (1996), pàgina web que imita a la de la CNN, però mitjançant els seus enllaços condueix a altres pàgines de contingut artístic. El seu treball digital, en la línia de l'apropiacionisme de Duchamp, va participar en la **Docmunenta X** (1997) copiant la web oficial en el seu propi domini. Cofundador de diverses llistes de correu com **Nettime** o **Syndicate**, també destaca en el desenvolupament de peces d'**ASCII art**, creades amb caràcters, apropant-se a la tecnologia **_low tech_** com a protesta pel que fa al gran desenvolupament de la tecnologia gràfica.

![Figura 29](@attachment/uoc/programacio_disseny_arts/422_29.jpg)

<cite>Figura 29. _Net.art per se_ (1996)<br><small>Font: https://theinfluencers.org/vuk-cosic/video/2</small></cite>

![Figura 30](@attachment/uoc/programacio_disseny_arts/422_30.jpg)

<cite>Figura 30. _Deep ASCII_ (1998)<br><small>Font: http://www.e-arhiv.org/diva/cache/420\_22\_08VukCosicDeepASCIIc.jpg</small></cite>

A continuació els enllaços de la seva intervenció a _The Influencers_ (2006):

* [Vuk Ćosić. Part 1](https://theinfluencers.org/vuk-cosic/video/1)
* [Vuk Ćosić. Part 2](https://theinfluencers.org/vuk-cosic/video/2)
</markdown></div>

A més de Ćosić, altres creadors de l'Europa de l'Est, com **Alexei Shulgin** i **Olia Lialina**, troben una eina ideal de transformació en una societat en trànsit del socialisme al capitalisme. Un altre factor decisiu per a aquest impuls de la creació digital a la zona és que, després de la caiguda del Mur, l'Open Society Institute, de George Soros, va fundar centres i _medialabs_ a la zona: el **Ljudmila Art and Science Laboratory** o el **Ljubljana Digital Media Lab** són solament dos dels exemples més significatius.

<div class="extra"><markdown>
**Olia Lialina**

La polifacètica [**Olia Lialina**](http://art.teleportacia.org/) va crear _[My Boyfriend Came Back From The War](http://www.teleportacia.org/war/war2.htm)_ (1996), peça molt influenciada pels seus estudis de crítica cinematogràfica i que constitueix una innovadora narració en què explica la història de dos amants que es reuneixen després d'una guerra. La peça, no lineal, es difon per mitjà de diversos fils que es van descomponent com a peces d'un mosaic en la pantalla (Lialina, Himmelsbach i Connor, 2016). En els seus projectes més recents, _Digital Folklore_ (2009) (Buerger, Espenschied i Lialina, 2009) o _Summer_ (2013) –gif animat els fotogrames del qual estan allotjats a diferents webs–, segueix utilitzant elements característics de la Web 1.0 amb un rerefons d'alt nivell crític.

![Figura 31](@attachment/uoc/programacio_disseny_arts/422_31.jpg)

<cite>Figura 31. _My Boyfriend Came Back From The War_ (1996), d'Olia Lialina<br><small>Font: http://www.mu.nl/images/pictures/olia-lialina-20-years-of-my-boyfriend-came-back-from-the-war-large-318939.jpg</small></cite>

![Figura 32](@attachment/uoc/programacio_disseny_arts/422_32.jpg)

<cite>Figura 32. _Summer_ (2013), d'Olia Lialina<br><small>Font: http://highlike.org/media/2014/11/Olia-Lialina-Summer-copy.jpg</small></cite>

A l'enllaç [_20 anys de My Boyfriend Came Back From The War_](https://vimeo.com/157143069) podeu veure l'exposició retrospectiva, MU Artspace (2016).
</markdown></div>

**David Ross**, en aquells anys director del Museu d'Art Modern de Sant Francisco, destaca diversos aspectes específics sobre aquest tipus de creacions a [_21 Distinctive Qualities of Net.Art_](http://switch.sjsu.edu/web/v5n1/ross/index.html), entre les quals sobresurten les següents:

* La rellevància dels processos creatius.
* El caràcter global del mitjà i de les obres.
* El lliure accés a les obres i a la documentació sobre les mateixes.
* La importància de la intervenció de l'usuari.
* La relació entre l'art i la comunicació.

<div class="destacat"><markdown>
Els artistes de l'etapa inicial s'endinsen, des de punts de vista heterogenis, en línies de treball que fan referència a les oportunitats que ofereix el treball a la xarxa, entre les quals sobresurten: la identitat, la crítica a la tecnologia, la no linealitat, l'autoreferencialitat, l'autoria, l'activisme i la creació cooperativa. Però també cal destacar la influència que tenen altres disciplines, com ara la fotografia, el disseny gràfic o la programació en el seu desenvolupament.
</markdown></div>

L'aparició de fòrums de trobada o llistes de correu de difusió artística com [**Rizhome.org**](https://rhizome.org/), **Syndicate**, **Nettime**, la galeria **äda ‘web** o les propostes des d'espais com, per exemple, **irational.org** afavoreixen la **difusió de l'essència del _net.art_**, en què es combinen tant les opinions creatives com les activistes. Les propostes que exploren les possibilitats de la xarxa en un entorn expectant davant d'aquestes noves formes d'expressió digital trepitgen fort en esdeveniments de prestigi com la **Documenta X** de Kassel (1997), la **Biennal del Whitney Musem** (2000) i la **49 Biennal de Venècia** (2001). En paraules de Mark Tribe, fundador de Rizhome:

>Rhizome va ser, en primer lloc, una simple llista de correu electrònic que basava el seu contingut en la intersecció que formen l'art i els nous mitjans \[…\]. Aquesta estructura simple estava destinada a tornar del revés les jerarquies de les revistes d'art i els museus en què els treballs d'uns quants es presenten a una gran majoria. Jo, en canvi, opinava que \[…\] havia de ser una comunitat que assentés les seves arrels en una base molt àmplia: una xarxa organitzada de forma horitzontal de molts per a molts.
>
><cite>W. Lieser, T. Baumgartel, W. Herzogenrath, H. Dehlinger, T. Edler (2010). _The World of Digital Art_ (pàg. 158). Berlín: Langenscheidt Publishing Group.</cite>

![Figura 33](@attachment/uoc/programacio_disseny_arts/422_33.jpg)

<cite>Figura 33. Documenta X<br><small>Font: https://pbs.twimg.com/media/C58EhVeXMAAB4SF.jpg</small></cite>

![Figura 34](@attachment/uoc/programacio_disseny_arts/422_34.jpg)

<cite>Figura 34. Rhizome.<br><small>Font: https://fontsinuse.com/uses/15609/rhizome</small></cite>

![Figura 35](@attachment/uoc/programacio_disseny_arts/422_35.jpg)

<cite>Figura 35. Nettime.<br><small>Font: http://netspecific.net/files/e/6/87/page\_nettime.jpg</small></cite>

Una peça característica de l'època és [**_mouchette.org_**](http://www.mouchette.org/) (1996), que convida l'espectador a interactuar i saber més sobre la protagonista, una jove que diu anomenar-se _Mouchette, viu a Amsterdam, té 13 anys i és artista_. L'entorn ingenu en què es van succeint pantalles amb missatges i imatges sobre problemes d'adolescents i la seva inquietud sobre la sexualitat resulta en algunes ocasions quelcom pertorbador. El projecte, d'autoria anònima, segueix resultant inquietant, encara que es basi en el personatge de la protagonista d'una novel·la de George Bernanos de 1937, que va ser portada al cinema per Robert Bresson el 1967. De fet, va ser la vídua del director la que va amenaçar amb denunciar el projecte poc després de la seva aparició, la qual cosa va comportar que hagués de canviar d'URL i de servidor diverses vegades.

![Figura 36](@attachment/uoc/programacio_disseny_arts/422_36.jpg)

<cite>Figura 36. _Mouchette_ (1996)<br><small>Font: https://en.wikipedia.org/wiki/Mouchette.org#/media/File:Mouchette.png</small></cite>

[**Julia Scher**](http://www.juliascher.com/) i [**Heath Bunting**](http://irational.org/cgi-bin/cv2/temp.pl) són dos dels pioners interessats a mostrar una visió d'alt nivell crític sobre la **incidència dels sistemes de control electrònic en la ciutadania**, la primera centrant-se a mostrar els perills i les ideologies subjacents en aquests i, el segon, demostrant la fragilitat de la tecnologia «quotidiana».

A **_Welcome to Securityland_** (1995), **Sher** sotmet l'usuari a un tenaç i extravagant interrogatori aparentment inconnex que oculta el seu veritable afany de provocar confusió a l'espectador. La incessant successió d'imatges i textos directes, precisos i provocatius són realment una subtil invitació de la creadora per a fomentar una consciència crítica sobre el control i la vigilància de l'usuari-espectador. La seva cara amable sota la disfressa de policia no és més que un reclam per a intentar despertar la crítica i la reprovació sobre el que realment està succeint al nostre voltant: **la imposició del domini i l'autoritat** per mitjà de les noves tecnologies amb l'objectiu d'obtenir el màxim benefici sobre el reconeixement, l'observació i la censura (González Díaz, 2013). Per la seva banda, **CCTV (****_World Wide Watch_****)** (1997), de **Bunting**, permet informar a la policia sobre incidències que es puguin arribar a produir a diferents llocs del planeta, que són registrades gràcies a les transmissions realitzades des de diferents càmeres web. D'aquesta manera, l'espectador es converteix en un totpoderós espia-censor (González Díaz, 2013).

![Figura 37](@attachment/uoc/programacio_disseny_arts/422_37.jpg)

<cite>Figura 37. _Welcome to Securityland_ (1995), de Julia Scher<br><small>Font: https://present5.com/presentation/19584f337c97888c4550f23b8f6a6fc6/image-8.jpg</small></cite>

![Figura 38](@attachment/uoc/programacio_disseny_arts/422_38.jpg)

<cite>Figura 38. CCTV (_World Wide Watch_) (1997), de Heath Bunting<br><small>Font: https://present5.com/presentation/19584f337c97888c4550f23b8f6a6fc6/image-8.jpg</small></cite>

<div class="destacat"><markdown>
La postura avantguardista inicial del _net.art_ xoca de seguida amb la seva **fragilitat**: alguns dels grans projectes «moren» ràpidament (_Aleph_) o són absorbits per part de les institucions (äda ‘web per part del Walker Art Center, o Rhizome, pel New Museum de Nova York).
</markdown></div>

>Parlar sobre les pràctiques artístiques de la xarxa significa enfrontar-nos a la breu història d'«una contradicció». El _net.art_, al començament concebut com un camp social alternatiu en què «l'art i la vida diària estaven fusionats» i que promovia un esperit antiinstitucional, ja forma part de l'art de les institucions.
>
><cite>R. Zafra Alcaraz (1999). «El instante invisible del net.art» \[en línia\]. [https://idus.us.es/xmlui/bitstream/handle/11441/26538/El%20instante%20invisible%20del%20net.pdf?sequence=1&isAllowed=y](https://idus.us.es/xmlui/bitstream/handle/11441/26538/El%20instante%20invisible%20del%20net.pdf?sequence=1&isAllowed=y).</cite>

#### Creació digital i resistència

<div class="destacat"><markdown>
Durant la dècada de 1990, un ampli sector artístic va reclamar i organitzar un seriós intent de **pensar socialment internet** des de postures properes a l'activisme polític.
</markdown></div>

**Martín Prada** manté que aquestes propostes no són més que un **ús artístic** del mitjà associades a l'evolució natural de l'art conceptual més compromès que apunta a forjar una consciència crítica sobre les característiques i possibilitats del propi mitjà (Prada, 2012). Comencen a ser recurrents en l'àmbit de la creació les interseccions que exposa **Laura Baigorri** a _Recapitulando: modelos de artivismo_ _(1994-2003)_:

* L'**«artivisme»**, neologisme fruit de la fusió de les paraules _art_ i _activisme_ aplicat a les obres **que participen d'ambdós interessos**. Quan el terme s'aplica a treballs i artistes clàssics de l'_net.art_, en l'actualitat es pot referir a obres que no tenen res a veure amb internet.
* El **«hacktivisme»**, neologisme que sorgeix d'associar els termes _hacking_ i _activisme_. El _hacker_ intenta trencar els límits en productes, aparells i serveis digitals d'informàtica o comunicacions amb l'objectiu de compartir tota la informació. La seva motivació solament obeeix a interessos de caràcter **social** i **polític**.
* De la fusió dels conceptes anteriors sorgeix l'**«art.hacktivisme»**. Aquesta pràctica es basa en accions de sabotatge orientades a la denúncia de la vocació primigènia de la xarxa que intenta abastar totes les **convencions artístiques tradicionals**: drets d'autor, objectualització i la seva conseqüent comercialització.

Dins del binomi entre art i activisme, l'evolució dels conceptes lligats al control i la vigilància tecnològics ajuden a perfilar nous valors i nocions lligats al ciberactivisme de l'època.

<div class="destacat"><markdown>
Des d'aquesta posició, s'esgrimeix el **principi de llibertat** com a força de rebot, invenció i transformació global des de baix, tal com defensen **Reverse Engineering Freedom** (2003), **Geert Lovink** i **Florian Schneider** (Lovink, 2004).
</markdown></div>

Les primeres estratègies de l'**artivisme** **en línia** reprenen l'essència de les accions de l'activisme pro drets fonamentals dels anys seixanta. Cada acció (_virtual-sit-in_) intenta recaptar el major nombre de mostres de suport (**manifestants digitals**) en un temps determinat. En els anys d'apogeu del _net.art_ van ser innombrables les protestes i vagues digitals (_net.strikes_), però ens centrarem en la tasca desenvolupada per grups com ara [**Critical Art Ensemble** **(CAE)**](http://critical-art.net/) i [**The Electronic Disturbance Theater** **(EDT)**](http://www.thing.net/~rdom/ecd/ecd.html). La seva promoció de la desobediència civil electrònica (DCE) ofereix a certes minories espais alternatius de poder per mitjà de la xarxa.

El col·lectiu multidisciplinari Critical Art Ensemble (CAE), format per **Steve Barnes**, **Dorian Burr**, **Steve Kurtz**, **Hope Kurtz** i **Beverly Schlee**, encunya el 1994 els principis de la desobediència civil electrònica (DCE). Proposa, entre d'altres coses, l'ús de la tàctica de l'amenaça simbòlica a partir del bloqueig o la seguda virtual. L'acció més representativa d'aquesta modalitat de **cibersabotatge** descobreix a la xarxa el vehicle perfecte que facilita una postura global prodemocràtica. Basa les seves tàctiques en una peculiar concepció dels **principis de desobediència civil** exposats per **Henry David Thoreau** al segle XIX (Thoreau, 2016), en un intent de generar una àmplia crida contra l'**adormiment** **de les consciències** i denuncia la manca de responsabilitat individual imperant. El CAE suggereix la idea d'un flux descentralitzat de **microorganitzacions diferenciades** –a què denomina _cèl·lules_–, destinades a produir diversos corrents i trajectòries per a obtenir un canvi de política directe (Critical Art Ensemble, 2006). Encoratja el bloqueig del flux d'informació dirigit a alterar qualsevol tipus d'institució (militar, corporativa o governamental), suggeriment que no ha estat mai del grat dels activistes més tradicionals, per la qual cosa ha rebut crítiques ferotges.

En l'actualitat, segueix investigant sobre les interseccions entre l'art, la ciència, la tecnologia, la política i la teoria crítica. Les seves últimes intervencions segueixen fomentant les seves **estratègies tàctiques** (_tactical media_) i aposta per la utilització eficaç de les estratègies de simulació –desenvolupades anteriorment per la CIA o l'FBI– dotant-les de nous mètodes i mitjans de recerca, i també de sistemes d'obtenció d'informació i reclutament de col·laboradors (González Díaz, 2013).

<div class="extra"><markdown>
**The Electronic Disturbance Theater (EDT)**

Grup multidisciplinari format, entre d'altres, per **Ricardo Dominguez**, excomponent de CAE, que intenta aprofitar qualsevol bretxa oberta en el ciberespai per a posar en marxa accions que mostrin la **dissensió entre la multitud i el poder**. Les seves operacions _hacktivistes_ es caracteritzen per dirigir-se contra governs i multinacionals mitjançant accions cibersubversives perfectament planificades i coordinades. Amb aquest objectiu desenvolupa eines per a dur a terme segudes virtuals (_virtual-sit-in_) i difon les seves accions en espais interconnectats amb la creació artística.

Com a denúncia per l'assassinat de quaranta-cinc indígenes a Chiapas a mans d'un grup paramilitar, EDT va desenvolupar el 18 de gener una ciberprotesta per mitjà de **«Zapatista Floodnet»**, dirigida contra cinc webs de les corporacions financeres més influents del país asteca. La intenció era promoure noves vies de discussió política no supeditades als mitjans de comunicació en mans del poder (González Díaz, 2013).

Després de les seves impactants accions a la xarxa, EDC va ser convidada a l'edició d'**Ars** **Electronica** titulada «Infowar» (juny de 1998). El tema de l'edició no és casual: intenta projectar llum sobre les estratègies i possibilitats del **conflicte assistit per ordinador**, que comprèn des de la guerra del Golf a les activitats ciberguerrilleres i l'avaluació de la lògica interna de la societat de la informació en el marc de la baralla. Ricardo Domínguez i el seu grup van presentar una altra acció electrònica directa titulada «SWARM», constituïda com una àmplia resposta artística simbòlica, que interromp el servei de webs relacionades amb institucions contràries a la lluita zapatista a Chiapas.

En la seva nova etapa, [**Electronic Disturbance Theater 2.0/b.a.n.g. lab**](http://exhibits.haverford.edu/thewallinourheads/artists/electronic-disturbance-theater-2-0b-a-n-g-lab/), el seu interès sobre les noves polítiques migratòries són la base de «Nadie es ilegal» (2001), campanya contra la web de Lufthansa com a protesta a la seva participació en la devolució de sol·licitants d'asil, i de [«Transborder Immigrant Tool»](https://post.thing.net/node/304) (2009), proposta que explora els límits de la geolocalització amb finalitats polítiques i socials per a facilitar que els emigrants il·legals s'orientin a la frontera entre Mèxic i EUA amb telèfons mòbils de segona mà adaptats per a guiar-los, acompanyar-los i calmar la seva ansietat.

![Figura 39](@attachment/uoc/programacio_disseny_arts/423_39.jpg)

<cite>Figura 39. «Floodnet» (1998), acció d'EDT.<br><small>Font: https://en.wikipedia.org/wiki/Electronic_Disturbance_Theater#/media/File:Screenshot_of_Electronic_Disturbance_Theater_Floodnet_from_September_9th_1998.jpg</small></cite>

![Figura 40](@attachment/uoc/programacio_disseny_arts/423_40.jpg)

<cite>Figura 40. Ricardo Dominguez en una de les intervencions de «Transborder Immigrant Tool».<br><small>Font: https://hyperallergic.com/wp-content/uploads/2012/07/TBTPerformanceIntervention2008Border.jpg</small></cite>
</markdown></div>

La subversió també és la metodologia utilitzada per **RTMark (o ®TMark)** i [**The Yes Men**](https://theyesmen.org/). En els projectes de tots dos col·lectius s'albira una constant referència a la **_culture jamming_** (o **interferència cultural**), basada en la idea de Roland Barthes: alterar el codi és més subversiu que destruir-lo.

<div class="destacat"><markdown>
**RTMark** ha utilitzat el sabotatge amb finalitats socials des de mitjan anys noranta, centrant-se en les denúncies realitzades per treballadors des de qualsevol lloc del món.
</markdown></div>

Les seves propostes no solament es realitzen a la xarxa, també creen simulacions de pàgines amb una àmplia repercussió mediàtica –com la presentació d'un carrusel de pàgines trobades a internet en la Biennal del Museu Whitney de 2000, al més pur estil _ready made_ de Duchamp–, que realitzen accions cridaneres de sabotatge de caràcter local. Combinen ambdues estratègies amb la impartició de tècniques iròniques de combat per a enfrontar-se al poder. Qualsevol pot promoure una reivindicació concreta: RTMark dona publicitat a la seva pàgina web i s'encarrega de buscar el finançament per a dur-la a terme en accions d'àmplia repercussió mediàtica. Quan actua com una corporació, pretén generar interès per aquests assumptes des d'una perspectiva irònica, sistema que han batejat com a **_tactical embarrassment_** (**avergonyiment tàctic**), terme amb el qual defineixen metodologies que deixen en evidència polítics, companyies i institucions davant els mitjans de comunicació.

<div class="destacat"><markdown>
Una actitud similar és la utilitzada per **The Yes Men**, col·lectiu que ofereix ajuda a associacions progressistes per a dur a terme projectes de caràcter artivista brindant-los el seu suport, els seus coneixements i una experimentada plataforma de difusió. Les seves propostes d'apropiació properes al _tactical media_ donen a conèixer els veritables interessos i funcionament d'entitats o empreses.
</markdown></div>

<div class="extra"><markdown>
**Gwbush.com**

Juntament amb RTMark, van dissenyar el sabotatge contra la campanya presidencial de George W. Bush el 2000, per la qual van crear la irònica **Gwbush.com**, molt similar a l'original, en què ridiculitzaven institucions com ara l'Organització Mundial del Comerç (OMC). Després de ser convidats a participar en una conferència a Salzburg, van denunciar públicament la impunitat de la Union Carbide en el desastre de Bhopal, gràcies al fet que un dels seus components es va fer passar per portaveu de la companyia en una entrevista a la BBC.
</markdown></div>

Les seves accions han propiciat que batalles judicials com ara l'encapçalada pel grup artivista suís [**etoy**](http://www.etoy.com/) obtinguin un impacte mediàtic i social més que notable. El 1995, el grup va registrar el seu domini a internet com a etoy.com, dos anys abans que el novembre de 1997 l'empresa de joguines eToys (fundada el 1996) registrés el seu.

>El plet es perllonga fins a les acaballes de 1999, temps en què es mobilitza per mitjà de la xarxa i rep el suport de simpatitzants, intel·lectuals i institucions culturals, aconseguint, entre d'altres coses, col·lapsar juntament amb milers d'internautes la botiga virtual d'eToys i baixar la seva cotització en borsa. L'acció, batejada com a **«ToyWar»**, es va veure recompensada quan Etoy va guanyar el recurs definitiu, la qual cosa li va permetre conservar el seu nom i el seu domini. Aquella victòria va significar abans que res un ampli debat sobre el control de les dades privades en l'àmbit de la cultura digital.
>
><cite>P. González Díaz (2013). _Prácticas artísticas digitales y tecnologías de control y vigilancia (2001-2010)_ (tesi doctoral, pàg. 140). Barcelona: Universitat de Barcelona.</cite>

![Figura 41](@attachment/uoc/programacio_disseny_arts/423_41.jpg)

<cite>Figura 41. RTmark<br><small>Font: https://artexposure.files.wordpress.com/2010/07/rtmark.jpg?w=490&h=289</small></cite>

![Figura 42](@attachment/uoc/programacio_disseny_arts/423_42.jpg)

<cite>Figura 42. GWBush.com (1999), The Yes Men i RTMark<br><small>Font: https://d1v7jayx2s9clc.cloudfront.net/user/pages/gatt-org/GWbush.png</small></cite>

![Figura 43](@attachment/uoc/programacio_disseny_arts/423_43.jpg)

<cite>Figura 43. etoy<br><small>Font: http://history.etoy.com/certificate-images/148ML.jpg</small></cite>

Molts dels treballs descrits en aquest subapartat han estat **víctimes de les normes d'internet**: o no han estat actualitzats o han desaparegut, motiu pel qual s'han convertit en apreciades peces d'arxiu de col·leccions o museus.

#### Conseqüències de l'11-S en la creació digital

El dimarts 11 de setembre de 2001, dinou membres d'Al-Qaeda van segrestar quatre avions de passatgers per a atemptar contra quatre punts clau de l'economia i la política nord-americanes. Per primera vegada des de 1812, els Estats Units d'Amèrica patien un atac al seu propi territori. Més que l'impacte produït per l'elevat nombre de morts, el món va quedar esglaiat, atès que va presenciar els fets «en directe» per mitjà de la televisió. Durant hores, la CNN va emetre reiteradament les imatges dels atacs terroristes, de la caiguda dels dos edificis i del dispositiu d'emergència seguint les mateixes pautes televisives utilitzades en la [guerra del Golf (1990-1991)](https://cnnespanol.cnn.com/video/asi-fue-la-cobertura-11s-atentado-cnn-montero-medios-terrorismo-torres-gemelas-pkg/).

Aquelles imatges, que van donar la volta al món, formen part d'una obra de _net.art_ de l'artista d'origen alemany [**Wolfgang Staehle**](http://www.wolfgangstaehle.info/index.php). Cinc dies abans havia inaugurat la mostra **«2001»** a la Postmasters Gallery, per la qual havia concebut **«Untitled 2001»**, una instal·lació basada en la projecció continua de les imatges registrades per tres càmeres web dirigides cap a sengles paisatges característics de la ciutat dels gratacels, que incloïa la vista de Manhattan coronada per les Torres Bessones. La càmera web va capturar les imatges de l'atemptat, les va projectar a la galeria i les va emmagatzemar en el disc dur de l'ordinador. El que havia estat projectat com una instal·lació d'una bellesa estètica rellevant, es va transformar en un important document històric de marcat caràcter poètic (Uncovering Ctrl, 2011a).

La resposta internacional inicial contra els atacs va ser ràpida i unànime. La comunitat artística es va cohesionar immediatament per a condemnar els fets i va aprofitar les possibilitats de comunicació de la xarxa: precipitadament, es van publicar pàgines d'homenatge i reflexió sobre l'ocorregut. Rhizome –una de les organitzacions més actives del moment– homenatjava des del dia 12 l'escultor Michael Richards, víctima de l'atac en una de les torres. De seguida, van sorgir treballs de marcat caràcter intimista en què afloraven sentiments subjectius creats en les jornades immediatament posteriors als atacs. Bona part relacionava els atemptats amb determinats fets històrics o amb desgraciades vivències personals, tal com succeeix a _September 11th_, d'**Eryk Salvaggio**, obra que reformula en caràcters ASCII el xoc de l'avió contra la Torre Sud. Vint pàgines web reprodueixen la seqüència amb la llista oficial de morts.

![Figura 44](@attachment/uoc/programacio_disseny_arts/424_44.jpg)

<cite>Figura 44. «Untitled 2001» (2001), de Wolfgang Staehle.<br><small>Font: http://www.criticarte.com/Images/Images2002/WolfgangStaehle.VideoStill.jpg</small></cite>

![Figura 45](@attachment/uoc/programacio_disseny_arts/424_45.jpg)

<cite>Figura 45. _September 11th_ (2001), d'Eryk Salvaggio.<br><small>Font: http://www.criticarte.com/Images/Images2002/EricSalvaggio.Sept11.2.jpg</small></cite>

Els net.artistes novaiorquesos van ser els primers que van adoptar una postura franca davant les conseqüències del desastre. **Andy Deck** va plantejar amb franquesa i valentia si els atemptats eren fruit de la bel·ligerant política del seu país a [_War Without Winners_](http://artcontext.org/crit/essays/www/), publicada una setmana després dels atemptats. **Hans Bernhard**, antic membre del col·lectiu Etoy, va oferir el seu punt de vista _a_ [_Attack on_ _Democrazy_](http://www.m-cult.org/read_me/text/hans_interview.htm). En tots dos casos, la passió i la sensibilitat donen pas a anàlisis més profundes sobre la implicació directa de l'Estat en la transformació i la devaluació de la seva imatge després de la intervenció a Afganistan i l'Iraq, i la seva implicació en la guerra dels Balcans.

Una de les iniciatives més arriscades va ser la proposta d'**Alex Galloway**. Pocs dies després dels atemptats terroristes, va llançar mitjançant el Radical Software Group (RSG) –col·lectiu internacional de net.artistes– [_Carnivore Project_](http://r-s-g.org/carnivore/) (octubre de 2011). Aquesta eina de codi obert es basa en el programari Carnivore, desenvolupat el 1999 per l'FBI i denunciat públicament pel _Wall Street Journal_ el juliol de 2000, l'objectiu del qual era registrar els continguts dels missatges electrònics i les dades del tràfic a internet (Keenan, 2005, pàg. 73-75).

>_Carnivore Project_ detecta sense ser detectat els blocs d'informació que componen els missatges de correu rebuts i enviats, els textos i imatges enviats per mitjà d'internet i les pàgines web visitades pels usuaris. \[…\] RSG empra les dades com a matèria primera per a les interfícies artístiques.
>
><cite>Tribe, R. Jana, U. Grosenick (2006). _Arte y nuevas tecnologías_ (pàg. 78-79). Colònia: Taschen.</cite>

Entre els treballs aportats inicialment, destaquem el projecte **_World Wall_** **Painters** d'**Àrea3**, col·lectiu ja desaparegut d'artistes residents a Barcelona. Amb la mateixa ironia que Jasper Johns va posar en la seva bandera, els usuaris-pintors digitals del projecte dibuixaven sense descans les dels països a què pertanyen, detall descobert per mitjà de les direccions IP de l'ordinador que van utilitzar. El resultat és un _collage_ que apunta a la utopia democràtica d'internet i a la realitat encara vigent de l'accés a la informació i les noves tecnologies.

![Figura 46](@attachment/uoc/programacio_disseny_arts/424_46.jpg)

<cite>Figura 46. Introducció de _Carnivore Project_ (2001), d'RSG.<br><small>Font: http://megandriscoll.net/wp-content/uploads/2018/04/ch5\_Carn-277×300.png</small></cite>

![Figura 47](@attachment/uoc/programacio_disseny_arts/424_47.jpg)

<cite>Figura 47. _World Wall Painters_ (2001), d'Àrea3.<br><small>Font: https://arteedadsilicio.files.wordpress.com/2016/02/2002-area3-world-wall-painters-2.jpg?w=800</small></cite>

<div class="extra"><markdown>
**_Tracking Transience. The Orwell Project_**

Un dels exemples que respon a l'ambient viciat i obsessiu que es va imposar després dels atemptats és [_Tracking Transience. The Orwell Project_](http://elahi.gmu.edu/), de **Hasan M. Elahi**. Artista i docent nord-americà d'origen bengalí, va fer un gir crucial en la seva trajectòria creativa després de ser detingut injustament el 2002 per l'FBI a l'aeroport de Detroit quan baixava d'un vol procedent dels Països Baixos. Els agents li van confirmar que havien rebut una denúncia acusant-lo d'emmagatzemar explosius a Florida. Després de ser interrogat durant el seu arrest, es van cerciorar que no era la persona que buscaven (Uncovering Ctrl, 2011b). La seva traumàtica experiència va incidir de tal manera en la seva vida que els seus projectes es van sustentar des de llavors en la irònica i contestatària idea que el va obligar a fer pública tota la seva vida quotidiana. Diàriament registra i puja a la xarxa imatges de les seves activitats quotidianes. Visitant la pàgina del seu projecte, l'espectador, a més d'accedir a imatges sobre els seus quefers quotidians, pot comprovar les coordenades exactes del lloc exacte en què està. Aquesta peculiaritat ha convertit el seu projecte vital en un dels casos d'estudi més coneguts sobre la **contravigilància** o **_surveillance_**, moviment consistent a **vigilar el vigilant**. Una altra de les seves vessants consisteix a evidenciar la seva presència pràctica.
</markdown></div>

Aproximadament un mes després dels atacs, EUA, juntament amb una coalició internacional, van envair Afganistan. El gran desplegament va tornar a ser focus de crítiques dels artistes computacionals internacionals. Alguns net.artistes van recórrer als mecanismes dels jocs de guerra, el major èxit de la indústria dels videojocs, per a ironitzar sobre el seu missatge i deixar al descobert les fallades d'una societat tecnificada basada en la violència i la hipocresia (Bosco, 2001).

### Canvi de cicle: creació en l'era del big data

<div class="destacat"><markdown>
Les pràctiques artístiques digitals del nou segle van sorgir marcades per importants esdeveniments, tant en l'àmbit tecnològic i social com en el polític. Alguns d'aquests –com la guerra del Golf o els atemptats de l'11-S– imprimiran el caràcter de les noves expressions creatives que qüestionen els efectes negatius de la seguretat col·lectiva enfront de les llibertats individuals.
</markdown></div>

Després de la implantació globalitzada de la **Web 2.0**, el posicionament dels telèfons intel·ligents ha determinat **importants canvis en la societat de la informació**. La creació s'apropia de mecanismes i metodologies que caracteritzen una època d'expansió dels dispositius ambivalents mitjançant els quals es potencia la intercomunicació, però afavoreix –entre d'altres contrapartides– la possibilitat de seguiment i estudi per part d'empreses i estaments oficials.

Els canvis tecnològics en què estem immersos han modificat els nostres hàbits socials i culturals d'una manera més profunda del que el mateix McLuhan hagués pogut imaginar. Percebem bona part de les nostres vivències per mitjà d'una pantalla de televisió, ordinador o mòbil, situació que ens ha facilitat la realització de nombroses tasques quotidianes, però ens ha convertit en **esclaus tecnològics desbordats** per quantitats ingents de continguts de dubtosa qualitat i origen, aspecte que incideix directament en l'àmbit de les arts:

>La reflexió de Walter Benjamin sobre el tema de la reproductibilitat i l'aura de l'original ara està tancada en un bucle sense fi: l'original no existeix, tot és referencial, simulat o sintetitzat partint de materials artístics anteriors.
>
><cite>J. Rekalde (2001). «De la ilusión del cinematógrafo a la inmersión cibernética». _Universo Fotográfico_ (núm. 4). [https://webs.ucm.es/info/univfoto/num4/rekalde.htm](https://webs.ucm.es/info/univfoto/num4/rekalde.htm).</cite>

#### Fi de la privadesa

Al començament de segle, les circumstàncies van generar un context específic en què l'**ull** **absolut** és el protagonista indiscutible de l'**economia** **del coneixement**, el mateix que **Alvin Toffler** va descriure com el període més impactant des de la Revolució Industrial. Els canvis que ha portat amb si no se circumscriuen únicament a aspectes tecnològics i econòmics, sinó que s'amplien a conceptes polítics i socials a escala global.

<div class="destacat"><markdown>
**Manuel Castells** ho defineix com l'**era** **de la informació**: conseqüència directa de l'important desenvolupament tecnològic que produeix una gran ruptura amb les pautes socials i econòmiques establertes. L'esperit llibertari dels anys seixanta es va arribar a materialitzar amb la creació de noves aplicacions, usos i metes, ampliant l'abast de la innovació tecnològica i diversificant les seves fonts (Castells, 2004). No obstant això, aquell espai públic sense aparents lligams ha estat construït i modelat pels mitjans en el seu propi benefici.
</markdown></div>

Els primers treballs crítics de _net.art_ sobre la vigilància en espais públics, com _CCTV Sabotage_ (1998), de **Heath Bunting** i **Rachel Baker**, posen en dubte l'eficàcia de les càmeres de vídeo, mentre que [_Guide to Closed Circuit Television (CCTV) destruction_](http://www.zemos98.org/paneldecontrol/?p=25) (2001), d'**RTMark**, és molt més radical, ja que ensenya de manera irònica a fer desaparèixer qualsevol tipus de dispositiu de videovigilància. Aquest tipus de propostes donen pas a altres més intimistes, en què es fusionen la crítica i la narració poètica, tal com succeeix en les propostes de [**Jill Magid**](http://www.jillmagid.com/film), en què s'explora la subtil relació de l'individu amb els sistemes de videovigilància.

A _Evidence Locker_ (2004), l'artista es converteix en protagonista del registre del circuit tancat de la televisió de Liverpool, en concomitància amb les autoritats de la ciutat. Durant els trenta-un dies que dura l'experiència, Magid és gravada portant una cridanera gavardina de color vermell. Després de cada registre sol·licita la cinta policial per a la seva posterior edició per mitjà dels formularis oficials creats a aquest efecte, amb la peculiaritat que redacta cada document com si es tractés d'una carta a un amant. En cadascuna d'aquestes expressa els seus sentiments i pensaments. Aquesta peculiar relació epistolar es recopila posteriorment en forma de diari mostrant un retrat íntim de la relació entre la creadora, la policia i la ciutat (Magid, 2004).

![Figura 48](@attachment/uoc/programacio_disseny_arts/432_48.jpg)

<cite>Figura 48. _Evidence Locker_ (2004), de Jil Magid.<br><small>Font: https://blogs.elpais.com/.a/6a00d8341bfb1653ef017c37d1f348970b-pi</small></cite>


<div class="extra"><markdown>
**Jill Magid**

Jill Magid va iniciar la seva carrera com a artista amb la intervenció _Lobby 7_ (1999), executada a l'entrada principal del Massachusetts Institute of Technology (MIT). En aquesta, s'apropia del sistema que projectava en un monitor la informació de les activitats diàries del centre. Substitueix les imatges corporatives per altres enviades des d'una petita càmera, experiència que pretenia crear una nova relació entre el seu cos, l'edifici i les persones que circulaven per aquest mitjançant la tecnologia.

El 2003, va crear la companyia System Azure Security Ornamentation, sota la tutela de la qual decora manualment amb cristalls de bijuteria barats diverses càmeres de seguretat policial d'Amsterdam, ridiculitzant i fent més evidents aquestes eines que el poder vol que romanguin ocultes.

![Figura 49](@attachment/uoc/programacio_disseny_arts/432_49.jpg)

<cite>Figura 49. Acció de _System Azure Security Ornamentation_ (2004), de Jil Magid.<br><small>Font: http://www.jillmagid.com/uploads/images/scaled/slide\_image/302</small></cite>
</markdown></div>

Davant la banalització de l'ús de les càmeres web i l'ensopiment de bona part dels usuaris d'internet, [**0100101110101101.org**](https://0100101110101101.org/) –parella artística italiana formada per **Eva i Franco Mattes**– va realitzar una impactant _performance_: _No Fun_ (2010), que publiquen en una coneguda plataforma de videoxat, Chatroulette, la qual permet a persones de tot el món –de forma anònima i a l'atzar– veure's entre si per mitjà de les seves càmeres web i xatejar. Milers de persones van observar durant hores com una persona es balancejava lentament després de suïcidar-se. L'home penjat era Franco Mattes i l'escena era un muntatge. Totes les interaccions amb la mateixa van ser gravades i recopilades en un vídeo que posteriorment va ser publicat a la xarxa. _No Fun_ recull tot tipus de reaccions: des de la més predictible a la més inaudita, uns riuen creient que és una broma, mentre que uns altres es queden immòbils. Hi ha qui insulta el cadàver i alguns, en una postura cínica i inexplicable, fan fotografies amb els seus telèfons mòbils. Però el més impactant és que de tots els internautes solament un va trucar a la policia. Encara que els creadors solament pretenien crear un experiment en línia, la percepció i el joc entre el **binomi objectivitat-subjectivitat** juguen un paper fonamental.

<div class="destacat"><markdown>
La proliferació de l'ús de les xarxes socials es veu reflectida en un bon nombre de pràctiques artístiques associades a la creixent conscienciació i preocupació de la **incidència que posseeixen sobre la nostra privadesa**.
</markdown></div>

Sobretot, tenint en compte que una bona part dels usuaris perceben l'àmbit digital com si fos real. Davant el biaix de la informació oferta pels mitjans, criden l'atenció les propostes creatives que ajuden a contextualitzar la veritable posició (mercantilista i de vigilància) d'internet. Pocs creadors posseeixen els coneixements i recursos necessaris per a desemmascarar la seva cara oculta. [**Aram Bartholl**](https://arambartholl.com/), [**Evan Roth**](http://www.evan-roth.com/shows/) i [**Jon Rafman**](http://jonrafman.com/) són exemples representatius d'una nova generació de joves creadors i artistes experts familiaritzats amb el maneig i desenvolupament de les eines digitals. Aquesta circumstància els permet experimentar a fons amb les mateixes, oferint una peculiar perspectiva crítica que dona lloc a nous paradigmes artístics i analítics. Moltes vegades aconsegueixen els seus objectius gràcies a l'ús de programari lliure, factor que els permet idear i gestionar –sense potents intermediaris tecnològics pel mig– pràctiques innovadores i d'alt nivell crític.

L'alemany **Aram Bartholl**, per exemple, s'ha donat a conèixer internacionalment per les seves accions en què investiga la incerta relació entre els individus i els mitjans de comunicació des d'un punt de vista peculiar. Critica amb ironia la submissió dels primers i sempre cerca noves línies de creació en llibertat. Si a _Silver Cell_ (2004) proposava la utilització d'una exclusiva (i barata) gàbia de Faraday que evita que el mòbil pugui ser rastrejat, en la instal·lació pública _Map_ (2006-2010) transfereix el punt exacte on les marques que Google Maps assenyalen el centre de cada ciutat en un espai físic, amb l'objectiu de vincular la relació entre l'espai d'informació digital i l'espai quotidià.

El treball **d'Evan Roth** inclou peces aparentment força inconnexes, però el seu denominador comú és la crítica i el rebuig davant de qualsevol tipus de control i d'ingerència política. Habitualment utilitza eines de codi obert que li permeten concebre, realitzar i publicar independentment les seves accions subversives en poc temps, provocant una resposta ràpida entre els seus seguidors. Pel que fa als aires que es respiren quant al registre i vigilància, ens semblen especialment representatives i simptomàtiques les seves accions: _#1_ _Bad Ass Mother Fucker_ (2005) i _Intellectual Property Donor_ (2008). En la primera, convidava a popularitzar una pàgina amb un títol absurd (i ofensiu per alguns) amb l'objectiu que aconseguís els primers llocs de Google simplement fent clic. D'aquesta manera, va aconseguir manipular les enquestes de seguiment que realitza la companyia demostrant la seva poca fiabilitat. A _Intellectual Property Donor_, en protesta contra la Llei de _copyright_ nord-americana, convidava els seus conciutadans a enganxar una etiqueta a la part posterior del document d'identitat amb la intenció de donar lliurement la seva propietat intel·lectual al domini públic.

Una de les seves accions més conegudes, _TSA Communication_ (2008), va sorgir com a protesta a les mesures de seguretat extremes, algunes d'aquestes secretes, adoptades als aeroports per la Transportation Security Administration (TSA), organisme creat per a reforçar la seguretat dels sistemes de transport de la nació i assegurar la lliure circulació de les persones i el comerç.

![Figura 50](@attachment/uoc/programacio_disseny_arts/432_50.jpg)

<cite>Figura 50. _Map_ (2010), d'Aram Bartholl.<br><small>Font: https://arambartholl.com/wwwppp/wp-content/uploads/2018/03/aram\_bartholl\_map\_kassel\_2013\_03-600×399.jpg</small></cite>

![Figura 51](@attachment/uoc/programacio_disseny_arts/432_51.jpg)

<cite>Figura 51. _TSA Communication_ (2008), d'Evan Roth.<br><small>Font: https://noticethings.files.wordpress.com/2008/10/nothing-to-see-here1.jpg</small></cite>

Conscient del potencial del treball col·laboratiu, el 2007 va crear, juntament amb **James Powderly**, **The Free Art and Technology Lab** **(F.A.T. Lab)**, una xarxa internacional de creadors multidisciplinaris, enginyers, científics i advocats. Tots ells es proposen enriquir conjuntament el domini públic amb obres tecnològiques creatives orientades a la recerca i al desenvolupament, en un encreuament entre la cultura pop i la tecnologia oberta. Entre d'altres, creen una sèrie de projectes amb el lema «Fuck Google!!!», liderats per **Aram Bartholl**. Amb aquests pretenen denunciar el risc que significa l'acumulació de dades privades sobre qualsevol aspecte de la nostra intimitat amb l'objectiu de ser utilitzades –previ pagament– amb finalitats comercials. Destaquem, sobretot per la seva repercussió, el treball realitzat al taller _How to build a fake Google Street View car_ (2010) desenvolupat en la **Transmediale**. Després d'intensos debats, es van mostrar alternatives de programari lliure i es va construir un fals vehicle de Google Street View que va conquistar la ciutat de Berlín. Durant el seu passeig, va registrar les reaccions dels vianants en un dels països més conscienciats sobre els usos reals de l'aplicació. El seu treball fa referència a una qüestió que s'ha convertit en un important eix central sobre el control tecnològic actual: **el poder exercit sobre les dades privades mitjançant les xarxes informàtiques**, tant pels estats com per les empreses privades, ja que afecta tots els ciutadans ciberconnectats (González Díaz, 2014).

Si Bartholl i Roth desenvolupen accions crítiques sobre les plataformes més actuals de la xarxa, **Jon Rafman** personalitza els nous paradigmes de creació de la darreria de la primera dècada del segle XXI. El seu paradigmàtic [_9 Eyes of Google Street View_](https://9-eyes.com/) (2009) és un projecte a què va dedicar innombrables hores explorant el món per mitjà de la pantalla de l'ordinador. Durant aquest visionat _voyeur_ cerca permanentment imatges impactants, estranyes i imprevisibles que captura i mostra com si es tractés d'un reportatge de viatges. La seva col·lecció digital conté representacions tan peculiars com una casa en flames en un carrer despoblat d'Arkansas –davant la qual el vehicle de Google sembla circular amb total despreocupació–, un jove que surt del maleter d'un vehicle, la inquietant i cinematogràfica presa d'una dona solitària i espectralment blanca en una platja deserta, accidents de trànsit, cavalls desbocats, detencions policials, escenes de prostitució de carrer, un home sortint de la finestra del primer pis d'una casa, personatges anònims a l'interior dels seus habitatges i militars patrullant o desfilant. Rafman compara el seu treball de cerca amb Google amb el de fotoreporters clàssics com Henri Cartier-Bresson, professional sempre alerta en la seva cerca de l'**instant** **decisiu**.

![Figura 52](@attachment/uoc/programacio_disseny_arts/432_52.jpg)

<cite>Figura 52. Imatges de _9 Eyes of Google Street View_ (2009), de Jon Rafman.<br><small>Font: https://66.media.tumblr.com/b85476a78d8ed7cb52f624aba2cf5d9b/tumblr\_nbha1clc921qzun8oo1\_1280.jpg i https://66.media.tumblr.com/b0d508584bb821d8c474e540368502ed/tumblr\_n5qb992hN01qzun8oo1\_1280.jpg</small></cite>

Si a _9 Eyes of Google Street View_ es tractava de descobrir detalls entre un maremàgnum de recorreguts, l'italià [**Carlo Zanni**](http://zanni.org/wp/) realitza un exercici autoreferencial a _Self Portrait With Dog_ (2008), buscant les imatges dels seus passejos amb el seu gos per Milà mitjançant Google Street View. Bartholl ja havia presentat una obra de característiques similars titulada [_15 Seconds of Fame_](https://arambartholl.com/15-seconds-of-fame/) (2010), també fruit de la casualitat atès que va ser immortalitzat per la mateixa multinacional, encara que el seu _modus operandi_ és força diferent: exposa i ven les captures de les imatges en una galeria sota la provocadora denominació d'autoretrat, com a mostra de dissensió cap al dubtós sistema de recopilació de dades de l'empresa.

L'essència d'un bon nombre de les peces que fan referència explícita a Google o a qualsevol altre navegador o gran plataforma digital incideix en un aspecte crucial descrit fa dècades a _La Sociedad del Espectáculo_ per Guy Debord:

>El món sensible és substituït per una selecció d'imatges que hi ha per sobre d'aquest i que apareixen al mateix temps com allò sensible per excel·lència.
>
><cite>G. Debord (1995). _La Sociedad del espectáculo_ (pàg. 52). Buenos Aires: La Marca Editora.</cite>

<div class="destacat"><markdown>
Les innegables capacitats dels **cercadors** o de les **xarxes socials** han de ser apropiades i reinterpretades com a eines o fonts de material creatiu, però segueix sent necessari ampliar el coneixement sobre processos, metodologies i conseqüències del seu ús.
</markdown></div>

<div class="extra"><markdown>
**_Daily Overview_**

Projectes com [_Daily Overview_](https://www.instagram.com/dailyoverview/?hl=es), de **Benjamin Grantt**, per exemple, van saber treure profit en el seu moment –i que difon des de fa anys mitjançant el seu web i les xarxes– de les imatges satel·litzades que ens ofereixen una visió impactant de la terra i de la nostra petjada sobre la mateixa. La bellesa de totes les composicions ofereix una relectura per capes sobre l'evolució de cada territori.

![Figura 53](@attachment/uoc/programacio_disseny_arts/432_53.jpg)

<cite>Figura 53. Imatges de _Daily Overview_, de Benjamin Grantt<br><small>Font: https://www.instagram.com/dailyoverview/?hl=es</small></cite>
</markdown></div>

#### Remescles de la vida digital

<div class="destacat"><markdown>
La **cultura de la pantalla** ha imposat el simulacre de **viure i sentir a distància**.
</markdown></div>

Ens hem convertit en grans creadors i consumidors de material digital, tal com afirma Ingrid Guardiola:

>Las imatges s'han convertit en una nova torre d'ivori que aïlla els ciutadans al mateix temps que els connecta.
>
><cite>I. Guardiola (2018). _L'ull i la navalla: un assaig sobre el món com a interfície_ (pàg. 47). Barcelona: Arcàdia.</cite>

En aquesta nova **realitat mediatitzada**, la memòria humana també ha estat reemplaçada per una **memòria algorítmica** que únicament ens mostra biaixos de tot el material existent, situació que xoca amb la idea inicial d'internet com a eina participativa i democràtica. En l'última dècada, la ciutadania s'ha adonat que viu submergida en un espai hipercontrolat, però és difícil no sucumbir als seus atractius: connectar-nos, relacionar-nos, etc. Per tant, no és gens estrany que sorgeixin pràctiques creatives digitals que reflecteixin o qüestionin un nou paradigma: **la necessitat d'expressar-nos i ser escoltats**. Tal com succeïa en el capítol de _Black Mirror_ titulat «Caiguda en picat» («_Nosedive_»), bona part de la població viu pendent dels simulacres de reconeixement social que representen la quantitat d'amics o m'agrada a les xarxes, sense adonar-nos que la nostra representació digital és tal com han volgut modelar les grans companyies.

<div class="extra"><markdown>
**_Hello World! Or: How I Learned to Stop Listening and Love the Noise i Testament_**

Dos exemples interessants són _Hello World! Or: How I Learned to Stop Listening and Love the Noise_ (2008), de **Christopher Baker**, i la sèrie _Testament_ (2008-2017), de **Natalie Bookchin**.

![Figura 54](@attachment/uoc/programacio_disseny_arts/433_54.jpg)

<cite>Figura 54. _Hello World!_ (2008), de Christopher Baker.<br><small>Font: http://christopherbaker.net/wp-content/uploads/2008/08/hello_world_nash_ch_2_web_feature.jpg</small></cite>

![Figura 55](@attachment/uoc/programacio_disseny_arts/433_55.jpg)

<cite>Figura 55. _Testament_ (2008-2017), de Natalie Bookchin.<br><small>Font: https://bookchin.net/wp-content/uploads/2015/09/My-Meds-from-the-series-Testament2-400×284.jpg</small></cite>
</markdown></div>

La videoinstal·lació de Baker està composta per milers d'imatges de videobloguers (_vlogers_) parlant al seu públic des dels ordinadors situats als seus espais privats (casa, treball, etc.), creant una gran cacofonia de **relats íntims desinhibits davant una càmera**. En la sèrie _Testament_, Bookchin representa els efectes socials i econòmics de l'ús de les xarxes socials i les seves condicions de producció. En les videoinstal·lacions que la conformen, s'apropia de frases o seqüències que s'apropen als patrons del llenguatge i la comunicació imposats a la xarxa, que representen la combinació d'intimitat i anonimat, de connectivitat simultània que caracteritza les relacions personals (Bookchin, 2015).

Una altra de les relacions curioses que sorgeix a internet és la de les imatges amb les seves **etiquetes (_tags_)**. Ens hem vist obligats a arxivar els nostres vídeos i les nostres fotos associant-los a paraules, la qual cosa ha donat lloc a innombrables agrupacions subjectives o poc encertades, però que reflecteixen en el seu conjunt les tendències específiques d'un determinat període de temps. **Corinne Vionnet** és una de les creadores que explora, des de 2006, el fenomen del turisme massificat per mitjà de la sèrie [_Photo Opportunities_](http://www.corinnevionnet.com/photoopportunities.html): la Torre Eiffel, el Coliseu de Roma, el Big Ben o la Plaça Roja de Moscou són alguns dels _collages_ de centenars de fotografies originals superposades apropiades a la xarxa i reproduïdes en una sola imatge de marcat caràcter pictòric. L'animador **Jasper Elings** ofereix una curiosa versió recopilatòria d'imatges de mala qualitat: _Flashings in the Mirror_ (2009). Les fotos, trobades a internet, representen flaixos inesperats, mals enquadraments i postures increïbles que es connecten per a conformar una coherent i irònica narració audiovisual. En tots dos projectes es transmeten clarament alguns dels senyals del nostre temps: **la repetició i l'homogeneïtzació global**.

![Figura 56](@attachment/uoc/programacio_disseny_arts/433_56.jpg)

<cite>Figura 56. Imatges de la sèrie _Photo Opportunities_, de Corinne Vionnet.<br><small>Font: http://www.corinnevionnet.com/public/images/i\_works/photoopportunities/corinnevionnet\_photoopportunities\_800px\_\_01.jpg i http://www.corinnevionnet.com/public/images/iv\_news/corinnevionnet\_photoopportunities\_600px\_\_18.jpg</small></cite>

### Art interactiu

<a style="font-family: 'Segoe Print'" href="http://arts.recursos.uoc.edu/programacio-disseny-arts/4-1-portada/">Fer els apunts</a>



































### L'interactor: noves relacions davant la creació digital. Quan el real i el virtual s'entremesclen

<a style="font-family: 'Segoe Print'" href="http://arts.recursos.uoc.edu/programacio-disseny-arts/4-1-portada/">Fer els apunts</a>







***

<details><summary>Bibliografia</summary><markdown>

* **Abad, A.** (2019). _megafone.net/2004-2014_ \[en línia\]. \[Data de consulta: 18 de juny de 2019\]. <[https://megafone.net/site/index?lang=2](https://megafone.net/site/index?lang=2)\>.
* **Allen, R.** (1986). _Musique Non Stop_. \[Data de consulta: 28 de maig de 2019\]. <[http://www.rebeccaallen.com/projects/musique-non-stop](http://www.rebeccaallen.com/projects/musique-non-stop)\>.
* **Antúnez Roca, M.; Kac, E.** (1998). _Arte robótica: un manifiesto_ \[en línia\]. \[Data de consulta: 18 de juny de 2019\]. <[http://www.marceliantunez.com/texts/robotic-art-manifest/](http://www.marceliantunez.com/texts/robotic-art-manifest/)\>.
* **Ascott, R.** (1994). «¿Hay amor en el abrazo telemático?». _El viejo Topo_ (núm 72, pàg. 60-63).
* **Austrian, G. D.** (2016). _Herman Hollerith: Forgotten Giant of Information Processing_. Nova York: Columbia University Press.
* **Baines, P.** (2005). _Penguin by Design. A Cover Story, 1935-2005._ Londres: Penguin Books.
* **Barceló, M.** (2008). _Una historia de la informática_. Barcelona: Universitat Oberta de Catalunya.
* **Benjamin, W.** (2012). _La obra de arte en la era de su reproductibilidad técnica_. Buenos Aires: Ediciones Godot.
* **Boj, C.; Díaz, D.** (2008). _Observatorio_ \[en línia\]. \[Data de consulta: 20 de juny de 2019\]. <[http://www.lalalab.org/observatorio/](http://www.lalalab.org/observatorio/)\>.
* **Boj, C.; Díaz, D.** (2013-2016). _Las calles habladas_ \[en línia\]. \[Data de consulta: 18 de juny de 2019\]. <[http://www.lalalab.org/las-calles-habladas/](http://www.lalalab.org/las-calles-habladas/)\>.
* **Boockchin, N.** (2015, 24 de setembre). _Testament_ \[en línia\]. \[Data de consulta: 10 de juny de 2019\]. <[https://bookchin.net/projects/testament/](https://bookchin.net/projects/testament/)\>.
* **Bosco, R.** (2001, 4 d'octubre). «Los artistas plasman una visión pacifista tras el 11-S» \[en línia\]. _El País_. <[https://elpais.com/diario/2001/10/04/ciberpais/1002160943\_850215.html](https://elpais.com/diario/2001/10/04/ciberpais/1002160943_850215.html)\>.
* **Bosco, R.; Caldana, S.** (2016, 13 de febrer). «1995. La historia produce sus propias leyendas» \[en línia\]. _El Arte en la Edad del Silicio_. \[Data de consulta: 30 de maig de 2019\]. <[https://arteedadsilicio.com/1995-2/](https://arteedadsilicio.com/1995-2/)\>.
* **Bourriaud, N.** (2006). _Estética relacional_. Buenos Aires: Adriana Hidalgo Editora.
* **Bürger, M.; Espenschied, D.; Lialina, O.** (2009). _Digital Folklore_. Stuttgart: Merz & Solitude.
* **Castells, M.** (2004). _La era de la información: economía, sociedad y cultura_. México, D.F.: Siglo XXI.
* **Cilleruelo, L.; Ballarín, L. B.** (2005). _NET.ART. Prácticas estéticas y políticas en la Red_ \[en línia\]. <[https://www.academia.edu/9917780/NET.ART.\_Pr%C3%A1cticas\_est%C3%A9ticas\_y\_pol%C3%ADticas\_en\_la\_Red](https://www.academia.edu/9917780/NET.ART._Pr%C3%A1cticas_est%C3%A9ticas_y_pol%C3%ADticas_en_la_Red)\>.
* **Clarke, R.** (1987). _Information Technology and Dataveillance_ \[en línia\]. \[Data de consulta: 28 de maig de 2019\]. <[http://www.rogerclarke.com/DV/CACM88.html](http://www.rogerclarke.com/DV/CACM88.html)\>.
* **Cooper, A.** (2017, maig). «Should Designers Code?». _Medium_. <[https://medium.com/@MrAlanCooper/should-designers-code-f7b745b-8cd03](https://medium.com/@MrAlanCooper/should-designers-code-f7b745b-8cd03)\>
* **Cramer, F.** (2005). _Words Made Flesh. Code, Culture, Imagination_. Rotterdam: Media Design Research, Piet Zwart Institute, Willem de Kooning Academy Hogeschool Rotterdam. <[https://monoskop.org/images/e/ee/Cramer\_Florian\_Words\_Made\_Flesh\_Code\_Culture\_Imagination.pdf](https://monoskop.org/images/e/ee/Cramer_Florian_Words_Made_Flesh_Code_Culture_Imagination.pdf)\>
* **Critical Art Ensemble** (2006). «La desobediencia civil electrónica, la simulación y la esfera pública». A: Autors Varis. _Ciberactivismo: sobre usos políticos y sociales de la red_ (pàg. 271-286). Barcelona: Virus.
* **Debord, G.** (1995). _La Sociedad del espectáculo_. Buenos Aires: La Marca Editora.
* **Díaz, P. G.** (2019, març 5). «Lozano-Hemmer, tres expos para conocer al gran creador _new media_» \[en línia\]. _El Asombrario & Co_. <[https://elasombrario.com/lozano-hemmer-expos-conocer-new-media/](https://elasombrario.com/lozano-hemmer-expos-conocer-new-media/)\>.
* **Drozdov, S.** (2018, maig). «An intro to Machine Learning for designers». _UX Collective_. <[http://uxdesign.cc/an-intro-to-machine-learning-for-designers-5c74ba100257](http://uxdesign.cc/an-intro-to-machine-learning-for-designers-5c74ba100257)\>
* **Eco, U.** (1992). _Obra abierta_. Barcelona: Seix Barral.
* **Eiben, A. E.; Smith, J.** (2015). «From evolutionary computation to the evolution of things». _Nature_ (vol. 521, pàg. 476-482).
* **Fuller, M.** (2003). _Behind the Blip. Essays on the Culture of Software_. Nova York: Autonomedia.
* **Fuller, M.** (ed.) (2008). _Software Studies. A Lexicon._ Cambridge/Londres: The MIT Press.
* **Galanter, P.** (2016). «Generative Art Theory». A: Christiane Paul (ed.). _A Companion to Digital Art._ Nova York: John Wiley & Sons.
* **Gay, M.** (2000). _Recent advances and issues in computers_. Phoenix, AR: The Oryx Press.
* **Giannetti, C.** (2003). «Arte humano, máquina. Virtualización, interactividad y control». A: Hernández Sánchez, D. (ed.). _Arte, cuerpo, tecnología_. Salamanca: Universidad de Salamanca.
* **Gibson, W.** (2006). _Neuromante_. Barcelona: Minotauro.
* **Girling, R.** (2017, juny). «AI and the Future of Design: What will the designer of 2025 look like?». _Artefact_. <[https://www.artefactgroup.com/articles/ai\_design\_2025/](https://www.artefactgroup.com/articles/ai_design_2025/)\>
* **Goldberg, K.** (2011). The Telegarden \[en línia\]. \[Data de consulta: 16 de juny de 2019\]. <[https://goldberg.berkeley.edu/garden/Ars/](https://goldberg.berkeley.edu/garden/Ars/)\>.
* **González Díaz, P.** (2013). _Prácticas artísticas digitales y tecnologías de control y vigilancia (2001-2010)_ (tesis doctoral). Barcelona: Universidad de Barcelona.
* **González Díaz, P.** (2014). «Reacciones en el Media Art ante la vigilancia y el control de datos en la Red: Nuevos paradigmas (2001-2010)». _Teknokultura_ (vol. 11, núm. 2, pàg. 349-382).
* **Guardiola, I.** (2018). _L'ull i la navalla: un assaig sobre el món com a interfície_. Barcelona: Arcàdia.
* **Hall, E.** (2018). _Conversational Design_. Nova York: A Book Apart.
* **Hultén, K. G.; Museum of Modern Art of New York** (1968). _The Machine as Seen at the End of the Mechanical Age_. Nova York: Graphic Soc.
* **James, D.** (2005). _The Most Typical Avant-Garde: History and Geography of Minor Cinemas in Los Angeles_. Berkeley, CA: University of California Press.
* **Jewish Museum of New York; Burnham, J.; Jakob, R.; Institution, S.; Corporation, A. M.** (1970). _Software: Information Technology: Its New Meaning for Art_. Nova York: Jewish Museum.
* **Kac, E.** (1998). «Ornitorrinco y Rara Avis. El arte de la telepresencia en Internet». A: C. Giannetti (ed.). _Ars telemática: telecomunicación, internet y ciberespacio_ (pàg. 250-275). Barcelona: Associació de Cultura Contemporània L'Angelot.
* **Kac, E.** (2010). _Telepresencia y bioarte: Interconexión en red de humanos, robots y conejos_. Murcia: CENDEAC.
* **Kawano, H.** (1990). _The Markov Model of Art_. Tokio: Tokyo Metropolitan Institute of Technology.
* **Keenan, K. M.** (2005). _Invasion of Privacy: A Reference Handbook_. Santa Bàrbara, CA: ABC-CLIO.
* **Kitchin, R.; Dodge, M.** (2011). _Code/Space. Software and Everyday Life_. Cambridge/Londres: The MIT Press.
* **Kirschner, F.** (2008). «openFrameworks. Zachary Lieberman and Theodore Watson interviewed by Friedrich Kirschner». A: Stocker, G.; Schöpf, C. (ed.). _Ars Electronica 2008. A New Cultural Economy. The Limits of Intellectual Property_ (209-213) \[en línia\]. Ostfildern: Hatje Cantz. <[http://archive.aec.at/media/assets/bf28edd4e55f8ebcaab183cd1dbdd980.pdf](http://archive.aec.at/media/assets/bf28edd4e55f8ebcaab183cd1dbdd980.pdf)\>
* **Laposky, B. F.** (1975). «Oscillons: electronic abstractions» \[en línia\]. _Atariarchives.org_. \[Data de consulta: 22 de maig de 2019\]. <[https://www.atariarchives.org/artist/sec6.php](https://www.atariarchives.org/artist/sec6.php)\>.
* **Latham, W.** (2015). «Evolutionary Art and Computers» _TEDxOxford_. <[https://www.youtube.com/watch?v=MZGOr94468w](https://www.youtube.com/watch?v=MZGOr94468w)\>.
* **Lialina, O.; Himmelsbach, S.; Connor, M.** (2016). _My Boyfriend Came Back From The War_ (Online Since 1996: Olia Lialina). Basilea: Christoph Merian Verlag.
* **Lieser, W.; Baumgartel, T.; Herzogenrath, W.; Dehlinger, H.; Edler, T.** (2010). _The World of Digital Art_. Berlín: Langenscheidt Publishing Group.
* **Llop, R.** (2014). _Un sistema gráfico para las cubiertas de libros. Hacia un lenguaje de parámetros_. Barcelona: Gustavo Gili.
* **Lovink, G.** (2004). _Fibra oscura: Rastreando la cultura crítica de Internet_. Madrid: Tecnos /Alianza.
* **Lozano-Hemmer, R.** (2015, setembre). «Best practices for conservation of media art from an artist's perspective». _GitHub_. <[https://github.com/antimodular/Best-practices-for-conservation-of-media-art](https://github.com/antimodular/Best-practices-for-conservation-of-media-art)\>
* **Madachy, J. S.** (1961). _Recreational Mathematics Magazine_. Idaho: Idaho Falls.
* **Magid, Jill** (2004). _Evidence Locker_ \[en línia\]. \[Data de consulta: 6 de juny de 2019\]. <[http://www.evidencelocker.net/story.php](http://www.evidencelocker.net/story.php)\>.
* **Manovich, L.** (2005). _El lenguaje de los nuevos medios de comunicación: La imagen en la era digital_. Barcelona: Planeta.
* **Manovich, L.** (2013). _El software toma el mando_ (UOC Press. Comunicación #29). Barcelona: Editorial UOC.
* **Mansoux, A.; de Valk, M.** (ed.) (2008). _FLOSS+ART_. Poitiers: GOTO10.
* **McCormack, J.; d'Inverno, M.** (2012). _Computers and Creativity_. Berlí: Springer Science & Business Media.
* **Marino, M.** (2006, desembre). «Critical Code Studies». _Electronic book review_. <[http://www.electronicbookreview.com/thread/electropoetics/codology](http://www.electronicbookreview.com/thread/electropoetics/codology)\>
* **Montfort, N.; Baudoin, P.; Bell, P. J. _et al_.** (2013). _10 PRINT CHR$(205.5+RND(1)); : GOTO 10_. Cambridge/Londres: The MIT Press. <[https://10print.org/](https://10print.org/)\>
* **Mohr, M.** (1971). «Layout and Detailed History of the Exhibition, May 11 – June 6, 1971» \[en línia\]. \[Data de consulta: 27 de maig de 2019\]. <[https://www.emohr.com/paris-1971/layout.html](https://www.emohr.com/paris-1971/layout.html)\>.
* **Molnar, V.** (2009). Vera Molnar. <[http://www.veramolnar.com/](http://www.veramolnar.com/)\>.
* **Noll, A. M.** (2016). «Early Digital Computer Art at Bell Telephone Laboratories, Incorporated» \[en línia\]. _The MIT PressJournals_ (vol. 49, núm. 1, pàg. 55-65). <[https://doi.org/10.1162/LEON\_a\_00830](https://doi.org/10.1162/LEON_a_00830)\>.
* **PARC** (2017). «Half-Human, Half-Computer? Meet the Modern Centaur». _PARC blog. <_[https://www.parc.com/blog/half-human-half-computer-meet-the-modern-centaur/](https://www.parc.com/blog/half-human-half-computer-meet-the-modern-centaur/)\>
* **Parés, R. i altres** (2014). _Antoni Abad: megafone.net/2004-2014_ \[en línia\]. Barcelona: MACBA; AC/E; Turner. <[https://books.google.es/books?id=GffivQEACAAJ](https://books.google.es/books?id=GffivQEACAAJ)\>.
* **Prada, J. M.** (2012). _Prácticas artísticas e internet en la época de las redes sociales_. Madrid: Ediciones Akal.
* **Reas, C.; Fry, B.** (2007). _Processing: a programming handbook for visual designers and artists_. Cambridge/Londres: The MIT Press.
* **Reas, C.; Fry, B.** (2018, maig). «A Modern Prometheus. The History of Processing by Casey Reas and Ben Fry». _Medium._ <[https://medium.com/processing-foundation/a-modern-prometheus-59aed94abe85](https://medium.com/processing-foundation/a-modern-prometheus-59aed94abe85)\>
* **Reas, C.; McWilliams, C.** (2010). _Form + Code in Design, Art, and Architecture_. Nova York: Princeton Architectural Press.
* **Reichardt, J.** (2018). _Cybernetic Serendipity: The Computer and the Arts_. Londres: Studio International Foundation.
* **Rekalde, J.** (2001). «De la ilusión del cinematógrafo a la inmersión cibernética». _Universo Fotográfico_ (núm. 4). <[https://webs.ucm.es/info/univfoto/num4/rekalde.htm](https://webs.ucm.es/info/univfoto/num4/rekalde.htm)\>.
* **Rhodes, M.** (2015, setembre). «The Bizarre, Bony-Looking Future of Algorithmic Design». _Wired_. <[https://www.wired.com/2015/09/bizarre-bony-looking-future-algorithmic-design/](https://www.wired.com/2015/09/bizarre-bony-looking-future-algorithmic-design/)\>
* **Rhodes, M.** (2016, novembre). «So. Algorithms Are Designing Chairs Now». _Wired_. <[https://www.wired.com/2016/10/elbo-chair-autodesk-algorithm/](https://www.wired.com/2016/10/elbo-chair-autodesk-algorithm/)\>
* **Rhodes, M.** (2017, maig). «The Lowly Folding Chair, Reimagined with Algorithms». _Wired_. <[https://www.wired.com/2017/04/lowly-folding-chair-reimagined-algorithms/](https://www.wired.com/2017/04/lowly-folding-chair-reimagined-algorithms/)\>
* **Rolston, M.** (2017, octubre). «AI Is Changing Our Brains». _FastCo Design_. <[https://www.fastcodesign.com/90147162/ai-is-changing-our-brains](https://www.fastcodesign.com/90147162/ai-is-changing-our-brains)\>
* **Rush, M.** (2002). _Nuevas expresiones artísticas a finales del siglo XX_. Barcelona: Destino.
* **Sack, W.** (2019). _The Software Arts_. Cambridge, MA: MIT Press.
* **Schneider, G. M.; Gersting, J. L.; Miller, K.** (2006). _Invitation to Computer Science_. Boston: Thomson Course Technology.
* **Shanken, E. A.** (2013). _Inventar el futuro: arte, electricidad, nuevos medios_. Brooklyn: Fiction Department.
* **Simanowski, R.** (2011). _Digital Art and Meaning: Reading Kinetic Poetry, Text Machines, Mapping Art, and Interactive Installations_. Minneapolis: University of Minnesota Press.
* **Sora, C.** (2014, juny 4). «Webdocs por el cambio social» \[en línia\]. CCCBLab (blog). \[Data de consulta: 19 de juny de 2019\]. <[http://lab.cccb.org/es/webdocs-por-el-cambio-social/](http://lab.cccb.org/es/webdocs-por-el-cambio-social/)\>.
* **Stocker, G.; Schöpf, C.** (ed.) (2003). _Ars Electronica. CODE – The Language of our Time_ \[en línia\]. Osterfildern-Ruit: Hatje Cantz. <[http://90.146.8.18/de/archives/festival\_archive/festival\_catalogs/festival\_catalog.asp?iProjectID=12281](http://90.146.8.18/de/archives/festival_archive/festival_catalogs/festival_catalog.asp?iProjectID=12281)\>
* **Taylor, G. D.** (2014). _When the Machine Made Art: The Troubled History of Computer Art_. Nova York: Bloomsbury Publishing.
* **Thoreau, H. D.** (2016). _Desobediencia civil_. Palma de Mallorca: José J. Olañeta Editor.
* **Tribe, M.; Jana, R.; Grosenick, U.** (2006). _Arte y nuevas tecnologías_. Colònia: Taschen.
* **Ulman, E.** (1997). _Close to the machine: technophilia and its discontents_. San Francisco: City Lights Books.
* **Uncovering Ctrl** (2011a, 10 de setembre). Freedom not Fear 2011: «Untitled 2001» W. Staehle \[en línia\]. \[Data de consulta: 19 de juny de 2019\]. <[http://uncovering-ctrl.blogspot.com/2011/09/freedom-not-fear-2011-untitled-2001-w.html](http://uncovering-ctrl.blogspot.com/2011/09/freedom-not-fear-2011-untitled-2001-w.html)\>.
* **Uncovering Ctrl** (2011b, 7 de setembre). Freedom not Fear 2011: «Sousveillance» y Hassan M. Elahi \[en línia\]. \[Data de consulta: 19 de juny de 2019\]. <[http://uncovering-ctrl.blogspot.com/2011/09/freedom-not-fear-2011-sousveillance.html](http://uncovering-ctrl.blogspot.com/2011/09/freedom-not-fear-2011-sousveillance.html)\>.
* **Uncovering Ctrl** (2019a, 18 de juny). Cuando el poder toma decisiones: «Antiwargame» \[en línia\]. \[Data de consulta: 18 de juny de 2019\]. <[http://uncovering-ctrl.blogspot.com/2019/06/cuando-el-poder-toma-decisiones.html](http://uncovering-ctrl.blogspot.com/2019/06/cuando-el-poder-toma-decisiones.html)\>.
* **Virilio, P.** (1995). _Escritos Paul Virilio_ \[en línia\]. \[Data de consulta: 16 de juny de 2019\]. <[http://escritospaulvirilio.blogspot.com/](http://escritospaulvirilio.blogspot.com/)\>.
* **Vlahos, J.** (2018, febrer). «Inside the Alexa Prize». _WIRED_. <[https://www.wired.com/story/inside-amazon-alexa-prize/](https://www.wired.com/story/inside-amazon-alexa-prize/)\>
* **Waelder, P.** (2008). _Arte interactivo: nuevas estrategias en la relación dialógica entre el espectador y la obra de arte_ (memòria de recerca). Palma de Mallorca: Departament de Ciències Històriques i Teoria de les Arts Universitat de les Illes Balears. <[https://docplayer.es/17020515-Arte-interactivo-nuevas-estrategias-en-la-relacion-dialogica-entre-el-espectador-y-la-obra-de-arte-memoria-de-investigacion-autor-pau-waelder-laso.html](https://docplayer.es/17020515-Arte-interactivo-nuevas-estrategias-en-la-relacion-dialogica-entre-el-espectador-y-la-obra-de-arte-memoria-de-investigacion-autor-pau-waelder-laso.html)\>.
* **Waelder, P.** (2011, 7 de juliol). «Manfred Mohr: una estética programada» \[en línia\]. _Arte y cultura digital_ (blog). \[Data de consulta: 26 de maig de 2019\]. <[http://laboralcentrodearte.uoc.edu/?p=1936](http://laboralcentrodearte.uoc.edu/?p=1936)\>.
* **Woodbury, R.** (2010). _Elements of Parametric Design_. Londres / Nova York: Routledge.
* **Zafra Alcaraz, R.** (1999). «El instante invisible del net.art» \[en línia\]. <[https://idus.us.es/xmlui/bitstream/handle/11441/26538/El%20instante%20invisible%20del%20net.pdf?sequence=1&isAllowed=y](https://idus.us.es/xmlui/bitstream/handle/11441/26538/El%20instante%20invisible%20del%20net.pdf?sequence=1&isAllowed=y)\>.
* **Zalamea, G.** (2007). _Arte y localidad: Modelos para desarmar_. Bogotà: Universidad Nacional de Colombia.
* **ZKM** (2004). Peter Weibel: Algorithmic Revolution \[en línia\]. _ZKM_ (blog). \[Data de consulta: 23 de maig de 2019\]. <[https://zkm.de/en/media/audio/peter-weibel-algorithmic-revolution](https://zkm.de/en/media/audio/peter-weibel-algorithmic-revolution)\>.

</markdown></details>

***

[1]: R. Kitchin i M. Dodge (2011). Code/Space. Software and Everyday Life (pàg. 5-7). Cambridge/Londres: The MIT Press.

[2]: J. Maeda et al. (2017). Design in Tech Report 2017. <https://designintechreport.wordpress.com>

[3]: Erika Hall (2018). Conversational Design. Nova York: A Book Apart.

***

## To Do

* Arreglar citacions
* Arreglar apostrofs
* Links a youtube