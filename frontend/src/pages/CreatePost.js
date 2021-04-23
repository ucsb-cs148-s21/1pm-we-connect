import React from 'react'
import CreatePostForm from '../components/CreatePostForm';

const CreatePost = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
        
            <div>
                <CreatePostForm/>
            </div>
            
        </div>   
    )
}

export default CreatePost
