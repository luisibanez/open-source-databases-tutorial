Query Lesson
=============

Pre-Requisites
--------------

This lesson expects that you read first the sections

* Overview
* Data Model
* Read

The hands-on activity is expected to be done in this Lesson. Therefore, as you read the sections above, simply focus on understanding the concepts.

Querying Movies
---------------

Retrieving data from one of the tree structues in the database is done by simply using the `zwrite`_ command.

First, we invoke the `GT.M`_ command shell interpreter by typing

::

   gtm

This will open the interpreter and respond with the prompt

::

   GTM>

In this prompt we can write the following command

::

   zwrite ^movies("The Matrix",*)

That will retrieve information similar to

::

  ^movies("The Matrix")=""
  ^movies("The Matrix","actors","Carrie-Anne Moss")=""
  ^movies("The Matrix","actors","Keanu Reeves")=""
  ^movies("The Matrix","actors","Laurence Fishburne")=""
  ^movies("The Matrix","directors","Andy Wachowski")=""
  ^movies("The Matrix","directors","Lana Wachowski")=""
  ^movies("The Matrix","year",1999)=""

A more focused query can be performed by further specifying the branches of the
tree. Notice that this is useful when the tree has been organized in a way that
is consistent with what the more common queries are expected to be.

We can easily get here the list of actors in a movie

::

   zwrite ^movies("The Matrix","actors",*)

However, queries such as

* Find all the movies made in 1999.
* Find all the movies directed where "Laurence Fishburne" is an actor.

Would require to write scripts in the `M Language`_.


Exercise
~~~~~~~~

* Retrieve the names of directors of your favorite movie


Querying Actors
---------------

A similar exercise can be made for retrieving data related to Actors from the
^actors tree.

The expression:

::

  zwrite ^actors("Keanu Reeves","birth",*)

Will give us the details of birth date and place for an actor.

In this case

::

  ^actors("Keanu Reeves","birth","date","1964-09-02")=""
  ^actors("Keanu Reeves","birth","place","city","Beirut")=""
  ^actors("Keanu Reeves","birth","place","country","Lebanon")=""

Note that the hierarchical nature of the database permits that we may have more
details from some actors than others.

This particular query is trivial here, because we have aggregated the birth information in a single branch when we populated the database.

The alternative query of

* Find all actors born in Lebanon
* Find all actors born in 1964

will again require that we write scripts in the `M Language`_.


Exercise
~~~~~~~~

* Retrieve the birth information of your favorite actor.


M Scripts
---------

The `M Language`_ allows to express powerful queries on the trees.

Let's consider the question of finding all the movies made on 1999.

This can be answered with the following script

::

  set title=""
  for  set title=$ORDER(^movies(title))  quit:title=""  if $ORDER(^movies(title,"year",""))=1999 write title

Let's deconstruct it from left to right.

* The first for-loop visits all the movies, by walking down the indices of their titles.
* The if condition calls for the $ORDER function to get the branch that is following the "year" branch, and therefore getting the year data. then comparing it to 1999
* Finally, if that if expression is true, we write the title of the movie to the console.
* Note that spaces are very important in M.

 * There are two spaces between "for" and "set".
 * There are two spaces before "quit"
 * There are two spaces before "if"
 * There is only on space before "write"


Exercise
~~~~~~~~

* Query the ^movies tree to find all the movies of your favorite actor.

.. _GT.M: http://www.fisglobal.com/products-technologyplatforms-gtm-productoverview
.. _zwrite: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s49.html
.. _set: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s20.html
.. _M Language: https://www.opensourcesoftwarepractice.org/M-Tutorial/
.. _$ORDER(): http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch07s13.html
.. _$QUERY(): http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch07s17.html
