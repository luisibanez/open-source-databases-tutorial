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

We will also use in parallel the SNORQL Explorer

::

        http://dbpedia.org/snorql/

to see the hyperlinks of the same type of searches


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


Query 02
~~~~~~~~

Add a second condition to retrieve all songs from the albums of these artist

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>
  PREFIX dbp: <http://dbpedia.org/property/>

  SELECT ?song WHERE {
     ?album dbo:artist dbr:Diana_Krall .
     ?album dbp:title  ?song .
  }


Notice the addition of the prefix "dbp" pointing to the URI

::

    <http://dbpedia.org/property/>

and how the variable "?album" is used internally to relate the Graph pattern
between the artist and the songs.

* Perform this query for two of your favorite artists

  * Verify that your favorite songs appear in the results


Query 03
~~~~~~~~

Note that in the previous query the results may have repeated songs, since some
songs may have been published in multiple albums.

Add the "DISTINCT" solution modified to the SELECT clause, in oder to eliminate
repeated answers.

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>
  PREFIX dbp: <http://dbpedia.org/property/>

  SELECT DISTINCT ?song WHERE {
     ?album dbo:artist dbr:Diana_Krall .
     ?album dbp:title  ?song .
  }


* Apply this to your favorite artist

  * Verify that no songs are repeated in the results.


Query 04
~~~~~~~~

Try the search now with "Bob_Dylan".

You will find that this artist have many songs.

Use the LIMIT clause to restrict the number of returned values to 15 songs

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>
  PREFIX dbp: <http://dbpedia.org/property/>

  SELECT DISTINCT ?song WHERE {
     ?album dbo:artist dbr:Bob_Dylan .
     ?album dbp:title  ?song .
  }

  LIMIT 15


* Below LIMIT, add the "OFFSET 5" clause to start the group of 15 songs in the fifth song
* Experiment with two other values of LIMIT
* Experiment with two other values of OFFSET




Exercises
---------

* Find how many movies are in the collection from before the year 2000

.. _Virtuoso SPARQL Query Editor: http://dbpedia.org/sparql
