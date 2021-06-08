// Utils
import formatDrinkData from '../utils/formatDrinkData';

// Interfaces
import { IDrinkData, IDrinkResponse } from '../interfaces';
interface IResultItemProps {
    index: number
    result: IDrinkResponse
    handleSelectResult: (i: number) => void
}

const SearchResultItem: React.FC<IResultItemProps> = (props) => {
    const { index, result, handleSelectResult }: IResultItemProps = props;
    const drinkItem: IDrinkData = formatDrinkData(result);

    const handleOnClick = (): void => handleSelectResult(index);

    return <li onClick={handleOnClick}>{drinkItem.drinkName}</li>
}

export default SearchResultItem;