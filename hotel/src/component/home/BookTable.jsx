import React from 'react'
import Navbar from '../navbar/Navbar'

const BookTable = () => {
    let selectedHotel = {
        name: 'Hotel_1',
        address: 'Sangli',
        contact: 9730691460,
        capacity: 10
    }
    let sArray = [];
    for (let i = 0; i < selectedHotel.capacity; i++) {
        sArray.push(i);
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="m-4 text-center p-2 rounded" style={{ boxShadow: '0px 0px 10px 0px' }}>
                            {
                                sArray.map((val, index) => {
                                    return <div className='m-3' >
                                        <label className='form-label'>Table No : {index + 1}</label>
                                        <input className="m-2 form-check-input" type="checkbox" value="" aria-label="..." />
                                    </div>
                                })
                            }
                            <button className='btn btn-secondary'> Book Now</button>

                        </div>
                    </div>
                    <div className="col m-4" style={{ height:'400px', boxShadow: '0px 0px 10px 0px' }}>
                        <h2 className='text-center mb-3 mt-3 bg-secondary text-light'>Hotel Info</h2>
                        <div className="card text-center">
                            <div className="card-header">
                                Hotel of your Choice <br />
                                <img src="..." alt="Loading.." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{selectedHotel.name}</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Know More</a>
                            </div>
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