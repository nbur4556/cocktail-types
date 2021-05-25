// Interfaces
interface IIngredientProp {
    ingredient: string | undefined,
    measurement: string | undefined
}

const IngredientListItem: React.FC<IIngredientProp> = (props): JSX.Element => {
    const { ingredient, measurement }: IIngredientProp = props;

    return <li>
        {(ingredient) ? <span>{ingredient}</span> : null}
        {(measurement) ? <span>{` (${measurement})`}</span> : null}
    </li>
}

export default IngredientListItem;