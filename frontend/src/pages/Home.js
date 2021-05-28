import React, { useState, useEffect } from "react"
import ProjectList from "../components/ProjectList"
import { Typography, Box, Chip, TextField, Avatar } from "@material-ui/core"
import { Autocomplete} from "@material-ui/lab"
import { makeStyles } from "@material-ui/core/styles"
import { getProjects, getTags, getProjectsUsingTags } from "api-requests"
const useStyles = makeStyles((theme) => ({
    tagSelect: {
        margin: theme.spacing(2)
    }
} ))
const Home = () => {
    const [data, setData] = useState([])
    const [tags, setTags] = useState([])
    const [selTags, setSelTags] = useState([])
    const classes = useStyles()

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
            <Typography variant="h2" component="h1" align="center">
                Projects
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
