from flask import Blueprint, render_template,request
from .__init__ import db
from .models import formModel, tagModel, PTRelation

route = Blueprint('route', __name__)

@route.route("/")
def index():
    return render_template("index.html") # Landing page, maybe also contain projects but optional

@route.route("/projects", methods=["GET", "POST"])
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
        item = request.json
        number = id(item) 


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

            q = db.session.query(tagModel.name).filter(tagModel.name==tag_name)
            if not db.session.query(q.exists()).scalar():
                    tag = tagModel(name=tag_name)
                    db.session.add(tag)

            relation = PTRelation(iden=str(number)+tag_name, projectID=number, tagName=tag_name)
            db.session.add(relation)
            #print(relation)

        db.session.commit()

        return "SUCCESS"