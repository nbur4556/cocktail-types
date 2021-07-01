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
        return <SearchResultItem
            key={index} index={index} result={result} handleSelectResult={props.handleSelectResult}
        />
    }

    return <section className="m-10">
        <ol className="flex flex-wrap justify-center space-between gap-5">
            {(props.resultData) ? props.resultData.map(getMappedResult) : <li>No Results Found</li>}
        </ol>
    </section>
}

export default SearchResults;