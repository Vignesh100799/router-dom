import React from "react";
import 'bootstrap'

const Navbar = () => {
  return (
  
    <><div className='container'>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     
        <a className="navbar-brand">
          <img width="121" height="53" src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="Guvi-blog-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">COURSES</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                LIVE CLASSES
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"><h5>Zen Class</h5></a></li>
                <li><a className="dropdown-item">Full Stack Development Program (FSD)</a></li>
                <li><a className="dropdown-item">IIT-M Advanced Programming & Data Science Program</a></li>
                <li><a className="dropdown-item">Automation & Testing Program</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRACTICE
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Codekata</a></li>
                <li><a className="dropdown-item">Webkata</a></li>

                <li><a className="dropdown-item">IDE - Online Compiler</a></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                RESOURCES
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">REWARDS</a></li>
                <li><a className="dropdown-item">REFFERAL</a></li>

                <li><a className="dropdown-item">FORUM SUPPORT</a></li>
                <li><a className="dropdown-item">BLOGS</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                OUR PRODUCTS

              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">HackerKid</a></li>
                <li><a className="dropdown-item">GUVI for Corporates</a></li>


              </ul>
            </li>

          </ul>

        </div>

    </nav>
  </div></>
  );
};

export default Navbar;
