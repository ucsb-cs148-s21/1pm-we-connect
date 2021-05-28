#!/usr/bin/env python3
from flask import Flask, request, render_template, url_for, Response, Blueprint
from .models import db
from flask_migrate import Migrate
from config import Config
import os.path
from os import path
import random
import uuid


def create_app():
    app = Flask(
        __name__, static_folder="./build/static", template_folder="./build"
    )
    # config in ../config.py
    app.config.from_object("config.Config")
    db.init_app(app)

    if not path.isfile("./src/database.db"):
        open("./src/database.db", "w")
        print("initializing table")
        with app.app_context():
            db.create_all()
    if app.config["TESTING"] == True and (not path.isfile("./src/tests/test-database.db")):
        print(os.getcwd())
        open("./src/tests/test-database.db", "w")
        db.create_all()

    with app.app_context():
        from .routes import route

        app.register_blueprint(route)

        # db.create_all()
        return app
