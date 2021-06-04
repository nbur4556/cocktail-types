// Interfaces

interface IDrinkResponse {
    idDrink: string,
    strDrink: string,
    strAlcoholic: string,
    strGlass: string,
    strInstructions: string,
    strDrinkThumb: string,
    strIngredient1: string,
    strIngredient2?: string,
    strIngredient3?: string,
    strIngredient4?: string,
    strIngredient5?: string,
    strIngredient6?: string,
    strIngredient7?: string,
    strIngredient8?: string,
    strIngredient9?: string,
    strIngredient10?: string,
    strIngredient11?: string,
    strIngredient12?: string,
    strIngredient13?: string,
    strIngredient14?: string,
    strIngredient15?: string,
    strMeasure1: string,
    strMeasure2?: string,
    strMeasure3?: string,
    strMeasure4?: string,
    strMeasure5?: string,
    strMeasure6?: string,
    strMeasure7?: string,
    strMeasure8?: string,
    strMeasure9?: string,
    strMeasure10?: string,
    strMeasure11?: string,
    strMeasure12?: string,
    strMeasure13?: string,
    strMeasure14?: string,
    strMeasure15?: string,
    [key: string]: any
}

export interface IDrinkData {
    id: string,
    drinkName: string,
    alcoholic: string,
    category: string,
    glass: string,
    imgThumbnail: string,
    ingredients: Array<string | undefined>,
    measurements: Array<string | undefined>,
    instructions: string
}

const parseDrinkData = (drinkResponse: IDrinkResponse): IDrinkData => {

    const ingredients: Array<string | undefined> = [drinkResponse.strIngredient1, drinkResponse.strIngredient2, drinkResponse.strIngredient3];
    const measurements: Array<string | undefined> = [drinkResponse.strMeasure1, drinkResponse.strMeasure2, drinkResponse.strMeasure3];

    return {
        id: drinkResponse.idDrink,
        drinkName: drinkResponse.strDrink,
        alcoholic: drinkResponse.strAlcoholic,
        category: drinkResponse.strCategory,
        glass: drinkResponse.strGlass,
        imgThumbnail: drinkResponse.strDrinkThumb,
        ingredients: ingredients,
        measurements: measurements,
        instructions: drinkResponse.strInsrucstions
    }

}

export default parseDrinkData;