Installation Instructions
=========================
Installation presupposes a rudimentary knowledge of Unix.

The software is supplied as a set of routines packaged in Routine Output (RSA) format.
The latest version can be downloaded from OSEHRA's public repository:
https://github.com/OSEHRA/fileman-22p2

As of the time of this writing, the RSA file can be obtained by getting the response of this URL:
https://github.com/OSEHRA/fileman-22p2/blob/master/VA-FILEMAN-22P2V2.RSA?raw=true

Supported Mumps Virtual Machines
--------------------------------
Fileman works on the two major Mumps implementations that are used in
production systems today. They are Intersystems Caché and Fidelity GT.M. GT.M
running on Linux is available as open source, so it's will we will use in our
demonstration.

Install GT.M
------------
GT.M will be available on Debian as `fis-gtm` in the near future. Today,
however, you will need to install it using a script. This script installs GT.M
by default in /usr/lib/fis-gtm.::

    sudo apt-get install elfutils
    sudo apt-get install ncurses-term
    wget http://sourceforge.net/projects/fis-gtm/files/GT.M%20Installer/v0.12/gtminstall && chmod +x ./gtminstall && sudo ./gtminstall

On Debian Squeeze (6.0), you may need to make a symbolic link to libtinfo; you
probably don't have to if you are using Ubuntu 12.x or Red Hat.::

    sudo ln -s /lib/libncurses.so.5 /lib/libtinfo.so.5
    sudo ln -s /lib/libtinfo.so.5 /lib/libtinfo.so

Run GT.M
--------
As a normal user, source gtmprofile as below. This will create a clean database
as well as routine directories under .fis-gtm in your home directory.::

    sam@thebes:~$ source /usr/lib/fis-gtm/V6.0-001_x86_64/gtmprofile
    Created file /home/sam/.fis-gtm/V6.0-001_x86_64/g/gtm.dat
    %GTM-I-JNLCREATE, Journal file /home/sam/.fis-gtm/V6.0-001_x86_64/g/gtm.mjl created for region DEFAULT with BEFORE_IMAGES
    %GTM-I-JNLSTATE, Journaling state for region DEFAULT is now ON

To run Mumps, it's just a simple matter of specifying the executable::

    sam@thebes:~$ mumps -dir

    GTM>WRITE 3+4
    7
    GTM>HALT
    sam@thebes:~$ 

Installing Fileman
------------------
In your home directory, download Fileman using the link given above::

    wget -O VA-FILEMAN-22P2V2.RSA https://github.com/OSEHRA/fileman-22p2/blob/master/VA-FILEMAN-22P2V2.RSA?raw=true

Now, you need to import the RSA file (a collection of routines) into GT.M using the %RI utility. You need to know what's the
directory you will put the imported routines into. MAKE SURE TO PUT A TRAILING
SLASH ON THE ROUTINE DIRECTORY WHEN YOU ENTER IT. Your routine directory will
be your home directory followed by /.fis-gtm/r/::

    sam@thebes:~$ mumps -dir

    GTM>WRITE $ZROUTINES
    /home/sam/.fis-gtm/V6.0-001_x86_64/o(/home/sam/.fis-gtm/V6.0-001_x86_64/r
    /home/sam/.fis-gtm/r) /usr/lib/fis-gtm/V6.0-001_x86_64/plugi
    n/o(/usr/lib/fis-gtm/V6.0-001_x86_64/plugin/r) /usr/lib/fis-gtm/V6.0-001_x86_64
    GTM>D ^%RI

    Routine Input Utility - Converts RO file to *.m files.

    Formfeed delimited <No>? 
    Input device: <terminal>: /home/sam/VA-FILEMAN-22P2V2.RSA

    FILEMAN V22.2 VERIFICATION 2
    GT.M 08-MAR-2013 10:44:45


    Output directory : /home/sam/.fis-gtm/r/

    DDBR      DDBR0     DDBR1     DDBR2     DDBR3     DDBR4     DDBRAHT   DDBRAHTE  
    DDBRAHTJ  DDBRAHTR  DDBRAP    DDBRGE    DDBRP     DDBRS     DDBRT     DDBRU     
    <elided>
    DMUFI00G  DMUFI00H  DMUFI00I  DMUFINI1  DMUFINI2  DMUFINI3  DMUFINI4  DMUFINI5  
    DMUFINIS  DMUFINIT  


    Restored 103611 lines in 882 routines.
    GTM>

