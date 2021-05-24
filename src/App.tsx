import { useState, useEffect } from 'react';

// Components
import ContentCard from './components/ContentCard';

// Utils
import formatDrinkData, { IDrinkData } from './utils/formatDrinkData';
import { getRandomCocktail } from './utils/cocktailDbConnection';

const App: React.FC = () => {

  const [drinkData, setDrinkData] = useState<IDrinkData>();

  useEffect(() => {
    getRandomCocktail(result => setDrinkData(formatDrinkData(result.data.drinks[0])));
  }, []);

  console.log(drinkData)

  return <main>
    <ContentCard />
  </main>
}

export default App;
