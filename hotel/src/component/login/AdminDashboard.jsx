import React from 'react'
import { Route, Routes, Link,useNavigate } from 'react-router-dom'
import AddHotel from './adminFuctions/AddHotel'

const AdminDashboard = () => {
let naviget=useNavigate();
  let signOut=()=>{
    naviget('/')
  }
  return (
    <div className='row'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className='container-fluid'>
          <Link to='/adminDashbord' className="navbar-brand" href="#">Tomato</Link>
          <div className='collapse navbar-collapse row' id="navbarSupportedContent">
            <div className='col'></div>
            <div className="d-flex align-item-center col-11 justify-content-center">
              <Link to='/adminDashboard/addHotel'>
                <button className="btn btn-primary m-4">Add Hotel</button>
              </Link>
              <Link to='/adminDashboard/updateHotel'>
                <button className="btn btn-warning m-4">Update Hotel</button>
              </Link>
              <Link to='/adminDashboard/showUser'>
                <button className="btn btn-primary m-4">Show Users</button>
              </Link>
              <Link to='/adminDashboard/showBooking'>
                <button className="btn btn-primary m-4">Show Bookings</button>
              </Link>
              <Link to='/adminDashboard/showCancellation'>
                <button className="btn btn-danger m-4">Show Cancellation</button>
              </Link>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </nav>
      
      <div className="row">
        <div className="col-5"></div>
        <div className="col-5"></div>
        <div className="col">
        <button className="btn btn-danger m-4" onClick={signOut}>Sign Out</button>
        </div>
        </div> 

    </div>
  )
}

export default AdminDashboard