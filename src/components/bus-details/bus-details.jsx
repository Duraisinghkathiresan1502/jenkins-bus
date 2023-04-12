import React from 'react'

function BusDetails({data}) {

  const { busName,busNo,busType,noOfSeats,borading,seatsType,destination,fare } = data;
  return (
    <>
    <p> {busName} </p>
    <p> {busNo} </p>
    <p> {busType}  </p>
    <p> {noOfSeats} </p>
    <p> {borading} </p>
    <p> {seatsType} </p>
    <p> {destination} </p>
    <p> {fare} </p>

    <button> View Seats</button>
        
    </>
  )
}

export default BusDetails