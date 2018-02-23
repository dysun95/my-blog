#!/bin/sh
cd /root/project/my-blog
git pull
pm2 restart 0
echo "success"