import React from 'react'
import PostForm from '../components/PostForm'

const CreatePost = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: "space-between", height:"40vh", paddingTop:"50px" }}>
            <PostForm/>
        </div>
    )
}

export default CreatePost
