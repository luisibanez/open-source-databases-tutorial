var nodem = require('nodem');

var db = new nodem.Gtm();

console.log("Check if a Global has data");

db.open();

node = {global: 'myGlobal', subscripts: ["testing"]};

var result = db.data(node);

console.log( 'Return = ', result );

db.close();

