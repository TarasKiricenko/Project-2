import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <> 
      <div className="welcome">
        <h1 className="entry"><Link to="/beers"><div className="entry">Welcome to the PUNK Beer shop!</div></Link></h1>
      </div>
    </>
  )
}

export default Home