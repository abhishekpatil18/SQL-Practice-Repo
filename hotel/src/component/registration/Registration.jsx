import React from 'react'
import {Link} from 'react-router-dom'

const Registration = () => {
  return (
    <div className='container'>
      <h1 className='text-center m-3'>Want's to be part of our family...</h1>
      <form className="row g-3">
        <div className="row g-3">
          <div className="col">
          <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" id='firstName' className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col">
          <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" id='lastName' className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="userEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="userEmail" />
        </div>
        <div className="col-md-6">
          <label htmlFor="userPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="userPassword" />
        </div>
        <div className="col-12">
          <label htmlFor="userAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="userAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-md-6">
          <label htmlFor="userCity" className="form-label">City</label>
          <input type="text" className="form-control" id="userCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="userState" className="form-label">State</label>
          <select id="userState" className="form-select">
            <option selected>Pune</option>
            <option>Sangli</option>
            <option>Mumbai</option>
            <option>Satara</option>
            <option>Buldhana</option>
            <option>Parbhani</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="userZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="userZip"/>
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-primary">Sign Up</button>
          <p className='m-2'>Or <Link className='ms-2' to='/'>Login</Link></p>
          
        </div>
      </form>
    </div>
  )
}

export default Registration