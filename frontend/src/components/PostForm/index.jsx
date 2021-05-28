import React, { useEffect, useState } from "react"
import { TextField, Button, Typography, Chip, useMediaQuery, useTheme } from "@material-ui/core"
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles"
import { useForm, Controller } from "react-hook-form"
import { getTags } from "api-requests"

// TODO Notify the user if the form is submitted or if there's an error

const useStyles = makeStyles((theme) => ({
    form: {
        paddingTop: theme.spacing(2),
        maxWidth: "50%",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "75%"
        },
    },
    formItem: {
        marginBottom: theme.spacing(2)
    },
    header: {
        marginBottom: theme.spacing(2),
        textAlign: "center"
    }
}))

const PostForm = ({ submitForm }) => {
    //      example tags: [
    //   {
    //     "count": 2,
    //     "name": "cs"
    //   },
    //   {
    //     "count": 1,
    //     "name": "math"
    //   },
    //   {
    //     "count": 1,
    //     "name": "dance"
    //   }
    // ]
    const { reset, control, handleSubmit, formState } = useForm()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [tags, setTags] = useState([])
    // const exampleForm = {
    //     author: "",
    //     projectName: "",
    //     projectDescription: "",
    //     contactInfo: "",
    //     tags: ""
    // }
    const classes = useStyles()
    // TODO get tags from most populatr tags

    // const tags = ["Art", "ComputerScience", "ElectricalEngineering", "Film", "MechanicalEngineering", "Music", "Photography", "Physics", "SoftwareEngineering"]
    useEffect(() => {
        getTags().then(body => setTags(body.tags))
    }, [])



    return (
        <form className={classes.form} onSubmit={handleSubmit(submitForm(reset))}>
            <Typography className={classes.header} component="h1" variant={mobile ? "h3" : "h2"}>
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
                        multiline
                        rows={3}
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
                        freeSolo
                        options={tags.map((option) => option.name)}
                        onChange={(_, value) => field.onChange(value.join(" "))}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                error={error}
                                multiline
                                helperText={
                                    error !== undefined
                                        ? error.message
                                        : "Help people find your project! Tags can't have spaces. Example tags: Coding, Cooking, etc"
                                }
                                label="Tags"
                                placeholder="Click on a tag or press enter to add tag"
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
