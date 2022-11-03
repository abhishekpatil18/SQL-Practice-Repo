import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateAvailableHotel } from '../../../feature/user/availableHotelSlice';
import AdminDashboard from '../AdminDashboard';
import { useNavigate } from 'react-router-dom';

const UpdateHotel = () => {

    let Hotels = useSelector(state => state.availableHotel.availabeHotels)
    let dispatch = useDispatch()
    
    const navigate = useNavigate(); 
    let [hotelId, setHotelId] = useState(1)
    console.log(Hotels[hotelId-1].name)

    let [name,setName] = useState(Hotels[hotelId-1].name)
    let [address,setAddress] = useState(Hotels[hotelId-1].address)
    let [contact,setContact] = useState(Hotels[hotelId-1].contact)

    let [updatedHotel, setUpdatedHotel] = useState({})
    

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

    let [flag,setFlag] = useState(false)

    let updateHotel = () => {
        let update= {
            name:name,
            address:address,
            contact:contact,
            index:(hotelId-1)
        }
        setUpdatedHotel({...updatedHotel,...update})
        setFlag(true)
    }
    
    let Confirm = () =>{
        console.log(updatedHotel)
        dispatch(updateAvailableHotel(updatedHotel))
        navigate('/adminDashboard/addHotel')
        
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
                            <input type="number" onChange={getId} className="form-control" placeholder="Enter Id" aria-label="Hotel Id" />
                            <button onClick={checkHotel} className='btn btn-primary m-2'>Check For Hotel</button>
                        </div>

                    </div>

                    {
                        bool && <div className="row mb-5">
                            <h1>Enter updated details</h1>
                            <div className="col">
                                <label className="col-sm-4 col-form-label">Hotel Name</label>
                                <input type="text" onChange={(e)=>{
                                    setName(e.target.value)
                                }} id='name' defaultValue={Hotels[hotelId - 1].name} className="form-control" aria-label="Hotel Name" />
                            </div>
                            <div className="col">
                                <label className="col-sm-4 col-form-label">Address</label>
                                <input type="text" onChange={(e)=>{
                                    setAddress(e.target.value)
                                }} id='address'  defaultValue={Hotels[hotelId - 1].address} className="form-control" aria-label="Address" />
                            </div>
                            <div className="col">
                                <label className="col-sm-4 col-form-label">Contact</label>
                                <input type="number" onChange={(e)=>{
                                    setContact(e.target.value)
                                }} id='contact' defaultValue={Hotels[hotelId - 1].contact} className="form-control" aria-label="Contact Details" />
                            </div>
                            <div className="col">
                                <h2 className="col-sm-6 col-form-label">Add new Hotel</h2>
                                {
                                    (!flag) && 
                                <button onClick={updateHotel} className='btn btn-success'>Update</button>
                                }
                                {
                                    (flag) && 
                                    <button onClick={Confirm} className='btn ms-2 btn-primary'>Confirm Update</button>
                                }
                            </div>
                        </div>
                    }



                </div>


            </div>
        </>
    )
}

export default UpdateHotel