import React from 'react'
import "./Style/Nav.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='NavOuterDiv'>
      <div className="NavName">
        <h2>Tirupati Steel Bhandar</h2>
        <p>By Vaibhav Joshi</p>
      </div>
      <div className="NavMenu">
      <ul>
            {/* <Link to="/"> */}
            <li>Home</li>
            {/* </Link> */}
            {/* <Link to="/product"> */}
            <li>Products</li>
            {/* </Link> */}
            {/* <Link to="/history"> */}
            <li>History</li>
            {/* </Link> */}
        </ul>
      </div>
      <div className="NavButton">
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar