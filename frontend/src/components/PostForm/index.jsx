import React from 'react'
const PostForm = () => {
    const [name, setName] = React.useState('')
    const [text, setText] = React.useState('')
    const [topic, setTopic] = React.useState('cs')

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
            <button onClick={() => alert(`${name} \n${text} \n${topic}`)} type="submit">Submit</button>
        </form>
    )
}
export default PostForm
