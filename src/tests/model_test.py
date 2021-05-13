from ..models import formModel, tagModel
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
    assert tagModel(name="computer science").name == "computer science"
