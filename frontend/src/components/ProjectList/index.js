import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Box } from '@material-ui/core';

const Idea = ({ idea, leaderName, contactInfo }) => {
    const useStyles = makeStyles({
        card: {
            margin: "20px"
        }
    })
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h4" component="h1">{idea}</Typography>
                <Typography variant="p" component="p">By: {leaderName}</Typography>
                <Typography variant="p" component="p">Contact info: {contactInfo}</Typography>
            </CardContent>
        </Card>
    )
}

const Ideas = ({ list }) => {

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between">
            { list.map((x) => <Idea idea={x["idea"]} leaderName={x["leaderName"]} contactInfo={x["contactInfo"]} />) }
        </Box>
    )
}


export default Ideas
