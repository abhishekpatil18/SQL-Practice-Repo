import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { removeFromInSessionArray } from '../../feature/admin/inSession';

const Navbar = () => {
    let dispatch = useDispatch()
    let user = useSelector(state => state.InSessionSlice.inSessionArray)

    const navigate = useNavigate();
    let signOut = () => {
        navigate('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" href="#">Tomato</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/availableHotel">Available Hotel</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/home" >Selected Hotels</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/showUserBookings" > Bookings </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/showUserCancellation" >Show Cancellation</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button onClick={signOut} className="btn btn-danger m-2" type="button">Sign Out</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar