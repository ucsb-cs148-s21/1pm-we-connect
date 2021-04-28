import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Box } from '@material-ui/core';

const Idea = ({ author, projectName, contactInfo, projectDescription }) => {
    const useStyles = makeStyles({
        card: {
            margin: "20px"
        }
    })
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h4" component="h1">{projectName}</Typography>
                <Typography variant="p" component="p">By: {author}</Typography>
                <Typography variant="p" component="p">Contact info: {contactInfo}</Typography>
                <Typography variant="p" component="p">Project Description: {projectDescription}</Typography>
            </CardContent>
        </Card>
    )
}

const Ideas = ({ list }) => {

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between">
          { list.map((x) => <Idea {...x} />) }
        </Box>
    )
}


export default Ideas
