Exploring Fileman
=================

The Data Dictionary
-------------------
A good way to start showing Fileman is to look at a file whose structure is typical. I will use the language file as an example.

Enter MUMPS first by sourcing fileman.env as before and then running ``mumps -dir``. Then run Fileman by typing ``D C^DI``. You do not have to know what that means, as the rest of Fileman doesn't require you to type MUMPS commands.

.. Note:: Because the device handler is part of the VISTA Kernel, Fileman ships with a very rudimentary device handler. Paging through data may be somewhat painful because you will get only 24 lines at a time. On full VISTA, you can specify your page size.

The first thing we will do is explore the data dictionary (i.e. Schema) of the language file. Text in ** ** is text you have to type

::

    GTM>**D C^DI**


    VA FILEMAN 22.2V2


    Select OPTION: **?**
        Answer with OPTION NUMBER, or NAME
       Choose from:
       1            ENTER OR EDIT FILE ENTRIES
       2            PRINT FILE ENTRIES
       3            SEARCH FILE ENTRIES
       4            MODIFY FILE ATTRIBUTES
       5            INQUIRE TO FILE ENTRIES
       6            UTILITY FUNCTIONS
       7            OTHER OPTIONS
       8            DATA DICTIONARY UTILITIES
       9            TRANSFER ENTRIES
       
    Select OPTION: **8**  DATA DICTIONARY UTILITIES
    Select DATA DICTIONARY UTILITY OPTION: ?
        Answer with DATA DICTIONARY UTILITY OPTION NUMBER, or NAME
       Choose from:
       1            LIST FILE ATTRIBUTES
       2            MAP POINTER RELATIONS
       3            CHECK/FIX DD STRUCTURE
       4            FIND POINTERS INTO A FILE
       
    Select DATA DICTIONARY UTILITY OPTION: **1**  LIST FILE ATTRIBUTES
     START WITH What File: **LANGUAGE**         (11 entries)
           GO TO What File: LANGUAGE// **<enter>**         (11 entries)
           Select SUB-FILE: 
     Select LISTING FORMAT: STANDARD// **CONDENSED**

    CONDENSED DATA DICTIONARY---LANGUAGE FILE (#.85)                  VERSION: 22.2V2

    STORED IN: ^DI(.85,                                       MAR 25,2013 PAGE 1
    --------------------------------------------------------------------------------

                                                      FILE SECURITY
                                       DD SECURITY    : ^     DELETE SECURITY: ^
                                       READ SECURITY  :       LAYGO SECURITY : ^
                                       WRITE SECURITY : ^
    CROSS REFERENCED BY:
          ALTERNATE NAME(F) 


                                     FILE STRUCTURE

    FIELD     FIELD
    NUMBER    NAME

    .001      ID NUMBER (NJ10,0), [ ]
    .01       NAME (RFJ60), [0;1]
    .02       TWO LETTER CODE (FJ2), [0;2]
    .03       THREE LETTER CODE (FJ3), [0;3]
    .04       FOUR LETTER CODE (FJ4), [0;4]
    .05       ALTERNATE THREE LETTER CODE (FJ3), [0;5]
    .06       SCOPE (S), [0;6]
    .07       TYPE (S), [0;7]
    .08       LINGUISTIC CATEGORY (*P.85'), [0;8]
    .09       MEMBER OF LANGUAGE SET (*P.85'), [0;9]
    1         ALTERNATE NAME (Multiple-.8501), [1;0]
              .01  ALTERNATE NAME (MFJ60), [0;1]
    10        DESCRIPTION (Multiple-.8502), [10;0]
              .01  DESCRIPTION (Wx), [0;1]
    10.1      ORDINAL NUMBER FORMAT (K), [ORD;E1,245]
    10.2      DATE/TIME FORMAT (K), [DD;E1,245]
    10.21     DATE/TIME FORMAT (FMTE) (K), [FMTE;E1,245]
    10.22     TIME (K), [TIME;E1,245]
    10.3      CARDINAL NUMBER FORMAT (K), [CRD;E1,245]
    10.4      UPPERCASE CONVERSION (K), [UC;E1,245]
    10.5      LOWERCASE CONVERSION (K), [LC;E1,245]
    20.2      DATE INPUT (K), [20.2;E1,245]

What you see here is the condensed data dictionary listing for the Language
file.

Before we explain the condensed data dictionary listing, let's talk about the
Fileman user interface. Unlike most database management systems, Fileman includes an end user
interface. You just saw a few conventions above:

 * To accept your input, you must press enter/return.
 * Typing ``?`` means ask for help. On a menu, it give you the menu choices.
   Not shown above, but typing ``??`` may give you more help, especially when
   editing data.
 * You can pick entries either by their number or their name. That's true
   across all of Fileman.
 * Default answers are indicated using the answer then a //. Pressing enter
   without typing in a different answer will accept the default. Elsewhere in
   Fileman, if you are prompted to "Replace", you need to type "?" and follow
   the help on how to override the default. Replace only shows up if the
   default value is really long (above 15 characters). 
 * Not shown here, but typing a caret (''^'') means bail out. On menus, it will return you to a higher level in the menu system.

Alright. Now it's time to figure out what that condensed listing means. In
general, each line in this listing represents a "column" in relational database
parlance. There are two exceptions to this: ALTERNATE NAME field and
DESCRIPTION field. Both are helpfully indicated as multiples. A multiple means
that several entries can be stored. This means, for example, that a language
can have several alternate names. For example, Spanish can have ALTERNATE NAMEs
of Español and Catalan. The DESCRIPTION field is a multiple in the way it's
stored, but really represents a single word processing (i.e. text blob) field. A word processing
field is stored by storing each line separately; that's why it's a multiple.

Let's analyze one entry and try to figure out what all these letters and
symbols are::

    .02       TWO LETTER CODE (FJ2), [0;2]

In Fileman, each field must be uniquely numbered, but not necessarily uniquely
named. In this case, the field number is .02; the field name is ``TWO LETTER
CODE``. The next set of alphanumerics in parentheses represent the field
storage formatting. In this case, ``FJ2`` means that it's 2 character long free
text field. The next and last set of alphanumberics in brackets signifies the
storage location of the data.

Storage Location?

Well you see, like C programmers with structures, it matters to MUMPS programmers where
their data gets stored. In many cases, it's not important, but programmers
writing code may need to fetch the values directly from MUMPS.

Ooops. Forgot to mention the second line of the output, while we are speaking
of storage locations. The second line says::

    STORED IN: ^DI(.85,

This means that the entire file is stored in ^DI(.85,

Now that we have a distant clue on how the language file is stored, let's
actually look at its contents. To do that, we will use the ``ZWRITE`` command.
ZWRITE is not part of MUMPS, but it is a useful debugging tool to show
you the data. It exists on both GT.M and Caché, but is far more powerful on
GT.M. The output is really long, so I will only show you a few lines::

    GTM>ZWRITE ^DI(.85,*)
    ^DI(.85,0)="LANGUAGE^.85I^18^11"
    ^DI(.85,1,0)="ENGLISH^EN^ENG"
    ^DI(.85,1,1,0)="^.8501^2^2"
    ^DI(.85,1,1,1,0)="MODERN ENGLISH (1500-)"
    ^DI(.85,1,1,2,0)="ENGLISH,MODERN (1500-)"
    ^DI(.85,1,1,"B","ENGLISH,MODERN (1500-)",2)=""
    ^DI(.85,1,1,"B","MODERN ENGLISH (1500-)",1)=""
    <output elided>
    ^DI(.85,2,0)="GERMAN^DE^DEU^^GER"
    ^DI(.85,2,1,0)="^.8501^7^7"
    ^DI(.85,2,1,1,0)="GERMAN, STANDARD"
    <etc>

Good. We see the data. And you actually get a good taste of how Fileman does its work in the MUMPS Virtual Machine. ^DI(.85) is the MUMPS global (actually part of the global ^DI). Global in MUMPS simply means permanent disk storage location; it doesn't refer to a variable that's global in scope, like in many other languages. Inside the global, it's subdivided into different pieces using the caret '^' symbol. Remember this?::

    .02       TWO LETTER CODE (FJ2), [0;2]

In the brackets you see the storage location as 0;2. This means that after the record number (which is the first subscript), you go the zero subscript and get the second caret piece to place the TWO LETTER CODE.

Can you spot the two letter codes above using the information I just gave you?

Notice that we have two records in this excerpt. The first record is ENGLISH, and the second is GERMAN. if you look at the ``^DI(.85,1,0)`` and ``^DI(.85,2,0)`` nodes, you will notice that the second piece of these nodes is EN and DE respectively.

Now that I have showed you this view, I can present to you the Fileman Global Data Dictionary Listing. You access this by typing "GLOBAL" instead of "CONDENSED" in the data dictionary listing.

::

    Select DATA DICTIONARY UTILITY OPTION:    **L**IST FILE ATTRIBUTES
    START WITH What File: LANGUAGE//         (11 entries)
      GO TO What File: LANGUAGE//         (11 entries)
      Select SUB-FILE: 
    Select LISTING FORMAT: STANDARD// **GLOBAL**

    GLOBAL MAP DATA DICTIONARY #.85 -- LANGUAGE FILE              3/25/13    PAGE 1
    STORED IN ^DI(.85,  (11 ENTRIES)   SITE: FILEMAN DEMOSTRATION SITE    (VERSION 22.2V2)   
    -------------------------------------------------------------------------------
    The LANGUAGE file is used both to officially identify a language, and to store
    MUMPS code needed to do language-specific conversions of data such as dates and
    numbers.  
     
    Fileman distributes entries for the following languages: 
     ID Number (.001)       Name (.01) 
                    1       English 
                    2       German 
                    3       Spanish 
                    4       French 
                    5       Finnish 
                    6       Italian 
                    7       Portuguese 
                   10       Arabic 
                   11       Russian 
                   12       Greek 
                   18       Hebrew 
     
    The ISO-639-1 and ISO-639-2 compatible language file is distributed in the 
    DMLAINIT routines, shipped with Fileman 22.2.  
     
    A pointer to this file from the TRANSLATION multiple on the DIALOG file also
    allows non-English text to be returned via FileMan calls.  
     
    A note to VISTA developers: Although users can select entries by name, software
    should use the official two or three letter codes to eliminiate mistakes
    resulting from languages that have similar spelling.  

    CROSS
    REFERENCED BY: ALTERNATE NAME(F)



    ^DI(.85,D0,0)= (#.01) NAME [1F] ^ (#.02) TWO LETTER CODE [2F] ^ (#.03) THREE 
                ==>LETTER CODE [3F] ^ (#.04) FOUR LETTER CODE [4F] ^ (#.05) 
                ==>ALTERNATE THREE LETTER CODE [5F] ^ (#.06) SCOPE [6S] ^ (#.07) 
                ==>TYPE [7S] ^ (#.08) LINGUISTIC CATEGORY [8P:.85] ^ (#.09) 
                ==>MEMBER OF LANGUAGE SET [9P:.85] ^ 
    ^DI(.85,D0,1,0)=^.8501^^  (#1) ALTERNATE NAME
    ^DI(.85,D0,1,D1,0)= (#.01) ALTERNATE NAME [1F] ^ 
    ^DI(.85,D0,10,0)=^.8502^^  (#10) DESCRIPTION
    ^DI(.85,D0,10,D1,0)= (#.01) DESCRIPTION [1W] ^ 
    ^DI(.85,D0,20.2)= (#20.2) DATE INPUT [E1,245K] ^ 
    ^DI(.85,D0,CRD)= (#10.3) CARDINAL NUMBER FORMAT [E1,245K] ^ 
    ^DI(.85,D0,DD)= (#10.2) DATE/TIME FORMAT [E1,245K] ^ 
    ^DI(.85,D0,FMTE)= (#10.21) DATE/TIME FORMAT (FMTE) [E1,245K] ^ 
    ^DI(.85,D0,LC)= (#10.5) LOWERCASE CONVERSION [E1,245K] ^ 
    ^DI(.85,D0,ORD)= (#10.1) ORDINAL NUMBER FORMAT [E1,245K] ^ 
    ^DI(.85,D0,TIME)= (#10.22) TIME [E1,245K] ^ 
    ^DI(.85,D0,UC)= (#10.4) UPPERCASE CONVERSION [E1,245K] ^ 


    INPUT TEMPLATE(S):

    PRINT TEMPLATE(S):

    SORT TEMPLATE(S):

    FORM(S)/BLOCK(S):

This presents the global data structure in a more intuitive format.

Last but not least, let's use the standard listing.

In both of the above examples, the listing that is chosen by default is ``STANDARD``. We overrode it the last two times; mainly because it's the most verbose. At this point, we are going to print it for just one field, like this::

    Select DATA DICTIONARY UTILITY OPTION:    LIST FILE ATTRIBUTES
     START WITH What File: LANGUAGE//         (11 entries)
          GO TO What File: LANGUAGE//         (11 entries)
          Select SUB-FILE: 
    Select LISTING FORMAT: STANDARD//   
    Start with field: FIRST// TWO LETTER CODE  
    Go to field: TWO LETTER CODE

    STANDARD DATA DICTIONARY #.85 -- LANGUAGE FILE                3/25/13    PAGE 1
    STORED IN ^DI(.85,  (11 ENTRIES)   SITE: FILEMAN DEMONSTRATION SITE    (VERSION 2
    2.2V2)   

    DATA          NAME                  GLOBAL        DATA
    ELEMENT       TITLE                 LOCATION      TYPE
    -------------------------------------------------------------------------------

    .85,.02       TWO LETTER CODE        0;2 FREE TEXT

                  INPUT TRANSFORM:  K:$L(X)>2!($L(X)<2) X
                  LAST EDITED:      NOV 1,2012 
                  HELP-PROMPT:      Answer must be 2 characters in length. 
                  DESCRIPTION:      Enter the two-letter code defined for this
                                    language in the ISO 639-1 standard. Not every
                                    language has a two-letter code; for those that
                                    do not leave this field blank.  

                  TECHNICAL DESCR:  Future versions of this file will include an
                                    optional key on this field.  


Printing data
-------------
We spent a lot of time looking at the data dictionary. Now it's time to print the data.

Follow the following dialog::

    Select OPTION: 
    GTM>**D C^DI**


    VA FILEMAN 22.2V2


    Select OPTION: **PR**INT FILE ENTRIES  

    Output from what File: LANGUAGE//         (11 entries)
    Sort by: ID NUMBER// **<enter>**
    Start with ID NUMBER: FIRST// **<enter>**
    First Print FIELD: **?**
     Answer with FIELD NUMBER, or LABEL
     Do you want the entire 20-Entry FIELD List? **Y**  (Yes)
       Choose from:
       .001         ID NUMBER
       .01          NAME
       .02          TWO LETTER CODE
       .03          THREE LETTER CODE
       .04          FOUR LETTER CODE
       .05          ALTERNATE THREE LETTER CODE
       .06          SCOPE
       .07          TYPE
       .08          LINGUISTIC CATEGORY
       .09          MEMBER OF LANGUAGE SET
       1            ALTERNATE NAME  (multiple)
       10           DESCRIPTION  (word-processing)
       10.1         ORDINAL NUMBER FORMAT
       10.2         DATE/TIME FORMAT
       10.21        DATE/TIME FORMAT (FMTE)
       10.22        TIME
       10.3         CARDINAL NUMBER FORMAT
       10.4         UPPERCASE CONVERSION
       10.5         LOWERCASE CONVERSION
       20.2         DATE INPUT
                                       to exit: 
             
    Type '&' in front of field name to get TOTAL for that field.
         '!' to get COUNT.   '+' to get TOTAL & COUNT.    '#' to get MAX & MIN.
         ']' to force SAVING PRINT TEMPLATE
    You can follow field name with ';' and FORMAT SPECIFICATION.
    Type '[TEMPLATE NAME]' in brackets to use an existing PRINT TEMPLATE.
    First Print FIELD: **.01**  NAME
    Then Print FIELD: **.02**  TWO LETTER CODE
    Then Print FIELD: **.03**  THREE LETTER CODE
    Then Print FIELD: **<enter>**
    Heading (S/C): LANGUAGE List// **<enter>**

    LANGUAGE List                                         MAR 25,2013@17:00   PAGE 1
                                                                  TWO     THREE
                                                                  LETTER  LETTER
    NAME                                                          CODE    CODE
    --------------------------------------------------------------------------------

            ID NUMBER: 1
    ENGLISH                                                       EN      ENG
            ID NUMBER: 2
    GERMAN                                                        DE      DEU
            ID NUMBER: 3
    SPANISH                                                       ES      SPA
            ID NUMBER: 4
    FRENCH                                                        FR      FRA
            ID NUMBER: 5
    FINNISH                                                       FI      FIN
            ID NUMBER: 6
    ITALIAN                                                       IT      ITA
            ID NUMBER: 7
    PORTUGUESE                                                    PT      POR
            ID NUMBER: 10
    ARABIC                                                        AR      ARA
            ID NUMBER: 11
    RUSSIAN                                                       RU      RUS
            ID NUMBER: 12
    GREEK                                                         EL      ELL
            ID NUMBER: 18
    HEBREW                                                        HE      HEB

To ask Fileman to print everything it knows about a single record, you can use the inquire option.::

    Select OPTION: **INQ**UIRE TO FILE ENTRIES  



    Output from what File: LANGUAGE//         (11 entries)
    Select LANGUAGE: **GR**EEK, MODERN (1453-)  GREEK     EL     ELL
    Another one: 
    Standard Captioned Output? Yes// **?**
       If you answer 'N', you"ll be asked to create a formatted display,
       as in the PRINT Option.
    Standard Captioned Output? Yes//   (Yes)
    Include COMPUTED fields:  (N/Y/R/B): NO// **?**

    Enter a code from the list.
         Select one of the following:

              N         NO - No record number (IEN), no Computed Fields
              Y         Computed Fields
              R         Record Number (IEN)
              B         BOTH Computed Fields and Record Number (IEN)


    Include COMPUTED fields:  (N/Y/R/B): NO// **B**OTH Computed Fields and Record Number
     (IEN)

    ID NUMBER: 12                           NAME: GREEK
      TWO LETTER CODE: EL                   THREE LETTER CODE: ELL
      ALTERNATE THREE LETTER CODE: GRE
    ALTERNATE NAME: ELLINIKA
    ALTERNATE NAME: ELLINIKI GLOSSA
    ALTERNATE NAME: GRAECAE
    ALTERNATE NAME: GREC
    ALTERNATE NAME: GRECO
    ALTERNATE NAME: NEO-HELLENIC
    ALTERNATE NAME: ROMAIC
    ALTERNATE NAME: MODERN GREEK (1453-)
    ALTERNATE NAME: GREEK, MODERN (1453-)
