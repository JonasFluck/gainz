# GAINZ.com

GAINZ.com ist eine moderne, minimalistische und responsive Web-Applikation, die als Onlineshop dient. Sie bietet verschiedene Produkte mit weiteren Auswahlmöglichkeiten für den Kunden an und ist bis auf das Zahlungsverfahren in einen funktionierenden Bestellprozess eingebunden. Das Ziel ist es, den Webshop bis zum 28. Januar 2023 im Browser erreichbar zu machen.

## Projekttziel

GAINZ.com als fertige Web-Applikation mit einigen anzubietenden Produkten, welche jeweils
weitere Auswahlmöglichkeiten für den Kunden bieten und bis auf das Zahlungsverfahren in
einen funktionierenden Bestellprozess eingebunden werden können als modernen,
minimalistischen und responsive Webshop bis zum 28. Januar 2023 fertig stellen und im
Browser erreichbar machen.

## Personas

## Laura Radler

- Beruf: Ernährungswissenschaften-Studentin
- Alter: 26
- Familienstand: Ledig
- Wohnsituation: Studenten-WG

### Lifestyle

- Minimalistisch
- Technisch versiert
- Spiel Handball
- Hobby-Fitness-Influencerin
- Vegetarisch
- Extrovertiert
- Selbstverliebt

### Ziele

Laura möchte Gainz.com verwenden, um ihren sportlichen Lifestyle in Form von Bekleidung ihren Followern und Mitmenschen zu zeigen. Darüber hinaus will sie ihr im Studium erlerntes Wissen anwenden, um ihre Ernährung für ihren sportlichen Lifestyle optimal zu supplementieren.

### Frustrationen

- Design von vielen Fitness-Webshops nicht ansprechend
- Navigieren zum richtigen Produkt geht zu lang
- Kann Nährwerte von Supplements nicht direkt auf Websites sehen

## Bruno Bizeps

- Beruf: Personal Trainer
- Alter: 29
- Familienstand: Verheiratet, ein Kind
- Wohnsituation: Eigentumswohnung
  
### Lifestyle

- Zielstrebig
- Ehrgeizig
- Eitel
- Leben auf Bodybuilding ausgerichtet
- Verbringt mindestens 3h pro Tag im Studio
- Ernährt sich strikt nach seiner Diät

### Ziele

Bruno Bizeps möchte mit den Produkten von Gainz.com den größtmöglichen Trainingserfolg für sich und seine Klienten sicherstellen.

### Frustrationen

- Unübersichtliche Websites
- Überfüllte Produktportfolios

## Harald Hardgainer

- Beruf: Informatiker
- Alter: 41
- Familienstand: Ledig
- Wohnsituation: Im Elternhaus

### Lifestyle

- Ängstlich
- Unsicher
- Verbringt sehr viel Zeit an seinem Computer

### Ziele

Henno möchte mit den Produkten von Gainz.com im Fitnessstudio seine ersten Erfolge schnell sehen, sowohl an seinem Körper als auch in seinem Selbstvertrauen.

### Frustrationen

- Keine Ahnung von Supplements oder Sportbekleidung
- Meiste Fitnessshops nicht einsteigerfreundlich
- Fühlt sich körperlich schwach

##   Kontextdiagramm

![Kontextdiagramm](/assets/images/kontext.PNG)

Das Kontextdiagramm beschreibt, dass der Kunde die Möglichkeit hat, Bestellungen über den OrderController abzugeben. Er kann seine Daten eingeben und hat Zugriff auf verschiedene Produkte sowohl auf der Homepage als auch auf den Unterseiten.
![Produkte](/assets/images/produktebeispiel.PNG)

Der Contentmanager kann über die AdminPage Produkte und Kategorien anlegen, bearbeiten und löschen. Alle Daten werden in der Datenbank persistiert.

## Aktoren und Use Cases

### Charakterisierung

### Mitarbeiter

- Administrator der Seite
- Verwaltet die Produkpallette

### Neuer Kunde

- Gast auf der Webseite
- Kein Zugriff auf Admin-Funktionen
- Informiert sich und kauft Produkte

