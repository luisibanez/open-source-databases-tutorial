Login in the Server
===================

This page provides instructions on how to log in the class server.

You should have recevied from your instructors a file with your private SSH key.

We will refer to that file as the "studentname" SSH private key file.

You must first place this file in the location where your SSH client can find it.

Linux
-----

If you are using the ssh clien in Linux, you must place the "studentname" SSH
private key file in the directory

::

  ~/.ssh

Check the permissions of the directory with the following command

::

  ls -la ~ | grep ssh

The .ssh directory should have the following access permissions

::

  drwx------

You can achieve this with the command

::

  chmod 700 ~/.ssh

Then you should copy the private key file in this directory with the command

::

  cp studentname ~/.ssh

and ensure that the file has the following permissions

::

   -rw-------

You can check the permissions of the file with the command

::

   ls -l ~/.ssh/

If you need to change the permissions of the private key file, you can use the
following command

::

   chmod 600 ~/.ssh/studentname

of course, replacing "studentname" with the actual name of the SSH private key
file that you received from your instructor.

Now we can try login into the server with the command

::

  ssh studentname@ec2-54-242-33-188.compute-1.amazonaws.com

again, replacing "studentname" with your actual student Id number.

Depending on the settings of your SSH agent, at this point you may received a
message such as

::

   Permission denied (publickey).

In this case you should do the following to add your private key to the SSH agent

::

   exec ssh-agent bash
   ssh-add ~/.ssh/studentname

at this point you will be asked to provide the Passphrase of your SSH key with
the message

::

    Enter passphrase for ~/.ssh/studentname:

To which you should respond by typing

::

   Three DBAs walk into a NoSQL bar

The system will not show you any characters as you are typing (to prevent
someone looking over your shoulder to see the passphrase)

Once the passphrase is entered correctly, you should receive a message similar to

::

   Identity added: ~/.ssh/student2 (~/.ssh/student2)

At this point, your SSH key is available, and you can retry the command

::

  ssh studentname@ec2-54-242-33-188.compute-1.amazonaws.com


Mac
---

The instructions for Linux should work in Mac.

There is however a more convenient way of doing this using the Mac KeyChain. In
this case, you can add your SSH key to the keychain with the following command

::

   ssh-add -K ~/.ssh/studentname


Windows
-------

In Windows you may want to use `PuTTY`_

The SSH agent in PuTTY is called `Pageant`_.

To use your private SSH key with Pageant, you should import the private key
using `PuTTYgen`_ menus

::
 
   PuttyGen -> Conversion -> Import Key

Then save the key using the PPK (PuTTY Private Key) file format.

Then in Pageant select the "Add Key" option and point to the file that you just
imported. You will be prompted for the passphrase. Type

::

   Three DBAs walk into a NoSQL bar


At this point you should be able to use `PuTTY`_ to log into the server.

Put the following in the "Host Name (or IP address)" field in PuTTY

::

  ec2-54-242-33-188.compute-1.amazonaws.com

and then click on the "Open" button.

A new window will open with the prompt

::

    login as:

enter your "studentname".

If this is the first time logging in the server, you will get a warning about
the authentication of the server itself. Accept the warning.

At this point you should be logged into the server.

The welcome message should start with

::

   login as: studentname
   Authenticating with public key "imported-openssh-key" from agent
   Welcome to Ubuntu 12.04.1 LTS (GNU/Linux 3.2.0-32-virtual x86_64)

.. _PuTTY: http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html
.. _Pageant: http://the.earth.li/~sgtatham/putty/latest/x86/pageant.exe
.. _PuTTYgen: http://the.earth.li/~sgtatham/putty/latest/x86/puttygen.exe
