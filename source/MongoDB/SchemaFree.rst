Schema Free
===========

One of the key characteristics of MongoDB is the fact that is does not impose a
pre-defined schema in the database.

We can add different types of fields, at different levels of the JSON data
structure, as needed by the document, without being restricted by a particular
predefined schema.

We can start our "collection" with the a simple assumption of how to represent a movie.

For example:

::

       {
          title: "Back to the Future",
          year: 1985,
          director: "Robert Zemeckis",
          writers: [ "Robert Zemeckis", "Bob Gale" ],
          stars: [ "Michael J. Fox", "Christopher Lloyd", "Lea Thompson" ]
       }

Then start exploring less standard types of movies.

For example `One Day on Earth`_:

::

        {
          title: "One Day on Earth",
          year: 2012,
          director: "Kyle Ruddick",
          creator: [ "Kyle Ruddick" ],
        }

Here, instead of a "writer" we have a "creator".

It helps to know that `One Day on Earth`_ is a documentary created by
`crowdsourcing`_ video snippets from volunteers all across the world, in order
to reconstruct 24 hours of life on planet earth. 

There is therefore no writer, but a creator of the concept of the movie.

There are no stars or actors, but the thousands of people participating on the
movie.

A new version of the movie will be published on December 12, 2012, and you can
contribute your own video snippet to it by `signing up here`_.


.. _One Day on Earth: http://www.onedayonearth.org/
.. _signing up here: http://www.onedayonearth.org/main/authorization/signUp?
.. _crowdsourcing: http://en.wikipedia.org/wiki/Crowdsourcing

