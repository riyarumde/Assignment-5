import React from 'react'
import Logo  from "../../resources/images/logo.png"


export default function Navbar() {
    return (
        <div className="row nav-custom">
            <div className="col-2">
            <img src={Logo} alt=""width="50px" height="50px" className="custom-logo img-thumbmail"/>
            </div>
            <div className="col-8 custom-align">
    <div className="custom-align">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly custom-link-nav ">
        <li className="nav-item">
          <a className="nav-link" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">HIGH QUALITY</a>
        </li>
        <li className="nav-item">
             <a className="nav-link" href="/">DIET PLAN</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">CONTACT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">DOWNLOAD</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">QUICK SUPPORT</a>
        </li>


      </ul>
            </div>
            </div>
            <div className="col-2 h-100 btn-div-header">

<button className="btn btn-success btn-lg ">ABOUT US </button>

            </div>
        </div>
    )
}