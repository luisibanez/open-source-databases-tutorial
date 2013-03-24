var ewd = require('ewdglobals');
var nodem = require('nodem');

var db = new nodem.Gtm();

ewd.init(db);

console.log("Setting a Global");

db.open();

var patient = new ewd.GlobalNode('patient',[123456]);

var document = {
  "name": "John Doe",
  "city": "New York"
  };

patient._setDocument(document);


console.log("Querying properties");

var nameObject = patient.$('name');
var nameValue  = nameObject._value;

var cityObject = patient.$('city');
var cityValue  = cityObject._value;

console.log("Name: " + nameValue);
console.log("City: " + cityValue);

db.close();

