import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
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
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" >Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to='/userLogin'>
                            <button className="btn btn-success m-2" type="button">Login</button>
                            </Link>
                            <Link to='/registration'>
                            <button className="btn btn-primary m-2" type="button">Registare</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar