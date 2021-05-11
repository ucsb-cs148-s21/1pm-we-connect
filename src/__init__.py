#!/usr/bin/env python3
from flask import Flask, request, render_template, url_for, Response
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
import os.path
from os import path
import random
import uuid

db = SQLAlchemy()
class formModel(db.Model):
        __tablename__ = 'form'

        id = db.Column(db.Integer, primary_key = True)
        author = db.Column(db.String(100), nullable = False)
        projectName = db.Column(db.String(100), nullable = False)
        contactInfo = db.Column(db.String(12), nullable = False)
        projectDescription = db.Column(db.String(2000), nullable = False)

        def __repr__(self):
            item = {
                "author": author,
                "projectName": projectName,
                "contactInfo": contactInfo,
                "projectDescription": projectDescription
            }
            return item


class tagModel(db.Model):
        __tablename__ = 'tag'

        name = db.Column(db.String(100), primary_key = True, nullable=False)

        def __repr__(self):
            item = {
                "name": name
            }
            return item

#project tag relation
class PTRelation(db.Model):
        __tablename__ = 'PTRelation'

        iden = db.Column(db.Integer, primary_key = True, nullable=False)
        projectID = db.Column(db.Integer, db.ForeignKey(formModel.id), nullable=False)
        tagName = db.Column(db.String(100), db.ForeignKey(tagModel.name), nullable=False)

        def __repr__(self):
            item = {
                "projectID": projectID,
                "tagName": tagName
            }
            return item


def create_app():
    app = Flask(__name__, static_folder="./build/static", template_folder="./build") # For React to be added later
    # app = Flask(__name__, static_folder="./templates/static", template_folder="./templates")

    #database configuration
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    db.init_app(app)
    #Removed for database testing
    """ 
    # Temporary dictionary of dictionaries
    storage = {
        "1": {"author": "Author 1", "projectName":"Make a Flask app", "contactInfo": "111-111-1111", "projectDescription": "hello"},
        "2": {"author": "Author 2", "projectName":"Stop being depressed", "contactInfo": "111-111-1111", "projectDescription": "hello"},
        "3": {"author": "Author 3", "projectName":"Eat", "contactInfo": "111-111-1111", "projectDescription": "hello"}
        }
    """


    with app.app_context():
        @app.route("/")
        def index():
            return render_template("index.html") # Landing page, maybe also contain projects but optional

        @app.route("/projects", methods=["GET", "POST"])
        def projects():
            if(request.method == "GET"):
                allForms = formModel.query.all()
                storage = {}
                for form in allForms:
                    storage[str(form.id)] = {
                        "author": form.author, 
                        "projectName": form.projectName, 
                        "contactInfo": form.contactInfo, 
                        "projectDescription": form.projectDescription
                    }
                return storage

            elif(request.method == "POST"):
                """
                authorArg = request.json["author"]
                projectNameArg = request.["projectName"]
                contactInfoArg = request.form["contactInfo"]
                projectDescriptionArg = request.form["projectDescription"]
                """
                item = request.json
                #Removed for database testing
                """
                item = {
                    "author": author,
                    "projectName": projectName,
                    "contactInfo": contactInfo,
                    "projectDescription": projectDescription
                }
                """
                #Taken out for database testing
                number = id(item) 
                # number = random.randrange(1,100)

                form = formModel(
                    id = number, 
                    author = item["author"], 
                    projectName = item["projectName"],
                    contactInfo = item["contactInfo"],
                    projectDescription = item["projectDescription"]
                    )
                db.session.add(form)


                #print(item["tags"].split())
                for tag_name in item["tags"].split():
                    tag = tagModel(name=tag_name)
                    db.session.add(tag)

                    #relation = PTRelation(iden=random.randrange(1,100), projectID=number, tagName=tag_name)
                    # db.session.add(relation)
                    #print(relation)

                db.session.commit()

                return "SUCCESS"

        # Get, Put, or Delete
        # @app.route("/projects/<int:form_id>", methods=["GET", "PUT", "DELETE"])
        # def projectCreate(form_id):
            # if(request.method == "GET"):
            #     result = formModel.query.get(id=form_id)
                # return result

            # elif(request.method == "PUT"):
            #     storage[id] = {"name": id, "text": value}
            #     return storage[id]

            # elif(request.method == "DELETE"):
            #     storage.pop(id)
            #     return id
        db.create_all()
        return app
