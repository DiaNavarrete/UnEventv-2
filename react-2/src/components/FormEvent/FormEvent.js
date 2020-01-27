import React, {useState} from 'react';

/*
class FormEvent extends React.Component {
    constructor(props) {
      super(props)
      this.state = { username: '' }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    
    handleSubmit(event) {
        alert(this.state.username)
        event.preventDefault()
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            Title:
            <input
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
            />
            <textarea 
                value={this.state.info} 
                onChange={this.handleChange} />
            <select value="{this.state.age}" onChange="{this.handleChange}">
  <option value="teen">Less than 18</option>
  <option value="adult">18+</option>
</select>
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }*/
  const FormEvent = props => {
    const [username, setUsername] = useState('')
    
    const handleSubmit = event => {
      event.preventDefault()
      
      
      alert(username)
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    )
  }
  export default FormEvent; 