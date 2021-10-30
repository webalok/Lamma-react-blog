import React from 'react'
import './TopBar.css';
import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";

export default function TopBar() {
 return (
  <div className='container-fluid rootTopBar'>
   <div className='row'>

    <div className='col-md-3 col-sm-12 col-xs-12 topLeft'>
     <i className="socialIcon fab fa-facebook-square"></i>
     <i className="socialIcon fab fa-instagram-square"></i>
     <i className="socialIcon fab fa-youtube-square"></i>
    </div>

    <div className='col-md-6 col-sm-12 col-xs-12 topCenter'>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
       <a className="navbar-brand d-none" href="#">Menu</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav justify-content-center">
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link >
         </li>
         <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
         </li>
         <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
         </li>
         <li className="nav-item">
          <Link className="nav-link" to="/products">New Products</Link>
         </li>
         <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
         </li>
        </ul>
       </div>
      </div>
     </nav>
    </div>

    <div className='col-md-3 col-sm-6 col-xs-12 topRight'>
     <span className='profilePic'> <img src={'Assets/profile-pic.jpg'} alt='customer profile' className='img-fluid' /> </span>
     <div className="dropdown">
      <i className="searchIcon fas fa-cog dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
       <li><a className="dropdown-item" href="#">Action</a></li>
       <li><a className="dropdown-item" href="#">Another action</a></li>
       <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
     </div>
    </div>

   </div>
  </div>
 )
}
