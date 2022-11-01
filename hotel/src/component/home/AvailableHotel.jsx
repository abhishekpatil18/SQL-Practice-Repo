import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {addToSelectedHotel} from '../../feature/user/selectedHotel'
import Hotel1 from '../../images/h1.jpg' 

const AvailableHotel = () => {

    let availableHotel = useSelector(state=>state.availableHotel.availabeHotels);
    const dispatch = useDispatch();

      let navigate = useNavigate()
      let [selected , setSelected] = useState(0);
      let select=(e)=>{
        dispatch(addToSelectedHotel(availableHotel[e.target.id]));
        setSelected(1)
        alert(`Your selected Hotel is : ${availableHotel[e.target.id].name  }`)
      }

      let selectedHotel = useSelector(state=> state.selectedHotel.selectedArray);

      let showSelected = ()=>{
       if(selected!=0){
        navigate('/home')
       }
       else{
        alert("Please select required Hotel ")
       }
      }

  return (
    <div className='mb-5'>
        <Navbar/>
        <div className="container">
            <h2 className='text-center m-3'>Available Hotels</h2>
            <button className='btn btn-primary m-4'onClick={showSelected}>Go to selected Hotels</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                      <th>Hotel</th>
                        <th>Hotel Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        availableHotel.map((val,index)=>{
                            return <tr key={index}>
                              <td><img style={{width:'150px', height:'100px'}} src={Hotel1} alt="...." /></td>
                                <td>{val.name}</td>
                                <td>{val.address}</td>
                                <td>{val.contact}</td>
                                <td><button id={index} onClick={select} className='btn btn-success'>Select</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
            
        </div>
    </div>
  )
}

export default AvailableHotel