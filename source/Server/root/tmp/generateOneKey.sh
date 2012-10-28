#!/bin/bash
#
# This script generates a SSH Key pair suitable for connecting
# to the class server. The purpose of these keys is to avoid
# allowing SSH password logins.
#
ssh-keygen \
-t rsa \
-C "Open-Source-Database-Tutorial" \
-P "Three DBAs walk into a NoSQL bar" \
-f $1
