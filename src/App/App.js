import React, { Component } from 'react';
import List from '../List/List';
import Form from '../Form/Form';
import {getReservationsData, addReservationData} from '../apiCalls'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      reservations: []
    }
  }
  componentDidMount(){
    getReservationsData()
    .then (data => {
      this.setState({reservations: data})
    })
  }

  addReservation = (newReservation) => {
    addReservationData(newReservation)
    .then(data => {
      this.setState({reservations: [...this.state.reservations, data]})
    })
  }

  render() {
      console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <List reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;