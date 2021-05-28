import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Card, CardContent, Typography, Box, useMediaQuery } from "@material-ui/core"

const Idea = ({ author, projectName, contactInfo, projectDescription, tagsString}) => {
    const useStyles = makeStyles({
        card: {
            margin: "20px"
        }
    })
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h4" component="h1">
                    {projectName}
                </Typography>
                <Typography variant="subheader1" component="p">
                    By: {author}
                </Typography>
                <Typography variant="subheader1" component="p">
                    Contact info: {contactInfo}
                </Typography>
                <Typography variant="subheader1" component="p">
                    Project Description: {projectDescription}
                </Typography>

                <Typography variant="subheader1" component="p">
                    Tags: {tagsString}
                </Typography>
            </CardContent>
        </Card>
    )
}

const Ideas = ({ list }) => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const lg = useMediaQuery(theme.breakpoints.up('lg'));
    const xl = useMediaQuery(theme.breakpoints.up('xl'));
    const getGridColumns = () => {
        if(xl)
            return "20% 20% 20% 20% 20%"
        if(lg)
            return "33% 33% 34"
        if(md)
            return "50% 50%"
        if(sm)
            return "100%"
        return "20% 20% 20% 20% 20%"
    }

    return (
        <Box
            display="grid"
            gridTemplateColumns={getGridColumns()}
        >
            {list && list.map((x,index) => <Idea key={index} {...x} />)}
        </Box>
    )
}

export default Ideas
