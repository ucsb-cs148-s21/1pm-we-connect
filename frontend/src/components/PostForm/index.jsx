import React from 'react'
import { TextField, Grid, Button, InputLabel, FormControl, Select, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },

    form: {
        paddingTop: theme.spacing(5),
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-evenly", 
    }
}));

const PostForm = () => {
    const [name, setName] = React.useState("")
    const [projectName, setProjectName] = React.useState("")
    const [text, setText] = React.useState("")
    const [contact, setContact] = React.useState("")
    const [category, setCategory] = React.useState('');
    const classes = useStyles();
    //const [topic, setTopic] = React.useState('cs')

    const handleChange = (event) => {
        setCategory(event.target.value);
    };


    const submitForm = (e) => {
    	e.preventDefault();
        var submit = true;
        
        var str = "Must fill in:\n\n";
        var toAlert = false;

        if (name.localeCompare("") === 0){
            submit = false;
            str += "Personal Name\n";
            toAlert = true;
        }

        if (projectName.localeCompare("") === 0){
            submit = false;
            str += "Project Name\n";
            toAlert = true;
        }

        if (contact.localeCompare("") === 0){
            submit = false;
            str += "Contact\n";
            toAlert = true;
        }

        if (text.localeCompare("") === 0){
            submit = false;
            str += "Project Description\n";
            toAlert = true;
        }
    	//from


        if (category.localeCompare("") === 0){
            submit = false;
            str += "Category\n";
            toAlert = true;
        }
    
        if (toAlert){
            alert(str);
        }
       

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

            alert(category)
            window.location.replace("/")
        }

		
    }

    return (
        <form className={classes.form} >
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                    <h2 >
                        Create a Post
                    </h2>
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" label="Name" onChange={e => setName(e.target.value)} value={name} name="author" variant="outlined" error={name === ""} helperText={name === "" ? 'Please fill in this field' : ' '}/>
                </Grid>
                <Grid item>
                    <TextField id="filled-basic" label="Project Name" variant="outlined"  onChange={e => setProjectName(e.target.value)} paddingTop={2} error={projectName === ""} helperText={projectName === "" ? 'Please fill in this field' : ' '}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Contact" variant="outlined" onChange={e => setContact(e.target.value)} paddingTop={2} error={contact === ""} helperText={contact === "" ? 'Please fill in this field' : ' '}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Project Description" variant="outlined" onChange={e => setText(e.target.value)} rows={5} multiline paddingTop={2}error={text === ""} helperText={text === "" ? 'Please fill in this field' : ' '}/>
                </Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            onChange={handleChange}
                            >
                            <MenuItem value={"physics"}>Physics</MenuItem>
                            <MenuItem value={"computer science"}>Computer Science</MenuItem>
                            <MenuItem value={"film"}>Film</MenuItem>
                        </Select>
                    </FormControl>
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

