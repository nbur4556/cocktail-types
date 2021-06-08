import { useState } from 'react';

// Components
import SearchSliderButton from './SearchSliderButton';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchLetterList from './SearchLetterList';

// Utils
import { searchCocktail } from '../utils/cocktailDbConnection';

// Interfaces
import { IDrinkResponse } from '../interfaces';
interface ISliderProps {
    setRandomCocktail: () => void,
    setSearchedCocktail: (drink: IDrinkResponse) => void
}

export interface ISearchParams {
    searchBy: "name" | "ingredient" | "letter",
    searchTerm: string
}

const SearchSlider: React.FC<ISliderProps> = (props) => {
    const { setRandomCocktail, setSearchedCocktail }: ISliderProps = props;
    const [searchParams, setSearchParams] = useState<ISearchParams>({ searchBy: 'name', searchTerm: '' });
    const [resultData, setResultData] = useState<Array<IDrinkResponse>>();

    // Get results of all cocktails by search term
    const handleSearch = (): void => {
        searchCocktail(searchParams.searchBy, searchParams.searchTerm, result => {
            setResultData(result.data.drinks);
        });
    }

    // Get results of all cocktails by letter
    const browseByLetter = (e: React.MouseEvent): void => {
        const setLetter: string | null = e.currentTarget.getAttribute('data-letter');

        if (!setLetter) return;

        searchCocktail('letter', setLetter, result => {
            setResultData(result.data.drinks);
        });
    }

    // Select a cocktail from search results
    const handleSelectResult = (i: number): void => {
        (resultData)
            ? setSearchedCocktail(resultData[i])
            : console.log('Error: no result data');
    }

    return <section className="bg-yellow-500 p-5 rounded-3xl rounded-b-none">
        {/* Buttons */}
        <section className="flex flex-row justify-evenly">
            <SearchSliderButton onClick={handleSearch}>Search</SearchSliderButton>
            <SearchSliderButton onClick={setRandomCocktail}>Random</SearchSliderButton>
            <SearchSliderButton onClick={() => console.log('browse')}>Browse</SearchSliderButton>
        </section>

        {/* Controls */}
        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <SearchLetterList browseByLetter={browseByLetter} />

        {/* Results */}
        {(resultData !== undefined) ? <SearchResults resultData={resultData} handleSelectResult={handleSelectResult} /> : null}
    </section>
}

export default SearchSlider;