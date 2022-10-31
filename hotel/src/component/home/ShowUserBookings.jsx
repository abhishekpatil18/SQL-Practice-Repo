import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'

const ShowUserBooking = () => {
  let usersBookings = [
    {
      hotelName: 'Hotel_1',
      category: 6,
      tables: 1,
      date: '28/10/22'
    },
    {
      hotelName: 'Hotel_2',
      category: 4,
      tables: 2,
      date: '28/10/22'
    },
    {
      hotelName: 'Hotel_3',
      category: 4,
      tables: 2,
      date: '28/10/22'
    }
  ]

  let cancels = [];
  let [bookings, setBookings] = useState([...usersBookings]);
  let [cancelation, setCancellation] = useState([...bookings]);


  let deleteRecord = (val) => {
    bookings.splice(val, 1)
    setBookings(bookings);
    setCancellation(bookings);
    
  }
  let cancleBooking = (e) => {
    deleteRecord(Number(e.target.id));
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="container">

          <h2 className='text-center mt-3 p-2 rounded bg-primary text-light'>List of Bookings</h2>

          {
            (bookings.length !== 0) && <table className='mt-5 table table-striped rounded' >
              <thead>
                <tr className='text-center bg-dark text-light'>
                  <th>SR. NO</th>
                  <th>Hotel Name</th>
                  <th>Category (Persons)</th>
                  <th>Tables</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  cancelation.map((val, index) => {
                    return <tr className='text-center'>
                      <td>{index + 1}</td>
                      <td>{val.hotelName}</td>
                      <td>{val.category}</td>
                      <td>{val.tables}</td>
                      <td>{val.date}</td>
                      <td><button id={index} onClick={cancleBooking} className='btn btn-outline-danger'>Cancle</button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          }

        </div>
      </div>
    </>
  )
}

export default ShowUserBooking