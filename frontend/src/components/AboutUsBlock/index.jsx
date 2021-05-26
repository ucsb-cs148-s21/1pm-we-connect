import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { findByLabelText } from '@testing-library/dom';
import { red } from '@material-ui/core/colors';
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            padding: "50px",
            width: "75%",
            margin: "50px",
          },
          [theme.breakpoints.down('sm')]: {
            padding: "50px 5px 50px 5px",
            width: "100%",
            marginTop: "50px",
          },

        height: "100%",
        backgroundColor: "#424242",
    },
    image: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //padding: "50px 0px 50px 0px"
    },
    link: {
        textDecoration: 'underline',
        color: 'inherit',
    },
}))

const AboutUsBlock = ( {imageLink, name, description} ) => {
    const classes = useStyles();
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid className={classes.root}
            container>
            <Grid className={classes.image} container item> 
                <img 
                    src={imageLink}
                    height={sm ? "300" : "400"}
                    width={sm ? "300" : "400"}
                    loading="lazy"
                />
            </Grid>
            <Grid className={classes.text} container item>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="p" component="p">
                        {description}
                    </Typography>
            </Grid>
        </Grid>
    )
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
        },
        {
            imageLink: "https://wow.zamimg.com/uploads/screenshots/normal/935652.jpg",
            name: "Mr. Pringles Man", 
            description: 
            <Typography>
            I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
            My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
            The people who don't believe me are just haters. But you know what they say, haters
            are my motivators. Click <a className={useStyles().link} href="https://www.pringles.com/us/home.html">here</a> if 
            you want to learn more about me.
            </Typography>,
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
        },
        {
            imageLink: "https://wow.zamimg.com/uploads/screenshots/normal/935652.jpg",
            name: "Mr. Pringles Man", 
            description: 
            <Typography>
            I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
            My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
            The people who don't believe me are just haters. But you know what they say, haters
            are my motivators. Click <a className={useStyles().link} href="https://www.pringles.com/us/home.html">here</a> if 
            you want to learn more about me.
            </Typography>,
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
        },
    ]

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        
        >
            {list && list.map((x) => <AboutUsBlock {...x} />)}
        </Box>
    )
}

export default AboutUsBlocks
