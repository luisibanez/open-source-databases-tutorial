#!/bin/bash
#
# This script adds one user to the system.
# It must be run with sudo.
#

adduser \
--disabled-password \
--gecos "$1,,," \
 $1

# Create SSH keys
./generateOneKey.sh $1

# Install SSH key
sshdir="/home/$1/.ssh"
mkdir $sshdir
chmod 700 $sshdir
cp $1     $sshdir
cp $1.pub $sshdir
cat $1.pub >> $sshdir/authorized_keys
chown $1:$1 -R $sshdir

# Manually Send the private key to the new user.


