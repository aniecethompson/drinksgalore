import { getIngredients } from './DrinkCard'

const mockDrinkResponse = {
  idDrink: '13847',
  strDrink: 'Jackhammer',
  strDrinkAlternate: null,
  strTags: null,
  strVideo: null,
  strCategory: 'Ordinary Drink',
  strIBA: null,
  strAlcoholic: 'Alcoholic',
  strGlass: 'Collins Glass',
  strInstructions: 'Serve over ice- Warning,Deadly!',
  strInstructionsES: null,
  strInstructionsDE: 'Servieren Sie über Eis. Warnung, tödlich!',
  strInstructionsFR: null,
  strInstructionsIT: 'Servire con ghiaccio - Attenzione, mortale!',
  'strInstructionsZH-HANS': null,
  'strInstructionsZH-HANT': null,
  strDrinkThumb:
    'https://www.thecocktaildb.com/images/media/drink/9von5j1504388896.jpg',
  strIngredient1: 'Jack Daniels',
  strIngredient2: 'Amaretto',
  strIngredient3: null,
  strIngredient4: null,
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: '1 oz ',
  strMeasure2: '1 oz ',
  strMeasure3: null,
  strMeasure4: null,
  strMeasure5: null,
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
  strImageSource: null,
  strImageAttribution: null,
  strCreativeCommonsConfirmed: 'No',
  dateModified: '2017-09-02 22:48:16',
}

describe('getIngredients', () => {
  it('turns drink info into a more workable form', () => {
    expect(getIngredients(mockDrinkResponse)).toMatchInlineSnapshot(`
      Object {
        "Amaretto": "1 oz ",
        "Jack Daniels": "1 oz ",
      }
    `)
  })
})
