var nodem = require('nodem');

var db = new nodem.Gtm();

db.open();

var func2 = db.function({function: 'version^node'});
console.log(func2);

db.close();

