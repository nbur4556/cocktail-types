import axios from "axios";

const baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1';
const apiKey: string | undefined = process.env.REACT_APP_COCKTAILDB_API_KEY;

interface IDrink {
    [key: string]: string
}

interface ISearchParams {
    name: string,
    ingredient: string,
    letter: string
}

// Return a random cocktail
const getRandomCocktail = (cb: (x: IDrink) => void): void => {
    axios.get(`${baseUrl}/${apiKey}/random.php`)
        .then(result => cb(result.data.drinks[0]))
        .catch(err => console.log(err));
}

// Search Cocktails By Name (s), Ingredient (i), or Letter (f)
const searchCocktail = (
    iSearch: "name" | "ingredient" | "letter",
    searchTerm: string,
    cb: (x: { [key: string]: string }) => void
): void => {
    const searchParams: ISearchParams = { name: 's', ingredient: 'i', letter: 'f' }
    axios.get(`${baseUrl}/${apiKey}/search.php?${searchParams[iSearch]}=${searchTerm}`)
        .then(result => cb(result.data))
        .catch(err => console.log(err));
}

const searchCocktailByIngredient = (searchTerm: string, cb: (x: { [key: string]: string }) => void) => {
    axios.get(`${baseUrl}/${apiKey}/filter.php?i=${searchTerm}`)
        .then(result => cb(result.data))
        .catch(err => console.log(err));
}

export { getRandomCocktail, searchCocktail, searchCocktailByIngredient };