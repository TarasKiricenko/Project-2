// import React, { useEffect, useState } from 'react'
import React from 'react'
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom'
// import axios from 'react'


const NavBar = () => {
  //   const [beerUnit, setBeerUnit] = useState([])


  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         const { data } = await axios.get('https://api.punkapi.com/v2/beers')
  //         console.log(data)
  //         setBeerUnit(data)
  //       } catch (err) {
  //         console.log(err)

  //       }

  //     }
  //     getData()
  //   })
  //   console.log('beerUnit', beerUnit)



  //navbar with home ,  beers with link to all beer ),drop down by percentage,  random beer ( https://api.punkapi.com/v2/beers/random)

  return (
    <nav className="navbar is-danger is-medium">
      <div className="container">
        <div className="navbar-start">
          <div className="navbar-item is-white">
            <Link  className = "navlink"to="/">Home</Link>
          </div>
        </div>
        <div className="navbar-start">
          <div className="navbar-item is-white">
            <Link className ="navlink"to="/beers">See all Beers</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item is-white">
            <Link className = "navlink" to="/random">Random Beer</Link>
          </div>
        </div>
      </div >
    </nav >
  )
}



export default NavBar