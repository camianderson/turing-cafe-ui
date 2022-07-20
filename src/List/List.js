import React from 'react';
import Reservation from '../Reservation/Reservation'

const List = ({reservations}) => {
  const allReservations = reservations.map(reservation => {
    return (
      <Reservation details={reservation}/>
    )
  })

  return (
    <div className='res-list'>{allReservations}</div>
  )
}

export default List