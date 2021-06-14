// Components
import ContentCardSection from './ContentCardSection';
import ContentCardImage from './ContentCardImage';
import IngredientListItem from './IngredientListItem';

// Interfaces
import { IDrinkData } from '../interfaces';

interface ICardProps {
    drinkData: IDrinkData
}

const ContentCard: React.FC<ICardProps> = (props): JSX.Element => {
    return <article className="bg-gray-500 text-white rounded-md w-1/3 my-5 mx-auto">
        <ContentCardImage source={props.drinkData.imgThumbnail} />

        <section className="h-80 rounded overflow-auto">
            {/* Header Section */}
            <ContentCardSection>
                <h2>{props.drinkData.drinkName}</h2>
                <h3 className="text-yellow-500">{props.drinkData.category}</h3>
            </ContentCardSection>

            {/* Ingredients Section */}
            <ContentCardSection >
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
        </section>
    </article>
}

export default ContentCard;