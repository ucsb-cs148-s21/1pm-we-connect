import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { findByLabelText } from '@testing-library/dom';
import { red } from '@material-ui/core/colors';
import { Card, CardContent, Typography, Box } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        maxWidth: 1000,
        margin: "50px 150px 50px 150px",
    },
    person: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px 50px 0px 50px",
    },
    link: {
        textDecoration: 'underline',
        color: 'inherit',
    }
})

const AboutUsBlock = ( {imageLink, name, description, direction} ) => {
    const classes = useStyles()
    if(direction){
    return (
        <Card className={classes.root}>
            <CardContent className={classes.person}>
                <img 
                    src={imageLink}
                    height="400px" width="400px"
                />
                <div className={classes.text}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="p" component="p">
                        {description}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
    }
    else{
    return (
        <Card className={classes.root}>
            <CardContent className={classes.person}>

                <div className={classes.text}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="p" component="p">
                        {description}
                    </Typography>
                </div>
                <img 
                    src={imageLink}
                    height="400px" width="400px"
                />
            </CardContent>
        </Card>
    )
    }
}

const AboutUsBlocks = ({ list }) => {
    list = [
        {
            imageLink: "https://mma.prnewswire.com/media/1346408/Pringles_Logo.jpg?p=facebook",
            name: "Mr. Pringles Man", 
            description: 
            <Typography>
            I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
            My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
            The people who don't believe me are just haters. But you know what they say, haters
            are my motivators. Click <a className={useStyles().link} href="https://www.pringles.com/us/home.html">here</a> if 
            you want to learn more about me.
            </Typography>,
            direction: true
        },
        {
            imageLink: "https://mma.prnewswire.com/media/1346408/Pringles_Logo.jpg?p=facebook",
            name: "Mr. Pringles Man", 
            description: 
            <Typography>
            I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
            My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
            The people who don't believe me are just haters. But you know what they say, haters
            are my motivators. Click <a className={useStyles().link} href="https://www.pringles.com/us/home.html">here</a> if 
            you want to learn more about me.
            </Typography>,
            direction: false
        },
        {
            imageLink: "https://mma.prnewswire.com/media/1346408/Pringles_Logo.jpg?p=facebook",
            name: "Mr. Pringles Man", 
            description: 
            <Typography>
            I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
            My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
            The people who don't believe me are just haters. But you know what they say, haters
            are my motivators. Click <a className={useStyles().link} href="https://www.pringles.com/us/home.html">here</a> if 
            you want to learn more about me.
            </Typography>,
            direction: true
        },
        {
            imageLink: "https://mma.prnewswire.com/media/1346408/Pringles_Logo.jpg?p=facebook",
            name: "Mr. Pringles Man", 
            description: 
            <Typography>
            I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
            My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
            The people who don't believe me are just haters. But you know what they say, haters
            are my motivators. Click <a className={useStyles().link} href="https://www.pringles.com/us/home.html">here</a> if 
            you want to learn more about me.
            </Typography>,
            direction: false
        },
        {
            imageLink: "https://mma.prnewswire.com/media/1346408/Pringles_Logo.jpg?p=facebook",
            name: "Mr. Pringles Man", 
            description: 
            <Typography>
            I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
            My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
            The people who don't believe me are just haters. But you know what they say, haters
            are my motivators. Click <a className={useStyles().link} href="https://www.pringles.com/us/home.html">here</a> if 
            you want to learn more about me.
            </Typography>,
            direction: true
        },
    ]
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
        >
            {list && list.map((x) => <AboutUsBlock {...x} />)}
        </Box>
    )
}

export default AboutUsBlocks
