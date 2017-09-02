#!/usr/bin/env bash
set -e

# update instance
yum -y update

# add nodejs to yum
curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
yum -y install nodejs

# install forever module globaly
npm install -g forever
