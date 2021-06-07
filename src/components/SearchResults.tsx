// Components
import SearchResultItem from './SearchResultItem';

// Interfaces
import { IDrinkResponse } from '../interfaces';
interface IResultsProps {
    resultData: Array<IDrinkResponse>
    handleSelectResult: (i: number) => void
}

const SearchResults: React.FC<IResultsProps> = (props) => {
    return <section>
        <ol>
            {props.resultData.map((result, index) => {
                return <SearchResultItem
                    key={index}
                    index={index}
                    result={result}
                    handleSelectResult={props.handleSelectResult}
                />
            })}
        </ol>
    </section>
}

export default SearchResults;