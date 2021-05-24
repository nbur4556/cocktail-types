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