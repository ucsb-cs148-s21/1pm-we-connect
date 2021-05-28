from ..models import formModel, tagModel, PTRelation
def test_formModel():
    form = formModel(
            id=1,
            author="thanawat",
            projectName="Hello World",
            contactInfo="111-111-1111",
            projectDescription="Making a hello world application",
        )
    assert form.author == "thanawat"
    assert form.projectDescription =="Making a hello world application"
    assert form.projectName == "Hello World"
    assert form.contactInfo == "111-111-1111"

def test_tagModel():
    form = tagModel(
        name = "computer science",
        count = 3
        )

    assert form.name == "computer science"
    assert form.count == 3

def test_PTRelationModel():
    form = PTRelation(
        iden = "493038prob",
        projectID = 493038,
        tagName = "prob"
    )

    assert form.iden == "493038prob"
    assert form.projectID == 493038
    assert form.count == 3