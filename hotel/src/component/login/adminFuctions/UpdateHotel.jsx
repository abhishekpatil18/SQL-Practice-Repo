import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateAvailableHotel } from '../../../feature/user/availableHotelSlice';
import AdminDashboard from '../AdminDashboard';

const UpdateHotel = () => {

    let Hotels = useSelector(state => state.availableHotel.availabeHotels)
    let dispatch = useDispatch()

    let [hotelId, setHotelId] = useState(0);
    let [updatedHotel, setUpdatedHotel] = useState({ })
    

    let getId = (e) => {
        setHotelId(Number(e.target.value));
    }

    let [bool, setBool] = useState(false);
    let checkHotel = () => {
        for (let i = 0; i < Hotels.length; i++) {
            if (hotelId - 1 === i) {
                setBool(true)
            }
        }
    }

    let onChangeHandle = (e) => {
        setUpdatedHotel({ ...updatedHotel, [e.target.id]: e.target.value })
    }
    let updateHotel = () => {
        dispatch(updateAvailableHotel(updatedHotel, hotelId))
    }
    return (
        <>
            <AdminDashboard />
            <div className='container'>
                <div className="updateHotel">
                    <h1 className="text-center m-5">Update Hotel</h1>
                    <div className="row mb-4">
                        <div className="col-3">
                            <label className="col-sm col-form-label">Enter Hotel Id</label>
                            <input type="text" onChange={getId} className="form-control" placeholder="Enter Id" aria-label="Hotel Id" />
                            <button onClick={checkHotel} className='btn btn-primary m-2'>Check For Hotel</button>
                        </div>

                    </div>

                    {
                        bool && <div className="row mb-5">
                            <h1>Enter updated details</h1>
                            <div className="col">
                                <label className="col-sm-4 col-form-label">Hotel Name</label>
                                <input type="text" onChange={onChangeHandle} id='name' placeholder={Hotels[hotelId - 1].name} className="form-control" aria-label="Hotel Name" />
                            </div>
                            <div className="col">
                                <label className="col-sm-4 col-form-label">Address</label>
                                <input type="text" onChange={onChangeHandle} id='address' placeholder={Hotels[hotelId - 1].address} className="form-control" aria-label="Address" />
                            </div>
                            <div className="col">
                                <label className="col-sm-4 col-form-label">Contact</label>
                                <input type="number" onChange={onChangeHandle} id='contact' placeholder={Hotels[hotelId - 1].contact} className="form-control" aria-label="Contact Details" />
                            </div>
                            <div className="col">
                                <h2 className="col-sm-6 col-form-label">Add new Hotel</h2>
                                <button onClick={updateHotel} className='btn btn-success'>Update</button>
                            </div>
                        </div>
                    }



                </div>


            </div>
        </>
    )
}

export default UpdateHotel