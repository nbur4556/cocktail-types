// Interfaces
interface ISliderProps {
    setRandomCocktail: () => void
}

const SearchSlider: React.FC<ISliderProps> = (props) => {
    return <section>
        <button className="bg-yellow-500" onClick={props.setRandomCocktail} >Get Random Drink</button>
    </section>
}

export default SearchSlider;