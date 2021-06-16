import React from 'react'
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom'


const NavBar = () => {





  //navbar with home ,  beers with link to all beer ),drop down by percentage,  random beer ( https://api.punkapi.com/v2/beers/random)

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="navbar-start">
          <div className="navbar-item is-white">
            <Link to="/beers">See all Beers</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item is-white">
            <Link to="/random">Random Beer</Link>
          </div>
        </div>
        <div className="navbar-end is-white">
          <div className="navbar-item is-white">
            <select>
              <option>Choose alcohol amount</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        
      </div>
    </nav>
  )
}



export default NavBar