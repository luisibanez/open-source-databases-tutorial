Overview
========

.. image:: ../../images/GTMLogo.jpg
   :scale: 200 %

`GT.M`_ is a hierarchical, schema-free, highly scalable database.

It is commonly used in Financial and Healthcare applications.

It is important to distinguish between:

* The `M Programming Language`_
* The `M Database`_

The language and the database tend to be used together, but they do not have
to.

It is possible to use the `M Database`_ from other programming languages.

Here we focus on M as a Database.

Main Features
-------------

The main features of M are:

* It represents a hierarchical (tree) data structure.
* Supports full Atomic, Consistent, Isolated and Durable (ACID) transactions.
* Is substantially faster for transaction processing than traditional relational databases.
* Sorts entries automatically as soon as they are inserted.
* Imposes no restrictions on the application schema.

 * The schema is entirely implemented and enforced by the application.
 * Just as it is with other “schema-free” or “NoSQL” key-value databases.


Why M ?
-----------

Here are the some of the features that may lead you to use M:

* Sparse data

 * When your records contains highly diverse fields.
 * When certain fields will be missing for a large number of records.

* Unstructured data

 * When the data itself is not fitting a specific schema.
 * When the schema changes overtime. (for example, due to government regulations).

* High availability

 * When you need to facilitate the development of continuously available applications with logical dual site operation.
 * Unlike other platforms, GT.M's functionality allows a suitably designed application to be continuously available as it is upgraded, even when the upgrade involves a database schema change.

.. _GT.M: http://www.fisglobal.com/products-technologyplatforms-gtm-productoverview
.. _M Programming Language: https://www.opensourcesoftwarepractice.org/M-Tutorial/
.. _M Database: http://www.fisglobal.com/products-technologyplatforms-gtm
