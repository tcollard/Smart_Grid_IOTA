#!/bin/sh
MACHINE_NAME=$(docker-machine ls -q)
IP_MACHINE=$(docker-machine ip $MACHINE_NAME)
TXT_REPLACE="const ipMachine = '$IP_MACHINE'"
FILE='Navbar.vue'
#echo $IP_MACHINE

cd ./front/src/components && awk -v txt="$TXT_REPLACE" 'NR==221{sub(/const ipMachine.*/,txt)}1' $FILE > tmp.txt && cat tmp.txt > $FILE && rm tmp.txt
