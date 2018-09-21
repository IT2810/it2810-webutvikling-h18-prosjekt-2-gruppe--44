# Prosjekt 2 Gruppe 44

## Valg teknologi
I henhold til oppgaven har vi basert oppgaven på react og ES6

### ECMASCRIPT 6
ECMAScript er en standardisert skript-spesifikkasjon for å standardisere JavaScript og for å oppfordre til flere uavhengige Javascript implementasjoner

ES6 (offisielt kalt ECMAScript 2015) har introdusert en mengde ny syntax som muligjør utvilking av komplekse aplikasjoner og rammeverk.

ES6 intorudserer blant annet klasser, iteratorer, for/of loops, generatorer, arrow functions, collections, promises.

#### this
I denne oppgaven har vi blant annet brukt arrow functions.
En fordel med arrow functions er at **this** beholder sin verdi utenfor sitt scope. Dette gjør at man kan man feks kan bruke **this** i arrow-funksjoner på samme måte som i java.

#### Fetch og Promises
Vi tok også i bruk promises gjennom Fetch-api. Fetch metoden tar en URL som argument og returnerer et Promise som løses til en Response.

Siden JavaScript kun kjører i en enkelt tråd, er ikke concurrency mulig i JS. Det vil si at flere deler av et script ikke kan kjøre samtidig. 

Med promises kan man kjøre asyncrone kall, uten at man er sikker på om de vil lykkes eller ikke.

Et Promise kan være i en av tre tilstander.

* **Pending**: Promise ennå ikke avgjort, for eksempel ett HTTP-kall som ikke har returnert. Fra denne tilstanden kan et promise gå til tilstanden **fulfilled** eller **rejected**.
* **Fulfilled**: Promise ble utfrørt som lovet med en verdi som resultat. For eksempel et GET HTTP-kall som returnerer med 200 status kode.
* **Rejected**: Promise ble ikke utført som lovet. For eksempel et HTTP-kall som returnerer med 500 status kode. Resultatet blir satt til et error-objekt.

### React
React er et JavaScript-bibliotek, som er utviklet og vedlikeholdt av Facebook i tillegg til et open source community.

React bygger enkeltstående komponenter, med egen tilstand og logikk. Disse er gjenbrukbare og kan brukes til å lage komplekse brukerinterfaces.

#### Components
Komponenter kan deineres som funksjoner eller klasser i JavaScript. Disse må utvides fra **React.Component** -klassen

#### JSX
JSX er en utvidelse av JavaScript som kompilerer/transpileres til vanlig JavaScript.

JSX er en kombinasjon av XML/HTML og JavaScript som gjør det enkelt å definere brukergrensesnitt.

#### Component lifecycle
##### Render
Hver gang et komponent blir oppdatert, blir det gjort et kall til render-metoden komponent-objektet. Denne metoden returnerer JSX som transpileres til javascript og oppdaterer DOM-elementet i siden.

##### Props
Brukes for å sende data mellom foreldre- og barne-komponenter. Dette kan være funksjoner som en foreldre sender til barnet, som barnet for eksempel kan kalle ved en event, eller en variabel med en verdi som foreldre-komponenten vil sende til barnet.

##### State
I motsetning til props som blir sendt til komponentet, mens state behandles inne i componentet.
State oppdateres ved å kalle setState-funksjonen til komponentet. Kall til setState trigger en oppdatering av komponentet og er asynkrone. Ved å sammenligne props og state kan man ta en avgjørelse om man vil oppdatere komponentet.

##### Lifecycle
Et komponent har en rekke funksjoner som kalles i de ulike livssyklusene til et komponent.

###### Mounting
Disse funksjonene kalles når et komponent blir instansiert og satt inn i DOM
1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

###### Oppdatering
Disse blir forårsaket av endring i props eller state
1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

###### Unmounting
Kalles når komponentet blir fjernet fra DOM
1. componentWillUnmount()

###### Feilhåndtering
Kalles når det oppstår feil under rendering.

