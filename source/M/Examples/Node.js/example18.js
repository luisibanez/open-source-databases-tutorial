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

console.log("Adding properties");

var physiotherapyObject = patient.treatments.physiotherapy;

//
//  Add more elements to the array of physiotherapies.
//
physiotherapyObject.$(2)._value = "ankle";
physiotherapyObject.$(3)._value = "wrist";
physiotherapyObject.$(4)._value = "neck";


console.log("Physiotherapy Treatements:");
physiotherapyObject._forEach( function( id, subNode ) {
   console.log('id ' + id + ': ' + subNode._value );
   });

console.log("or like this: Physiotherapy Treatements:");
physiotherapyObject._forEach( function( id, subNode ) {
   console.log('id ' + id + ': ' + physiotherapyObject[id]._value );
   });

db.close();

