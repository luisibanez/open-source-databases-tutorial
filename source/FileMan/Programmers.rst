Interacting with Fileman as a Programmer
----------------------------------------
This tutorial covered a lot of how to interact with Fileman when first making
files and how end users may use it. We won't cover programmer calls in detail, but here is a brief guide.

Fileman has two sets of APIs: the old generation ("Classic") and new generation (Database Server, or DBS). The old
generation APIs assume that you are interacting with Fileman via a terminal.
The new generation APIs write nothing to the screen, and thus are designed to
be used by client applications interfacing with Fileman via TCP. Internally, Fileman
runs by and large by eating its own dog food: it calls the APIs itself.

Here is an example of one API which invokes the "select an entry" logic.::

    GTM>SET DIC=1001,DIC(0)="AEQ" D ^DIC

    Select BACH WERKE VERZEICHNIS BWV NUMBER: ?
    Answer with BACH WERKE VERZEICHNIS BWV NUMBER
    Choose from:
    1046        Brandenburg Concerto No. 1     F MAJOR
    1047        Brandenburg Concerto No. 2     F MAJOR
    1048        Brandenburg Concerto No. 3     G MAJOR
    1050        Brandenburg Concerto No. 5     D MAJOR
    1051        Brandenburg Concerto No. 6     B FLAT MAJOR

    Select BACH WERKE VERZEICHNIS BWV NUMBER: 1046
    Brandenburg Concerto No. 1     F MAJOR
    GTM>W X
    1046
    GTM>W Y
    1^1046

The output of this is the variables X and Y. X is what the user typed in, and
Y is the entry number ^ .01 field value.

The Fileman programmer manual can be found here:
http://www.hardhats.org/fileman/pm/index.htm.

Standalone Fileman at the current time does not provide a TCP or Web Service
interface.
