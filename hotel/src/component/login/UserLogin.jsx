import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate, Link } from 'react-router-dom';
import { addToInSessionArray } from '../../feature/admin/inSession';

const UserLogin = () => {

  const Admin = {
    userEmail: 'admin@gmail.com',
    userPassword: 'admin'
  }

  let Users = useSelector(state=> state.user.userData)
  let dispatch = useDispatch();

  const navigate= useNavigate();

  let [loginDetails, setLoginDetails] = useState({});

  let onChangeHandle = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.id]: e.target.value });
  }

  // let 
  
  let Login=()=>{
    for(let i=0;i<Users.length;i++){
      if(Users[i].userEmail==loginDetails.userEmail && Users[i].userPassword==loginDetails.userPassword){
        alert("Login Successful");
        navigate('/availableHotel')
        dispatch(addToInSessionArray(Users[i]))
        // dispatch(removeFromInSessionArray())
        return true;
      }
      else if(Admin.userEmail === loginDetails.userEmail && Admin.userPassword === loginDetails.userPassword){
        navigate('/adminDashboard/addHotel')
        return true
      }
    }
    alert("User not found")
    return false;
  }

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
          
          <button type="button" onClick={Login}  className="btn btn-primary ms-3">Log in</button>
          <p className='text-center'>Or</p>
          <Link to='/registration'>Create new account</Link>
          
        </form>
      </div>
    </div>
  )
}

export default UserLogin