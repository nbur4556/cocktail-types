import { useState, useEffect } from 'react';

// Components
import ContentCard from './components/ContentCard';

// Utils
import { getRandomCocktail } from './utils/cocktailDbConnection';

const App: React.FC = () => {

  useEffect(() => {
    getRandomCocktail(result => {
      console.log(result);
    });
  });

  return <main>
    <ContentCard />
  </main>
}

export default App;
