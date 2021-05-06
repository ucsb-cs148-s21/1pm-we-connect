import React from 'react'
import { TextField, Grid, Button } from '@material-ui/core';
const PostForm = () => {
    const [name, setName] = React.useState("")
    const [projectName, setProjectName] = React.useState("")
    const [text, setText] = React.useState("")
    const [contact, setContact] = React.useState("")
    //const [topic, setTopic] = React.useState('cs')


    const submitForm = (e) => {
    	e.preventDefault();
        var submit = true;
        
        if (name.localeCompare("") === 0){
            submit = false;
            alert("Must fill in the name box");
        }

        if (projectName.localeCompare("") === 0){
            submit = false;
            alert("Must fill in the project name box");
        }

        if (contact.localeCompare("") === 0){
            submit = false;
            alert("Must fill in the contact box");
        }

        if (text.localeCompare("") === 0){
            submit = false;
            alert("Must fill in the project description box");
        }
    	//from reactDocs

        if (submit === true){
            fetch('/projects', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    author: name,
                    projectName: projectName,
                    contactInfo: contact,
                    projectDescription: text

                })
            });

            alert("Form submitted")
            window.location.replace("/")
        }

		
    }

    return (
        <form  style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                    <h2 >
                        Create a Post
                    </h2>
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" label="Name" onChange={e => setName(e.target.value)} value={name} name="author" variant="outlined"/>
                </Grid>
                <Grid item>
                    <TextField id="filled-basic" label="Project Name" variant="outlined"  onChange={e => setProjectName(e.target.value)} paddingTop={2}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Contact" variant="outlined" onChange={e => setContact(e.target.value)} paddingTop={2}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Project Description" variant="outlined" onChange={e => setText(e.target.value)} multiline paddingTop={2}/>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={submitForm}>
                        Submit
                    </Button>
                </Grid>
            </Grid>

        </form>
    )
}
export default PostForm

