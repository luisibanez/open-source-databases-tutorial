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

var treatmentsObject = patient.$('treatments');

//
//  Add more elements to the array of treatments.
//
var chemotherapyObject = treatmentsObject.$("chemotherapy");
var sessionsObject = chemotherapyObject.$("sessions");
sessionsObject.$('January')._value = "dose 1";
sessionsObject.$('February')._value = "dose 3";
sessionsObject.$('March')._value = "dose 5";
sessionsObject.$('April')._value = "dose 3";


var record = patient._getDocument();
console.log("patient info: " + JSON.stringify(record));

db.close();

