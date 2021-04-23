#!/usr/bin/env python3
from flask import Flask, render_template,url_for
# from flask_sqlalchemy import SQLAlchemy
#
def create_app():
    # app = Flask(__name__, static_folder="./build/static", template_folder="./build") # For React to be added later
    app = Flask(__name__, static_folder="./templates/static", template_folder="./templates")
    with app.app_context():
        @app.route("/")
        def index():
            return render_template("index.html") # Landing page, maybe also contain projects but optional
        @app.route("/projects")
        def projects():
            return "projects"
        @app.route("/projects/<int:post_id>") # There's a special "converter" with flask, so you don't have to convert to int anymore
        def project(post_id):
            return "project " + post_id
        return app
