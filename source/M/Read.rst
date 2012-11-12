Read
====

zwrite
------

The simplest way to retrieve data from a `GT.M`_ global tree is to use the
`zwrite`_ command.

::

   zwrite ^movies("The Matrix",*)

The use is trivial when we know what indices exist.

For example, checking for "actors"

::

   zwrite ^movies("The Matrix","actors",*)

The zwrite is very convenient for interactive sessions with a human operator,
but it is less useful for interacting programatically with the database. This
is the reason why the following tree-branch navigation techniques are commonly
used instead.

Navigating
----------

Things are more interesting when we don't know in advance what indices has been
used in a subset of branches in the tree.

In those cases we have to navigate down the branches, as we ask questions about
the indices.

$ORDER
~~~~~~

One way to perform such navigation is by using the "`$ORDER()`_" function from the
`M Language`_.

This function returns the next index in a subbranch.

For example, if we have set the Global:

::

  set ^tree(5,"red")=""
  set ^tree(5,"blue")=""
  set ^tree(5,"green")=""

Note the as we go inserting values, the `M Database` sorts them automatically 

This can be easily verified with the `zwrite`_ command:

::

   zwrite ^tree(5,*)

that returns

::

  ^tree(5,"blue")=""
  ^tree(5,"green")=""
  ^tree(5,"red")=""


Given this automatic sorting, the call to the $ORDER function

::

  write $ORDER(^tree(5,"blue"))

will return 

::

  green

and the call to 

::

  write $ORDER(^tree(5,"green"))

will return 

::

  red

and finally, the call to

::

  write $ORDER(^tree(5,"red"))

will return the empty string, indicating the end of sub-branches at that level.

To start, the cycle, however, we don't need to know the first index, since we can use the empty string.

The command

::

  write $ORDER(^tree(5,""))

will return 

::

  blue

That happens to be the first index.

We can now wrap all this in a "for loop" expression

::

   set idx=""
   for  set idx=$ORDER(^tree(5,idx))  quit:idx=""  write idx,!

Note that the `M Language`_ is very strict about spaces. In the expression above:

* Between the "for" and "set" commands there are two spaces.
* Between the "set" command and "idx" variable there is only one space.
* Between the closing parenthesis of $ORDER() function and the "quit" command there are two spaces.
* Between the closing double quote and the "write" command there are two spaces.

Exercise
````````

* Modify the "for-loop" expression above in order to get all the actors of the movie "The Matrix".


$QUERY
~~~~~~

The schema-free nature of the M tree data structure, also means that we don't
know in advance how many branching levels exist in a given Global.

Fortunately, the "`$QUERY()`_" function from the `M Language`_, helps us to
answer that question in an incremental manner.

This function returns the subscripted node name, independently of branching
level.

For example, if we have set the Global by doing:

::

  set ^tree(5,"red")=""
  set ^tree(5,"blue")=""
  set ^tree(5,"green")=""
  set ^tree(5,"green","a")=""
  set ^tree(5,"green","b")=""
  set ^tree(5,"green","c")=""

Note the as we go inserting values, the `M Database` sorts them automatically 

This can be easily verified with the `zwrite`_ command:

::

   zwrite ^tree(5,*)

that returns

::

   ^tree(5,"blue")=""
   ^tree(5,"green")=""
   ^tree(5,"green","a")=""
   ^tree(5,"green","b")=""
   ^tree(5,"green","c")=""
   ^tree(5,"red")=""


Given this automatic sorting, the call to the `$QUERY`_ function

::

  write $QUERY(^tree(5,"blue"))

will return 

::

  ^tree(5,"green")

Notice that, this time the return is the full name of the next branch of the
"^tree" object.

This illustrates a powerful feature of the `M Language`_, and it is ability to
be aware of its own expressions. That is, we can give to M expressions, other M
expressions as arguments.

Let's do another `$QUERY`_ call:

::

  write $QUERY(^tree(5,"green"))

will return 

::

  ^tree(5,"green","a")

Notice that here, we navigate one level deeper in the tree hierarchy, and get
to the "a" sub-branch from the "green" branch.

and finally, the call to

::

  write $QUERY(^tree(5,"green","c"))

will return

::

  ^tree(5,"red")

Which is one level up the tree


Let's us this now to navigate the entire tree.

To start, the cycle, however, we don't need to know the first index, since we can use the name of the Global

The command

::

  write $QUERY(^tree)

will return 

::

  ^tree(5,"blue")

That happens to be the first branch that has a value assigned to it. This value
happens to be an empty string, but it is still a value assigned.

We can now wrap all this in a "for loop" expression

::

   set idx="^tree"
   for  set idx=$QUERY(@idx)  quit:idx=""  write idx,!

Here, the index is now using "names" of tree branches, instead of the indices
that we used in the $ORDER() function. Note the use of the "@" symbol in the
"@idx" expression that is passed as argument to the $QUERY() function. The "@"
symbol specifies that we are going to use the "content" of idx, as if it was
written literally as the argument of the $QUERY function.

Note again, that the `M Language`_ is very strict about spaces. In the expression above:

* Between the "for" and "set" commands there are two spaces.
* Between the "set" command and "idx" variable there is only one space.
* Between the closing parenthesis of $QUERY() function and the "quit" command there are two spaces.
* Between the closing double quote and the "write" command there are two spaces.

This expression will return:

::

  ^tree(5,"blue")
  ^tree(5,"green")
  ^tree(5,"green","a")
  ^tree(5,"green","b")
  ^tree(5,"green","c")
  ^tree(5,"red")



Exercise
````````

* Modify the "for-loop" expression above in order to get all the data elements of the movie "The Matrix".

Hint: to assign "^movies("The Matrix")" to the variable idx on can use the two steps

::

   set title="The Matrix"
   set idx="^movies(title)"





.. _GT.M: http://www.fisglobal.com/products-technologyplatforms-gtm-productoverview
.. _zwrite: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s49.html
.. _M Language: https://www.opensourcesoftwarepractice.org/M-Tutorial/
.. _$ORDER(): http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch07s13.html
.. _$QUERY(): http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch07s17.html
