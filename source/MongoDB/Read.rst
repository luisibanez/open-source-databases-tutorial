Read
====

find
----

The simplest way to retrieve data from a `MongoDB`_ collection is to use the
`find`_ command.

::

   db.movies.find()

When called without any arguments it will retrieve the entire content of the
collection (you may not want to do that in a large collection...)

Here is how it would look like in our "movies" collection

.. image:: ../../images/MongoCommandShell05.png
   :scale: 100 %

We can make the `find`_ command to be more selective by providing constrains on
the fields of the documents that we want to retrieve.

Those constrains are expressed also using a `JSON`_ format.

For example, we can set a condition on the year:

::

  db.movies.find( { year : 2003 } )

This will return results similar to

.. image:: ../../images/MongoCommandShell06.png
   :scale: 100 %

_id
---

Notice that the returned records have all an extra field `field _id`_ that we did not
provided during the update. This field is generated automatically by
`MongoDB`_, unless we provide a unique _id value at the moment of inserting the
new document.

Every document must have a unique _id field as its first attribute.

This field can not be changed once the document has been created.


More Finds
----------

* The first argument of the `find`_ command define the constrains that filter for a specific set of entries.
* The second argument can be used to specify what subset of the fields in the document must be retrieved.

For example, the following command will only show the directors of movies
produced in the year 2003.

::

   db.movies.find( { year : 2003 }, { directors : 1 } )

the output would look like:

.. image:: ../../images/MongoCommandShell07.png
   :scale: 100 %

While the following command retrieves all fields *except* the "directors"

::

   db.movies.find( { year : 2003 }, { directors : 0 } )

the output would look like:

.. image:: ../../images/MongoCommandShell08.png
   :scale: 100 %

More interesting queries can be made by taking advantage of operators.

For example we can find all the movies whose title start with "F" and retrieve their title and year:

::

   db.movies.find( { title : /^F/ }, { title : 1, year : 1 } )

The string "/^F/" represents a `regular expression`_.

* The "^" symbol stands for the beginning of the string.
* Therefore "^F" means: *any string starting with the letter F*.
 
Such query will return something similar to:

.. image:: ../../images/MongoCommandShell09.png
   :scale: 100 %

Operators
`````````

The following query will return the titles and not the ids of all movies in the collection
produced after 2001

::

   db.movies.find( { year : { $gt : 2001 } }, { title : 1, _id : 0 } )

the output will look like

.. image:: ../../images/MongoCommandShell10.png
   :scale: 100 %

The $gt `operator`_ stands for *greater than*.

Therefore, the expression:

::

    { year : { $gt : 2001 } }

reads as the condition: *where the year is greater than 2001*.

The expression:

::

    { year : { $ne : 2003 } }

reads as the condition: *where the year is not equal to 2003*.


Other `operators`_ include 

* $ne  Non equal
* $lt  Less than
* $lte Less than or equal
* $gt  Greater than
* $gte Greater than or equal
* $in  In a set (for arrays)
* $nin Not in a set
* $all For arrays, containing all the elements of the argument array

These operators are complemented with logical operators.

* $and 
* $or
* $nor
* $not

The first three connect two logical conditions.

There are also geospatial operators that can be applied to geographical coordinates fields

* $near
* $within
* $box
* $polygon
* $center

Javascript
----------

Because Javascript is the default languge for interacting with `MongoDB`_
it is possible to perform queries by building Javascript objects.

For example:

::
 
  var years_range = {}
  years_range['$lt'] = 2009
  years_range['$gt'] = 1995
  db.movies.find({ year : years_range } )




.. _MongoDB: http://www.mongodb.org/
.. _JSON: http://www.json.org/
.. _command shell: http://www.mongodb.org/display/DOCS/mongo+-+The+Interactive+Shell
.. _find: http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-Intro
.. _field _id: http://www.mongodb.org/display/DOCS/Object+IDs#ObjectIDs-The\idField
.. _regular expression: http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-RegularExpressions
.. _operator: http://docs.mongodb.org/manual/reference/operators/
.. _operators: http://docs.mongodb.org/manual/reference/operators/
