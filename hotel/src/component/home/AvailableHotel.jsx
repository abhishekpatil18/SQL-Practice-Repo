import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'

const AvailableHotel = () => {
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
      let selectArray=[];
      let select=(e)=>{
        selectArray.push(Number(e.target.id));
        alert(`Hotel No ${Number(e.target.id)+1} has been selected`)
      }

      let selectedHotel = [];
      let showSelected= function(){
        for(let j=0;j<selectArray.length;j++){
            for(let i=0;i<Hotels.length;i++){
              if(selectArray[j]==i){
                selectedHotel.push(Hotels[i]);
              }  
            }
        }
        console.log(selectedHotel);
      }

  return (
    <div>
        <Navbar/>
        <div className="container">
            <h2 className='text-center m-3'>Available Hotels</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Hotel Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Hotels.map((val,index)=>{
                            return <tr key={index}>
                                <td>{val.name}</td>
                                <td>{val.address}</td>
                                <td>{val.contact}</td>
                                <td><button id={index} onClick={select} className='btn btn-success'>Select</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
            <button className='btn btn-primary'onClick={showSelected}>Show</button>
        </div>
    </div>
  )
}

export default AvailableHotel