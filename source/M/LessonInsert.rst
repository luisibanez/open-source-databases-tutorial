Insert Lesson
=============

This lesson expects that you read first the sections

* Overview
* Data Model


Inserting new data into the tree structue of the database is done by simply using the **set** command.

First, we invoke the `GT.M`_ command shell interpreter by typing

::

   gtm

This will open the interpreter and respond with the prompt

::

   GTM>

In this prompt we can write the following command

::

   set ^movies("The Matrix")=""

and then, proceed to populat its information.

For example, adding the actors

::

   set ^movies("The Matrix","actors","Keanu Reeves")=""
   set ^movies("The Matrix","actors","Laurence Fishburne")=""
   set ^movies("The Matrix","actors","Carrie-Anne Moss")=""

Notice that when you create a sequence of indices, you don't need to create the
intermediary branches that lead to the end. For example, in the lines above, we
did not created first the "actors" branch. Instead, that branch section was
created as a secondary effect of creating the longer branch.

We can do the same for the "directors".

::

   set ^movies("The Matrix","directors","Andy Wachowski")=""
   set ^movies("The Matrix","directors","Lana Wachowski")=""

and the year

::

   set ^movies("The Matrix","year","1999")=""


To see the result so far, we can use the command

::

   zwrite ^movies("The Matrix",*)

that will respond with

::

   ^movies("The Matrix")=""
   ^movies("The Matrix","actors","Carrie-Anne moss")=""
   ^movies("The Matrix","actors","Keanu Reeves")=""
   ^movies("The Matrix","actors","Laurence Fishburne")=""
   ^movies("The Matrix","directors","Andy Wachowski")=""
   ^movies("The Matrix","directors","Lana Wachowski")=""
   ^movies("The Matrix","year",1999)=""


and if we want to focus on the directors, we could be more specific and use the command

::

   zwrite ^movies("The Matrix","directors",*)

that will respond with

::

   ^movies("The Matrix","directors","Andy Wachowski")=""
   ^movies("The Matrix","directors","Lana Wachowski")=""
 
Note the use of the "*" character to indicate to the `zwrite`_ command that we
want to see all the subsequent branches of the tree.

A similar exercise can be made for data related to Actors, by creating an ^actors tree and populating it with data such as:

::

   ^actors("Keanu Reeves")=""
   ^actors("Keanu Reeves","birth","date","1964-09-02")=""
   ^actors("Keanu Reeves","birth","place","city","Beirut")=""
   ^actors("Keanu Reeves","birth","place","country","Lebanon")=""
   ^actors("Keanu Reeves","nationality","Canadian")=""


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
