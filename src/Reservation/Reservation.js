import React from 'react';

const Reservation = ({details, deleteRes}) => {
  return (
    <section className="single-res">
      <h1>{details.name}</h1>
      <p>Date: {details.date}</p>
      <p>Time: {details.time}</p>
      <p># of guests: {details.number}</p>
      <button onClick={() => deleteRes(details.id)}>Cancel</button>
    </section>
  )
}

export default Reservation;