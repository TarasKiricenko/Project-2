import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BeerCard from './BeerCard'


const AllBeers = () => {
  const [beers, setBeers] = useState([])
  const [updatedBeers, setUpdatedBeers] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.punkapi.com/v2/beers')
        setBeers(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getData()
  }, [])

  const handleChange = (event) => {
    const newArray = beers.filter((item) => {
      return item.abv >= parseFloat(event.target.value)
    })
    setUpdatedBeers(newArray)
  }

  return (
    <>
      <section className="section">
        <div className="container">
          {!errors ?
            <>
              <div className="navbar-end is-white">
                <div className="navbar-item is-white">
                  <form onChange={handleChange}>
                    <label>Browse by alcohol volume </label>
                    <select>
                      <option value="" disabled defaultValue>Make a choice</option>
                      <option value="4">Stronger than 4 ABV</option>
                      <option value="5">Stronger than 5 ABV</option>
                      <option value="6">Stronger than 6 ABV</option>
                      <option value="7">Stronger than 7 ABV</option>
                      <option value="8">Stronger than 8 ABV</option>
                      <option value="9">Stronger than 9 ABV</option>
                      <option value="10">Stronger than 10 ABV</option>
                    </select>
                  </form>
                </div>
              </div>


              {updatedBeers.length > 0 ?
                <>
                  <div className="columns is-multiline">
                    {updatedBeers.map(item => {
                      return (
                        <BeerCard key={item.id} {...item} />
                      )
                    })}
                  </div>
                </>
                :
                <>
                  < div className="columns is-multiline">
                    {beers.map(item => {
                      return (
                        <BeerCard key={item.id} {...item} />
                      )
                    })}
                  </div >
                </>
              }
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
export default AllBeers
