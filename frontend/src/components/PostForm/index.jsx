import React from 'react'
export const PostForm = () => {
    const [name, setName] = React.useState('')
    const [text, setText] = React.useState('')
    const [topic, setTopic] = React.useState('cs')

   

    

    return (
        <div>
            <p>Name:</p>
            <input onChange={e => setName(e.target.value)} value={name}/>
            <p>Project Description:</p>
            <textarea type='text' value={text} onChange={e => setText(e.target.value)}/>
            <p>Major </p>
            <select value={topic} onChange={e => setTopic(e.target.value)}>
                <option value="cs">Computer Science</option>
                <option value="phys">Physics</option>
                <option value="film">Film</option>              
            </select>
            <button onClick={e =>  alert(`${name} \n${text} \n${topic}`)} type="submit">Submit</button>
        </div>
    )
}

export default PostForm