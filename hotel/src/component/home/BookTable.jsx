import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addToBookedHotel, confirmBooking,confirmTableCount} from '../../feature/user/bookingSlice'
import Hotel1 from '../../images/h1.jpg'
import { useState } from 'react'
 
const BookTable = () => {
    let BookedArray = useSelector(state => state.selectedHotel.selectedArray);
    let navigate = useNavigate();
    let sArray = [];
    for (let i = 0; i < 10; i++) {
        sArray.push(i);
    }
    let dispatch = useDispatch();

    let[tableNo,setTableNo] = useState(0);
    let TableNo = (e) =>{
        setTableNo(Number(e.target.id));
    }

    let bookTable = (e) =>{
        if(tableNo!==0){
            dispatch(confirmTableCount(tableNo));
            navigate('/showUserBookings')
        }
        else{
            alert("Select Table Count")
        }
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="m-4 text-center d-flex p-2 rounded">

                            <div className="dropdown mt-3">
                                <button  className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Table Count
                                </button>
                                <input type="text" className=' text-center form-control mt-3' value={tableNo} disabled={true} />
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                    {
                                        sArray.map((val, index) => {
                                            return <li key={index} className='dropdown-item' >
                                                <button onClick={TableNo} id={index+1} className='btn w-100 btn-light'>{index + 1}</button>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <button onClick={bookTable} className='btn mt-3 ms-3 btn-primary'>Book Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="col m-4 p-4" style={{ height: 'auto', boxShadow: '0px 0px 10px 0px' }}>
                        <h2 className='text-center mb-3 mt-3 bg-secondary text-light'>Hotel Info</h2>
                        <div className="card text-center">
                            {
                                (BookedArray.length != 0 ) && <div className="card-header">
                                Hotel of your Choice <br />
                                <img src={Hotel1} alt="Loading.." />
                            </div>
                            }
                            {
                                BookedArray.map((val,index)=>{
                                   return  <div key={index} className="card-body">
                                   <h2 className="card-title">{val.name}</h2>
                                   <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                   <h4 className="card-text">Address.</h4>
                                   <p className="card-text">{val.address}</p>
                                   <a href="#" className="btn btn-primary">Know More</a>
                               </div>
                                })
                                
                            }
                            <div className="card-footer text-muted">
                                Open Now..
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTable