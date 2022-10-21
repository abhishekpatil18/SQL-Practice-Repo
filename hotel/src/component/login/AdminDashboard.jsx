import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AddHotel from './adminFuctions/AddHotel'

const AdminDashboard = () => {
  return (
    <div className='container'>

        <div className="d-flex align-item-center justify-content-center">
          <Link to='/adminDashboard/addHotel'>
          <button className="btn btn-primary m-4">Add Hotel</button>
          </Link>
          <Link to='/adminDashboard/updateHotel'>
          <button className="btn btn-warning m-4">Update Hotel</button>
          </Link>
          <button className="btn btn-primary m-4">Show Users</button>
          <button className="btn btn-primary m-4">Show Bookings</button>
          <button className="btn btn-danger m-4">Show Cancellation</button>
        </div>
    </div>
  )
}

export default AdminDashboard