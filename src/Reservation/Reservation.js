import React from 'react';

const Reservation = ({details}) => {
  console.log(details)
  return (
    <section className="single-res">
      <h1>{details.name}</h1>
      <p>Date: {details.date}</p>
      <p>Time: {details.time}</p>
      <p># of guests: {details.number}</p>
      <button>Cancel</button>
    </section>
  )
}

export default Reservation;