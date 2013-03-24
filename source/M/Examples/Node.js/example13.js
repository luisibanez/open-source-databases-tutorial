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
  "allergies" : [ "strawberries", "peanuts", "penicillin" ]
  };

patient._setDocument(document);

console.log("Querying properties");

var record = patient._getDocument();
console.log("patient info: " + JSON.stringify(record));

db.close();

