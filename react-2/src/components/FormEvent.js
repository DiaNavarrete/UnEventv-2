import React, {useState} from 'react';
import { Form, Input, DatePicker, TimePicker, Checkbox, AutoComplete, Select, Cascader, InputNumber } from 'antd';
const { TextArea } = Input;
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
    const opts = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];
    const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

    const [username, setUsername] = useState('')
    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    }
    const handleSubmit = event => {
      event.preventDefault()
      
      
      alert(username)
    }
    
    return (
      /*<form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button type="submit">Add card</button>
      </form>*/
      <Form >
         
            <Input
              placeholder="Username"
            />
            <div style={{display:"flex"}}>
              <DatePicker style={{ width: '70%' }} />
              <TimePicker use12Hours format="h:mm:ss A" />
            </div>
            <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) =>
        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
            <TextArea rows={4} placeholder="Details" />
            <Checkbox.Group options={opts} defaultValue={['Apple']} onChange={onChange} />
    
      </Form>
    )
  }
  export default FormEvent; 