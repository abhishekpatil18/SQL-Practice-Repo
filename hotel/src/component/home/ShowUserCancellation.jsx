import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'

const ShowUserCancellation = () => {

    let cancledBooking = useSelector(state=> state.CancellationSlice.canceledArray);
    let canceledTable = useSelector(state=> state.CancellationSlice.canceledTable)

    return (
        <div><Navbar/>
            <div className="container">

                <h2 className='text-center mt-3 p-2 rounded bg-secondary text-light'>List of cancled Bookings</h2>

                <table className='mt-5 table table-striped rounded' >
                    <thead>
                        <tr className='text-center bg-secondary text-light'>
                            <th>SR. NO</th>
                            <th>Hotel Name</th>
                            <th>Category (Persons)</th>
                            <th>Tables</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cancledBooking.map((val, index) => {
                                return <tr key={index} className='text-center'>
                                    <td>{index + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.address}</td>
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

export default ShowUserCancellation