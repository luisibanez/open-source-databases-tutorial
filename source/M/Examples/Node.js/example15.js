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

// By quering for a subscript, all its attributes
// become available as properties.
var treatementsObject = patient.$('treatments');

console.log("Surgeries:");
patient.treatments.surgeries._forEach( function( id ) {
  console.log( patient.treatments.surgeries[id]._value );
  });


// First radiation treatement
console.log("Radiation:");
console.log( patient.treatments.radiation[0]._value );
console.log( patient.treatments.radiation[1]._value );

db.close();

