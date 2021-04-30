import React, { useState, useEffect } from 'react'
import Thumbnail from './Thumbnail'

function Alcoholic() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    // get list of alcoholic drinks
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
  }, [])

  return (
    <div>
      <h1>Alcoholic Drinks</h1>
      <div className="cards">
        {drinks.map((drink) => (
          <Thumbnail drink={drink} key={drink.idDrink} />
        ))}
      </div>
    </div>
  )
}

export default Alcoholic
