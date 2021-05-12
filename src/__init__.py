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
    app = Flask(__name__, static_folder="./build/static", template_folder="./build") # For React to be added later
    # app = Flask(__name__, static_folder="./templates/static", template_folder="./templates")

    #database configuration
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    db.init_app(app)

    if not path.isfile("database.db"):
    	open("database.db", "w")
    	db.create_all()


    with app.app_context():
        from .routes import route
        app.register_blueprint(route)

        #db.create_all()
        return app
