// Components
import SearchResultItem from './SearchResultItem';

// Interfaces
import { IDrinkResponse } from '../interfaces';
interface IResultsProps { resultData: Array<IDrinkResponse> }

const SearchResults: React.FC<IResultsProps> = (props) => {
    return <section>
        <ol>
            {props.resultData.map((result, index) => {
                return <SearchResultItem key={index} result={result} />
            })}
        </ol>
    </section>
}

export default SearchResults;