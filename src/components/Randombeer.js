import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Randombeer = () => {
  const [randomBeer, setRandomBeer] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.punkapi.com/v2/beers/random')
        // console.log('response', response.data)
        setRandomBeer(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  console.log(randomBeer)




  return (
    <>
      <section className="section">
        <div className="container">
          
          <div className="columns is-multiline">
            {randomBeer.map(item => {
              return (
                <>
                  <div className="container_beer">
                    <div className="beerdiv">
                      <img key={item.ibu} src={item.image_url} alt={item.name}></img>
                      <p key={item.id}>{item.name}</p>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <hr/>
        <div className="field">
        <Link to = '/beers'><button type="submit" className="button is-fullwidth is-warning">Back to all beers</button></Link>
      </div>
      </section>
      
    </>
  )
}
export default Randombeer