import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AllBeers from './components/beers/AllBeers'
import Home from './components/Home'
import Randombeer from './components/Randombeer'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
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

// drop down by percentage


// when user click on any beer ( id) we render them to another page of that beer with more info, description ingredient
// ( also add ingredients, hops, style, year of first production, food pairing etc.) 
//! add anther link (button type, or any JSX) displaying brewer tips for the beer
//! we need to get another button to go back to homepage or to see all the beers.

