// Components
import SearchResultItem from './SearchResultItem';

// Interfaces
interface IResultsProps {
    resultData: Array<string>
}

const SearchResults: React.FC<IResultsProps> = (props) => {
    return <section>
        <ol>
            {props.resultData.map((result: string, index: number) => {
                return <SearchResultItem key={index} itemText={result} />
            })}
        </ol>
    </section>
}

export default SearchResults;