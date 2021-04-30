import React from 'react'
import { Redirect } from "react-router-dom"
const PostForm = () => {
    const [name, setName] = React.useState('')
    const [projectName, setProjectName] = React.useState('')
    const [text, setText] = React.useState('')
    const [contact, setContact] = React.useState('')
    //const [topic, setTopic] = React.useState('cs')

    const submitForm = (e) => {
        e.preventDefault();

        //from reactDocs
        fetch('/projects', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: name,
                projectName: projectName,
                contactInfo: contact,
                projectDescription: text

            })
        });

        alert("Form submitted")

    }

    return (
        <form style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <div>
                <p>Name:</p>
                <input onChange={e => setName(e.target.value)} value={name} name="author" />
            </div>

            <div>
                <p>Project Name:</p>
                <input onChange={e => setProjectName(e.target.value)} value={projectName} name="projectName" />
            </div>

            <div>
                <p>Contact:</p>
                <input onChange={e => setContact(e.target.value)} value={contact} name="contactInfo" />
            </div>

            <div>
                <p>Project Description:</p>
                <textarea type='text' value={text} onChange={e => setText(e.target.value)} name="projectDescription" />
            </div>


            {/*<div>
                <p>Major </p>
                <select value={topic} onChange={e => setTopic(e.target.value)}>
                    <option value="cs">Computer Science</option>
                    <option value="phys">Physics</option>
                    <option value="film">Film</option>
                </select>
            </div>*/}
            {<button onClick={submitForm} type="submit">Submit</button>}
            {/* <button type="submit">Submit</button>*/}
        </form>
    )
}
export default PostForm
