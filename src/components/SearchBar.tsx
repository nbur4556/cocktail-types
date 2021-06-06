import { ChangeEvent } from 'react';

// Interfaces
import { ISearchParams } from './SearchSlider';
interface ISearchBarProps {
    searchParams: ISearchParams,
    setSearchParams: (searchParams: ISearchParams) => void
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
    const handleSetSearchTerm = (e: ChangeEvent<HTMLInputElement>): void => props.setSearchParams(
        { ...props.searchParams, searchTerm: e.currentTarget.value }
    );

    return <section>
        <input type="text" value={props.searchParams.searchTerm} onChange={handleSetSearchTerm} />
    </section>
}

export default SearchBar