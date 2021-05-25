// Interfaces
interface IProps {
    ingredient: string | undefined
}

const IngredientListItem: React.FC<IProps> = (props): JSX.Element => {
    return <li>
        {props.ingredient}
    </li>
}

export default IngredientListItem;