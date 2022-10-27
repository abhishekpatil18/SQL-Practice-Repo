import React, { useState } from 'react'
import AdminDashboard from '../AdminDashboard';

const UpdateHotel = () => {
    let Hotels = [
        {
            name: 'Hotel_1',
            address: 'Sangli',
            contact: 9730691460
        },
        {
            name: 'Hotel_2',
            address: 'Pune',
            contact: 9700091460
        },
        {
            name: 'Hotel_3',
            address: 'Kolhapure',
            contact: 973000090
        },
        {
            name: 'Hotel_4',
            address: 'Satare',
            contact: 9790691460
        }
    ]

    let [hotelId,setHotelId] = useState(0);

    let getId=(e)=>{
        setHotelId(e.target.value);
    }

    
    let bool=false;
    let checkHotel=()=>{
        for(let i=0;i<Hotels.length;i++){
            if(hotelId-1===i){
                bool=true;
                return Hotels[i];
            }
        }
        return {};
    }


    let isAvailable = checkHotel(); 

    let onChangeHandle=(e)=>{

    }
    let updateHotel=()=>{
        alert("Records has been updated")
    }
    return (
        <>
        <AdminDashboard/>
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
                            <input type="text" onChange={onChangeHandle} id='name' className="form-control" placeholder={isAvailable.name} aria-label="Hotel Name" />
                        </div>
                        <div className="col">
                            <label className="col-sm-4 col-form-label">Address</label>
                            <input type="text" onChange={onChangeHandle} id='address' className="form-control" placeholder={isAvailable.name} aria-label="Address" />
                        </div>
                        <div className="col">
                            <label className="col-sm-4 col-form-label">Contact</label>
                            <input type="number" onChange={onChangeHandle} id='contact' className="form-control" placeholder={isAvailable.name} aria-label="Contact Details" />
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