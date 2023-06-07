import axios, { AxiosResponse } from "axios";

const baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1';
const apiKey: string | undefined = import.meta.env.VITE_COCKTAILDB_API_KEY;

//Interfaces
interface ISearchParams {
    name: string,
    ingredient: string,
    letter: string
}

// Return a random cocktail
const getRandomCocktail = (cb: (result: AxiosResponse) => void): void => {
    axios.get(`${baseUrl}/${apiKey}/random.php`)
        .then((result: AxiosResponse) => cb(result))
        .catch(err => console.log(err));
}

// Search Cocktails By Name (s), Ingredient (i), or Letter (f)
const searchCocktail = (
    iSearch: "name" | "ingredient" | "letter",
    searchTerm: string,
    cb: (result: AxiosResponse) => void
): void => {
    const searchParams: ISearchParams = { name: 's', ingredient: 'i', letter: 'f' }
    axios.get(`${baseUrl}/${apiKey}/search.php?${searchParams[iSearch]}=${searchTerm}`)
        .then((result: AxiosResponse) => cb(result))
        .catch(err => console.log(err));
}

const searchCocktailByIngredient = (searchTerm: string, cb: (result: AxiosResponse) => void) => {
    axios.get(`${baseUrl}/${apiKey}/filter.php?i=${searchTerm}`)
        .then((result: AxiosResponse) => cb(result))
        .catch(err => console.log(err));
}

const searchCocktailByCategory = (searchTerm: string, cb: (result: AxiosResponse) => void) => {
    axios.get(`${baseUrl}/${apiKey}/filter.php?c=${searchTerm}`)
        .then((result: AxiosResponse) => cb(result))
        .catch(err => console.log(err));
}

export { getRandomCocktail, searchCocktail, searchCocktailByIngredient, searchCocktailByCategory };