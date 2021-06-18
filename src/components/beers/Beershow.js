import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const BeerShow = () => {

  const { id } = useParams()

  const [beer, setBeer] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        setBeer(data[0])
      } catch (error) {
        setErrors(true)

      }
    }
    getData()
  }, [id])


  return (
    <>
      <section className="section">
        <div className="container">
          {beer ?
            <>
              <div className="descriptionfield">
                <h2 className="title has-text-centered">{beer.name}</h2>
                <hr />
                <div className="columns">
                  <div className="column is-half ">
                    <figure className="each-image image is-96x96 image edit-image">
                      <img src={beer.image_url} alt={beer.name} />
                    </figure>
                  </div>
                  <div className="column is-half">
                    <h4 className="title is-4"><span role="img" aria-label="plate">📝</span>Description</h4>
                    <p>{beer.description}</p>
                    <hr />
                    <h4 className="title is-4"><span role="img" aria-label="plate">🍽</span>Food Pairing</h4>
                    <p>{beer.food_pairing}</p>
                    <hr />
                    <h4 className="title is-4"><span role="img" aria-label="globe">🍻</span> Brewer Tips</h4>
                    <hr />
                    <p>{beer.brewers_tips}</p>
                  </div>
                </div>
              </div>
              <h2 className="title has-text-centered"></h2>
              <div className="field">
                <Link to='/beers'><button type="submit" className="button is-fullwidth is-warning">Back to all beers</button></Link>
              </div>
            </>
            :
            <>
              <div className="error-class">
                <h2 className="title has-text-centered">
                  {errors ? 'Sorry something has gone wrong!' : 'loading...'}
                </h2>
              </div>
            </>
          }
        </div>
      </section>
    </>
  )


}


export default BeerShow