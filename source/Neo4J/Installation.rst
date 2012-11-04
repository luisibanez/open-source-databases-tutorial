How To Install
==============

Linux
-----

Experimental packages are available for Debian.

Instructions can be found at

       http://debian.neo4j.org/


Do the following steps

* Add a new file to the apt-get sources by doing

::

  sudo vim /etc/apt/sources.list.d/neo4j.list:

* Put this file the following line

::

  deb http://debian.neo4j.org/repo stable/

* Update the list of sources by doing

::

  sudo apt-get update

* Install the Neo4J Debian package with

::

  sudo apt-get install neo4j

* You may get a warning about not being able to authenticate the package. 

 * It will be OK to ignore the warning
 * at least for the purpose of playing with this tutorial.

At this point you should have Neo4J installed.

You can test it by invoking the Neo4J command shell

::

    neo4j-shell



