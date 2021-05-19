import axios from "axios";

const baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1';
const apiKey: string | undefined = process.env.REACT_APP_COCKTAILDB_API_KEY;

interface Drink {
    [key: string]: string
}

// Return a random cocktail
const getRandomCocktail = (cb: (result: Drink) => void) => {
    axios.get(`${baseUrl}/${apiKey}/random.php`)
        .then(result => cb(result.data.drinks))
        .catch(err => console.log(err));
}

export { getRandomCocktail };