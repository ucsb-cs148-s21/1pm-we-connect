import React from "react"
import PostForm from "../components/PostForm"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((_) => ({
    postPage: {
        display: "flex",
        justifyContent: "space-around",
        alignContent: "space-between",
        height: "100vh"
    }
}))
const CreatePost = () => {
    const classes = useStyles()
    return (
        <div className={classes.postPage}>
            <PostForm />
        </div>
    )
}

export default CreatePost
