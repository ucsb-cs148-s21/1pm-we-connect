#!/usr/bin/env python3
from src import create_app
from flask import url_for

myapp = create_app()

if __name__ == "__main__":
    myapp.run(host="localhost", debug=True)
