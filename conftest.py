import pytest
from src import create_app
from src.models import db
from flask_sqlalchemy import SQLAlchemy
# uses the https://pytest-flask.readthedocs.io/en/latest/features.html for pytest-fixtures
@pytest.fixture(scope="session")
def app():
    # make sure the environment variabe TESTING=True
    app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()
    yield app
    with app.app_context():
        db.drop_all()
