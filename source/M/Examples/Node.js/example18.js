var ewd = require('ewdglobals');
var nodem = require('nodem');

var db = new nodem.Gtm();

ewd.init(db);

console.log("Setting a Global");

db.open();

var patient = new ewd.GlobalNode('patient',[123456]);

patient._delete();

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

var physiotherapyObject = patient.$('treatments').$('physiotherapy');

console.log(physiotherapyObject);

physiotherapyObject[0]._value = "ankle";


console.log("Physiotherapy Treatements:");
physiotherapyObject._forEach( function( id ) {
   console.log( physiotherapyObject[id]._value );
   });

db.close();

