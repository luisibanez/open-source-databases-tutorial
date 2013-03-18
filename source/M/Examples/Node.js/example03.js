var nodem = require('nodem');

var db = new nodem.Gtm();

console.log("Getting a Global");

db.open();

node = {global: 'myGlobal', subscripts: ["testing"]};

var data = db.get(node).data;

console.log( 'Global Value = ', data );

db.close();

