// Interfaces
import { IDrinkData } from '../interfaces';

interface IProps {
    drinkData: IDrinkData
}

const ContentCard = (props: IProps) => {
    return <article>
        <img src={props.drinkData.imgThumbnail} alt="Cocktail" />

        {/* Header Section */}
        <section>
            <h2>{props.drinkData.drinkName}</h2>
            <h3>{props.drinkData.category}</h3>
        </section>

        {/* Ingredients Section */}
        <section>
            <ul>
                <li>{props.drinkData.ingredients[0]}</li>
                <li>{props.drinkData.ingredients[1]}</li>
                <li>{props.drinkData.ingredients[2]}</li>
            </ul>
        </section>

        {/* Instructions Section */}
        <section>
            <p>{props.drinkData.instructions}</p>
        </section>
    </article>
}

export default ContentCard;