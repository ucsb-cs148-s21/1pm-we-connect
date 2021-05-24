import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles"
import { findByLabelText } from '@testing-library/dom';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    person: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        //alignItems: 'flex-start',
        margin: '100px',
        //fontFamily: "Serif",
        fontSize: '25px',
        //backgroundColor: theme.palette.primary.main,
    },

    image: {
        //backgroundColor: theme.palette.primary.main, 
        //paddingRight: '50px',
        width: '300px',
        height: '300px',
        
    },
    text: {
        padding: '25px 300px 0px 300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'flex-start',
    },

    link: {
        textDecoration: 'underline',
        color: 'inherit',
    }
}))

const AboutUsBlock = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.person}>  
                <img 
                    className={classes.image}
                    src="https://mma.prnewswire.com/media/1346408/Pringles_Logo.jpg?p=facebook"
                    //height="400px" width="400px"
                />
                <div className={classes.text}>
                    <Typography variant="h7" gutterBottom>Mr. Pringles Man</Typography>
                    <Typography>
                        I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
                        My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
                        The people who don't believe me are just haters. But you know what they say, haters
                        are my motivators. Click <a className={classes.link} href="https://www.pringles.com/us/home.html">here</a> if 
                        you want to learn more about me.
                    </Typography>
                </div>
            </div>

            <div className={classes.person}>  
                <img 
                    className={classes.image}
                    src="https://mma.prnewswire.com/media/1346408/Pringles_Logo.jpg?p=facebook"
                    //height="400px" width="400px"
                />
                <div className={classes.text}>
                    <Typography variant="h7" gutterBottom>Mr. Pringles Man</Typography>
                    <Typography>
                        I'm a simple man. My potato chips are crispy, delicious, and quite exquisite. 
                        My eyes may seem lifeless, but I feel great. In fact, I'm a completely changed man.
                        The people who don't believe me are just haters. But you know what they say, haters
                        are my motivators. Click <a className={classes.link} href="https://www.pringles.com/us/home.html">here</a> if 
                        you want to learn more about me.
                    </Typography>
                </div>
            </div>
            
        </div>
    )
} 


export default AboutUsBlock
