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


#Test makes sure multiple tags can get entered
def test_post_request(client):
    form = {"author": "thanawat", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob,math,science"}

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
    assert tag_data.name == "hello"

    tag_data = tagModel.query.filter_by(name="cs").first()
    assert tag_data.name == "cs"

    tag_data = tagModel.query.filter_by(name="prob").first()
    assert tag_data.name == "prob"

    tag_data = tagModel.query.filter_by(name="math").first()
    assert tag_data.name == "math"

    tag_data = tagModel.query.filter_by(name="science").first()
    assert tag_data.name == "science"

    # Makes sure PTRelation is correctly relating posts to tags
    ptr_data = PTRelation.query.filter_by(projectID=data.id)
    assert ptr_data != None
    for row in ptr_data:
        assert row.tagName != None


#Test checks to see if multiple tags can be returned in a get request
def test_getMultipleTags(client):
    form = {"author": "thanawat", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob,math,science"
            }
    
    res = client.get(url_for("route.projects"))
    assert res.status_code == 200
    resForm = list(res.json.values())[0]
    assert form == resForm

#tests top K
def test_topKTags(client):
    #inserting a few forms
    form = {"author": "thanawat", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob,math,science"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    form = {"author": "thanawat", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob,math"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    form = {"author": "thanawat", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    #I don't know if this syntax is right with the /
    res = client.get(url_for("route.popular/4"))
    assert res.status_code == 200
    
    #I also don't know the exact return type of res so might be wrong
    resForm = {"tags": {"hello": 3, "cs":3, "prob":3, "math":2}}
    assert res == resForm

#Note to Surendra - as of writing this the search route doesn't have tags included in the returned dictionary. 
#I made the test with the expectation that you added it, but if we decide not to, feel free to edit the test
def test_searchBySingleTag(client):
    #inserting a few forms
    form = {"author": "thanawat", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob,math,science"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    form = {"author": "thanawat2", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob,math"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    form = {"author": "thanawat3", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    #I don't know if this syntax is right with the /
    res = client.get(url_for("route.search/math"))
    assert res.status_code == 200
    
    #I also don't know the exact return type of res so might be wrong
    assert res.values() == {
        {"author": "thanawat", 
        "projectName": "hello", 
        "contactInfo": "111-111-1111", 
        "projectDescription": "hello world", 
        "tags": "hello,cs,prob,math,science"},
        {"author": "thanawat2", 
        "projectName": "hello", 
        "contactInfo": "111-111-1111", 
        "projectDescription": "hello world", 
        "tags": "hello,cs,prob,math"},
        }

def test_searchByMultipleTags(client):
    #inserting a few forms
    form = {"author": "thanawat", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob,math,science"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    form = {"author": "thanawat2", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob,math"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    form = {"author": "thanawat3", 
            "projectName": "hello", 
            "contactInfo": "111-111-1111", 
            "projectDescription": "hello world", 
            "tags": "hello,cs,prob"}

    res = client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    #I don't know if this syntax is right with the /
    res = client.get(url_for("route.search/science,hello"))
    assert res.status_code == 200
    
    #I also don't know the exact return type of res so might be wrong
    assert res.values() == {
        {"author": "thanawat", 
        "projectName": "hello", 
        "contactInfo": "111-111-1111", 
        "projectDescription": "hello world", 
        "tags": "hello,cs,prob,math,science"},
        }       

