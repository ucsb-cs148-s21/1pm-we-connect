import React from 'react'
import AboutUsBlocks from '../components/AboutUsBlock'
import { Typography, Box } from "@material-ui/core"

const OurTeam = () => {
 
    return (
        <Box display="flex" flexDirection="column" >
            <Typography variant="h2" component="h1" align="center">Our Team</Typography>
            <AboutUsBlocks/>
        </Box>
    )
}

export default OurTeam
