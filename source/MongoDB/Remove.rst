Remove
======

The remove operation is very easy to compose.

First do a "find" operation for the elements that you want to remove. Then replace in that command "find" with "remove" and those same entries will be removed.

For example, to remove a record with a specific _id

First do a find:

::

   db.movies.find( { _id: ObjectId("50955daeef033bec8d758999") } )

Note the use of the "ObjectId" function, that converts the alphanumeric representation of the Id into the internal numeric representation used by MongoDB.

See what the outcome is, and if it matches what you wanted to remove, then do the command:

::

   db.movies.remove( { _id: ObjectId("50955daeef033bec8d758999") } )

Note that this will remove the entire document from the collection. Is not
simply removing one of its fields but the entire document.

