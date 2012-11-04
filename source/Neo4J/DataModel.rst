Data Model
==========

Graph
-----

`Neo4j`_  uses a `Graph`_ data model.

.. image:: ../../images/Neo4j-DataModel.svg

* A Graph contains `Nodes`_ and `Relationships`_.
* `Nodes`_ have `Properties`_.
* `Relationships`_ organize the graph.
* `Relationships`_ have `Properties`_.
* `Relationships`_ are directed links between nodes.
* `Properties`_ are key-value pairs where the key is a string.
* The values of `Properties`_ in `Neo4j`_ can have one of several `Types`_
* Queries are done by `Traversing`_ the Graph navigating from one Node to another along a `Path`_.
* Indexes look-up `Nodes`_ or `Relationships`_.

Comparison
----------

* A graph database `transforms a RDBMS`_

 * If one takes the stack of rows stored in RDBMS tables, separate the rows as individual nodes and keeps the relationships, the data becomes visible as a graph.

* A graph database `creates relationsips in Column-Family`_

 * A Column-Family database uses *families* to group rows.
 * When stored in a graph the families can become hierarchical. 

* A graph database `navigates a document store`_

 * A document store can be seen as a graph, by asking *what is the relationship between a field of the document and the document ?*

* A graph database `elaborates a Key-Value store`_

 * When the values have Keys themselves, the underlying structure is the one of a graph.

.. _Graph:  http://docs.neo4j.org/chunked/stable/what-is-a-graphdb.html
.. _Neo4j: http://neo4j.org/
.. _navigates a document store: http://docs.neo4j.org/chunked/stable/tutorial-comparing-models.html#_a_graph_database_navigates_a_document_store
.. _elaborates a Key-Value store: http://docs.neo4j.org/chunked/stable/tutorial-comparing-models.html#_a_graph_database_elaborates_a_key_value_store
.. _creates relationsips in Column-Family: http://docs.neo4j.org/chunked/stable/tutorial-comparing-models.html#_a_graph_database_relates_column_family
.. _transforms a RDBMS: http://docs.neo4j.org/chunked/stable/tutorial-comparing-models.html#_a_graph_database_transforms_a_rdbms
.. _Nodes: http://docs.neo4j.org/chunked/stable/graphdb-neo4j-nodes.html
.. _Relationships: http://docs.neo4j.org/chunked/stable/graphdb-neo4j-relationships.html
.. _Properties: http://docs.neo4j.org/chunked/stable/graphdb-neo4j-properties.html
.. _Path: http://docs.neo4j.org/chunked/stable/graphdb-neo4j-paths.html
.. _Traversing: http://docs.neo4j.org/chunked/stable/graphdb-neo4j-traversal.html
.. _Types: http://docs.neo4j.org/chunked/stable/graphdb-neo4j-properties.html

