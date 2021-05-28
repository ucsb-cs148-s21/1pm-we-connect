from ..models import formModel, tagModel, PTRelation
from flask import url_for
import json


def test_get_tags_request(client):

    form = {"author": "thanawat", "projectName": "hello", "contactInfo": "111-111-1111", "projectDescription": "hello world", "tags": "hello"}
    client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )

    client.post(
        url_for("route.projects"),
        headers={"Content-Type": "application/json"},
        data= json.dumps(form)
    )
    # To use the url_for use <Blueprint-name>.<route name>
    res = client.get(url_for("route.popular"))
    # run "pytest -s" to get see print result
    # to get the response, use: res.json
    assert res.status_code == 200
    # same form object as before. This assumes that the previous post test already ran(whcih adds the form to the database).
    # This test makes sure that the GET request value matches the POST request value(minus the tags)
    form = {"author": "thanawat", "projectName": "hello", "contactInfo": "111-111-1111", "projectDescription": "hello world", "tags": "hello"}
    resForm = list(res.json.values())[0]
    assert form == resForm