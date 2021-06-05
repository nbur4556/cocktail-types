// Components
import SearchSliderButton from './SearchSliderButton';

// Interfaces
interface ISliderProps {
    setRandomCocktail: () => void,
    setSearchedCocktail: () => void
}

const SearchSlider: React.FC<ISliderProps> = (props) => {
    return <section>
        <SearchSliderButton onClick={props.setSearchedCocktail}>Search</SearchSliderButton>
        <SearchSliderButton onClick={props.setRandomCocktail}>Random</SearchSliderButton>
    </section>
}

export default SearchSlider;