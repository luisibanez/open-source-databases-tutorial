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
  "city": "New York"
  };

patient._setDocument(document);


console.log("Changing properties");

var cityObject = patient.$('city');

console.log("Old City: " + cityObject._value);

patient.city._value = "Washington";

console.log("New City: " + cityObject._value);


db.close();

