import React from 'react'
import { Link } from 'react-router-dom'

function Thumbnail(props) {
  return (
    <Link to={`/drinks/${props.drink.idDrink}`}>
      <div className="card" style={{ backgroundColor: '#ffe6ff' }}>
        <img
          className="card__image"
          src={props.drink.strDrinkThumb}
          alt={props.drink.strDrink}
        />
        <p>{props.drink.strDrink}</p>
      </div>
    </Link>
  )
}

export default Thumbnail
