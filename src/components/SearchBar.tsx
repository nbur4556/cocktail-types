import { useState, ChangeEvent } from 'react';

const SearchBar: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>();

    const handleSetSearchInput = (e: ChangeEvent<HTMLInputElement>): void => setSearchInput(e.target.value);

    return <section>
        <input type="text" value={searchInput} onChange={handleSetSearchInput} />
    </section>
}

export default SearchBar