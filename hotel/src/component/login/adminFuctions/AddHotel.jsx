import React, { useState } from 'react'
import AdminDashboard from '../AdminDashboard'

const AddHotel = () => {

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

    let [newHotel,setNewHotel] = useState([...Hotels]);
    let [hotelObj,setHotelObj] = useState({});

    let onChangeHandle=(e)=>{
        setHotelObj({...hotelObj,[e.target.id]:e.target.value}) 
    }

    let addHotel=()=>{
        setNewHotel([...newHotel,hotelObj]);
    }

    return (
        <div >
            <AdminDashboard></AdminDashboard>
            <div className='container'>
            <div className="addNewHotel">
                <h1 className="text-center m-5">Add New Hotel</h1>
                <div className="row mb-5">
                    <div className="col">
                    <label  className="col-sm-4 col-form-label">Hotel Name</label>
                        <input type="text" onChange={onChangeHandle} id='name' className="form-control" placeholder="Hotel Name" aria-label="Hotel Name"/>
                    </div>
                    <div className="col">
                    <label  className="col-sm-4 col-form-label">Address</label>
                        <input type="text" onChange={onChangeHandle} id='address' className="form-control" placeholder="Address" aria-label="Address"/>
                    </div>
                    <div className="col">
                    <label  className="col-sm-4 col-form-label">Contact</label>
                        <input type="number" onChange={onChangeHandle} id='contact' className="form-control" placeholder="Contact" aria-label="Contact Details"/>
                    </div>
                    <div className="col">
                    <h2  className="col-sm-6 col-form-label">Add new Hotel</h2>
                        <button onClick={addHotel} className='btn btn-success'>Add</button>
                    </div>
                </div>
            </div>
            <h1 className='text-center'>Available Hotels</h1>
            <div className="hotelData">
                <table className="table table-striped">
                    <thead>
                        <tr className='table-dark'>
                            <th>Id</th>
                            <th>Hotel Name</th>
                            <th>Hotel Address</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newHotel.map((hotel, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{hotel.name}</td>
                                    <td>{hotel.address}</td>
                                    <td>{hotel.contact}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
           
        </div>
    )
}

export default AddHotel