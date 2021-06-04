import { useState, useEffect } from 'react';

// Components
import ContentCard from './components/ContentCard';

// Utils
import formatDrinkData from './utils/formatDrinkData';
import { getRandomCocktail } from './utils/cocktailDbConnection';

// Interfaces
import { IDrinkData } from './interfaces';

const App: React.FC = (): JSX.Element => {

  const [drinkData, setDrinkData] = useState<IDrinkData>();

  useEffect(() => {
    getRandomCocktail(result => setDrinkData(formatDrinkData(result.data.drinks[0])));
  }, []);

  return <main>
    {(drinkData) ? <ContentCard drinkData={drinkData} /> : null}
  </main>
}

export default App;
