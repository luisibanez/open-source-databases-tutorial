var ewd = require('ewdgateway2');
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

var nameObj = patient.$('name');
var nameVal = nameObj._value;

console.log("patient name: " + nameVal);


db.close();

