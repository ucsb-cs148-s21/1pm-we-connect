import React, {useState, useEffect} from 'react'

const Home = () => {
	const [data, setData] = useState([])


	useEffect(() => {
		getData();
	}, []);


  	const getData = async () =>{
  		fetch('https://jsonplaceholder.typicode.com/todos/1')
  		.then(response => response.json())
  		.then(json => setData(json))
  	}

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            <h1>Home</h1>
            <h1>{data.title}</h1>
        </div>
    )
}

export default Home
