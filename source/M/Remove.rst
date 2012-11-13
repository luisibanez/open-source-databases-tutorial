Remove
======

The remove operation is performed with the `kill`_ command.

The `kill`_ command will delete global variables and all their descendants. The
pieces to be deleted can be clearly identified by subindices.

For example:

::

   kill ^movies("The Matrix","directors")

will delete the "directors" branch and its two subbranches

::

   ^movies("The Matrix","directors","Andy Wachowski")
   ^movies("The Matrix","directors","Lana Wachowski")

This can be easily verified with the `zwrite`_ command:

::

   zwrite ^movies("The Matrix",*)

that now will return:

::

   ^movies("The Matrix")=""
   ^movies("The Matrix","actors","Carrie-Anne Moss")=""
   ^movies("The Matrix","actors","Keanu Reeves")=""
   ^movies("The Matrix","actors","Laurence Fishburne")=""
   ^movies("The Matrix","year",1999)=""

To remove the actors we can use the command

::

   kill ^movies("The Matrix","actors")

this will delete the "actors" branch and its three subbranches

::

   ^movies("The Matrix","actors","Carrie-Anne Moss")
   ^movies("The Matrix","actors","Keanu Reeves")
   ^movies("The Matrix","actors","Laurence Fishburne")

This, again, can be veriried with the `zwrite`_ command:

::

   zwrite ^movies("The Matrix",*)

that now will return:

::

   ^movies("The Matrix")=""
   ^movies("The Matrix","year",1999)=""

and, of course we can remove the full movie with the command

::

   kill ^movies("The Matrix")

or the entire tree of movies with

::

   kill ^movies


The `kill`_ command, is indeed a powerful one !



.. _zwrite: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s49.html
.. _kill: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s11.html

