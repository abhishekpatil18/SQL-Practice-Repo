
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToBookedHotel } from '../../feature/user/bookingSlice'
import { addToCanceledArray, addToCancledTAble } from '../../feature/user/cancellationSlice'
import { removeFromSelectedHotel } from '../../feature/user/selectedHotel'
import Navbar from '../navbar/Navbar'

const ShowUserBooking = () => {

  let userBooking = useSelector(state=> state.selectedHotel.selectedArray)
  let tables = useSelector(state=> state.BookingSlice.tableCount)


  let dispatch = useDispatch();
  let cancleBooking=(e)=>{
   dispatch(addToCanceledArray(userBooking[Number(e.target.id)]))
    dispatch(addToCancledTAble(tables[Number(e.target.id)]))
    dispatch(removeFromSelectedHotel(Number(e.target.id)))
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <h2 className='text-center mt-3 p-2 rounded bg-primary text-light'>List of Bookings</h2>
          {
            (userBooking.length != 0) && <table className='mt-5 table table-striped rounded' >
              <thead>
                <tr className='text-center bg-dark text-light'>
                  <th>SR. NO</th>
                  <th>Hotel Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Tables</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  (tables.length!==0) && 
                  userBooking.map((val, index) => {
                    return <tr key={index} className='text-center'>
                      <td>{index + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.address}</td>
                      <td>{val.contact}</td>
                      <td>{tables[index].payload}</td>
                      <td><button onClick={cancleBooking} id={index} className='btn btn-outline-danger'>Cancle</button></td>
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