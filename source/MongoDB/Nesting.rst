Nesting
=======

One of the interesting characteristics of `MongoDB`_ is its ability to have
nested entries.

This is derived from the fact of using `BSON`_ as the data structure for
storing entries in the database.

We could have started with the assumption that there is one script writer.

For example:

::

        {
          title: "Avatar",
          year: 2009,
          director: "James Cameron",
          writer: "James Cameron",
          stars: [ "Sam Worthington", "Zoe Saldana", "Signourney Weaver" ]
        }

or

::

        {
          title: "Star Wars",
          year: 1977,
          director: "George Lucas",
          writer: "George Lucas",
          stars: [ "Mark Hamill", "Harrison Ford", "Carrie Fisher" ]
        }


Then realize that it is common to find multiple writers working together on the
script of a movie, and therefore the "writers" field should be a list of names.

::

        {
          title: "Pulp Fiction",
          year: 1994,
          director: "Quentin Tarantino",
          writers: [ "Quentin Tarantino", "Roger Avary" ],
          stars: [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
        }

Represented, of course by a JSON array delimited by "[...]".

It is common also for a movie to be based on a book. In such cases, the
`IMDB`_ database, properly credits the book in the list of writers of the
movie.

Notice however, how that breaks our presumption of the original schema.  Here
we come to realize that the field "writers" can be a list of names or books.

A book is a more complex data entity than a name. We could describe a book in
JSON as:

::

        {
          author : "J. K. Rowling",
          title  : "Harry Potter and the Philosopher's Stone",
          year   : 1997,
          Genre  : "Fantasy",
          ISBN   : "0-7475-3269-9"
        }

Then, the movie that results from the adaptation of the book could be:

::

        {
          title: "Harry Potter and the Sorcerer's Stone",
          year: 2001,
          director: "Chris Columbus",
          writers: [ "Steves Kloves",  {
                  author : "J. K. Rowling",
                  title  : "Harry Potter and the Philosopher's Stone",
                  year   : 1997,
                  Genre  : "Fantasy",
                  ISBN   : "0-7475-3269-9"
                } ],
          stars: [ "Daniel Radcliffe", "Rupert Grint", "Richard Harris"]
        }

Note how the entire entry of the original Harry Potter book is now a
sub-document of the document describing the movie in which the book was
adapted.

This level of nesting can continue in any of the fields of a JSON data
structure.

Exercise
````````

Search the `IMDB`_ database and find one of your favorite movies that is based
on a book. Create its corresponding entry in our "movies" collection, by
nesting the book inside the movie.

.. _JSON: http://www.json.org/
.. _BSON: http://bsonspec.org/
.. _MongoDB: http://www.mongodb.org/
.. _IMDB: http://www.imdb.com/

