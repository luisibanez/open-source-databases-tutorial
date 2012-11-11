Update
======

Insert
------

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
   set ^movies("The Matrix","actors","Carrie-Anne moss")=""

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



.. _GT.M: http://www.fisglobal.com/products-technologyplatforms-gtm-productoverview
.. _zwrite: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s49.html
