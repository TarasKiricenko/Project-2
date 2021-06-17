import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const BeerShow = () => {

  const { id } = useParams()

  const [beer, setBeer] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        setBeer(data[0])
        console.log('beer-->', data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])

  console.log('beer ===>', beer)

  return (
    <>
      <section className="section">
        <div className="container">
          {/* {beer[0] ?  */}
          <div>
            <h2 className="title has-text-centered">{beer.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half"> 
                <figure className="each-image image is-128x128 image">
                  <img src={beer.image_url} alt={beer.name}/>
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4"><span role="img" aria-label="plate">🍽</span>Food Pairing</h4>
                <p>{beer.food_pairing}</p>
                <hr />
                <h4 className="title is-4"><span role="img" aria-label="globe">🌍</span> Brewer Tips</h4>
                <hr />
                <p>{beer.brewers_tips}</p>
                <hr />
              </div>
            </div>
          </div>
          {/* : */}
          <h2 className="title has-text-centered">
            {/* {hasError ? 'Something has gone wrong!' : 'loading...🧀'} */}
          </h2>
          {/* } */}
          <hr/>
          <div className="field">
            <Link to = '/beers'><button type="submit" className="button is-fullwidth is-warning">Back to all beers</button></Link>
          </div>
        </div>
      </section>
    </>
  )


}


export default BeerShow