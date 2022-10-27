import React from 'react'
import AdminDashboard from '../AdminDashboard'

const ShowBookings = () => {

    let Bookings= [
        {
            userName:'Abhishek',
            email:'abhi@gmail.com',
            hotelName:'Hotel_1',
            category:6,
            tables:1
        },
        {
            userName:'Damodhar',
            email:'damu@gmail.com',
            hotelName:'Hotel_2',
            category:4,
            tables:2
        }
    ]

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
                    <th>Email</th>
                    <th>Hotel Name</th>
                    <th>Category (Persons)</th>
                    <th>Tables</th>
                </tr>
            </thead>

            <tbody>
                {
                    Bookings.map((val,index)=>{
                        return <tr className='text-center'>
                            <td>{index+1}</td>
                            <td>{val.userName}</td>
                            <td>{val.email}</td>
                            <td>{val.hotelName}</td>
                            <td>{val.category}</td>
                            <td>{val.tables}</td>
                        
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