// Utils
import formatDrinkData from '../utils/formatDrinkData';

// Interfaces
import { IDrinkData, IDrinkResponse } from '../interfaces';
interface IResultItemProps { result: IDrinkResponse }

const SearchResultItem: React.FC<IResultItemProps> = (props) => {
    const drinkItem: IDrinkData = formatDrinkData(props.result);
    return <li>{drinkItem.drinkName}</li>
}

export default SearchResultItem;