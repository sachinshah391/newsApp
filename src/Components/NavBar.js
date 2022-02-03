import React from 'react'
import { Link } from "react-router-dom";

const NavBar=()=> {
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
                
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>
           </div>
          </nav>
        
        </div>
    )
  }


export default NavBar

