Overview
========

.. image:: ../../images/neo4j.png
   :scale: 75 %

`Neo4J`_ is a graph database, storing data in the nodes and relationships of a
graph.

The most generic of data structures, a graph elegantly represents any kind of
data, preserving the natural structure of the domain.


Main Features
-------------

`Neo4J`_ is an open source project,

* An intuitive graph-oriented model for data representation
* A disk-based, native storage manager completely optimized for storing graph structures for maximum performance and scalability
* Massive scalability. Neo4j can handle graphs of several billion nodes/relationships/properties on a single machine and can scale out across multiple machines
* A powerful traversal framework for high-speed traversals in the node space
* Can be deployed as a full server or a very slim database with a small footprint (~750k jar)
* A simple and convenient object-oriented API
* True ACID transactions

Why Neo4J
---------

* Flexibility

 * The Graph nature of Neo4J implies that it can adapt easily to describe many problems.
 * It has been called *whiteboard friendly* meaning that *if you can represent the problem in a whiteboard by drawing boxes and relationships, then you can store it in Neo4J*.

* Focus on Relationships
 
 * Rather than focusing on the commonalities among sets of values, Neo4J focuses on the relationships between values.
 * Therefore, it can store highly variable data and still explore its relationships in a natural way.

* Scalable

 * Small enough to be inserted in any application
 * Able to store tens of billions of nodes and as many edges.
 * It has support for Clusters
 * Master-slave replication

* Rich language support

 * Java
 * REST
 * Cypher
 * Ruby
 * Gremlin 

* Highly Connected Data

 * While a RDMBS is optimized for aggregated data, a graph database is optimized for highly connected data.

.. _Neo4J: http://neo4j.org/
