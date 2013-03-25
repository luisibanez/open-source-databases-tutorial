Entering, Updating and Deleting Data
====================================
Making our own File
-------------------
To illustrate entering, updating and deleting data, let's make our own file. The option to make a file is not obvious. It's ''MODIFY FILE ATTRIBUTES (#4)''. We will make a file for subset of the information in the Bach Work Catalogue (the Bach-Werke-Verzeichnis or BWV). You can find the catalogue here: http://www.jsbach.org/bwvlist.html

Let's start by designing the file on "paper" first before putting it into
Fileman.

When you create a file in Fileman, the .01 field is the one that is displayed
to the user by default. It's normally the most important field in a file. It's created automatically when you make a new file. In this case, we can make the .01 field either the BWV number or the title of the work. For semantic reasons, I believe the BWV number to be the most logical .01.

Since BWV's are unique for each work, I will make the .01 field a key. I won't
cover this in this introductory tutorial.

How big is the .01 field? Well, in this case it should be 7 characters long.
That's the longest BWV number (ANH117a).

What data type is the field? It's going to be free text.

Let's talk about additional fields. There is no internal rule in Fileman on how
to number your fields; various Fileman programmers number them differently.
I tend to number fields based on their storage locations. So fields on the zero
node (the default and only node for a new file) would start with .0. This means
that the second field will be .02; the third field is .03; and so forth until
you run out of room. Running out of room typically means that unless you
configured Fileman differently, the total length of fields exceeds 255 minus
the delimiters. Once we are on the next node, which let's say is 1, you can
name your fields 1.1, 1.2 and so forth. You can have non-numeric nodes as well,
so this scheme may not work as your cannot have non-numeric field numbers.

Keeping this in mind, let's do this file structure::

    .01 -> default location -> Free Text 1-7 characters long
    .02 -> Work Title -> Free Text 7-200 characters long.
    .03 -> Year Composed -> Number between 1650 to 1750.
    1 -> Instruments (Multiple)
       .01 -> Instrument -> Free Text 1-100 characters long
       .02 -> Number -> Number 1-20.
    2.1 -> Key -> pointer to a Musical Key file which we will make. 


We have enough here to keep up busy for several weeks.

One last point we have to attend to before creating the files is deciding their
number among all Fileman files and storage location in the Mumps database. In
VISTA, you have to apply for a number and namespace from the database
adminstrator, so your files won't collide with somebody else's files in the
database. In our case, since this is a standalone system, we can pick anything.
So we will number our file as 1001, and our storage location on the Mumps
database will be ^BWV. For our Musical key, let's put it in 1002 and in the global ^MusicKey

I will show a couple of screenshots. After that, you will need to learn how to
navigate across the form to create a new file yourself.

Create the file
+++++++++++++++
Follow these prompts::

    VA FILEMAN 22.2V2


    Select OPTION: **MO**DIFY FILE ATTRIBUTES  
    Do you want to use the screen-mode version? YES// **<enter>**

    Modify what File: **BACH WERKE VERZEICHNIS**
      Are you adding 'BACH WERKE VERZEICHNIS' as a new FILE? No// **Y**  (Yes)
       FILE NUMBER: 1001// **1001**

    INTERNAL GLOBAL REFERENCE: ^DIZ(1001,// **^BWV(**

    ...HMMM, I'M WORKING AS FAST AS I CAN...
         A FreeText NAME Field (#.01) has been created.

    Select FIELD:

Now type in ``.01``, and now you will be presented with this red on black form (colors not shown)::

                               Field #.01 in File #1001                          
    FIELD LABEL: NAME                             DATA TYPE... FREE TEXT           

              TITLE:                                                             
              AUDIT:                 
    AUDIT CONDITION:                                                             
        READ ACCESS:              
      DELETE ACCESS:              
       WRITE ACCESS:              
             SOURCE:                                                              
     DESCRIPTION...        TECHNICAL DESCRIPTION...  

                          IS THIS FIELD MULTIPLE... NO 

         MANDATORY: YES
       HELP-PROMPT: NAME MUST BE 3-30 CHARACTERS, NOT NUMERIC OR STARTING WITH PU
    XECUTABLE HELP:                                                              

You can browse this form using 1. Tab key; 2. Arrow keys; 3. Mouse. 4. Enter key. Make sure to press the Enter key after each field because that or the mouse opens subforms in the main form. Remeber to use the "?" and "??" for help. If you press enter on the FREE TEXT field, you will get this subform::

                               Field #.01 in File #1001                          
    FIELD LABEL: NAME                             DATA TYPE... FREE TEXT           
           ┌──────────────────────────────────────────────────────────┐
           │         MINIMUM LENGTH: 3                                │          
           │         MAXIMUM LENGTH: 30                               │
    AUDIT C│ PATTERN MATCH (IN 'X'): X'?1P.E                          │          
        REA└──────────────────────────────────────────────────────────┘
      DELETE ACCESS:              
       WRITE ACCESS:              
             SOURCE:                                                              
     DESCRIPTION...        TECHNICAL DESCRIPTION...  

                          IS THIS FIELD MULTIPLE... NO 

         MANDATORY: YES
       HELP-PROMPT: Answer must be 3-30 characters in length.                    
    XECUTABLE HELP:                                                              
    _______________________________________________________________________________
     
    Close    Refresh
     
The other subform is located at the "IS THIS FIELD MULTIPLE" prompt, which specifies the storage location. It's only shown when you are editing a field you just created. Otherwise, you won't see it. In the case of this .01 field, you won't see it. So I will show a screenshot of it later.

So perform the following:
 * Change the field label to "BWV NUMBER"
 * Change the minimum length to be 1 and the maximum length to be 7 in the subform.
 * Add a description by pressing enter on the description field. You will be dropped into a word processing editor. To get out, type CTRL-E.

To get out of the form, click or type "S", and then click or type "E". If typing, you need to type when your cursor is at the bottom of the screen, in the ``COMMAND AREA``::

                               Field #.01 in File #1001                          
    FIELD LABEL: BWV NUMBER                       DATA TYPE... FREE TEXT           

              TITLE:                                                             
              AUDIT:                 
    AUDIT CONDITION:                                                             
        READ ACCESS:              
      DELETE ACCESS:              
       WRITE ACCESS:              
             SOURCE:                                                              
     DESCRIPTION...        TECHNICAL DESCRIPTION...  

                          IS THIS FIELD MULTIPLE... NO 

         MANDATORY: YES
       HELP-PROMPT: Answer must be 1-7 characters in length.                     
    XECUTABLE HELP:                                                              
    _______________________________________________________________________________
     
    Exit    Save    Refresh    Quit
     
    Click on one of the above COMMANDs, or on a FIELD

    COMMAND: E                                                        HELP  Insert 

Once you exit, you will be drop back to this prompt::

    Select FIELD:

Now, type the following for the second field.::

    Select FIELD: .02
      Are you adding a new FIELD (the 2ND)? No// Y  (Yes)
       LABEL: WORK TITLE
       FIELD NUMBER: .02// 

At this point, you will see the form again. Navigate to DATA TYPE, type F for free text, then press enter. You will see the subform: Put in 7 for minimum length and 200 for maximum length. The cursor drops into ``IS THIS FIELD MULTIPLE``. If you press enter here, you will see the subform which I mentioned before.::

                               Field #.02 in File #1001                          
    FIELD LABEL: WORK TITLE                       DATA TYPE... FREE TEXT           

           ┌───────────────────────────────────────────────────────┐             
           │      SUBSCRIPT: 0                                     │
    AUDIT C│ PIECE-POSITION: 2                                     │             
        REA└───────────────────────────────────────────────────────┘
      DELETE ACCESS:              
       WRITE ACCESS:              
             SOURCE:                                                              
     DESCRIPTION...        TECHNICAL DESCRIPTION...  

                          IS THIS FIELD MULTIPLE... NO 

         MANDATORY: NO 
       HELP-PROMPT: Answer must be 7-200 characters in length.                   
    XECUTABLE HELP:                                                              
    _______________________________________________________________________________
     
    Close    Refresh
     
    Click on one of the above COMMANDs, or on a FIELD

    COMMAND: Close                                                    HELP  Insert 

Accept the defaults, and get out of the form using save and exit.

Follow the same steps for #.03, ``YEAR COMPOSED``. The data type is ``NUMERIC``.
For ``INCLUSIVE LOWER BOUND``, type 1650; ``INCLUSIVE UPPER BOUND`` 1750. Add a description describing the field.

Field 1 is slightly different as it's a multiple.

Create field 1 and name it INSTRUMENT. On Data Type, put Free text, and designate the length to be 2-100 characters. When you get out of the subform, you will be dropped into the field ``IS THIS FIELD MULTIPLE``. This time answer yes. You will get two subforms asking about user interface behavior. Answer them as follows::
    
    SHOULD USER SEE AN "ADDING A NEW ENTRY" MESSAGE: YES
    HAVING ENTERED OR EDITED ONE MULTIPLE, SHOULD USER BE ASKED ANOTHER: YES

You then nagivate to the help prompt. Pressing enter again has Fileman ask you where to store the multiple. Just accept the defaults in that dialog for ``SUBSCRIPT`` and ``SUB-DICTIONARY NUMBER``.

When you exit the form, you are dropped into a different prompt since you are now inside of a subfile::

    Select INSTRUMENT SUB-FIELD: ?
        Answer with INSTRUMENT SUB-FIELD NUMBER, or LABEL:
       .01          INSTRUMENT
             
            You may enter a new INSTRUMENT SUB-FIELD, if you wish
       
    Select INSTRUMENT SUB-FIELD: 

Create the field ``NUMBER`` with .02 as the field number. You will see the form again. By now you know the drill. Make the field numeric and give it a range of 1 to 20.

When you exit, you will be asked to enter another sub-field. Rather than doing that, just hit enter to drop back down to the main file level::

    Select INSTRUMENT SUB-FIELD: **<enter>**



    Select FIELD: 

The next field demands that we make it point to another file. Oooops. That doesn't exist yet. So we go ahead and make it.

Press enter again to get back into the main Fileman menu; and re-enter the ``MODIFY FILE ATTRIBUTES`` options.::

    Select OPTION: modIFY FILE ATTRIBUTES  
    Do you want to use the screen-mode version? YES// 

    Modify what File: BACH WERKE VERZEICHNIS// MUSICAL KEY
      Are you adding 'MUSICAL KEY' as a new FILE? No// Y  (Yes)
       FILE NUMBER: 1003// 1002

    INTERNAL GLOBAL REFERENCE: ^DIZ(1002,// ^MusicKey(

    ...HMMM, JUST A MOMENT PLEASE...
         A FreeText NAME Field (#.01) has been created.



    Select FIELD: 

The only thing you need to modify on the .01 field is add a description.

Now let's go back to the BWV file and add the key field::

    Select OPTION: MODIFY FILE ATTRIBUTES  
    Do you want to use the screen-mode version? YES// 

    Modify what File: MUSICAL KEY// BACH WERKE VERZEICHNIS  
                                              (0 entries)



    Select FIELD: ?
        Answer with FIELD NUMBER, or LABEL
       Choose from:
       .01          BWV NUMBER
       .02          WORK TITLE
       .03          YEAR COMPOSED
       1            INSTRUMENT  (multiple)
             
            You may enter a new FIELD, if you wish
       
    Select FIELD: 2.1
      Are you adding a new FIELD (the 5TH)? No// Y  (Yes)
       LABEL: KEY
       FIELD NUMBER: 2.1// 

For ``DATA TYPE``, choose P for pointer. On the subfile form, tell it that you are pointing to the ``MUSICAL KEY`` file and that ``Adding a new file entry ("LAYGO") is allowed`` is YES. We will discuss LAYGO later when we are using it. You will get another subform for screening; in which you can accept the defaults. When asked for the storage location in that subform, choose Subscript 2 and Piece 1 (they should be the defaults). Populate the help prompt with "Select an Entry".

To view the structure of your file, you can do a listing in the data dictionary viewer.
Here are the fields according to the condensed data dictionary listing::

    .01       BWV NUMBER (RFJ7), [0;1]
    .02       WORK TITLE (FJ200), [0;2]
    .03       YEAR COMPOSED (NJ4,0), [0;3] 
    1         INSTRUMENT (Multiple-1001.01), [1;0]
              .01  INSTRUMENT (MFJ100), [0;1]
              .02  NUMBER (NJ2,0), [0;2]
    2.1       KEY (P1002), [2;1]

At this point, we are ready to enter, edit and delete data in Fileman.


