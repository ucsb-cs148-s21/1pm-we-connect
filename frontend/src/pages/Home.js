import React, { useState, useEffect } from "react"
import ProjectList from "../components/ProjectList"
import { Typography, Box, Chip, TextField, Avatar, useMediaQuery } from "@material-ui/core"
import { Autocomplete} from "@material-ui/lab"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { getProjects, getTags, getProjectsUsingTags } from "api-requests"
const useStyles = makeStyles((theme) => ({
    tagSelect: {
        margin: theme.spacing(2)
    },
    title: {
        marginTop: "1em",
    },
    description: {        
        [theme.breakpoints.up('sm')]: {
            marginLeft: "4em",
            marginRight: "4em",
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: "1em",
            marginRight: "1em",
        },

    }
} ))
const Home = () => {
    const [data, setData] = useState([])
    const [tags, setTags] = useState([])
    const [selTags, setSelTags] = useState([])
    const classes = useStyles()
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        getProjects().then((json) => setData(Object.values(json)))
        getTags().then(json => setTags(json.tags))
    },[])
    useEffect(() => {
        if(selTags.length === 0) {
            getProjects().then((json) => setData(Object.values(json)))
        } else {
            getProjectsUsingTags(selTags.map(tag => tag.name)).then(json => setData(Object.values(json)))
        }
    }, [selTags])

    return (
        <Box display="flex" flexDirection="column">
            <Typography className={classes.title} variant={sm ? "h3" : "h2"} component="h1" align="center" gutterBottom>
                Welcome to We Connect!
            </Typography>
            <Typography className={classes.description} variant="p1" component="p1" align="center">
                Our web app provides a platform for users to share ideas and create team-based projects around them.
                If you want to work on a project, but don't have any ideas, 
                browse the list of posts other users have made below and try contacting the author. 
                If you have specific interests, try using our tag search directly below.
                If you're set on a project idea and are looking for colloborators, then create your own post and encourage users to contact you.
            </Typography>
            <Autocomplete
                multiple
              className={classes.tagSelect}
                value={selTags}
                options={tags}
                getOptionLabel={tag => tag.name}
                onChange={(_,value) => setSelTags(value)}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip avatar={<Avatar>{option.count}</Avatar>} variant="outlined" label={option.name} {...getTagProps({ index })} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Tags"
                        multiline
                        placeholder="Press enter or click on a tag to add a Tag"
                    />
                )}
            />
            <ProjectList list={data} />
        </Box>
    )
}

export default Home
