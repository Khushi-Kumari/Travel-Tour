//navbar
import React, {useState , useEffect } from "react";
import img from "../../images/logo.png";
import { Link } from "react-router-dom";

import {  NavModal } from "../../NavModal.jsx";


export const Navbar = () => {
const [isSigned, setIsSigned] = useState(false)



  return (
   <nav className="header navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img
            src={img}
            alt="logo"
            style={{ height: "70px", width: "70px" }}
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active h4 mx-3 " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h4 mx-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h4 mx-3" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h4 mx-3" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

<form className="d-flex ms-3 mb-2 mb-lg-0  ">
        

<button type="button"  className="btn btn-outline-success  th-20" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{isSigned?"Sign-out":"Sign-in"}</button>



<  NavModal isSigned={isSigned}  setIsSigned={setIsSigned}
  
   >   
</NavModal>


 </form>


        </div>
      </div>
    </nav>

  );
};
