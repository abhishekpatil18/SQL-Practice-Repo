import React from 'react'
import Navbar from '../navbar/Navbar'

const ShowUserCancellation = () => {
    let cancledBookings = [
        {
            hotelName: 'Hotel_1',
            category: 6,
            tables: 1,
            reason: 'something'
        },
        {
            hotelName: 'Hotel_2',
            category: 4,
            tables: 2,
            reason: 'something'
        }
    ]

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
                            <th>Reason</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cancledBookings.map((val, index) => {
                                return <tr className='text-center'>
                                    <td>{index + 1}</td>
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

export default ShowUserCancellation