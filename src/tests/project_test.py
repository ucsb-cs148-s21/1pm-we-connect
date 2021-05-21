from ..models import formModel, tagModel, PTRelation
from flask import url_for
import json

def test_post_request(client):
    form = {"author": "thanawat", "projectName": "hello", "contactInfo": "111-111-1111", "projectDescription": "hello world", "tags": "hello"}
    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    assert res.status_code == 200
    # returns None if data is not found
    data = formModel.query.filter_by(projectName="hello").first()
    # Makes sure data is added properly
    assert data != None
    assert data.author ==  "thanawat"
    assert data.projectName == "hello"
    assert data.contactInfo == "111-111-1111"
    assert data.projectDescription == "hello world"
    # Makes sure the tags are added properly
    tag_data = tagModel.query.filter_by(name="hello").first()
    assert tag_data != None
    # Makes sure PTRelation is correctly relating posts to tags
    ptr_data = PTRelation.query.filter_by(projectID=data.id).first()
    assert ptr_data != None
    assert ptr_data.tagName == "hello"


def test_project_get_request(client):
    # To use the url_for use <Blueprint-name>.<route name>
    res = client.get(url_for("route.projects"))
    # run "pytest -s" to get see print result
    # to get the response, use: res.json
    assert res.status_code == 200
    # same form object as before. This assumes that the previous post test already ran(whcih adds the form to the database).
    # This test makes sure that the GET request value matches the POST request value(minus the tags)
    form = {"author": "thanawat", "projectName": "hello", "contactInfo": "111-111-1111", "projectDescription": "hello world", "tags": "hello"}
    resForm = list(res.json.values())[0]
    assert form == resForm
