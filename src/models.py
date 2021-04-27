"""Data models."""
from . import db

class Form(db.Model):
    """Data model for each post"""

    __tablename__ = 'userPosts'
    userName = db.Column(
        db.String(64),
    )
    postText = db.Column(
        db.String(64),
    )

    def print(self):
        return '<User {}>'.format(self.username)