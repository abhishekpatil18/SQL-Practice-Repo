import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'


const Home = () => {
  let Hotels = [
    {
      name: 'Hotel_1',
      address: 'Sangli',
      contact: 9730691460,
      capacity:10
    },
    {
      name: 'Hotel_2',
      address: 'Pune',
      contact: 9700091460,
      capacity:10
    },
    {
      name: 'Hotel_3',
      address: 'Kolhapure',
      contact: 973000090,
      capacity:10
    },
    {
      name: 'Hotel_4',
      address: 'Satare',
      contact: 9790691460,
      capacity:10
    }
  ]
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className='m-2 text-center'>Selected Hotels</h2>
        <div className="d-flex flex-wrap m-3">
          {
            Hotels.map(val => {
              return <div>
                <div className="card m-3 rounded border" style={{width: '18rem',boxShadow:'0px 0px 10px 0px'}}>
                <img src="..." alt="Loading..." />
                    <div className="card-body">
                      <h4 className="card-title">{val.name}</h4>
                      <h6 className="card-text">{val.address}</h6>
                      <h4 className="card-text">{val.contact}</h4>
                      <Link to="/bookTable" className="btn btn-primary">Book Table</Link>
                    </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home