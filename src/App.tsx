import { useState, useEffect } from 'react';

// Components
import ContentCard from './components/ContentCard';
import SearchSlider from './components/SearchSlider';

// Utils
import formatDrinkData from './utils/formatDrinkData';
import { getRandomCocktail } from './utils/cocktailDbConnection';

// Interfaces
import { IDrinkData } from './interfaces';

const App: React.FC = (): JSX.Element => {

  const [drinkData, setDrinkData] = useState<IDrinkData>();

  const setRandomCocktail = (): void => {
    getRandomCocktail(result => setDrinkData(formatDrinkData(result.data.drinks[0])));
  }

  useEffect(setRandomCocktail, []);

  return <main>
    {(drinkData) ? <ContentCard drinkData={drinkData} /> : null}
    <SearchSlider setRandomCocktail={setRandomCocktail} />
  </main>
}

export default App;
