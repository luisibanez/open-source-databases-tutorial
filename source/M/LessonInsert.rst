Insert Lesson
=============

Pre-Requisites
--------------

This lesson expects that you read first the sections

* Overview
* Data Model
* Update

The hands-on activity is expected to be done in this Lesson. Therefore, as you read the sections above, simply focus on understanding the concepts.

Insert Movie
------------

Inserting new data into the tree structue of the database is done by simply using the `set`_ command.

First, we invoke the `GT.M`_ command shell interpreter by typing

::

   gtm

This will open the interpreter and respond with the prompt

::

   GTM>

In this prompt we can write the following command

::

   set ^movies("The Matrix")=""

and then, proceed to populate its information.

For example

::

  set ^movies("The Matrix")=""
  set ^movies("The Matrix","actors","Carrie-Anne Moss")=""
  set ^movies("The Matrix","actors","Keanu Reeves")=""
  set ^movies("The Matrix","actors","Laurence Fishburne")=""
  set ^movies("The Matrix","directors","Andy Wachowski")=""
  set ^movies("The Matrix","directors","Lana Wachowski")=""
  set ^movies("The Matrix","year",1999)=""


Insert Actor
------------

A similar exercise can be made for data related to Actors, by creating an ^actors tree and populating it with data such as:

::

  set ^actors("Keanu Reeves")=""
  set ^actors("Keanu Reeves","birth","date","1964-09-02")=""
  set ^actors("Keanu Reeves","birth","place","city","Beirut")=""
  set ^actors("Keanu Reeves","birth","place","country","Lebanon")=""
  set ^actors("Keanu Reeves","nationality","Canadian")=""


Exercise
~~~~~~~~

* Insert one of your favorite movies into the ^movies tree.

 * First check if the movie has not been created yet by others. Use the `zwrite`_ command to do so.
 * Then use the `set` command to add your favorie movie along with its properties

  * actors
  * year
  * directors

* Insert your favorite actor in the ^actors tree.

 * First check if the name is already there, with the `zwrite`_ command.
 * Then use the `set`_ command to add the record in the tree.


.. _GT.M: http://www.fisglobal.com/products-technologyplatforms-gtm-productoverview
.. _zwrite: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s49.html
.. _set: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s20.html
