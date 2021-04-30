function DrinkCard(props) {
  let measurements = {}

  function getIngredients() {
    let counter = 1

    for (const item in props.drinkInfo) {
      if (
        item === `strIngredient${counter}` &&
        props.drinkInfo[item] !== null
      ) {
        measurements[props.drinkInfo[`strIngredient${counter}`]] =
          props.drinkInfo[`strMeasure${counter}`]
        counter++
      }
    }
  }
  getIngredients()

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
      <h1>{console.log(props.drinkInfo)}</h1>
    </div>
  )
}

export default DrinkCard
//GOALS
// Style this card
// implement search
// add to github
// host on a site
