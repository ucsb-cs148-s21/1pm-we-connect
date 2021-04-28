import React from 'react'
const PostForm = () => {
    const [name, setName] = React.useState('')
    const [text, setText] = React.useState('')
    const [topic, setTopic] = React.useState('cs')

    const submitForm = (e) => {
    	e.preventDefault();

    	//from reactDocs
    	fetch('/projects/100/2', {
  			method: 'POST',
  			headers: {
    			Accept: 'application/json',
    			'Content-Type': 'application/json'
  			},
  			body: JSON.stringify({
    			author: name,
    			projectName: "tbd",
    			contactInfo: "111-111-1111",
    			projectDescription: text

  			})
		});

		alert("Form submitted")
    }

    return (
        <form style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <div>
                <p>Name:</p>
                <input onChange={e => setName(e.target.value)} value={name} />
            </div>
          <div>
                <p>Project Description:</p>
                <textarea type='text' value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div>
                <p>Major </p>
                <select value={topic} onChange={e => setTopic(e.target.value)}>
                    <option value="cs">Computer Science</option>
                    <option value="phys">Physics</option>
                    <option value="film">Film</option>
                </select>
            </div>
            <button onClick={submitForm} type="submit">Submit</button>
        </form>
    )
}
export default PostForm
