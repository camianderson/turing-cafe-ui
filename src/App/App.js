import React, { Component } from 'react';
import List from '../List/List';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then (data => {
      this.setState({reservations: data})
    })
  }
  
  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <List />
        </div>
      </div>
    )
  }
}

export default App;
