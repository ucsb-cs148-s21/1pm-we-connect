from ..__init__ import create_app
from ..models import db, formModel, tagModel
from flask import url_for
import pytest
import json

# uses the https://pytest-flask.readthedocs.io/en/latest/features.html for pytest-fixtures
@pytest.fixture
def app():
    # make sure the environment variabe TESTING=True
    app = create_app()
    return app
def test_post_request(client):
    form = {"author": "thanawat", "projectName": "hello", "contactInfo": "111-111-1111", "projectDescription": "hello world", "tags": "hello"}
    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    assert res.status_code == 200


def test_project_get_request(client):
    # To use the url_for use <Blueprint-name>.<route name>
    res = client.get(url_for("route.projects"))
    # run "pytest -s" to get see print result
    print(res.json)
    assert res.status_code == 200
