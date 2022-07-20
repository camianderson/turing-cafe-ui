import React from 'react';
import Reservation from '../Reservation/Reservation'

const List = ({reservations, deleteRes}) => {
  const allReservations = reservations.map(reservation => {
    return (
      <Reservation details={reservation} deleteRes={deleteRes}/>
    )
  })

  return (
    <div className='res-list'>{allReservations}</div>
  )
}

export default List