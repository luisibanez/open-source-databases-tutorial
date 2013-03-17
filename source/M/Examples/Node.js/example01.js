var nodem = require('nodem');

var db = new nodem.Gtm();

connectToM = function() {

  db.open();
  db.close();

}

