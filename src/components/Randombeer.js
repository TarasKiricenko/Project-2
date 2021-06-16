import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Randombeer = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.punkapi.com/v2/beers/random')
        // console.log('response', response.data)
        setBeers(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  console.log(beers)




  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {beers.map(item => {
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
      </section>
    </>
  )
}
export default Randombeer