How To Install
==============

GT.M can be installed in the following platforms

* Linux
* OpenVMS

Download
--------

Here we will be using GT.M version `V5.5-000`_.

Simply click in the link `Download V5.5-000`_.

This will download a file called

::

    gtm_V55000_linux_x8664_pro.tar.gz

Create a directory for the files to be extracted

::

   mkdir gtm_V55000

Enter that directory

::

   cd gtm_V55000


Then proceed to decompress te file with the command

::

    tar xzvf ../gtm_V55000_linux_x8664_pro.tar.gz

This will extract of the files of the distribution insde of the gtm_V55000 directory.


Configure
---------

Now we can proceed to configure and install GT.M

Type

::

    sudo ./configure

The installation script will print

::

                       GT.M Configuration Script
  Copyright 2009, 2012 Fidelity Information Services, Inc. Use of this
  software is restricted by the provisions of your license agreement.

  What user account should own the files? (bin)

We reply with ENTER.

The script will print

::

  What group should own the files? (bin)

and we reply with ENTER again.

The script will print

::

  Should execution of GT.M be restricted to this group? (y or n)

we reply with "n" (for "no"), to allow other groups in the system to use the database.

The script will print

::

   In what directory should GT.M be installed?

We will select the directory "/opt/gtm"

The script will reply

::

   Directory /opt/gtm does not exist. Do you wish to create it as part of
   this installation? (y or n)

We answer "y" for yes.

The script will follow with

::

  Installing GT.M....

  Should UTF-8 support be installed? (y or n)


We will reply "n" for no.

The script will ask about a filename conversion:

::

  All of the GT.M MUMPS routines are distributed with uppercase names.
  You can create lowercase copies of these routines if you wish, but
  to avoid problems with compatibility in the future, consider keeping
  only the uppercase versions of the files.

  Do you want uppercase and lowercase versions of the MUMPS routines? (y or n)

To improve compatibility we answer "n" no, to this question.

The script will do:

::

  compiling all of the MUMPS routines. This may take a moment.


  GTM>
  %GDE-I-GDUSEDEFS, Using defaults for Global Directory
    /opt/gtm/gtmhelp.gld

  GDE>
  GDE>
  GDE>
  %GDE-I-VERIFY, Verification OK

  %GDE-I-GDCREATE, Creating Global Directory file
    /opt/gtm/gtmhelp.gld

  GTM>
  %GDE-I-GDUSEDEFS, Using defaults for Global Directory
    /opt/gtm/gdehelp.gld

  GDE>
  GDE>
  GDE>
  %GDE-I-VERIFY, Verification OK

  %GDE-I-GDCREATE, Creating Global Directory file
    /opt/gtm/gdehelp.gld

  Object files of M routines placed in shared library /opt/gtm/libgtmutil.so
  Keep original .o object files (y or n)?


We answer "n" for no, to remove the original .o files, since they are now redundant.

Finally, the script will reply with

::

  Installation completed. Would you like all the temporary files
  removed from this directory? (y or n)

We reply with "y" for yes, and the script will terminate.


Environment
~~~~~~~~~~~

GT.M relies on environment variables to know what database to access, and what
particular M script files to use. 

By manipulating several environment variables, users can point to a particular
database, and use a particular set of M script files.

The main environment variables to be set are:

* gtm_dist
* gtmgbldir
* gtmroutines

Here below we describe how they should be set.

Define in the environment variable "gtm_dist", the path where GT.M was installed

::

  export gtm_dist=/opt/gtm

Source settings from the gtmprofile file by doing

::

   source $gtm_dist/gtmprofile

The location where the actual database will be stored must be placed in the
environment variable "gtmgbldir" as:

::

   export gtmgbldir="/data/gtm/database"

and the locations where M script files can be found, must be placed in the
environment variable "gtmroutines", for example:

::

    export gtmroutines="/data/gtm/o(/data/gtm/r) $gtm_dist/ /opt/gtm/libgtmshr.so /opt/gtm/libgtmutil.so"

Finally, it is convenient, but not required, to define an alias for the command
line executable of the database shell interpreter

::

    alias gtm='$gtm_dist/mumps -dir'


All this, will typically be done in the ".bashrc" configuration file of every
user who needs to access the database. The combined set of lines, in a .bashrc
file, will look like the following block:

::

   export gtm_dist=/opt/gtm
   source $gtm_dist/gtmprofile
   export gtmgbldir="/data/gtm/database"
   export gtmroutines="/data/gtm/o(/data/gtm/r) $gtm_dist/ /opt/gtm/libgtmshr.so /opt/gtm/libgtmutil.so"
   alias gtm='$gtm_dist/mumps -dir'



This concludes the installation of the GT.M database engine.




.. _V5.5-000: http://sourceforge.net/projects/fis-gtm/files/GT.M-amd64-Linux/V5.5-000/
.. _Download V5.5-000: http://sourceforge.net/projects/fis-gtm/files/GT.M-amd64-Linux/V5.5-000/gtm_V55000_linux_x8664_pro.tar.gz/download
