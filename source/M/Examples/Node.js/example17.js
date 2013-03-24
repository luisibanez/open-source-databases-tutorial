var ewd = require('ewdglobals');
var nodem = require('nodem');

var db = new nodem.Gtm();

ewd.init(db);

console.log("Setting a Global");

db.open();

var patient = new ewd.GlobalNode('patient',[123456]);

var document = {
  "name": "John Doe",
  "city": "New York",
  "treatments" : {
    "surgeries" : [ "apendicectomy", "biopsy" ],
    "radiation" : [ "gamma", "x-rays" ],
    "physiotherapy" : [ "knee", "shoulder" ]
    },
  };

patient._setDocument(document);

console.log("Querying properties");

var radiationTreatmentObject = patient.$('treatments').$('radiation');

console.log("Radiation Treatements:");
radiationTreatmentObject._forEach( function( id ) {
   console.log( radiationTreatmentObject[id]._value );
   });

db.close();

