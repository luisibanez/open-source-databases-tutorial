Duplicate Entries
=================

The default behavior of MongoDB when doing inserts is that every entry creates
a new document. This applies even if the document content is identical.

In our case, if a particular movie is already in our collection, and we attempt
to insert it again, a second document is created with identical content and a
different Id.

If you want to avoid duplications of documents, you can do `upserts`_ (update
or insert), which will perform an insert if the new document is unique, or will
perform an update if the document already exists.

This is done with the "update" command, and passing true to its third argument.

For example:

::

   db.movies.update( { title : "Alien" }, { title : "Alien" }, 1 )

and very the insertions or update with the find command:

::

   db.movies.find( { title : "Alien" }, { title:1 } )


.. _upserts: http://www.mongodb.org/display/DOCS/Updating#Updating-{{upserts}}

