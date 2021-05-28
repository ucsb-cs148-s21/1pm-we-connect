import React from 'react'
import AboutUsBlocks from '../components/AboutUsBlock'
import { Typography, Box } from "@material-ui/core"

const About = () => {
 
    return (
        <Box display="flex" flexDirection="column" >
            <Typography variant="h2" component="h1" align="center">About Us</Typography>
            <AboutUsBlocks/>
        </Box>
    )
}

export default About
