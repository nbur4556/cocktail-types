import { useState, useEffect } from 'react';
import './scrollbar.css';

// Components
import ContentCard from './components/ContentCard';
import SearchSlider from './components/SearchSlider';

// Utils
import formatDrinkData from './utils/formatDrinkData';
import { getRandomCocktail } from './utils/cocktailDbConnection';

// Interfaces
import { IDrinkData, IDrinkResponse } from './interfaces';

//TODO: configure tailwind styles
const App: React.FC = (): JSX.Element => {
  const [drinkData, setDrinkData] = useState<IDrinkData>();

  // Set a single random cocktail as drink data state
  const setRandomCocktail = (): void => {
    getRandomCocktail(result => setDrinkData(formatDrinkData(result.data.drinks[0])));
  }

  const setSearchedCocktail = (drink: IDrinkResponse): void => {
    setDrinkData(formatDrinkData(drink));
  }

  useEffect(setRandomCocktail, []);

  return <main>
    {(drinkData) ? <ContentCard drinkData={drinkData} /> : null}
    <SearchSlider setRandomCocktail={setRandomCocktail} setSearchedCocktail={setSearchedCocktail} />
  </main>
}

export default App;
