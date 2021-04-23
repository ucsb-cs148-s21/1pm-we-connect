#!/usr/bin/env python3
from flask import Flask, render_template,url_for
# from flask_sqlalchemy import SQLAlchemy
#

# Temporary array before implementing database
storage = ["Item 1", "Item 2", "Item 3"]
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
        @app.route("/projects/edit", methods=["GET", "POST", "UPDATE", "DELETE"])
        def projectCreate():
            if(request.method == "GET"):
                index = request.form["index"]
                return storage[int(index)]

            elif(request.method == "POST"):
                value = request.form["value"]
                storage.append(value)
                return value

            elif(request.method == "UPDATE"):
                index = request.form["index"]
                value = request.form["value"]
                storage[int(index)] = value
                return storage[int(index)]

            elif(request.method == "DELETE"):
                index = request.form["index"]
                storage.pop(int(index))
                return index

        return app
