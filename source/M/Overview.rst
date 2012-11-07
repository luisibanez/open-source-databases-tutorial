Overview
========

.. image:: ../../images/GTMLogo.jpg
   :scale: 200 %

`GT.M`_ is a database engine with scalability proven in the largest real-time
core processing systems in production at financial institutions worldwide, as
well as in large, well known healthcare institutions.

It is important to distinguish between:

* The `M Programming Language`_
* The `M Database`_

They tend to be used together, but they do not have to.

It is possible to use the M database from other programming languages.

Here we focused on M as a Database.

Main Features
-------------

The main features of M are:

* Supports full Atomic, Consistent, Isolated and Durable (ACID) transactions
* Is substantially faster for transaction processing than traditional relational databases
* Imposes no restrictions on the application schema

 * The schema is entirely implemented and enforced by the application
 * Just as it is with other “schema-free” or “NoSQL” key-value databases.


Why M ?
-----------

Here are the some of the features that may lead you to use M:

* Sparse data

 * When your records contains highly diverse fields
 * When certain fields will be missing for a large number of records

* Unstructured data

 * When the data itself is not fitting a specific schema, and/or
 * When the schema changes overtime. (e.g. due to regulations).

* High availability

 * When you need to facilitate the development of continuously available applications with logical dual site operation.
 * Unlike other platforms, GT.M's functionality allows a suitably designed application to be continuously available as it is upgraded, even when the upgrade involves a database schema change.

.. _GT.M: http://www.fisglobal.com/products-technologyplatforms-gtm-productoverview
.. _M Programming Language: https://www.opensourcesoftwarepractice.org/M-Tutorial/
.. _M Database: http://www.fisglobal.com/products-technologyplatforms-gtm
