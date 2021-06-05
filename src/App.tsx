import { useState, useEffect } from 'react';

// Components
import ContentCard from './components/ContentCard';
import SearchSlider from './components/SearchSlider';

// Utils
import formatDrinkData from './utils/formatDrinkData';
import { getRandomCocktail, searchCocktail } from './utils/cocktailDbConnection';

// Interfaces
import { IDrinkData } from './interfaces';

const App: React.FC = (): JSX.Element => {

  const [drinkData, setDrinkData] = useState<IDrinkData>();

  // Set a single random cocktail as drink data state
  const setRandomCocktail = (): void => {
    getRandomCocktail(result => setDrinkData(formatDrinkData(result.data.drinks[0])));
  }

  const setSearchedCocktail = (): void => {
    searchCocktail('name', 'brandy', result => setDrinkData(formatDrinkData(result.data.drinks[0])));
  }

  useEffect(setRandomCocktail, []);

  return <main>
    {(drinkData) ? <ContentCard drinkData={drinkData} /> : null}
    <SearchSlider setRandomCocktail={setRandomCocktail} setSearchedCocktail={setSearchedCocktail} />
  </main>
}

export default App;
