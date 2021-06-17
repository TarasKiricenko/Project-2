import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BeerCard from './BeerCard'


const AllBeers = () => {
  const [beers, setBeers] = useState([])
  const [updatedBeers, setUpdatedBeers] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.punkapi.com/v2/beers/')
        // console.log('response', response.data)
        setBeers(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  // console.log(beers)

  // const handleChange = (event) => {
  //   console.log(beers)
  //   const filteredBeers = []
  //   const newFilterBeers = beers
  //   newFilterBeers.filter(item => {
  //     if (item.abv >= parseFloat(event.target.value)) {
  //       filteredBeers.push(item)
  //       // setUpdatedBeers(filteredBeers)
  //     }
  //   })
  //   setUpdatedBeers(filteredBeers)
  //   console.log('FilterBeers', filteredBeers)
  //   console.log('beers before', beers)
  // }
  // }
  console.log(updatedBeers)
  const handleChange = (event) => {
    console.log(beers)
    console.log(event.target.value)
    // <<< so i set state to a new variable, and thne that filters on the item.abv levels
    const newArray = beers.filter((item) => {
      return item.abv >= parseFloat(event.target.value)
    })
    setUpdatedBeers(newArray)
  }
  // console.log('update', updatedBeers)
  // const filteredBeers = beers
  // filteredBeers.filter(item => {
  //   if (item.abv >= parseFloat(event.target.value)) {
  //     filteredBeers.push(item)
  //     console.log(item.abv)
  //     console.log(filteredBeers)
  //   }
  //   setBeers(filteredBeers)
  //   console.log(beers)
  // })

  // console.log(filteredBeers)
  // console.log(beers)
  // const filteredBeers = beers
  // filteredBeers.filter(item => {
  //   if (item.abv >= parseFloat(event.target.value)) {
  //     filteredBeers.push(item)
  //     console.log(item.abv)
  //     console.log(filteredBeers)
  //   }
  //   setBeers(filteredBeers)
  //   console.log(beers)
  // })

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="navbar-end is-white">
            <div className="navbar-item is-white">
              <form onChange={handleChange}>
                <label>Browse by alcohol volume </label>
                {/* <select value = {beers.abv} name ="abv" id="abv" > */}
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
            <div className="columns is-multiline">
              {updatedBeers.map(item => {
                return (
                  <BeerCard key={item.id} {...item} />
                )
              })}
            </div>
            :
            < div className="columns is-multiline">
              {beers.map(item => {
                return (
                  <BeerCard key={item.id} {...item} />
                )
              })}
            </div>
          }
        </div>
      </section>
    </>
  )
}
export default AllBeers