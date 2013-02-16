Query Lesson
=============

Pre-Requisites
--------------

This lesson expects that you read first the sections

* Overview

The hands-on activity is expected to be done in this Lesson. Therefore, as you
read the sections above, simply focus on understanding the concepts.

Resources
---------

For this lesson we will use the Web interface of `DBpedia`_.

To start, open your Web Browser at the address of the `Virtuoso SPARQL Query Editor`_

::

        http://dbpedia.org/sparql

We will also use in parallel the SNORQL Explorere

::

        http://dbpedia.org/snorql/


Queries
-------

Query 01
~~~~~~~~

Go to the DBpedia SPARQL end point.

::

        http://dbpedia.org/sparql

and in the "Query Text" window, type:

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>

  SELECT ?album WHERE {
     ?album dbo:artist dbr:Diana_Krall .
  }


* Replace the name of "Diana Krall" with your favorite artist.

  * Note that spaces in the name are replaced with "_" underscores.
  * This follows the format of the Wikipedia URLs



Exercises
---------

* Find how many movies are in the collection from before the year 2000

.. _Virtuoso SPARQL Query Editor: http://dbpedia.org/sparql
