import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { addUser } from '../../feature/user/userSlice';

const Registration = () => {

  const navigate = useNavigate();

  let userData = useSelector(state=> state.user.userData);
  // console.warn(userData);
  let [newUser,setNewUser] = useState({})

  let dispatch = useDispatch();
  let handleChange=(e)=>{
    setNewUser({...newUser,[e.target.id]:e.target.value})
  }
  let onSignUp = ()=>{
    if(Object.keys(newUser).length!==0){
      dispatch(addUser(newUser))
      navigate('/')
    }
    else{
      alert("Enter Appropriate Data")
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center m-3'>Want's to be part of our family...</h1>
      <form className="row g-3">
        <div className="row g-3">
          <div className="col">
          <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" onChange={handleChange} id='firstName' className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col">
          <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" onChange={handleChange} id='lastName' className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="userEmail" className="form-label">Email</label>
          <input type="email" onChange={handleChange} required className="form-control" id="userEmail" />
        </div>
        <div className="col-md-6">
          <label htmlFor="userPassword" className="form-label">Password</label>
          <input type="password" onChange={handleChange} className="form-control" id="userPassword" />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" onChange={handleChange} className="form-control" id="address" placeholder="1234 Main St" />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" onChange={handleChange} className="form-control" id="city" />
        </div>
        <div className="col-md-6">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input type="tel" onChange={handleChange} maxLength={10} className="form-control" id="contact" />
        </div>
        <div className="col-md-2">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" onChange={handleChange} className="form-control" id="state"/>
        </div>
        <div className="col-12">
          <button type='button' onClick={onSignUp} className="btn btn-primary">Sign Up</button>
          <p className='m-2'>Or <Link className='ms-2' to='/'>Login</Link></p>
          
        </div>
      </form>
    </div>
  )
}

export default Registration