import React, { useState, useEffect } from 'react'
import Thumbnail from './Thumbnail'

function NonAlcoholic() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    // get list of non-alcoholic drinks
    fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    )
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
  }, [])

  return (
    <div>
      <h1>Non-Alcoholic Drinks</h1>
      <div className="cards">
        {drinks.map((drink) => (
          <Thumbnail drink={drink} key={drink.idDrink} />
        ))}
      </div>
    </div>
  )
}

export default NonAlcoholic
