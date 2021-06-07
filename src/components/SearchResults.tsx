interface IResultsProps {
    resultData: Array<string>
}

const SearchResults: React.FC<IResultsProps> = (props) => {
    return <section>
        <ol>
            {props.resultData.map((result: string, index: number) => {
                return <li>{result}</li>
            })}
        </ol>
    </section>
}

export default SearchResults;