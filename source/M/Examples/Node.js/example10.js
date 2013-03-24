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

patient._fixProperties();

console.log("Name: " + patient.name._value);
console.log("City: " + patient.city._value);

db.close();

