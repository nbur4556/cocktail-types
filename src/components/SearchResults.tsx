// Components
import SearchResultItem from './SearchResultItem';

// Interfaces
import { IDrinkResponse } from '../interfaces';
interface IResultsProps {
    resultData: Array<IDrinkResponse>
    handleSelectResult: (i: number) => void
}

const SearchResults: React.FC<IResultsProps> = (props) => {
    const getMappedResult = (result: IDrinkResponse, index: number) => {
        console.log(result);
        return <SearchResultItem
            key={index} index={index} result={result} handleSelectResult={props.handleSelectResult}
        />
    }

    return <section className="py-3 px-52">
        <ol>
            {(props.resultData) ? props.resultData.map(getMappedResult) : <li>No Results Found</li>}
        </ol>
    </section>
}

export default SearchResults;