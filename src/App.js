import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AllBeers from './components/beers/AllBeers'
import Home from './components/Home'
import Randombeer from './components/Randombeer'
import Beershow from './components/beers/Beershow'



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          {/* <Route path ='/beers/:id'>
            <Randombeer />
          </Route> */}
          <Route path ='/beers/:id'>
            <Beershow />
          </Route>
          <Route path ='/beers'>
            <AllBeers />
          </Route>
          <Route path ='/random'>
            <Randombeer />
          </Route>
          <Route path ='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )

}

export default App
