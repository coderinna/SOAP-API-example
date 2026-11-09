# SOAP-API-example 

Pieni Node.js-esimerkki SOAP API.
Tässä projektissa on tehty ihan oikea CRUD-palvelu, jossa voidaan hakea, luoda, päivittää ja poistaa käyttäjiä SOAP-rajapinnan kautta.

SOAP on ehkä nykyään vähemmän näkyvä tekniikka kuin REST ja GraphQL, mutta sitä käytetään edelleen paljon vanhoissa ja isoissa järjestelmissä.
Sen takia SOAPia on edelleen ihan hyödyllistä ymmärtää.

# SOAP (Simple Object Access Protocol)

SOAP perustuu **XML:ään**. Ideana on, että asiakas lähettää palvelimelle **XML-muotoisen viestin** ja 
palvelin palauttaa **XML-muotoisen vastauksen**. Viesti kulkee niin sanotun **SOAP Envelopen** sisällä.

SOAPin ympärille tuli myös **WSDL** (Web Services Description Language).
WSDL kuvaa palvelun rajapinnan: mitä operaatioita palvelusta löytyy, mitä tietoja niille annetaan ja mitä takaisin tulee.

# Ajaminen
## Asenna riippuvuudet

npm install

## Käynnistä SOAP-palvelin

node server.js

Palvelin löytyy osoitteesta:

http://localhost:8000/soap

WSDL:

http://localhost:8000/soap?wsdl

## Aja client

TOisessa terminaalissa:
node client.js

Client tekee CRUD-operaatiot SOAP API kautta.

Sitten:
http://localhost:8000/soap?wsdl

```text

Node.js client
      │
      │ SOAP XML
      ▼
POST /soap
      │
      ▼
node-soap
      │
      ▼
GetUser(args)
      │
      ▼
SOAP XML response
      │
      ▼
Node.js client

```

# SOAPin ja RESTin eroavaisuus

1. client ei lähetä JSONia /users/123-tyyppiseen endpointiin
2. ...vaan SOAP muodostaa XML-envelopeen perustuvan viestin WSDL:n määrittelemän operaation ympärille.
3. ... janode-soap osaa generoida tämän WSDL:n perusteella.