import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date:'',
      time:'',
      number:''
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  createReservation = (event) => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addRes(newReservation);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date:'',
      time:'',
      number:''
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          className='input-name'
          placeholder='Name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='number'
          placeholder='Number of Guests'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button className='res-button' onClick={event => this.createReservation(event)}>Make Reservation</button>
      </form>
    );
  }
}

export default Form;
