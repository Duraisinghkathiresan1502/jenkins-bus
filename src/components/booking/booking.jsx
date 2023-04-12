import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { redirect, useLocation } from 'react-router-dom'
import BusDetails from '../bus-details/bus-details';
function Booking() {
  const [searchBus, setSearchBus] = useState("");
  const [loading, setLoading] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");
  useEffect(() => {
    setLoading(true)
    if (from && to && date) {
      axios.get(`http://192.168.1.8/api/Bus?from=${from}&to=${to}`)
        .then(res => {
          setSearchBus(res.data)
          console.log(res.data)
          setLoading(false)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      redirect("/dashboard")
    }
  }, [])
  return (
        <div>
          {loading && <div>Loading....</div>}
          <h2>Available Buses</h2>
          <h4>From: {from}</h4>
          <h4>To: {to}</h4>
          <h4>Date: {date}</h4>
          { Array.from(searchBus).map((item, index) =>(
              <BusDetails key={index} data={item} />
              
        ))}
        </div>
      )
    }
export default Booking