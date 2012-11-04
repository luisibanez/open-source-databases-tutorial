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

* Install the Neo4j Debian package with

::

  sudo apt-get install neo4j

* You may get a warning about not being able to authenticate the package. 

 * It will be OK to ignore the warning
 * at least for the purpose of playing with this tutorial.

At this point you should have Neo4j installed.

You can test it by invoking the Neo4j command shell

::

    neo4j-shell


Web Interface
~~~~~~~~~~~~~

Neo4j includes a well-crafted web interface.

In order to make it accessible, we must open the port 7474 in the server.

This is done with the command:

::

   sudo iptables -A INPUT -p tcp --dport 7474 -j ACCEPT

and the effect can be verified with 

::

   ss -lpn

and with

::

   netstat -anp | grep 7474

With this, you can now connect to the web administration tool using

::

   firefox  http://192.168.200.148:7474/webadmin

and

::

   firefox  http://192.168.200.148:7474/db/data



