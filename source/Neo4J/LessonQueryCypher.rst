Cypher Queries
==============

Introduction
------------

Cypher queries can be performed by going the the "Data Browser" tab in the Web
interface of Neo4j.

Type the queries in the text field on the upper left of the page.


Try the following Cypher queries:

Query 1
-------

Find the node 1 and return its name

::

  START root=node(1)
  RETURN root.name

* Repeat this but replace the node number “1” with your own node number.


Query 2
-------

Inspect other properties from your node. Replace 23 with your personal node number

::

  START root=node(23)
  RETURN root.type


Query 3
-------

Start with the node of your TBL Team and list all the team members

::

  START root=node(75)
  MATCH root<--member
  RETURN member

* Modify the RETURN to see the names of all the members.
* Modify the RETURN to see the “type” property of all the members.

Are there any of the members in the group missing these properties ?


Query 4
-------

List the member of the TBL team, with their node number and person name

::

  START root=node(75)
  MATCH root<--member
  RETURN member, member.name



Query 5
-------

List the members of the TBL team who have a letter “E” in their name

::

  START root=node(75)
  MATCH root<--member
  WHERE member.name =~ '.*E.*'
  RETURN member, member.name

Regular Expressions Help:

* The character “.” represents “ANY” letter
* The character “*” represents ANY NUMBER of the previous character

Find the members of the group whose name starts with “E”.



Query 6
-------

List all the things that members of your TBL group like

::

  START root=node(75)
  MATCH root<--member-[:LIKES]->goodies
  RETURN goodies.name


Query 7
-------

List of the people in the graph who like things that the members of your TBL team like

::

  START root=node(75)
  MATCH root<--member-[:LIKES]->goodies<-[:LIKES]-copycat
  RETURN copycat.name,goodies.name



Query 8
-------

* List of the people who went to the same school as you did

* List what sports they play



Query 9
-------

* List of the people who play the same sports as you did

* List what food they like



Query 10
--------

Count the number of things that members of your TBL team like

::

  START root=node(75)
  MATCH root<--member-[:Likes]->goodies
  WITH member,count(goodies) as goodieCount
  RETURN member.name,goodieCount


Query 11
--------

Return the name of your TBL team members, sorted by name

::

  START root=node(75)
  MATCH root<--member
  RETURN member.name ORDER BY member.name



Query 12
--------

* Return the list of TV shows that members of your TBL team used to watch
* Sort them by title



Query 13
--------

List the nodes that have links to nodes that are linked to you

::

  START root=node(23)
  MATCH root--()--other
  RETURN other.name

Eliminate repetitions in the returned list, by using the “distinct” keyword

::

  START root=node(23)
  MATCH root--()--other
  RETURN distinct other.name

Return them in alphabetical order



Query 14
--------

List all your relationships and the object of that relationship

::

  START root=node(23)
  MATCH root-[rel]-other
  RETURN rel, other.name



Query 15
--------

List all all the object that you like (use your node ID), and consider
alternative spellings of the relationship “LIKE”.

::

  START root=node(23)
  MATCH root-[:LIKES|LIKE|like|likes]->other
  RETURN  distinct other.name



Query 16
--------

* List all the things that members of your team “Played”.

* How could you differentiate “playing sport” from “playing musical instruments” ?



Query 17
--------

List all the things that are connected to you, regardless of the length of the
path

::

  START root=node(23)
  MATCH root-[*]-other
  RETURN distinct other.name



Query 18
--------

List all the things that are connected to you, by more than 3 edges and less
than 5

::

  START root=node(23)
  MATCH root-[*3..5]-other
  RETURN distinct other.name



Query 19
--------

Count the number of nodes in the Graph

::

  START root=node(*)
  RETURN count(root)



Query 20
--------

Count the number of nodes that are connected to you

::

  START root=node(23)
  MATCH root--other
  RETURN count(other)

Modify this search to

* Count only the nodes that have relationships “IN” to you.
* Count only the nodes that have relationships “OUT” of you.



Query 21
--------

Count the number of nodes that are connected to you, without repetitions

::

  START root=node(23)
  MATCH root--other
  RETURN count(distinct other)


Query 22
--------

Count the number of relationships that are connected to you, without
repetitions

::

  START root=node(23)
  MATCH root-[r]-()
  RETURN count(distinct r)

Modify this search to count ALL the relationships in the graph.



Query 23
--------

Starting from your personal node, list all the people who are in your same TBL
team

::

  START root=node(23)
  MATCH root-[:`belongs to`]->team<-[:`belongs to`]-member
  RETURN distinct member

* Did you find everybody ?

* Did all your team members used the same type of Relationship in order to declare their belonging to the TBL team ?

* If not, how do we fix it ?




Query 24
--------

Starting from two people’s nodes, find all their common nodes

::

  START myself=node(23), other=node(157)
  MATCH myself--common--other
  RETURN distinct common


Query 25
--------

Inspired in the previous exercise:

* Find ALL possible paths between you and another person.


Query 26
--------

Starting from two people’s nodes

* Find all their common nodes


Query 27
--------

Starting from your personal node

* Find the paths to nodes that you have relationships with

::

  START a=node(23)
  MATCH path=a--b
  RETURN b.name, path


