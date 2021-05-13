import React, { useState, useEffect } from 'react'
import ProjectList from "../components/ProjectList"
import { Typography, Box } from "@material-ui/core"

const Home = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        fetch('/projects')
            .then(response => response.json())
            .then(json => setData(Object.values(json)))
            .catch((reason) => console.log(reason))
    }

    return (
        <Box display="flex" flexDirection="column" >
            <Typography variant="h2" component="h1" align="center">Projects</Typography>
            <ProjectList list={data}/>
        </Box>
    )
}

export default Home
