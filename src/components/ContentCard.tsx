// Components
import ContentCardSection from './ContentCardSection';
import IngredientListItem from './IngredientListItem';

// Interfaces
import { IDrinkData } from '../interfaces';

interface IProps {
    drinkData: IDrinkData
}

const ContentCard: React.FC<IProps> = (props) => {
    return <article className="bg-gray-500 text-white rounded-md m-5 p-5">
        <img src={props.drinkData.imgThumbnail} alt="Cocktail" />

        {/* Header Section */}
        <ContentCardSection>
            <h2>{props.drinkData.drinkName}</h2>
            <h3>{props.drinkData.category}</h3>
        </ContentCardSection>

        {/* Ingredients Section */}
        <ContentCardSection>
            <ul className="flex flex-row flex-wrap justify-between">
                {props.drinkData.ingredients.map((ingredient: string | undefined, index: number): JSX.Element => {
                    return (
                        <IngredientListItem
                            key={index}
                            ingredient={ingredient}
                            measurement={props.drinkData.measurements[index]} />
                    );
                })}
            </ul>
        </ContentCardSection>

        {/* Instructions Section */}
        <ContentCardSection>
            <p>{props.drinkData.instructions}</p>
        </ContentCardSection>
    </article>
}

export default ContentCard;