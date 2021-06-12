import { ChangeEvent } from 'react';

// Interfaces
import { ISearchParams } from './SearchSlider';
interface ISearchBarProps {
    searchParams: ISearchParams,
    setSearchParams: (searchParams: ISearchParams) => void,
    handleSearch: () => void
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
    const handleSetSearchTerm = (e: ChangeEvent<HTMLInputElement>): void => props.setSearchParams(
        { ...props.searchParams, searchTerm: e.currentTarget.value }
    );

    return <section>
        <input className="p-1 rounded" type="text" value={props.searchParams.searchTerm} onChange={handleSetSearchTerm} />
        <button className="bg-gray-500 py-1 px-3 mx-3 rounded" onClick={props.handleSearch}>Search</button>
    </section>
}

export default SearchBar