### Registrierter Kunde

- Person, die sich registriert hat
- Zugriff auf weitere Funktionalitäten (z.B. Bestellhistorie)
- Verfügt über alle Funktionen des neuen Kunden

### Mitarbeiter Funktionen

1. Bestellen (UC Transaction) - [Warenkorb](https://gainz-qkql.onrender.com/order/basket)
2. Lagerbestände verwalten (UC Transaction) - [Adminpage](https://gainz-qkql.onrender.com/admin)
3. Stammdaten verwalten - [Stammdaten](https://gainz-qkql.onrender.com/account)
4. Bestellhistorie einsehen - [Bestellungen](https://gainz-qkql.onrender.com/order/orders)
5. Nach Produkten suchen - [Suche](https://gainz-qkql.onrender.com/admin)

### Neuer Kunde Funktionen

1. Startseite und Unterseiten aufrufen (UC Info) - [Homepage](https://gainz-qkql.onrender.com)
2. Produkte bestellen (UC Transaction) - [Warenkorb](https://gainz-qkql.onrender.com/order/basket)

### registrierter Kunde

1. hat die Möglichkeit zu bestellen (UC Transaction) [Warenkorb](https://gainz-qkql.onrender.com/order/basket)
2. hat die Möglichkeit seine Bestellhistorie einzusehen[Bestellungen](h<https://gainz-qkql.onrender.com/order/orders)>
3. hat die Möglichkeit seine Stammdaten zu verwalten [Stammdaten](https://gainz-qkql.onrender.com/account)

#### Somit wurden alle Use Cases, welche in Blatt 1 beschrieben wurden

 für die drei möglichen User umgesetzt.
 Ebenso wurde die Rechteverwaltung so angepasst,
dass die jeweiligen User auch nur ihre Aktionen durchführen können und für die weiteren Dinge ein Login benötigt wird bzw. der Link nicht aufrufbar ist.

### Styletile

In unserer zweiten Abgabe haben wir uns für ein Style Tile mit vier  Pirmärfarben entschieden

- #### Türkis #65B891  <span style="color:#65B891">Primärfarbe</span>

- #### Weiß #FCF7FF  <span style="color:#FCF7FF ">Hintergrundfarbe</span>

- #### Grau #716869  <span style="color:#716869 ">Akzentfarbe</span>

- #### Schwarz #050517  <span style="color:#050517">Akzentfarbe</span>

An das eigentliche Style Tile haben wir uns strikt gehalten, jedoch haben wir leicht andere Farbtöne verwendet, da sie uns besser gefallen haben.

- #### Türkis (hsl(171, 100%, 41%) <span style="color:hsl(171, 100%, 41%)">Primärfarbe</span>

- #### Hintergrundfarbe (hsl(0, 0%, 100%)) <span style="color:hsl(0, 0%, 100%)">Hintergrundfarbe</span>

- #### Hintergrundfarbe (hsl(0, 0%, 71%)) <span style="color:hsl(0, 0%, 71%)">Akzentfarbe</span>

- #### Akztentfarbe (hsl(0, 0%, 4%)) <span style="color:hsl(0, 0%, 4%)">Akzentfarbe</span>

Das Logo haben wir gleich behalten:
![Logo](/assets/images/gainz.png)

Bei den Buttons haben wir uns nur für die türkise Variante entschieden:
[Ausdauerseite]([https://](https://gainz-qkql.onrender.com/fitnessziele/ausdauer)) (siehe Kalorienrechner)

Bezüglich der Schriftart haben wir die von unserem CSS Framework (Bulma CSS) benutzt.

### Side Map

![SideMap](/assets/images/SiteMap.PNG)

### Produkte

- Produkte: [Produktseite]([https://](https://gainz-qkql.onrender.com/product/product))
- Kategorien: [Kategorien]([https://](https://gainz-qkql.onrender.com/category/show))
- Produkt Details: [Produktdetails](https://gainz-qkql.onrender.com/product/productInfo/16https://)
- BestSeller: Nicht wirklich umgesetzt(auf Homepage zu sehen) [Homepage](https://gainz-qkql.onrender.com)
- Neu: Nicht wirklich umgesetzt(auf Homepage zu sehen) [Homepage](https://gainz-qkql.onrender.com)

### Einkaufswagen

(!!! Das die Links funktionieren, muss etwas im Warenkorb sein!!!)

- Einkaufswagen: [Einkaufswagen](https://gainz-qkql.onrender.com/order/basket)
- Stammdaten: [Stammdaten](https://gainz-qkql.onrender.com/order/step1)
- Bezahldaten: [Bezahldaten](https://gainz-qkql.onrender.com/order/step1)
  Bezahldaten wurden nicht umgesetzt (nicht gefordert)
- Bestätigung: [Bestätigung](https://gainz-qkql.onrender.com/order/step2)

### Account

(!!Die Links funktionieren nur, wenn man angemeldet ist!!)

- Profile: [Profil](https://gainz-qkql.onrender.com/account)
- Password: [Profil](https://gainz-qkql.onrender.com/account)
- Stammdaten: können nicht wirklich bearbeitet werden [Profil](https://gainz-qkql.onrender.com/account)
- Orderhistory: [Bestellungen](https://gainz-qkql.onrender.com/order/orders)

### Datenbearbeitung

Die Datenbearbeitung findet über das Admin-Panel statt

- Panel: [Admin-Panel](https://gainz-qkql.onrender.com/admin)

### Impressum/Kontakt

(Der Kontakt kann per Email über das Impressum hregestellt werden)

- Impressum: [Impressum](https://gainz-qkql.onrender.com/impressum)
- DSGVO: [DSGVO](https://gainz-qkql.onrender.com/dsgvo)

### Alle Seiten können, welche in der Sitemap beschrieben werden, können nur die jeweiligen Akteure betreten, welche dafür die Rechte bestitzen (siehe  [Akteure und UseCases](#aktoren-und-use-cases) )

### Wireframes Startseite

#### mobile Startseite

![mobileDesktop](/assets/images/mobileDesktop.PNG))

#### Änderungen

Im Prinzip haben wir auf unserer Startseite fast nichts geändert außer ein paar Punkte:

- das Logo ist nach Links gerrückt
- die Suche/Login und der Warenkorb sind in das Burgermenu gewandert.
- Es gibt einen SEO Text vor den Produkten
- Die Überschriften sind nicht in Grün sondern in schwart, da es sonst überladen ist
- Der Footer ist kleiner und kompakter

#### Dekstop Startseite

![HomePageDekstop](/assets/images/HomePageDesktop.PNG)

#### Änderungen

- Es gibt SEO Texte zwischen den Produkten
- Footer wurde wie mobil angepasst
- Suche erstreckt sich über von dem Logo bis zu dem User Icon

### Wireframes UC-Crud

![UC-Crud-mobile](/assets/images/stammdaten.PNG)

##### Änderungen

Da sails.js die Userverwaltung übernimmt, haben wir unseren UC-Crud nicht wie im Wireframe umgesetzt.

- Die große Hero Section hat als Überschrift "dein Account"
- es gibt zwei Zeilen für die Stammdatenverwaltung (Name/Email und Passwort)
- Unter den Stammdaten sind zwei/drei Buttons (je nach Berechtigung) angesiedelt.

### Wireframes UC-Transaction

![UC-Transaction](/assets/images/UCTransaction.PNG)

#### Änderungen

- Beschreibung des Produktes wird links neben dem Bild angezeigt
- Preis des Produktes wird unter dem Text angezeigt
- Keine Rezessionen
- nur ein Produktbild

#### Part 2

![UC-Transaction](/assets/images/UCTRans.PNG)

#### Änderungen

- keine grüne Hero Section, statdessen Beadcrumbs für die Navigation
- es existiert ein Zurück Button
- man besitzt die Möglichkeit ein Item aus der Order zu entfernen

### ER-Modell

![ER-Modell](/assets/images/ER%20Modell.PNG)

### Anpassungen

Die tatsächliche Datenbankstruktur in unserem System weicht von unserem ursprünglichen Modell ab. Insbesondere gibt es keine separaten Tabellen für "Personen", "Angestellte" und "registrierte Nutzer", sondern lediglich eine Tabelle "User", in der die jeweiligen Rollen in einer Spalte gespeichert werden. Weiterhin werden "Zahlungsdaten" und "Adressen" nicht in separate Tabellen ausgelagert, sondern in der Tabelle "User" gespeichert. Ebenso existiert keine Tabelle "Item" oder "Lager", sondern lediglich die Tabelle "Product", in der alle Produkte gespeichert werden und die Tabelle "Category", in der alle Kategorien gespeichert werden. Diese beiden Tabellen stehen in einer Beziehung zueinander. Zusätzlich steht die Tabelle "Order", in der die getätigten Bestellungen gespeichert werden, in einer Beziehung mit der Tabelle "Product".

# 2. Implementierung

## AJAX

Um Ajax sinnvoll nutzen zu können wurden zunächst zwei Enpoints bereitgestellt zur Abfrage von:
- Produkten (<basepath>/api/v1/products)
- Kategorien (<basepath>/api/v1/category)

Beispiele für die Verwendung von AJAX finden sich unter anderem in [homepageParasails](../assets/js/pages/homepage.page.js) oder [product-suche](../api/controllers/product-suche.js)
und folgen immer der gängigen Syntax:
```javascript
ajaxExampleFunction: async function(){
      fetch(`<basepath>/...`)
      .then(response => response.json())
      .then(data => {
     ...
      });})
    }
```

## Vue

Die Daten für Vue kommen in dieser Applikation in zwei Varianten zum Einsatz, einerseits direkt als script auf der page (Bsp. [ausdauerPage](../views/pages/fitnessziele/ausdauer.ejs)), andererseits über [parasails](https://www.npmjs.com/package/parasails/v/0.3.0) templates(Bsp. [homepageParasails](../assets/js/pages/homepage.page.js)).
Die Verwendung von vue in den views lässt sich schön am Beispiel der [homepage](../views/pages/homepage.ejs) sehen.

Weiterhin haben wir eine eigene Vue Component für unsere Produktkarten erstellt, da diese oft in unserer Webanwendung verwendet werden und es deutlich einfacher und eleganter ist hier mit einer eigenen Komponente zu arbeiten der lediglich ein Object vom Typ Produkt übergeben werden muss um eine Produktkarte darzustellen. 
<br>Definiert ist diese Komponente in [product.component](../assets/js/components/product.component.js)
Verwenungsbeispiele finden sich ebenfalls auf [homepageParasails](../assets/js/pages/homepage.page.js) in folgendem Format:

```html
<!--Bestseller-->
    <section class="section">
      <div class="container">
        <h3 class="title has-text-centered is-size-4">Unsere Bestseller</h3>
        <div class="columns mt-5 is-8 is-variable">
          <div class="column is-4-tablet is-3-desktop" v-for="product in products">
            <product :product="product" />
          </div>
        </div>
      </div>
    </section>

```

## Implementierung UC-INFO

Unsere Homepage wird einerseits mittels Actions, anderseits mittels Parasails angesteuert:
```html
<section class="section">
      <div class="container">
        <h3 class="title has-text-centered is-size-4">Unsere Bestseller</h3>
        <div class="columns mt-5 is-8 is-variable">
          <div class="column is-4-tablet is-3-desktop" v-for="product in products">
            <product :product="product" />
          </div>
        </div>
      </div>
    </section>

```
Mithilfe dieser Section können wir über die Produkte iterrieren, welche uns mittels der Action [view-homepage-or-redirected](/api/controllers/view-homepage-or-redirect.js) geliefert wird:

   ```javascript
    fn: async function () {

    let products = await Product.find({ where: { isActive: true }, limit: 4 });
    return {products};
  }
   ```

   Jedoch haben wir für unseren UC Info nicht nur actions benutzt, sondern auch parasails: Unsere Neuererscheinungen werden mittels parasails und ajax auf die Homepage geladen [homepageParasails](../assets/js/pages/homepage.page.js):

```javascript
fetchProducts: async function(){
      fetch(`${window.location.origin}/api/v1/products?isActive=true`)
      .then(response => response.json())
      .then(data => {
      data.forEach(element => {
        this.neuerscheinungen.push(element);
      });})
    },
```
### Use Case wurde komplett umgesetzt

## Use Case: Produkt bestellen (TRANSACTION)

Bei gainz.com haben sowohl registrierte Benutzer als auch Gäste die Möglichkeit, Produkte aus dem Sortiment in den Warenkorb zu legen. 

Wenn das gewünschte Produkt auf Lager ist, wird es dem Warenkorb hinzugefügt. 

Im Anschluss kann der gesamte Warenkorb über einen mehrstufigen Bestellprozess bezahlt und bestellt werden. 

Hier wurden auch, wie im dazugehörigen [Controller](/api/controllers/OrderController.js) einsehbar <b>sessions<b> verwendet.
### Voraussetzungen

- Produkt muss existieren
- Gäste und registrierte Benutzer haben Zugang zur Bestellfunktion

### Ablauf

1. Auswahl des gewünschten Produkts
2. Hinzufügen zum Warenkorb
3. Durchführung des Bestellprozesses

### Use Case wurde komplett umgesetzt

## Use Case: Sortiment durchsuchen (SEARCH)

### Funktionsbeschreibung

Die Besucher:innen  haben die Möglichkeit, das Produktsortiment auf der Website zu durchsuchen. 
Der Admin hat zudem die Möglichkeit, auf dem Admin-Panel nach Produkten zu suchen mit allen Beschreibungen.

### Funktionalität
- Durchsicht des gesamten Produktsortiments
- Direkte Suche nach Produkten mittels Namen

## Use Case: Lagerbestände verwalten (CRUD)

### Actor(s)
- Mitarbeiter

### Beschreibung
Dem Mitarbeiter ist es möglich, die aktuellen Lagerbestände anzupassen.
Dabei kann er sowohl Produkte und Kategorien hinzufügen, ändern oder löschen

### Vorbedingung
- Startseite aufgerufen
- Als Admin angemeldet

### Use Case wurde komplett umgesetzt


# 3. Bereitstellung

## Webseiten Nutzer

### URL: [gainz-qkql.onrender.com](https://gainz-qkql.onrender.com)

- Super-Admin: Email: admin@example.com Passwort: abc123
- registrierter Nutzer: Email: Markus.Ruhl@example.com Passwort: legger

# 4. Optimierung

### SEO

**Wichtig für SEO:**

- Auf unserer Website haben wir bewusst immer wieder Schlagworte wie "Onlineshop", "Supplements", "Bekleidung" und "Sport" in den Texten verwendet.
- Diese Schlagworte finden sich nicht nur auf der Hauptlandingpage, sondern auch auf den Unterseiten.
- Es wurden alle Bilder mit dem alt Tag ausgestattet.
- Die Meta Tags auf den Unterseiten wurden immer für die jeweilige Seite angepasst
- Wir haben versucht die Ladezeiten zu optimieren, in dem wir die Bilder möglichst klein in der Größe halten

### Optimierungsmaßnahmen

![Lighthousescore](/assets/images/lighthousescore.png)

#### Generell hatten wir von Anfang an ein guten Score, ein paar Kleinigkeiten haben wir trotzdem geändert

- Die Bilder verursachen lange Ladezeiten -> Deswegen benutzten wir vor allem auf Unterseiten Bilder mit geringerer Auflösung und oder Vektorgraphiken.
- Wir haben unnötigen HTML, CSS und Javascript Code entfernt, so wie Files, welche nicht benutzt werden, aus dem Projekt gelöscht.
- Wir haben viel vue.js benutzt, was laut der offiziellen Dokumentation von Lighthouse die Perfomance verbessert

### Pefomance Tuning

- Kleinere Bilder / Vektorgraphiken für geringere Ladezeiten
