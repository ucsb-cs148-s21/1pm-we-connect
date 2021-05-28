from flask import Flask
from flask_sqlalchemy import SQLAlchemy

"""Data models."""
db = SQLAlchemy()


class formModel(db.Model):
    __tablename__ = "form"

    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(100), nullable=False)
    projectName = db.Column(db.String(100), nullable=False)
    contactInfo = db.Column(db.String(12), nullable=False)
    projectDescription = db.Column(db.String(2000), nullable=False)
    tagsString = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        item = {
            "author": self.author,
            "projectName": self.projectName,
            "contactInfo": self.contactInfo,
            "projectDescription": self.projectDescription,
            "tagsString": self.tagsString
        }
        return item


class tagModel(db.Model):
    __tablename__ = "tag"

    name = db.Column(db.String(100), primary_key=True, nullable=False)
    count = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        item = {"name": self.name}
        return item


# project tag relation
class PTRelation(db.Model):
    __tablename__ = "PTRelation"

    iden = db.Column(db.String(100), primary_key=True, nullable=False)
    projectID = db.Column(db.Integer, db.ForeignKey(formModel.id), nullable=False)
    tagName = db.Column(db.String(100), db.ForeignKey(tagModel.name), nullable=False)

    def __repr__(self):
        item = {"iden": self.iden, "projectID": self.projectID, "tagName": self.tagName}
        return item
