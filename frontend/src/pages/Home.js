import React, { useState, useEffect } from 'react'
import ProjectList from "../components/ProjectList"

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <ProjectList list={data}/>
        </div>
    )
}

export default Home
