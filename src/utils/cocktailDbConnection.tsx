import axios from "axios";
import { createBuilderStatusReporter } from "typescript";

const baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1';
const apiKey: string | undefined = process.env.REACT_APP_COCKTAILDB_API_KEY;

interface IDrink {
    [key: string]: string
}

// Return a random cocktail
const getRandomCocktail = (cb: (x: IDrink) => void): void => {
    axios.get(`${baseUrl}/${apiKey}/random.php`)
        .then(result => cb(result.data.drinks[0]))
        .catch(err => console.log(err));
}

// Search Cocktails By Name
const searchCocktailByName = (searchTerm: string, cb: (x: IDrink[]) => void): void => {
    axios.get(`${baseUrl}/${apiKey}/search.php?s=${searchTerm}`)
        .then(result => cb(result.data.drinks))
        .catch(err => console.log(err));
}

export { getRandomCocktail, searchCocktailByName };