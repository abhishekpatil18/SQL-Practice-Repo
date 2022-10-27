import React, { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom';

const UserLogin = () => {

  const Admin = {
    userEmail: 'admin@gmail.com',
    userPassword: 'admin'
  }

  const navigate= useNavigate();

  let Users = [
    {
        firstName:'Abhishek',
        lastName:'patil',
        userEmail:'abhi@gmail.com',
        userPassword:'abhi',
        contact:'9876543210',
        address:'kupwad',
        city:'sangli',
        state:'MH'
    },
    {
        firstName:'Damodhar',
        lastName:'Jadhav',
        userEmail:'damu@gmail.com',
        userPassword:'damu',
        contact:'9876543210',
        address:'Buldhana',
        city:'Buldhana',
        state:'MH'
    },
    {
        firstName:'Sagar',
        lastName:'sonavne',
        userEmail:'sagar@gmail.com',
        userPassword:'sagar',
        contact:'9876543210',
        address:'ashta',
        city:'sangli',
        state:'MH'
    }
]

  let [loginDetails, setLoginDetails] = useState({});

  let onChangeHandle = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.id]: e.target.value });
    console.log(loginDetails);
  }

  
  let Login=()=>{
    for(let i=0;i<Users.length;i++){
      if(Users[i].userEmail==loginDetails.userEmail && Users[i].userPassword==loginDetails.userPassword){
        alert("Login Successful");
        navigate('/availableHotel')
        return true;
      }
    }
    alert("User not found")
    return false;
  }
  // let login=Login();

  return (
    <div style={{ height: "400px"}} className='d-flex row m-4 align-items-center justify-content-center'>
      <div className='col-6 p-5 rounded' style={{boxShadow:'0px 0px 10px 0px'}}>
        <h1 className='mb-3'>Login Here..</h1>
        <form style={{boxShadow:'0px 0px 10px 0px'}} className='border border-2 text-center p-3 rounded'>
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
            <Link to='/adminDashboard/addHotel'> <button type="button" id='adminLogin' className="btn btn-primary ms-3">
              Admin
              </button></Link>
          }
          {/* {
            login &&  <Link to='/home'>
            <button type="button" onClick={Login}  className="btn btn-primary ms-3">Sign in</button>
            </Link>
          } */}

          <button type="button" onClick={Login}  className="btn btn-primary ms-3">Sign in</button>
          <p className='text-center'>Or</p>
          <Link to='/registration'>Create new account</Link>
          
        </form>
      </div>
    </div>
  )
}

export default UserLogin