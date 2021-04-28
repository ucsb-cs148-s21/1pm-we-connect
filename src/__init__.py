#!/usr/bin/env python3
from flask import Flask, request, render_template,url_for,Response
#from flask_sqlalchemy import SQLAlchemy

#db = SQLAlchemy()
# Temporary dictionary of dictionaries
storage = {
    "1": {"author": "Author 1", "projectName":"Make a Flask app", "contactInfo": "111-111-1111", "projectDescription": "hello"},
    "2": {"author": "Author 2", "projectName":"Stop being depressed", "contactInfo": "111-111-1111", "projectDescription": "hello"},
    "3": {"author": "Author 3", "projectName":"Eat", "contactInfo": "111-111-1111", "projectDescription": "hello"}
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
            return storage

        #Get, Post, Update, or Delete
        @app.route("/projects/<id>/<value>", methods=["GET", "POST", "UPDATE", "DELETE"])
        def projectCreate(id, value):
            if(request.method == "GET"):
                return storage[id]

            elif(request.method == "POST"):
                #storage[id] = {"name":id, "text":value}

                print(request.json)
                storage[id] = request.json
                return value

            elif(request.method == "UPDATE"):
                storage[id] = {"name":id, "text":value}
                return storage[id]

            elif(request.method == "DELETE"):
                storage.pop(id)
                return id

        return app
