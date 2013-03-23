var nodem = require('nodem');

var db = new nodem.Gtm();

console.log("Setting a Global");

db.open();

var node1 = {global: 'starTrek', subscripts: ["race",1], data: 'Klingon'};
db.set(node1);

var node2 = {global: 'starTrek', subscripts: ["race",2], data: 'Borg'};
db.set(node2);

var node3 = {global: 'starTrek', subscripts: ["race",3], data: 'Human'};
db.set(node3);

var node4 = {global: 'starTrek', subscripts: ["race",4], data: 'Vulcan'};
db.set(node4);

var oneness = {global: 'Oneness', subscripts: ["races"], data: 'We are all One'};
db.set(oneness);

db.merge( oneness, {global: 'starTrek'} );

db.close();

