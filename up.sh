#!/bin/bash
rm -rf build
cp -R ~/HAXcms/build build
git add -A
git commit -m "build updated"
git push origin master