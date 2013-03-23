var nodem = require('nodem');

var db = new nodem.Gtm();

console.log("Getting a Global");

db.open();

node = {global: 'myGlobal', subscripts: ["testing"]};

var result = db.order(node);

console.log( 'Global Value = ', result );

db.close();

