import React from 'react'

class CreatePostForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            text: '',
            topic: 'cs'
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.name} \n${this.state.text} \n${this.state.topic}`)
    }
    
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name </label>
                    <input type='text' value={this.state.name} onChange ={this.handleNameChange}/>
                </div>
                <div>
                    <label>Post </label>
                    <textarea type='text' value={this.state.text} onChange ={this.handleTextChange}/>
                </div>
                <div>
                    <label>Major </label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="cs">Computer Science</option>
                        <option value="phys">Physics</option>
                        <option value="film">Film</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
      )
    }
  }

  export default CreatePostForm