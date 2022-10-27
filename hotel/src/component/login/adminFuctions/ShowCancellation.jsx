import React from 'react'
import AdminDashboard from '../AdminDashboard'

const ShowCancellation = () => {

    let cancledBookings= [
        {
            userName:'Abhishek',
            email:'abhi@gmail.com',
            hotelName:'Hotel_1',
            category:6,
            tables:1,
            reason:'something'
        },
        {
            userName:'Damodhar',
            email:'damu@gmail.com',
            hotelName:'Hotel_2',
            category:4,
            tables:2,
            reason:'something'
        }
    ]

  return (
    <div>
        <AdminDashboard/>
        <div className="container">

<h2 className='text-center p-2 rounded bg-secondary text-light'>List of cancled Bookings</h2>

<table className='mt-5 table table-striped rounded' >
    <thead>
        <tr className='text-center bg-danger text-light'>
            <th>SR. NO</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Hotel Name</th>
            <th>Category (Persons)</th>
            <th>Tables</th>
            <th>Reason</th>
        </tr>
    </thead>

    <tbody>
        {
            cancledBookings.map((val,index)=>{
                return <tr className='text-center'>
                    <td>{index+1}</td>
                    <td>{val.userName}</td>
                    <td>{val.email}</td>
                    <td>{val.hotelName}</td>
                    <td>{val.category}</td>
                    <td>{val.tables}</td>
                    <td>{val.reason}</td>
                </tr>
            })
        }
    </tbody>
</table>

</div>
        </div>
  )
}

export default ShowCancellation