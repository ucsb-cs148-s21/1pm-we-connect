from flask import Blueprint, render_template, request
# from .__init__ import db
from .models import formModel, tagModel, PTRelation, db
import json

route = Blueprint("route", __name__)


@route.route("/popular/<int:n>")
def getTags(n):
    allTags = db.session.query(tagModel).order_by(tagModel.count.desc()).limit(n).all()
    print(allTags[0].count)
    return {
        "tags": list(map(lambda tag: {"name": tag.name, "count": tag.count}, allTags))
    }


@route.route("/search/<items>")
def search(items):
    items = items.split("_")
    storage = {}
    for item in items:
        allRelations = (
            db.session.query(PTRelation).filter(PTRelation.tagName == item).all()
        )
        ids = set()
        for relation in allRelations:
            ids.add(relation.projectID)

        print(ids)
        allForms = db.session.query(formModel).filter(formModel.id.in_(ids)).all()
        # print(allForms)
        for form in allForms:
            storage[str(form.id)] = {
                "author": form.author,
                "projectName": form.projectName,
                "contactInfo": form.contactInfo,
                "projectDescription": form.projectDescription,
                "tagsString": form.tagsString,
            }
    return storage


@route.route("/")
def index():
    return render_template(
        "index.html"
    )  # Landing page, maybe also contain projects but optional


@route.route("/projects", methods=["GET", "POST"])
def projects():
    if request.method == "GET":
        allForms = formModel.query.all()
        storage = {}
        for form in allForms:
            storage[str(form.id)] = {
                "author": form.author,
                "projectName": form.projectName,
                "contactInfo": form.contactInfo,
                "projectDescription": form.projectDescription,
                "tagsString": form.tagsString,
            }
        return storage

    elif request.method == "POST":
        item = request.json
        number = id(item)

        form = formModel(
            id=number,
            author=item["author"],
            projectName=item["projectName"],
            contactInfo=item["contactInfo"],
            projectDescription=item["projectDescription"],
            tagsString=item["tags"],
        )
        db.session.add(form)

        # print(item["tags"].split())
        for tag_name in item["tags"].split():

            q = db.session.query(tagModel).filter(tagModel.name == tag_name).first()
            if q == None:
                tag = tagModel(name=tag_name, count=1)
                db.session.add(tag)
            else:
                # print(q.count)
                q.count = q.count + 1
                # db.session.commit()

            relation = PTRelation(
                iden=str(number) + tag_name, projectID=number, tagName=tag_name
            )
            db.session.add(relation)
            # print(relation)

        db.session.commit()

        return "SUCCESS"
