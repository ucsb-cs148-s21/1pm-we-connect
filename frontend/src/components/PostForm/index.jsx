import React from "react"
import { TextField, Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { postProject } from "api-requests"
import { useForm, Controller } from "react-hook-form"

// TODO Add Formik to make the forms a little easier: https://formik.org/docs/tutorial
//

const useStyles = makeStyles((theme) => ({
    form: {
        paddingTop: theme.spacing(2),
        maxWidth: "50%",
        display: "flex",
        flexDirection: "column"
    },
    formItem: {
        marginBottom: theme.spacing(2)
    },
    header: {
        marginBottom: theme.spacing(2)
    }
}))

const PostForm = () => {
    const { control, handleSubmit } = useForm()
    // const exampleForm = {
    //     author: "",
    //     projectName: "",
    //     projectDescription: "",
    //     contactInfo: "",
    //     tags: ""
    // }
    const classes = useStyles()
    const submitForm = (project) => {
        postProject(project)
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
            <Typography className={classes.header} component="h1" variant="h2">
                Create Project
            </Typography>
            <Controller
                name="author"
                control={control}
                defaultValue=""
                rules={{ required: "Author is required" }}
                render={({ field, fieldState: { error } }) => {
                    console.log(error)
                    return (
                        <TextField
                            {...field}
                            error={error}
                            helperText={error ? error.message : null}
                            className={classes.formItem}
                            label={"Author"}
                            variant="outlined"
                        />
                    )
                }}
            />
            <Controller
                name="projectName"
                control={control}
                defaultValue=""
                rules={{ required: "Project Name is Required" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        className={classes.formItem}
                        error={error}
                        helperText={error ? error.message : null}
                        label={"Project Name"}
                        variant="outlined"
                    />
                )}
            />
            <Controller
                name="projectDescription"
                control={control}
                defaultValue=""
                rules={{ required: "Project Description is Required" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        className={classes.formItem}
                        error={error}
                        helperText={error ? error.message : null}
                        label={"Project Description"}
                        variant="outlined"
                    />
                )}
            />
            <Controller
                name="contactInfo"
                control={control}
                defaultValue=""
                rules={{ required: "Contact Info is required" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        error={error}
                        className={classes.formItem}
                        helperText={
                            error !== undefined
                                ? error.message
                                : "Email, Discord, Phone, etc"
                        }
                        label={"Contact Information"}
                        variant="outlined"
                    />
                )}
            />
            <Controller
                name="tags"
                control={control}
                defaultValue=""
                rules={{ required: "Tags is required" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        error={error}
                        helperText={error ? error.message : null}
                        className={classes.formItem}
                        label={field.name}
                        variant="outlined"
                    />
                )}
            />

            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    )
}
export default PostForm
