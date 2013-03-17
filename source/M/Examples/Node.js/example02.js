var nodem = require('nodem');

var db = new nodem.Gtm();

console.log("Setting a Global");

db.open();

node = {global: 'myGlobal', subscripts: ["testing"], data: 'Hello World'};

db.set(node);

db.close();

