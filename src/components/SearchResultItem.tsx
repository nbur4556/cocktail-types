// Interfaces
interface IResultItemProps {
    itemText: string
}

const SearchResultItem: React.FC<IResultItemProps> = (props) => {
    return <li>{props.itemText}</li>
}

export default SearchResultItem;