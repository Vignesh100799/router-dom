import React from 'react'
import { Link,useLocation } from "react-router-dom";



const Bottom = () => {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg" style={{boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)"}}>
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''} nav-colour nav-colour-content`} to={'/'}>
            ALL
          </Link>
          <Link className={`nav-link ${location.pathname === '/FULL-STACK-DEVELOPMENT' ? 'active' : ''} nav-colour nav-colour-content`} to={'/FULL-STACK-DEVELOPMENT'}>
            FULL STACK DEVELOPMENT
          </Link>
          
          <Link className={`nav-link ${location.pathname === '/DATA-SCIENCE' ? 'active' : ''} nav-colour nav-colour-content`} to={"/DATA-SCIENCE"}>
            DATA SCIENCE
          </Link>
          <Link className={`nav-link ${location.pathname === '/CYBER-SECURITY' ? 'active' : ''} nav-colour nav-colour-content`} to={"/CYBER-SECURITY" }>
            CYBER SECURITY
          </Link>
          <Link className={`nav-link ${location.pathname === '/CAREERS' ? 'active' : ''} nav-colour nav-colour-content`} to={"/CAREERS"}>
            CAREER
          </Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Bottom