import { useState } from 'react';

// Components
import SearchSliderButton from './SearchSliderButton';
import SearchBar from './SearchBar';

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
    const [searchParams, setSearchParams] = useState<ISearchParams>({ searchBy: 'name', searchTerm: 'brandy' })

    const handleSearch = (): void => {
        searchCocktail(searchParams.searchBy, searchParams.searchTerm, result => {
            props.setSearchedCocktail(result.data.drinks[0]);
        });
    }

    return <section className="bg-yellow-500 p-5 rounded-3xl rounded-b-none">
        <section className="flex flex-row justify-evenly">
            <SearchSliderButton onClick={handleSearch}>Search</SearchSliderButton>
            <SearchSliderButton onClick={props.setRandomCocktail}>Random</SearchSliderButton>
            <SearchSliderButton onClick={() => alert('Browse')}>Browse</SearchSliderButton>
        </section>

        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
    </section>
}

export default SearchSlider;