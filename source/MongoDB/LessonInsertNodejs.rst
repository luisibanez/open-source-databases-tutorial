Insert with Nodejs
==================

Pre-Requisites
--------------

This lesson expects that you read first the sections

* Overview
* Data Model

The hands-on activity is expected to be done in this Lesson. Therefore, as you
read the sections above, simply focus on understanding the concepts.

For this lesson we will use the Node.js interface to MongoDB: `node-mongodb-native`_.

In order to interact with MongoDB from Node.js, we will write scripts in files,
and then will run those scripts with the node.js command.
the command

::

    node

Let's open a file mongo01.js with a text editor and write on it

::

  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
  });


Save this file.

Execute it by typing:

::

    node  mongo01.js

This command imports into node.js the driver that connects to the MongoDB
database.


.. _node-mongodb-native: http://mongodb.github.com/node-mongodb-native/
