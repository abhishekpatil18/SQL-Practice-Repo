import React from 'react'
import { useSelector } from 'react-redux'
import AdminDashboard from '../AdminDashboard'

const ShowBookings = () => {

    let userBooking = useSelector(state=> state.selectedHotel.selectedArray)
    let tables = useSelector(state=> state.BookingSlice.tableCount)
    let User = useSelector(state=>state.InSessionSlice.inSessionArray)
    console.log(userBooking)
    console.log(User)
  return (
    <div>
        <AdminDashboard/>
    
    <div className="container">

        <h2 className='text-center p-2 rounded bg-secondary text-light'>List of Bookings</h2>

        <table className='mt-5 table table-striped rounded' >
            <thead>
                <tr className='text-center text-light bg-primary'>
                    <th>SR. NO</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Hotel Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Tables</th>
                </tr>
            </thead>

            <tbody>
                {
                    userBooking.map((val,index)=>{
                        return <tr key={index} className='text-center'>
                            <td>{index+1}</td>
                            <td>{User[index].firstName}</td>
                            <td>{User[index].userEmail}</td>
                            <td>{val.name}</td>
                            <td>{val.address}</td>
                            <td>{val.contact}</td>
                            <td>{tables[index].payload}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
    </div>
  )
}

export default ShowBookings