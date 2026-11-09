# SOAP-API-example

# Ajaminen
node server.js

Sitten:
http://localhost:8000/soap?wsdl


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


# SOAPin ja RESTin eroavaisuus

1. client ei lähetä JSONia /users/123-tyyppiseen endpointiin
2. ...vaan SOAP muodostaa XML-envelopeen perustuvan viestin WSDL:n määrittelemän operaation ympärille.
3. ... janode-soap osaa generoida tämän WSDL:n perusteella.