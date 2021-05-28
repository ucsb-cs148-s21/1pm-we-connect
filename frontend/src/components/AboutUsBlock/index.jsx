import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Grid, Typography, Box, useMediaQuery } from "@material-ui/core"
import thanawat from "../../photos/thanawat.jpg"
import kevin from "../../photos/kevin.png"
import kenneth from "../../photos/kenneth.jpg"
import alon from "../../photos/alon.jpeg"

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            padding: "0px 50px 50px 50px",
            width: "75%",
            margin: "50px",
          },
          [theme.breakpoints.down('sm')]: {
            padding: "0px 5px 50px 5px",
            width: "100%",
            marginTop: "50px",
          },
        borderRadius: "2.5%",
        height: "100%",
        backgroundColor: "#424242",
    },
    image: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10%",
    },

    containerItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "25px",
        [theme.breakpoints.up('sm')]: {
            lineHeight: "26pt"
          }
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
            <Grid className={classes.containerItem} container item> 
                <img 
                    className={classes.image}
                    src={imageLink}
                    height={sm ? "300" : "400"}
                    width={sm ? "300" : "400"}
                    loading="lazy"
                    alt="Avatar"
                />
            </Grid>
            <Grid className={classes.containerItem} container item>
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
            imageLink: thanawat,
            name: "Thanawat Techaumnuaiwit", 
            description:
            <div>
            <Typography gutterBottom>
            I'm interested in mainly Functional Languages(Haskell), Web Development, the Linux operating system(Using Nixos rn) or anything in the field of CS that I find fun! My favorite Text editor is Emacs, and without Emacs, I don't think I'd be where I am today. 
            I am a Free(as in Freedom) Software enthusiast, and I do have to make some comprimises here or there(Obviously I have to use Slack and Zoom for school, and some open source committees use discord, and of course, I can't live without youtube). 
            In the summer, I am looking forward to  learn more about microarchitectures and embedded system, mentoring kids at my old robotics team, and doing development using Haskell! Hopefully I can get to contribute to some open source projects, but I do need to build some confidence first.
            </Typography>
            <Typography>
            You can find more of my adventures on my website, where I update it every year, and post stuff like yearly self-reflections and tutorials on Emacs(not very good though): <a className={useStyles().link} href="https://thanawat.xyz/">https://thanawat.xyz/</a>. 
            My github(and gitlab) profile is @thiskappisgrey. You can find my other socials(lmy email, still working on moving away from gmail and maybe setting up my own email server or using some "private" service) on my website when I update them. I don't use social media(I quit using them about a year ago, it's been great).
            </Typography></div>,    
        },
        {
            imageLink: "https://mma.prnewswire.com/media/1346408/Pringles_Logo.jpg?p=facebook",
            name: "Surendra Ghentiyala", 
            description: 
            <Typography>
            My name is Surendra Ghentiyala. I'm a CS major. I'm interested in verification and programming language theory. In the future, no idea.
            </Typography>,
        },
        {
            imageLink: kevin,
            name: "Kevin Hoang", 
            description: 
            <div>
            <Typography gutterBottom>
            I'm interested in software engineering and to eventually develop for a larger corporation in the future. I'm currently trying out various specializations such as machine learning and cybersecurity in school, but I haven't found one that particularly stood out to me yet. Over the summer, I am likely going to teach kids computer science basics, and I hope to use the money to finally build a functional computer that can keep up with modern hardware demands for both development and gaming in my spare time. Otherwise, in the near future, I will begin looking for internships near the school to start getting some industry experience and building up my resume to start up my career.
            </Typography>
            <Typography>
            Email: kevinhoang1800@gmail.com, Github: khoang1800
            </Typography></div>,
        },
        {
            imageLink: kenneth,
            name: "Kenneth Deng", 
            description: 
            <Typography>
            Hello, my name is Kenneth and though I'm a Computer Science major, I don’t really have a particular field of Computer Science that I am interested in. During the pandemic, I grew interested in drawing and spent time learning and developing a passion for it. For the coming summer, I plan to invest time into learning and practicing drawing and digital painting. At the same time, I also want to work on personal programming projects. Taking this class made me realize that I need to be more invested in developing programming skills and experience. In the future, I hope to combine and utilize both skills so that I can design and conceptualize games.
            </Typography>,
        },
        {
            imageLink: alon,
            name: "Alon Katz", 
            description: 
            <Typography>
            Hello my name is Alon Katz, I am a second year CS major. At this point, I have no clue what interests me in computer science. I am currently doing an internship in a company that works in developing software for network and internet companies - so see how that goes. Back in high school I played a good amount with iOS development and Java. After I graduate I actually want to take a few years off before starting to work in order to travel and dip my toe in the film industry (cuz thats where are all the money is at - thats joke). And a bit about me is that I like to travel, play guitar on my balcony, cook, and watch a lot of movies.
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

/*
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
*/
