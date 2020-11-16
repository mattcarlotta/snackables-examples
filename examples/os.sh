#!/bin/sh

user=$(echo $USER)
host=$(hostname)
kernel=$(uname -r)

case $(uname -s) in 
  Darwin) machine="Mac OS X";;
  Linux) machine="Linux";;
  CYGWIN*|MINGW32*|MSYS*|MINGW*) machine="MS Windows";;
  *) machine="Other OS";;
esac;

echo "${user}@${host}:${machine}-${kernel}";

