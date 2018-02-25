#!/bin/sh
cd /root/project/my-blog
echo "git pull"
git pull origin master
if [ $1 == "restart" ]
then
    pm2 restart app
    echo "restart server"
fi
echo "success"