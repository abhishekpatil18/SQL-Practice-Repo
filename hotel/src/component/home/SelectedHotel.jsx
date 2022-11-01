import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { addToBookedHotel } from '../../feature/user/bookTable'
import Hotel1 from '../../images/h1.jpg'


const Home = () => {
  let selectedHotel = useSelector(state => state.selectedHotel.selectedArray);
  const dispatch = useDispatch();

  let bookTable = (e) =>{
    dispatch(addToBookedHotel(selectedHotel[e.target.id].payload));
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className='m-2 text-center'>Selected Hotels</h2>
        <div className="d-flex flex-wrap m-3">
          {
            selectedHotel.map((val,index) => {
              return <div key={index}>
                <div className="card p-2 m-3 rounded border" style={{width: '18rem',boxShadow:'0px 0px 10px 0px'}}>
                <img src={Hotel1} alt="Loading..." />
                    <div className="card-body">
                      <h4 className="card-title">{val.name}</h4>
                      <h6 className="card-text">{val.address}</h6>
                      <h4 className="card-text">{val.contact}</h4>
                      <Link to="/bookTable" onClick={bookTable} id={index} className="btn btn-primary">Book Table</Link>
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