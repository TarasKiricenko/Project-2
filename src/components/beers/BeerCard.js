import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line
const BeerCard = ({ ibu, image_url, name, id }) => {
  

  const handleClick = () => {
    console.log('click')
  }
  
  return (
    <Link to={`/beers/${id}`}>
      <div className="container_beer" onClick={handleClick}>
        <div className="beerdiv">
          {/* eslint-disable-next-line */}
          <img key={ibu} src={image_url} alt={name}/>
          <p key={id}>{name}</p>
        </div>
      </div >
    </Link>
  )
}

export default BeerCard
