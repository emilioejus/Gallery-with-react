import React from "react";
import { Link } from 'react-router-dom';
import search from '../assets/icons/icons-search.png';
import '../assets/styles/navbar.css';


const Navbar = ()=> {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid ms-5 navbar-nav">
              <Link className="nav-link active" to="/">Movidere</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse  justify-content-end me-5" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/search"><img id="search"  src={search} alt="Lupa" /></Link>
                  <Link className="nav-link" to="/login">Login</Link>
                  <Link className="nav-link" to="/register">Register</Link>
                </div>
              </div>
            </div>
        </nav>
    )
}

export default Navbar;