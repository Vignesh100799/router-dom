import React from "react";
import 'bootstrap'

const Navbar = () => {
  return (
  
    <><div className='container'>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     
        <div className="navbar-brand">
          <img width="121" height="53" src="https://asset.brandfetch.io/id3BHBKuok/idIoOmPqzs.png?updated=1694945463029" alt="Guvi-blog-logo" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link active" aria-current="page">COURSES</div>
            </li>

            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                LIVE CLASSES
              </div>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item"><h5>Zen Class</h5></div></li>
                <li><div className="dropdown-item">Full Stack Development Program (FSD)</div></li>
                <li><div className="dropdown-item">IIT-M Advanced Programming & Data Science Program</div></li>
                <li><div className="dropdown-item">Automation & Testing Program</div></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRACTICE
              </div>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item">Codekata</div></li>
                <li><div className="dropdown-item">Webkata</div></li>

                <li><div className="dropdown-item">IDE - Online Compiler</div></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                RESOURCES
              </div>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item">REWARDS</div></li>
                <li><div className="dropdown-item">REFFERAL</div></li>

                <li><div className="dropdown-item">FORUM SUPPORT</div></li>
                <li><div className="dropdown-item">BLOGS</div></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                OUR PRODUCTS

              </div>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item">HackerKid</div></li>
                <li><div className="dropdown-item">GUVI for Corporates</div></li>


              </ul>
            </li>

          </ul>

        </div>

    </nav>
  </div></>
  );
};

export default Navbar;
