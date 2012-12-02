Insert Lesson
=============

Pre-Requisites
--------------

This lesson expects that you read first the sections

* Overview
* Data Model

The hands-on activity is expected to be done in this Lesson. Therefore, as you read the sections above, simply focus on understanding the concepts.

For this lesson we will use the Python interface to MongoDB: `pymongo`_.

In order to interact with pymongo, you first start the python interpreter with

::

    python

and then, from the Python prompt:

::

   >>>


you type:

::

    >>>  import pymongo

Then you create a connection with the pymongo interface by typing

::

    >>>  cn = pymongo.Connection()

and now you can see what databases are available, with:

::

    >>>  print cn.database_names()

This will respond with a list that may look like the following:

::

   [u'book', u'entertainment', u'imdb', u'test', u'local']


We can select a specific database called "entertainment" with the command:

::

   >>> db = cn['entertainment']

and we can take a look a the collections inside this database with:

::

   >>> print db.collection_names()

to see the number of documents in a given collection we can do:

::

   >>> print db.movies.count()

Putting all together we have:

::

  >>> import pymongo
  >>> cn = pymongo.Connection()
  >>> print cn.database_names()
  >>> db = cn['entertainment']
  >>> print db.collection_names()
  >>> print db.movies.count()


Insert Movie
------------

We can now insert a new movie document in the "movies" collection of the "entertainment" database.

Insertion is performed with the "insert" command.

Let's first put the information about `the movie`_ in a variable called "newmovie":

::

  >>> newmovie = {"title":"Vicky Cristina Barcelona","year":2008,"directors":["Woody Allen"],"writers":["Woody Allen"],"starts":["Rebecca Hall","Scarlett Johansson","Javier Bardem"]}

then pass this variable "newmovie" as the argument to the "insert" function:

::

  >>> db.movies.insert(newmovie)

and we can quickly verify if it was created, with the "find" function:

::

  >>> db.movies.find_one({"title":"Vicky Cristina Barcelona"})

that should return something similar to:

::

  {u'title': u'Vicky Cristina Barcelona', u'starts': [u'Rebecca Hall', u'Scarlett Johansson', u'Javier Bardem'], u'directors': [u'Woody Allen'], u'writers': [u'Woody Allen'], u'year': 2008, u'_id': ObjectId('50bba5f19171830ef0000000')}

.. _the movie: http://www.imdb.com/title/tt0497465/
.. _pymongo: http://api.mongodb.org/python/current/#
