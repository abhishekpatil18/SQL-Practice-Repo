import React from 'react'
import { useSelector } from 'react-redux';
import AdminDashboard from '../AdminDashboard'

const ShowCancellation = () => {

    let cancledBooking = useSelector(state=> state.CancellationSlice.canceledArray);
    let canceledTable = useSelector(state=> state.CancellationSlice.canceledTable)
    let User = useSelector(state=>state.InSessionSlice.inSessionArray)

    return (
        <div>
            <AdminDashboard />
            <div className="container">

                <h2 className='text-center p-2 rounded bg-secondary text-light'>List of cancled Bookings</h2>

                <table className='mt-5 table table-striped rounded' >
            <thead>
                <tr className='text-center text-light bg-danger'>
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
                    cancledBooking.map((val,index)=>{
                        return <tr key={index} className='text-center'>
                            <td>{index+1}</td>
                            <td>{User[index].firstName}</td>
                            <td>{User[index].userEmail}</td>
                            <td>{val.name}</td>
                            <td>{val.address}</td>
                            <td>{val.contact}</td>
                            <td>{canceledTable[index].payload}</td>
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