#!/usr/bin/env python3
from flask import Flask, render_template,url_for
#from flask_sqlalchemy import SQLAlchemy

#db = SQLAlchemy()
# Temporary dictionary of dictionaries
storage = {
    "1": {"name": "Author 1", "text":"Make a Flask app"},
    "2": {"name": "Author 2", "text":"Stop being depressed"}, 
    "3": {"name": "Author 3", "text":"Eat"}
    }

def create_app():
    # app = Flask(__name__, static_folder="./build/static", template_folder="./build") # For React to be added later
    app = Flask(__name__, static_folder="./templates/static", template_folder="./templates")
    with app.app_context():
        @app.route("/")
        def index():
            return render_template("index.html") # Landing page, maybe also contain projects but optional
        
        @app.route("/projects")
        def projects():
            return ", ".join(storage) 

        #Get, Post, Update, or Delete
        @app.route("/projects/<id>/<value>", methods=["GET", "POST", "UPDATE", "DELETE"])
        def projectCreate(id, value):
            if(request.method == "GET"):
                return storage[id]

            elif(request.method == "POST"):
                storage[id] = {"name":id, "text":value}
                return value

            elif(request.method == "UPDATE"):
                storage[id] = {"name":id, "text":value}
                return storage[id]

            elif(request.method == "DELETE"):
                storage.pop(id)
                return id

        return app