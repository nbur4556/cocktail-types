// Interfaces
interface IIngredientProp {
    ingredient?: string,
    measurement?: string
}

const IngredientListItem: React.FC<IIngredientProp> = (props): JSX.Element => {
    const { ingredient, measurement }: IIngredientProp = props;

    return <li className="w-full md:w-3/6">
        {(ingredient) ? <span>{ingredient}</span> : null}
        {(measurement) ? <span>{` (${measurement})`}</span> : null}
    </li>
}

export default IngredientListItem;