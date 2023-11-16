import React from 'react'
import { Link } from "react-router-dom";


const Bottom = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <button
        className="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse  justify-content-center  navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link " to={'/'}>
            ALL
          </Link>
          <Link className="nav-link " to={'/FULL-STACK-DEVELOPMENT'}>
            FULL STACK DEVELOPMENT
          </Link>
          <Link className="nav-link" to={"/DATA-SCIENCE"}>
            DATA SCIENCE
          </Link>
          <Link className="nav-link" to={"/CYBER-SECURITY" }>
            CYBER SECURITY
          </Link>
          <Link className="nav-link" to={"/CAREERS"}>
            CAREER
          </Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Bottom