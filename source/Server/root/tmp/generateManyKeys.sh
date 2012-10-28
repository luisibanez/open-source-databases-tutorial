#!/bin/bash
#
# This script generates N keys using a predefined string file name.
# It is expected that the script generateOneKey.sh will be placed
# in the same directory.
#
echo "Bash version ${BASH_VERSION}"
for ((i=1;i<$1;i=i+1))
do
  echo "Creating key for $i"
  filename='student'$i
  ./generateOneKey.sh $filename
done
