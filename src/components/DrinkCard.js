export function getIngredients(drinkInfo) {
  //start at first ingredient
  let counter = 1
  let measurements = {}

  // loop through drinkInfo object and if key is equal to an ingredient, save ingredient and amount needed for drink in the above object
  for (const item in drinkInfo) {
    if (item === `strIngredient${counter}` && drinkInfo[item] !== null) {
      measurements[drinkInfo[`strIngredient${counter}`]] =
        drinkInfo[`strMeasure${counter}`]
      counter++
    }
  }

  return measurements
}

function DrinkCard(props) {
  let measurements = getIngredients(props.drinkInfo)

  return (
    <div className="drink">
      <img
        className="drink__image"
        src={props.drinkInfo.strDrinkThumb}
        alt={props.drinkInfo.strDrink}
      />
      <h1>{props.drinkInfo.strDrink}</h1>
      <p>
        <b>Type:</b> {props.drinkInfo.strAlcoholic}
      </p>
      <p>
        <b>Category:</b> {props.drinkInfo.strCategory}
      </p>
      <p>
        <b>Glass: </b>
        {props.drinkInfo.strGlass}
      </p>
      <p>
        <b>Ingredients: </b>
        {/* map through object of ingredients and measurements */}
        {Object.keys(measurements).map((ingredient) => {
          if (measurements[ingredient] === 'Garnish with') {
            return (
              <li key={ingredient}>
                {measurements[ingredient]} {ingredient}{' '}
              </li>
            )
          } else {
            return (
              <li key={ingredient}>
                {ingredient} {measurements[ingredient]}
              </li>
            )
          }
        })}
      </p>
      <p>
        <b>Instructions:</b> {props.drinkInfo.strInstructions}
      </p>
    </div>
  )
}

export default DrinkCard
