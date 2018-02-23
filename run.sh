#!/bin/sh
cd /root/project/my-blog
echo "git pull start"
git pull origin master
pm2 restart 0
echo "success"