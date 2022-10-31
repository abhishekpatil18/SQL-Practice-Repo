import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Hotel1 from '../../images/h1.jpg'

const BookTable = () => {
    let BookedArray = useSelector(state => state.BookTable.bookedHotel);
    console.log(BookedArray)

    let sArray = [];
    for (let i = 0; i < 10; i++) {
        sArray.push(i);
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="m-4 text-center d-flex p-2 rounded">

                            <div className="dropdown mt-3">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Table Count
                                </button>
                                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                    {
                                        sArray.map((val, index) => {
                                            return <li className='dropdown-item' >
                                                <button className='btn w-100 btn-light'>{index + 1}</button>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <button className='btn mt-3 ms-3 btn-primary'> Book Now</button>
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
                                   <h2 className="card-title">{val.payload.payload.name}</h2>
                                   {console.warn(val.payload.payload.name)}
                                   <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                   <h4 className="card-text">Address.</h4>
                                   <p className="card-text">{val.payload.payload.address}</p>
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