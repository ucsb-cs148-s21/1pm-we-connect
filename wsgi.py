#!/usr/bin/env python3
from src import create_app

myapp = create_app()

if __name__ == "__main__":
    myapp.run(host="localhost")
    myap.run(debug=True) # probably should remove if deploying
