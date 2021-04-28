"""Data models."""
from . import db

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

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
