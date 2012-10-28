#!/bin/bash
#
# This script adds one user to the system.
#
useradd $1
./generateOneKey $1
sshdir="/home/$1/.ssh"
mkdir $sshdir
chmod 700 $sshdir
cp $1.pub $sshdir
chown $1:$1 -R $sshdir