After this, type ``HALT`` to get back to the Linux command line, and rename
a few routines as follows::

    sam@thebes:~$ cd .fis-gtm/r/
    sam@thebes:~/.fis-gtm/r$ cp DIRCR.m _RCR.m
    sam@thebes:~/.fis-gtm/r$ cp DIDT.m _DT.m
    sam@thebes:~/.fis-gtm/r$ cp DIDTC.m _DTC.m
    sam@thebes:~/.fis-gtm/r$ cp DIIS.m _ZIS.m
    sam@thebes:~/.fis-gtm/r$ cp DIISC.m _ZISC.m
    sam@thebes:~/.fis-gtm/r$ cp DIISS.m _ZISS.m
    sam@thebes:~/.fis-gtm/r$ cd -
    sam@thebes:~$

Initial configuration of Fileman is done from Mumps by running the routine DINIT. The major configuration item there is choosing your Mumps Operating System (i.e., your Mumps Virtual Machine). You need to answer this correctly in order for Fileman to function properly.::

    sam@thebes:~$ mumps -dir

    GTM>D ^DINIT


    VA FileMan V.22.2V2


    Initialize VA FileMan now?  NO//Y

    SITE NAME: FILEMAN DEMOSTRATION SITE

    SITE NUMBER: 1   

    ..................................

    Now loading MUMPS Operating System File....

    Now loading DIALOG and LANGUAGE Files..............................................................


    TYPE OF MUMPS SYSTEM YOU ARE USING: ?
        Answer with MUMPS OPERATING SYSTEM NAME
       Choose from:
       CACHE/OpenM   
       DSM for OpenVMS   
       DTM-PC   
       GT.M(UNIX)   
       GT.M(VAX)   
       MSM   
       OTHER   
       
    TYPE OF MUMPS SYSTEM YOU ARE USING: GT.M(UNIX)  

    Now loading other FileMan files--please wait..........................................................................................
    .....................................................................................


    The following files have been installed:
       .11     INDEX
       .2      DESTINATION
       .31     KEY
       .4      PRINT TEMPLATE
       .401    SORT TEMPLATE
       .402    INPUT TEMPLATE
       .403    FORM
       .404    BLOCK
       .44     FOREIGN FORMAT
       .46     IMPORT TEMPLATE
       .5      FUNCTION
       .6      DD AUDIT
       .7      MUMPS OPERATING SYSTEM
       .81     DATA TYPE
       .83     COMPILED ROUTINE
       .84     DIALOG
       .85     LANGUAGE
      1        FILE
      1.1      AUDIT
      1.11     ARCHIVAL ACTIVITY
      1.12     FILEGRAM HISTORY
      1.13     FILEGRAM ERROR LOG
      1.2      ALTERNATE EDITOR
      1.521    SQLI_SCHEMA
      1.52101  SQLI_KEY_WORD
      1.5211   SQLI_DATA_TYPE
      1.5212   SQLI_DOMAIN
      1.5213   SQLI_KEY_FORMAT
      1.5214   SQLI_OUTPUT_FORMAT
      1.5215   SQLI_TABLE
      1.5216   SQLI_TABLE_ELEMENT
      1.5217   SQLI_COLUMN
      1.5218   SQLI_PRIMARY_KEY
      1.5219   SQLI_FOREIGN_KEY
      1.52191  SQLI_ERROR_TEXT
      1.52192  SQLI_ERROR_LOG


    Your Package file will now be updated.


    I AM GOING TO SET UP THE FOLLOWING FILES:

       9.4       PACKAGE


    ...HMMM, THIS MAY TAKE A FEW MOMENTS...............................................
    OK, I'M DONE.
    NOTE THAT FILE SECURITY-CODE PROTECTION HAS BEEN MADE

    Re-indexing entries in the DIALOG file.......

    Compiling all forms ...

       DICATT                          (#.001)
       DIPTED                          (#.1001)
       DIKC EDIT                       (#.1101)
       DIKC EDIT UI                    (#.1102)
       DIKK EDIT                       (#.3101)
       DIBTED                          (#.40001)
       DIETED                          (#.40101)
       DIEDIT                          (#.40201)
       DDGF BLOCK EDIT                 (#.40301)
       DDGF PAGE ADD                   (#.40302)
       DDGF PAGE EDIT                  (#.40303)
       DDGF PAGE SELECT                (#.40304)
       DDGF FORM EDIT                  (#.40305)
       DDGF HEADER BLOCK EDIT          (#.40306)
       DDGF FIELD ADD                  (#.40401)
       DDGF FIELD CAPTION ONLY         (#.40402)
       DDGF FIELD DD                   (#.40403)
       DDGF FIELD FORM ONLY            (#.40404)
       DDGF FIELD COMPUTED             (#.40405)
       DDGF BLOCK ADD                  (#.40406)
       DDGF BLOCK DELETE               (#.40407)
       DDGF HEADER BLOCK SELECT        (#.40408)
       DDXP FF FORM1                   (#.441)
       DDMP SPECIFY IMPORT             (#.461)


    INITIALIZATION COMPLETED IN 2 SECONDS.

Congratulations. You have finished installing Fileman.
