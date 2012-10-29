BSON
====

`MongoDB`_ uses `BSON`_ as the data storage and network transfer format for "documents". 

`BSON`_ at first seems BLOB-like, but the Mongo database understands BSON internals. This means that MongoDB can "reach inside" BSON objects, even nested ones. Among other things, this allows MongoDB to build indexes and match objects against query expressions on both top-level and nested BSON keys.

* `BSON`_ is a binary encoded serialization of `JSON`_-like documents.
* `BSON`_ is designed to be lightweight, traversable, and efficient. 
* `BSON`_, like `JSON`_, supports the embedding of objects and arrays within other objects and arrays.


JSON
====

`JSON`_ is a data representation format based on plain text.

The following is an example of how `JSON`_ could be used for representing data
about Movies

::

  {
  title: "Forrest Gump",
  year: 1994,
  director: "Robert Zemeckis",
  writers: [ "Winston Groom", "Eric Roth" ],
  stars: [ "Tom Hanks", "Robin Wright", "Gary Sinise" ]
  }

and

::

  {
  title: "The Matrix",
  year: 1999,
  directors: [ "Andy Wachowski", "Lana Wachowski" ],
  writers: [ "Andy Wachowski", "Lana Wachowski" ],
  stars: [ "Keanu Reeves", "Laurence Fishburne", Carrie-Anne moss"]
  }
 

Overall, the representation is composed of Key-Value pairs. 

* A ":" symbol connect the key with the value.
* Multiple key-value pairs are separated by commas.
* Values that have multiple entries are grouped in square brackets "[...]".

The data structure can be nested, and this provides a great deal of flexibility
on how data can be represented.


.. _JSON: http://www.json.org/
.. _BSON: http://bsonspec.org/
.. _BSON Specification: http://www.mongodb.org/display/DOCS/BSON
.. _MongoDB: http://www.mongodb.org/

