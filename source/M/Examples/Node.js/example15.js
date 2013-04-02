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

// note that _setDocument() has instantiated all global levels it created as GlobalNode instances,
// so no need to use $('xxx') syntax to access them:

console.log("Surgeries:");
patient.treatments.surgeries._forEach( function( id, subNode ) {
  console.log(subNode._value );
  });


// First radiation treatement
console.log("Radiation:");
console.log( patient.treatments.radiation[0]._value );
console.log( patient.treatments.radiation[1]._value );

db.close();

