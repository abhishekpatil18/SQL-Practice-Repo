import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => {

  const Admin = {
    userEmail: 'admin@gmail.com',
    userPassword: 'admin'
  }

  let [loginDetails, setLoginDetails] = useState({});

  let onChangeHandle = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.id]: e.target.value });
    console.log(loginDetails);
  }

  return (
    <div style={{ height: "400px" }} className='d-flex row m-4 align-items-center justify-content-center'>
      <div className='col-6'>
        <h1 className='mb-3'>Login Here..</h1>
        <form className='border border-2 text-center p-3 rounded'>
          <div className="row mb-3">
            <label htmlFor="userEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" onChange={onChangeHandle} className="form-control" id="userEmail" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="userPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" onChange={onChangeHandle} className="form-control" id="userPassword" />
            </div>
          </div>
          {
            (Admin.userEmail === loginDetails.userEmail && Admin.userPassword === loginDetails.userPassword) &&
            <Link to='/adminDashboard'> <button type="button" id='adminLogin' className="btn btn-primary ms-3">
              Admin
              </button></Link>
          }
          <button type="button" className="btn btn-primary ms-3">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default UserLogin