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
//  Add more elements to the array of physiotherapies,
//  by accessing it as a native node.js array.
//

var physioTheraphyArray = physiotherapyObject._getDocument();
physioTheraphyArray.push('ankle');
physioTheraphyArray.push('wrist');
physioTheraphyArray.push('neck');

//
//  This behaves like a native JSON database.
//
physiotherapyObject._setDocument(physioTheraphyArray);

// the following works because array member 4 already exists, so the member is overwritten:
physiotherapyObject[4]._value = 'spine';

// but to create previously non-existent member 5, we must use $() syntax:
physiotherapyObject.$(5)._value = 'elbow';

console.log("Physiotherapy Treatements:");
physiotherapyObject._forEach( function( id, subNode ) {
   console.log('id ' + id + ': ' + subNode._value );
   });

db.close();

