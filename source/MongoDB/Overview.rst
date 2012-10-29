Overview
========

.. image:: ../../images/mongodb.png
   :scale: 40 %

`MongoDB`_ is a high-performance, open source, schema-free document-oriented
data store that is easy to deploy, manage and use.

Main Features
-------------

`MongoDB`_ is network accessible, written in C++ and offers the following features : 
 
 * Collection oriented storage - easy storage of object- style data 
 * Full index support, including on inner objects 
 * Query profiling 
 * Replication and fail-over support 
 * Efficient storage of binary data including large objects (e.g. videos) 
 * Auto-sharding for cloud-level scalability (Q209) 
   
High performance, scalability, and reasonable depth of functionality are the goals for the project.

What's up with the name ?
-------------------------

The name Mongo comes from "Humongous".

Why Mongo ?
-----------

Here are the some of the features that may `lead you to use MongoDB`_:

* Document-oriented

 * Documents (objects) map nicely to programming language data types
 * Embedded documents and arrays reduce need for joins
 * Dynamically-typed (schemaless) for easy schema evolution
 * No joins and no multi-document transactions for high performance and easy scalability

* High performance

 * No joins and embedding makes reads and writes fast
 * Indexes including indexing of keys from embedded documents and arrays
 * Optional streaming writes (no acknowledgements)

* High availability

 * Replicated servers with automatic master failover

* Easy scalability

 * Automatic sharding (auto-partitioning of data across servers)

  * Reads and writes are distributed over shards
  * No joins or multi-document transactions make distributed queries easy and fast

 * Eventually-consistent reads can be distributed over replicated servers

* Rich query language


.. _MongoDB: http://www.mongodb.org/

.. _lead you to use MongoDB: http://www.mongodb.org/display/DOCS/Introduction
