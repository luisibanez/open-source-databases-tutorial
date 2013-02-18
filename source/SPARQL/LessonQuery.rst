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


Query 05
~~~~~~~~

We have been connecting the artist to the songs via the albums, but we could
also query graph via the direct relationship between the songs and the artist.

Try the following query

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>

  SELECT DISTINCT ?song WHERE {
     ?song dbo:artist dbr:Diana_Krall .
  }

* Compare the results of this query with the results we obtained when using the album as part of the Graph pattern


Query 06
~~~~~~~~

Find the dates in which these songs were released by using the following graph pattern.

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>

  SELECT DISTINCT ?song ?songdate WHERE {
     ?song dbo:artist dbr:Diana_Krall .
     ?song dbo:releaseDate ?songdate .
  }

* Apply this to your favorite artist

Query 07
~~~~~~~~

Request the query to return the songs ordered by their release date.

To do this use the ORDER BY clause

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>

  SELECT DISTINCT ?song ?songdate WHERE {
     ?song dbo:artist dbr:Diana_Krall .
     ?song dbo:releaseDate ?songdate .
  }

  ORDER BY ?songdate

* Apply this to your favorite artist
* Sort the results by the name of the song instead of the date

Query 08
~~~~~~~~

In some cases we may know the exact label name that has been associated with an
URI. For example, the song

* "Almost Blue"

has a DBpedida resource

::

  <http://dbpedia.org/resource/Almost_Blue_(song)>

and that resource has a human friendly label

::

   "Almost Blue (song)"

that to further clarify that it is expressed in the English language, is written as

::

   "Almost Blue (song)"@en

Why is it important to include the Language specification ?

Let's consider the word "con", that in English can mean

* A convict
* The act or process of steering a vessel
* The station or post of the person who steers a vessel
* To learn or commit to memory
* To study, peruse, or examine carefully
* An argument or opinion against something
* One who holds an opposing opinion or view

While in French... well...
it is an offensive word that can bring you in to a fight.

It is therefore useful to differentiate

* "con"@en
* "con"@fr

To indicate when we are referring to the word in English or the word in French.

We can use these type of text specification to make a search that indicate the
explicit name of a resource in a given language.

::

  PREFIX dbp: <http://dbpedia.org/property/>

  SELECT DISTINCT ?album  WHERE {
      ?album  dbp:title  "Stop This World"@en .
  }


Query 09
~~~~~~~~

The graph patterns indicated in triplets of

* Subject
* Predicate
* Object

are terminated with a "." symbol, as in

::

   ?song dbo:artist dbr:Diana_Krall .

When two or more of such triplets have the same subject, they can be written in a more compact way using ";" as terminator.

For example

::

     ?song dbo:artist dbr:Diana_Krall .
     ?song dbo:releaseDate ?songdate .

can written as

::

     ?song dbo:artist dbr:Diana_Krall ;
           dbo:releaseDate ?songdate .

In a full query this will be

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>

  SELECT DISTINCT ?song ?songdate WHERE {
     ?song dbo:artist dbr:Diana_Krall ;
           dbo:releaseDate ?songdate .
  }


* Add more statements sharing the subject.


Query 10
~~~~~~~~

The graph patterns indicated in triplets of

* Subject
* Predicate
* Object

are terminated with a "." symbol, as in

::

   ?song dbo:artist dbr:Diana_Krall .

When two or more of such triplets have the same subject and predicate, they can
be written in a more compact way using "," as terminator.

For example


The expression to search for an album that has the two songs

* "Stop This World"
* "Narrow Daylight"

can be written as

::

    ?album  dbp:title  "Stop This World"@en .
    ?album  dbp:title  "Narrow Daylight"@en .

can written as

::

      ?album  dbp:title  "Stop This World"@en ,
                         "Narrow Daylight"@en

In a full query this will be

::

  PREFIX dbp: <http://dbpedia.org/property/>

  SELECT DISTINCT ?album  WHERE {
      ?album  dbp:title  "Stop This World"@en ,
                         "Narrow Daylight"@en

  }

* Find the album where two of your favorite songs are included.


Query 11
~~~~~~~~

Restrict the results to songs released after "2001"

To do this use the FILTER function

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

  SELECT DISTINCT ?song ?songdate WHERE {
     ?song dbo:artist dbr:Diana_Krall .
     ?song dbo:releaseDate ?songdate .
     FILTER ( ?songdate > "2001"^^xsd:date )
  }


* Return only songs released after 2004
* Sort them by date
* Limit the number of results to only five songs


Query 12
~~~~~~~~

Restrict the results to songs released after "2001" and before "2009".

To do this use the FILTER function

::

  PREFIX dbo: <http://dbpedia.org/ontology/>
  PREFIX dbr: <http://dbpedia.org/resource/>
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

  SELECT DISTINCT ?song ?songdate WHERE {
     ?song dbo:artist dbr:Diana_Krall .
     ?song dbo:releaseDate ?songdate .
     FILTER ( ?songdate > "2001"^^xsd:date && ?songdate < "2009"^^xsd:date )
  }


* Return only songs released after 2003 and before 2005
* Sort them by date
* Limit the number of results to only five songs
* Use the name of your favorite artist

  * Experiment the range of dates to get the period of your favorite songs





.. _Virtuoso SPARQL Query Editor: http://dbpedia.org/sparql