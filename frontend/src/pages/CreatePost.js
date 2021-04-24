import React from 'react'
import CreatePostForm from '../components/CreatePostForm';
import PostForm from '../components/PostForm'

const CreatePost = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
            <div>
                <PostForm/>
            </div> 
        </div>   
    )
}

export default CreatePost
