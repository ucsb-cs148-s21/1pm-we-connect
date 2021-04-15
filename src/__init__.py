#!/usr/bin/env python3
from flask import Flask, render_template
# from flask_sqlalchemy import SQLAlchemy
#
def create_app():
    app = Flask(__name__, static_folder="./build/static", template_folder="./build")
    with app.app_context():
        @app.route("/")
        def index():
            return render_template("index.html")
        return app
