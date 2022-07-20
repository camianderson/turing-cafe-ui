const getReservationsData = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
}

const addReservationData = (newReservation) => {
    return fetch('http://localhost:3001/api/v1/reservations', {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReservation)
    })
    .then(response => response.json())
}

export {getReservationsData, addReservationData}