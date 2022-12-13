#!/bin/bash

while true; do
    read -e -p "Please enter your directory to your logs: " FILEPATH
    read -p "Please enter your serverId to continue: " serverId
    # read -p "Please enter your directory to your logs: " FILEPATH

    ################################################################

    if [ -z "$serverId" ] || [ -z "$FILEPATH" ]; then
        echo "input cannot be blank. Please try again"
    else
        echo $FILEPATH

        if [ ! -f $FILEPATH ]; then
            echo "File not found!. Please try again"
        else
            echo $serverId
            break
        fi
    fi
    ################################################################
done

# set the file to read from
#60a482ff-76ca-11ed-82ea-50ebf62a0ed9
# file="./logs.txt"
# 3c8c8baf-7601-11ed-8b19-b808cf2f05d4

# inotifywatch -e modify "$FILEPATH"

# read each line of the file
# while read -r line; do
#     # print the line
#     sleep 1

#     data=$(jq -n -Rsa --arg KEY 'logs' --arg VAL "$line" '{"\($KEY)":$VAL}')

#     #   echo $data;

#     curl -X POST -H "Content-Type: application/json" -d "$data" "$ENDPOINT"

#     #

#     # done < "$file"
# done <"$FILEPATH"

# listen for write operations
while true; do
    # Send each new line to the endpoint as it is written to the log file
    tail -f "$FILEPATH" | while read -r line; do

        data=$(jq -n -Rsa --arg KEY 'logs' --arg VAL "$line" '{"\($KEY)":$VAL}')
        curl -X POST -H "Content-Type: application/json" -d "$data" "http://localhost:5000/server/$serverId/notifications"
    done
done

# sudo apt install inotify-tools
