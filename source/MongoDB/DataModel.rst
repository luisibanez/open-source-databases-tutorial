Data Model
==========

The `Data Model`_ used by `MongoDB`_ has the following hierarchy.

* A Mongo system holds a set of databases
* A database holds a set of collections
* A collection holds a set of documents
* A document is a set of fields
* A field is a key-value pair
* A key is a name (string)
* A value is a

  *  basic type like string, integer, float, timestamp, binary, etc.,
  *  a document, or
  *  an array of values

One way to see this data model is through a `mapping from SQL concepts into MongoDB concepts`_.

+-----------------+--------------------------+
| MySQL term      | Mongo term               | 
+=================+==========================+
| database        | `database`_              |
+-----------------+--------------------------+
| table           | `collection`_            |
+-----------------+--------------------------+
| index           | `index`_                 |
+-----------------+--------------------------+
| row             | `BSON`_ document         |
+-----------------+--------------------------+
| column          | `BSON`_ field            |
+-----------------+--------------------------+
| join            | `embedding and linking`_ |
+-----------------+--------------------------+
| primary key     | `id field`_              |
+-----------------+--------------------------+
| group by        | `aggregation`_           |
+-----------------+--------------------------+

.. _MongoDB: http://www.mongodb.org/
.. _Data Model: http://www.mongodb.org/display/DOCS/Introduction
.. _mapping from SQL concepts into MongoDB concepts: http://www.mongodb.org/display/DOCS/SQL+to+Mongo+Mapping+Chart
.. _BSON: http://bsonspec.org/

.. _database: http://www.mongodb.org/display/DOCS/Databases
.. _collection: http://www.mongodb.org/display/DOCS/Collections
.. _index: http://www.mongodb.org/display/DOCS/Indexes
.. _embedding and linking: http://www.mongodb.org/display/DOCS/Schema+Design
.. _id field: http://www.mongodb.org/display/DOCS/Object+IDs
.. _aggregation: http://www.mongodb.org/display/DOCS/SQL+to+Aggregation+Framework+Mapping+Chart
