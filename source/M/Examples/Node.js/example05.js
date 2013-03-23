var nodem = require('nodem');

var db = new nodem.Gtm();

console.log("Killing a Global");

db.open();

node = {global: 'myGlobal', subscripts: ["testing"]};

var report = db.kill(node);

console.log( 'Global Value Killed = ', report );

db.close();

