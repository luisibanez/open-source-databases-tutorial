#!/bin/bash
#
# This script generates a SSH Key pair suitable for connecting
# to the class server. The purpose of these keys is to avoid
# allowing SSH password logins.
#
keyfilename=$1

commenttext=$2

ssh-keygen \
-t rsa \
-C "$commenttext" \
-P "Three DBAs walk into a NoSQL bar" \
-f $keyfilename
