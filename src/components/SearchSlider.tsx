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

interface IDisplayUi {
    search: boolean,
    browse: boolean
}

export interface ISearchParams {
    searchBy: "name" | "ingredient" | "letter",
    searchTerm: string
}

const SearchSlider: React.FC<ISliderProps> = (props) => {
    const { setRandomCocktail, setSearchedCocktail }: ISliderProps = props;
    const [controlsUi, setControlsUi] = useState<IDisplayUi>({ search: false, browse: false });
    const [searchParams, setSearchParams] = useState<ISearchParams>({ searchBy: 'name', searchTerm: '' });
    const [resultData, setResultData] = useState<Array<IDrinkResponse>>([]);

    // Get results of all cocktails by search term
    const handleSearch = (): void => {
        searchCocktail(searchParams.searchBy, searchParams.searchTerm, result => {
            setResultData(result.data.drinks);
        });
    }

    const handleRandom = (): void => {
        setResultData([]);
        setControlsUi({ browse: false, search: false });
        setRandomCocktail();
    }

    const toggleSearchControlsUi = (): void => {
        setResultData([]);
        setControlsUi({ browse: false, search: !controlsUi.search });
    }
    const toggleBrowseControlsUi = (): void => {
        setResultData([]);
        setControlsUi({ search: false, browse: !controlsUi.browse });
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
            <SearchSliderButton onClick={toggleSearchControlsUi}>Search</SearchSliderButton>
            <SearchSliderButton onClick={handleRandom}>Random</SearchSliderButton>
            <SearchSliderButton onClick={toggleBrowseControlsUi}>Browse</SearchSliderButton>
        </section>

        {/* Controls */}
        {(controlsUi.search)
            ? <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} handleSearch={handleSearch} />
            : null}
        {(controlsUi.browse)
            ? <SearchLetterList browseByLetter={browseByLetter} />
            : null}

        {/* Results */}
        {(resultData !== undefined) ? <SearchResults resultData={resultData} handleSelectResult={handleSelectResult} /> : null}
    </section>
}

export default SearchSlider;