// Interfaces
import { IDrinkData, IDrinkResponse } from '../interfaces';

const formatDrinkData = (drinkResponse: IDrinkResponse): IDrinkData => {

    const ingredients: Array<string | undefined> = [];
    const measurements: Array<string | undefined> = [];

    for (let i: number = 1; i <= 15; i++) {
        ingredients.push(drinkResponse['strIngredient' + i]);
        measurements.push(drinkResponse['strMeasure' + i]);
    }

    return {
        id: drinkResponse.idDrink,
        drinkName: drinkResponse.strDrink,
        alcoholic: drinkResponse.strAlcoholic,
        category: drinkResponse.strCategory,
        glass: drinkResponse.strGlass,
        imgThumbnail: drinkResponse.strDrinkThumb,
        ingredients: ingredients,
        measurements: measurements,
        instructions: drinkResponse.strInstructions
    }

}

export default formatDrinkData;