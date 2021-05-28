import React, { useState } from "react"
import PostForm from "../components/PostForm"
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles"
import {  postProject } from "api-requests"

const useStyles = makeStyles((theme) => ({
    postPage: {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    },
    collasp: {
        width: '50',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))
const CreatePost = () => {
    const [successAlert, setSuccess] = useState(false)
    const [failAlert, setFailAlert] = useState(false)
    const submitForm = (reset) => (project) => {
        // console.log(project)
        postProject(project).then((res) => {
            if (res.status === 200) {
                setSuccess(true)
                reset({ author: project.author, tags: [] })

            } else {
                setFailAlert(true)
            }
        })
    }
    const classes = useStyles()
    return (
        <div className={classes.postPage}>
            <Collapse className={classes.collasp} in={successAlert}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setSuccess(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Project creation success! Feel free to create more projects or go back to browse some projects.
                </Alert>
            </Collapse>
            <Collapse className={classes.collasp} in={failAlert}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setFailAlert(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Project creation failure! Please try again later.
                </Alert>
            </Collapse>
            <PostForm submitForm={submitForm} />
        </div>
    )
}

export default CreatePost
