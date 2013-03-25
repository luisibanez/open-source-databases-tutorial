Overview
========

Fileman is a database management system written in Mumps. It underlies the Medical Record Systems used by the Veteran's Administration in VISTA, Indian Health Service in RPMS, and the Department of Defense in CHCS. A similar database management system named Chronicles underlies the Medical Record System marketed by Epic Corporation. 

Astute readers will note that Mumps already provides a storage capabilities consisting of saving data as sparse multi-dimensional arrays. Fileman builds on top of Mumps a full database management system with capabilities including:

* Abstracting Mumps multi-dimensional arrays into user-friendly files
* Providing user-defined data definitions for all data elements
* Providing indexing for data stored in the Mumps arrays for easy retrieval
* Providing interactive data behavior (using triggers, mail messages, or Mumps style cross-references)
* Providing the User Interface for manipulation and reporting of the data
* Providing tools for sending data to other Fileman systems.
* Providing programmer tools for use to manipulate Fileman stored data.
* Providing a security framework for data access.
* Providing a Structured Query Language (SQL) interface to the data.

Fileman is indefinitely extensible. Virtually every aspect of it can be customized by writing your own code and calling it from a Fileman hook. For example, you can write your own search logic for a file and have Fileman execute that rather than the default search logic.

Fileman is a hybrid relational/hierarchical database management system. It can store data in a relational manner (like a traditional SQL based database) or in a hierarchical manner (like an XML database). To a first time user, Fileman looks more like a relational database than a graph database or a document database. Data is stored in files, each of which has fields. This mirrors a relational databases' tables which contain columns. The twist in Fileman is that a field can be an entire file. For example, you may have a patient file with fields for name, date of birth, and sex. Then you may have another field that is called Address; but this field consists of several fields which can be filled multiple times over for home address, work address, and emergency address. This very much mirrors data stored in JSON or XML as both can represent similar concepts.

Like a relational database, Fileman has a strong schema system called the Data Dictionary. This is different from other document or graph databasees which don't necessarily impose a schema.

Data in Fileman is alive in a way that data in other databases isn't. Setting
a value in a file may change values elsewhere in the database, create new
records, send mail messages, send HL7 messages to external systems or encrypt
the stored data. This is all possible because of the almost unlimited
extensibility of Fileman.

Fileman can be installed by itself without the VISTA Kernel, but doing so deprives you of features such as Operating System file level interaction, sending of mail messages, and use of the Remote Procedure broker to access Fileman data from other programming languages via the Transmission Control Protocol (TCP) over Internet Protocol (IP) version 4. It's expected that users who use Standalone Fileman will replace these functions on their own.

