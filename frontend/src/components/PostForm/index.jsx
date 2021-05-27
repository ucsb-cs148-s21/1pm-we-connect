import React from "react"
import { TextField, Button, Typography, Chip } from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles"
import { useForm, Controller } from "react-hook-form"

// TODO Notify the user if the form is submitted or if there's an error

const useStyles = makeStyles((theme) => ({
    form: {
        paddingTop: theme.spacing(2),
        maxWidth: "50%",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",

    },
    formItem: {
        marginBottom: theme.spacing(2)
    },
    header: {
        marginBottom: theme.spacing(2)
    }
}))

const PostForm = ({ submitForm }) => {
    const { control, handleSubmit, formState } = useForm()
    // const exampleForm = {
    //     author: "",
    //     projectName: "",
    //     projectDescription: "",
    //     contactInfo: "",
    //     tags: ""
    // }
    const classes = useStyles()
    // TODO get tags from most populatr tags
    const tags = ["Art", "ComputerScience", "ElectricalEngineering", "Film", "MechanicalEngineering", "Music", "Photography", "Physics", "SoftwareEngineering"]


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
                    <Autocomplete
                        {...field}
                        multiple
                        value={field.value.length === 0 ? [] : field.value.split(" ")}
                        options={tags}
                        freeSolo
                        getOptionLabel={(option) => option}
                        onChange={(_, value) => field.onChange(value.join(" "))}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                error={error}
                                helperText={
                                    error !== undefined
                                        ? error.message
                                        : "Help people find your project! Example tags: Coding, Cooking, etc"
                                }
                                label="Tags"
                                placeholder="Add a Tag"
                            />
                        )}
                    />
                )}
            />

          <Button disabled={formState.isSubmitting} variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    )
}
export default PostForm
