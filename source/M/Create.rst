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

Then we declare the location in the environment variable "gtmgbldir".

This is the variable that the GT.M engine will check for, when looking for the
database to access.

::

   export gtmgbldir =/data/gtm/database

We now also create a directory for routines

::

   sudo mkdir -p /data/gtm/r

and declare the location of GT.M routines in the variable "gtmroutines"

::

   export gtmroutines="/data/gtm/r /opt/gtm"


Then we run the GT.M Global Directory Editor (GDE) with the command

::

    mumps -r GDE


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

Now we invoke the "mupip" command to create the database

::

  $gtm_dist/mupip create

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

