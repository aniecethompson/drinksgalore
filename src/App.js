import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import DrinkCard from './components/DrinkCard'
import Alcoholic from './components/Alcoholic'
import NonAlcoholic from './components/NonAlcoholic'
function App() {
  const [drinkOfDay, setDrinkOfDay] = useState({})

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => setDrinkOfDay(data.drinks[0]))
  }, [])

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-light offset-md-2">
          <ul>
            <li
              className="btn btn-outline-primary btn-lg navLink"
              style={{ backgroundColor: '#ffe6ff ' }}
            >
              <Link to="/">Drink of the Day</Link>
            </li>
            <li
              className="btn btn-outline-primary btn-lg navLink"
              style={{ backgroundColor: '#ffe6ff ' }}
            >
              <Link to="/alcoholic">Alcoholic</Link>
            </li>
            <li
              className="btn btn-outline-primary btn-lg navLink"
              style={{ backgroundColor: '#ffe6ff ' }}
            >
              <Link to="/non_alcoholic">Non-Alcoholic</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/drinks/:drinkId" component={Drinks} />
          <Route path="/alcoholic">
            <Alcoholic />
          </Route>
          <Route path="/non_alcoholic">
            <NonAlcoholic />
          </Route>
          <Route path="/">
            <DrinkCard drinkInfo={drinkOfDay} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Drinks(props) {
  const [drink, setDrink] = React.useState(null)
  const { drinkId } = props.match.params
  React.useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
      .then((response) => response.json())
      .then((data) => {
        setDrink(data.drinks[0])
      })
  }, [drinkId])

  return drink ? <DrinkCard drinkInfo={drink} /> : 'Loading...'
}

export default App
