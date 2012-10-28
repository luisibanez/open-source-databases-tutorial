Login in the Server
===================

This page provides instructions on how to log in the class server.

You should have recevied from your instructors a file with your private SSH key.

We will refer to that file as the "student1" SSH private key file.

You must first place this file in the location where your SSH client can find it.

Linux
-----

If you are using the ssh clien in Linux, you must place the "student1" SSH private key file in the directory

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

  cp student1 ~/.ssh

and ensure that the file has the following permissions

::

   -rw-------

You can check the permissions of the file with the command

::

   ls -l ~/.ssh/

If you need to change the permissions of the private key file, you can use the following command

::

   chmod 600 ~/.ssh/student1

of course, replacing "student1" with the actual name of the SSH private key file that you received from your instructor.

Now we can try login into the server with the command

::

  ssh student1@ec2-54-242-33-188.compute-1.amazonaws.com

again, replacing "student1" with your actual student Id number.

Depending on the settings of your SSH agent, at this point you may received a message such as

::

   Permission denied (publickey).

In this case you should do the following to add your private key to the SSH agent

::

   exec ssh-agent bash
   ssh-add ~/.ssh/student1

at this point you will be asked to provide the Passphrase of your SSH key with the message

::

    Enter passphrase for ~/.ssh/student1:

To which you should respond by typing

::

   Three DBAs walk into a NoSQL bar

The system will not show you any characters as you are typing (to prevent someone looking over your shoulder to see the passphrase)

Once the passphrase is entered correctly, you should receive a message similar to

::

   Identity added: ~/.ssh/student2 (~/.ssh/student2)

At this point, your SSH key is available, and you can retry the command

::

  ssh student1@ec2-54-242-33-188.compute-1.amazonaws.com


Mac
---

The instructions for Linux should work in Mac.

There is however a more convenient way of doing this using the Mac KeyChain. In this case, you can add your SSH key to the keychain with the following command

::

   ssh-add -K ~/.ssh/student1


Windows
-------

In Windows you may want to use PuTTY.

The SSH agent in PuTTY is called Pageant.

To use your private SSH key with Pageant, you should import the private key using PuttyGen menus

::
 
   PuttyGen -> Conversion -> Import Key

The open Pageant and select the "Add Key" option and point to the file that you just imported.

At this point you should be able to use PuTTY to log into the server.


