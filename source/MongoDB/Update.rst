Update
======

Insert
------

Inserting new documents into a `collection`_ is done with the `insert`_ command.

This can be done from the mongo `command shell`_.

The following command inserts a new entry in our "movies" `collection`_ in the
"entertainment" `database`_.

::

  mongo entertainment

::

  db.movies.insert(
        {
          title: "The Matrix",
          year: 1999,
          directors: [ "Andy Wachowski", "Lana Wachowski" ],
          writers: [ "Andy Wachowski", "Lana Wachowski" ],
          stars: [ "Keanu Reeves", "Laurence Fishburne", "Carrie-Anne moss"] 
        }
      )

To see the effect of the insertion we can query the new entry by using the
`find`_ command:

::

  db.movies.find( { title: "The Matrix" } )

You will see something similar to the following screen:

.. image:: ../../images/MongoCommandShell03.png
   :scale: 75 %


Update
------

Modification to existing documents can be made with the `update`_ command.

The `update`_ command has two parts:

* The first one selects the documents to be modified, similar to the `find`_ command.
* The second indicates the fields that will be modified along their new values.

For example

::

  db.movies.update(
       { title: "The Matrix" },
       { $set : { "year", 2000 } }
    )

Here we are selecting the documents corresponding to movies whose title matches "The Matrix", and then we are replacing their "year" field with the value "2000".

Notice the use of the `$set`_ operator in the second part of the `update`_
command.

This operator specifies how the field is to be modified in this update.

To see the effect of the change we use again the `find`_ command:

::

  db.movies.find( { title: "The Matrix" } )


.. image:: ../../images/MongoCommandShell04.png
   :scale: 75 %

Notice how the value of the "year" field has changed after we use the `update`_
command.

Exercise
--------

* Go to the Movie Database `IMDB`_
* Find three of your favorite movies
* Insert them as documents in the movies collection using the `insert`_ command.* Review them with the `find`_ command.
* Correct any errors with the `update`_ command.

As you do, you may find that there are duplicates in the database, since some
of your peers may have selected the same movies as their favorites and during
the process of insertion MongoDB considers each one of them to be an
independent document.


.. _MongoDB: http://www.mongodb.org/
.. _JSON: http://www.json.org/
.. _command shell: http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell
.. _insert: http://www.mongodb.org/display/DOCS/Overview+-+The+MongoDB+Interactive+Shell#Overview-TheMongoDBInteractiveShell-Inserting  
.. _database: http://www.mongodb.org/display/DOCS/Databases
.. _collection: http://www.mongodb.org/display/DOCS/Collections
.. _find: http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-Intro
.. _update: http://www.mongodb.org/display/DOCS/Updating#Updating-update%28%29
.. _$set: http://www.mongodb.org/display/DOCS/Updating#Updating-%24set
.. _IMDB: http://www.imdb.com/

