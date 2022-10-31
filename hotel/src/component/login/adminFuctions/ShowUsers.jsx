import React from 'react'
import AdminDashboard from '../AdminDashboard'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../../../feature/user/userSlice' 

const ShowUsers = () => {
    let Users = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
  return (
    <div >
        <AdminDashboard/>
        <div className='container'>
            <h2 className='text-center p-1 bg-warning rounded border border-2 text-dark'>Users</h2>

        <table className='mt-5 table table-striped'>
            <thead >
                <tr className='text-center'>
                    <th>Sr. No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Emails</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {
                    Users.map((val,index)=>{
                        return <tr className='text-center' key={val.email}>
                            <td>{index+1}</td>
                            <td>{val.firstName}</td>
                            <td>{val.lastName}</td>
                            <td>{val.address}</td>
                            <td>{val.email}</td>
                            <td>{val.contact}</td>
                            <td>{val.city}</td>
                            <td>{val.state}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

        </div>
        </div>
  )
}

export default ShowUsers