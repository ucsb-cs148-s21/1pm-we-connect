#!/usr/bin/env bash
case $1 in
    install )
        if ! command -v poetry &> /dev/null
        then
            echo "Poetry could not be found, please install it: https://python-poetry.org/docs/"
        exit
        else
            poetry install
        fi;;
    serve ) python3 wsgi.py;;
    frontend-build ) (cd ./frontend/; npm run build; cp -r build/ ../src/);;
    *) echo "Please enter a command of: install, serve or frontend-build";;
esac
