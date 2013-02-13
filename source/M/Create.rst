Create
======

Database
--------

GT.M takes advantage of the operating system infrastructure when creating
databases.

We essentially provide a filename to indicate where the database will be
stored, and in the Linux environment point to the location of that file.

Since GT.M also provides the M scripting language, we must also point out in an
environment variable the directories where we anticipate to write M scripts.

To define the location of the database first we create a directory to host it:

::

   sudo mkdir -p /data/gtm/

Then we declare the location in the environment variable "`gtmgbldir`_".

This is the variable that the GT.M engine will check for, when looking for the
database to access.

::

   export gtmgbldir=/data/gtm/database

We now also create a directory for routines (scripts in `M Language`_).

::

   sudo mkdir -p /data/gtm/r

as well as a directory for the object code compiled from the routines

::

   sudo mkdir -p /data/gtm/o

and declare the location of GT.M routines in the variable "`gtmroutines`_"

::

   export gtmroutines="/data/gtm/o(/data/gtm/r) /opt/gtm/ /opt/gtm/libgtmshr.so /opt/gtm/libgtmutil.so"

and it is expected the that "`gtm_dist`_" environment variable will be pointing
to the directory were the GT.M database engine is located.

::

  export gtm_dist=/opt/gtm

Then we run the GT.M Global Directory Editor (GDE) with the command

::

  $gtm_dist/mumps -r GDE

Note: the first time that you do this, you may have to run this command as "root".

It should respond with

::

  %GDE-I-GDUSEDEFS, Using defaults for Global Directory
          /data/gtm/database.gld


In the GDE> prompt type the following, in order to set the default database.

::

   change -s DEFAULT -f=/data/gtm/database
   exit

the system will reply with:

::

  %GDE-I-VERIFY, Verification OK

  %GDE-I-GDCREATE, Creating Global Directory file
        /data/gtm/database.gld

Now we invoke the `mupip`_ command to create the database

::

  $gtm_dist/mupip create

Note that no arguments are needed for `mupip create`_ because we just defined
what database should be used by default.

The system will respond with

::

   Created file /data/gtm/database.dat

and now we set the size of the indexing keys

::

   $gtm_dist/dse change -f -key_max=1023 -rec=4096

This will return

::

   File    /data/gtm/database.dat
   Region  DEFAULT



At this point our database is set up and ready to be populated and used.

Many different databases could co-exist in the same server. They will simply
have to be pointed to by the environment variables of the users who need to
access them.

GT.M is a *demonless* database. Meaning that, as opposed to many database
engines, M does not need to have a process that is continously running in the
server, listening for requests.

The Trees
---------

Let's now create a tree in this database.

Here we will walk through the commands that can be used in the shell to
populate the database.

Globals
~~~~~~~

The M Language has two main types of variables.

* `Local Variables`_
* `Global Variables`_

Local variables only live for the duration of a session in the M interpreter.

Global variables are stored in the database, and therefore they are

* persistent across interpreter sessions
* shared across users who have access to the database

To indicate that a variable is *Global*, we just need to use the character "^"
at the beginning of the name.

For example:

::

   set ^movies=""

will refer to the "movies" global variable, and in this case it will assign to
it the empty string.

Indices
~~~~~~~

To build the tree, we take advantage of the built in M capabilities for
managing Arrays and Subscripts.

They could be used in the very traditional form of integer numbers used as indices:

::

  set ^beatle(0)="Paul"
  set ^beatle(1)="John"
  set ^beatle(2)="Ringo"
  set ^beatle(3)="George"

Where the "set" command is use to set the values of the variables.

In order to see the result of these set commands we can use the `zwrite`_
command:

::

  zwrite ^beatle

that should print

::

  ^beatle(0)="Paul"
  ^beatle(1)="John"
  ^beatle(2)="Ringo"
  ^beatle(3)="George"

In M there is a more interesting way of organizing arrays, by taking advantage of the fact that the indices can be:

* Integers
* Negative numbers
* Float numbers
* Strings

For example, we could have rather organized the array as

::

   set ^beatle("Paul")=""
   set ^beatle("John")=""
   set ^beatle("Ringo")=""
   set ^beatle("George")=""

and now `zwrite`_ will show:

::

  ^beatle("Paul")=""
  ^beatle("John")=""
  ^beatle("Ringo")=""
  ^beatle("George")=""

We can as well, start composing indices, and in that way build the branches of a tree.

::

  set ^beatle("John","birth","date","1940-10-09")=""
  set ^beatle("John","birth","place","Liverpool")=""
  set ^beatle("John","sons","Julian")=""
  set ^beatle("John","sons","Julian","birth","date","1963-04-08")=""
  set ^beatle("John","sons","Julian","birth","place","Liverpool")=""
  set ^beatle("John","wifes","Cynthia","birth","date","1939-09-10")=""
  set ^beatle("John","wifes","Cynthia","birth","place","Liverpool")=""
  set ^beatle("John","wifes","Yoko","birth","date","1933-02-18")=""
  set ^beatle("John","wifes","Yoko","birth","place","Tokyo")=""


It is important to remark above how the "indices" by themselves **are** data,
and are storing information that in other database styles will be referred as
*fields* or *properties*.

The data model allows for continue adding details to any branch, deeper and
deeper, regardless of whether other branches have those fields or not.

Note that in this example, we have created a "Beatles"-centric database, where
all the elements are arranged according to their relationship with a particular
Beatle.

For example, we can add some albums to Yoko, without having to create that same
field for Cynthia

::

  set ^beatle("John","wifes","Yoko","albums","Season of Glass")=""
  set ^beatle("John","wifes","Yoko","albums","Yes, I'm a Witch")=""

One way to approach the data model for hierarchical databases is to think of them as a language, where the sequenece of indices are actual pieces of an expression.

For example:

::

  set ^beatle("John","wifes","Yoko","albums","Season of Glass")=""

is equivalent to the expression


  One of the **beatles** was called **John**, one of his **wifes** was called **Yoko**, who authored a music **album** entitled **Seasons of Glass**.


By being a **Beatle Centric** database, here we will be able to make very
efficient queries for information about a particular Beatle, by simply
navigating the branches of the tree that are connected to this particular
Beatle.



.. _M Language:  https://www.opensourcesoftwarepractice.org/M-Tutorial/
.. _gtm_dist:    http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch03s02.html#gtm_dist
.. _gtmgbldir:   http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch03s02.html#gtmgbldir
.. _gtmroutines: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch03s02.html#gtmroutines
.. _Global Variables: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch05s03.html#Global_Var_Resource_Name_Env
.. _Local Variables: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch05s03.html#Local_Variables
.. _zwrite: http://tinco.pair.com/bhaskar/gtm/doc/books/pg/UNIX_manual/ch06s49.html
.. _mupip: http://tinco.pair.com/bhaskar/gtm/doc/books/ao/UNIX_manual/ch01s06.html#id545055
.. _mupip create: http://tinco.pair.com/bhaskar/gtm/doc/books/ao/UNIX_manual/gdm.html#mup_create
