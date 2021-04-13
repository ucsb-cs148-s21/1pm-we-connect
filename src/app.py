#!/usr/bin/env python3
from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)


@app.route("/")
def hello():
    return "hello world"
