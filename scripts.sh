#!/usr/bin/env bash
case $1 in
    install )
        if ! command -v poetry &> /dev/null
        then
            echo "Poetry could not be found, please install it: https://python-poetry.org/docs/"
        exit
        elif ! command -v npm &> /dev/null
             then
                echo "npm/Node could not be found, please install it: https://nodejs.dev/learn/how-to-install-nodejs"
        else
            poetry install
            (cd ./frontend/; npm install)
        fi;;
    serve ) python3 ./wsgi.py;;
    frontend-serve ) (cd ./frontend/; npm start);;
    frontend-build ) (cd ./frontend/; npm run build; cp -r build/ ../src/);;
    test-backend ) poetry run pytest;;
    format ) poetry run black .;;
    *) echo "Please enter a command of:
            install(installs the required dependencies),
            serve(serve the backend flask app),
            frontend-serve(serves the frontend react)
            format(formats the code)
            frontend-build(builds the frontend for production)";;
esac
