//Interfaces
interface ISliderButtonProps {
    onClick: () => void,
    children: React.ReactNode
}

const SearchSliderButton: React.FC<ISliderButtonProps> = (props) => {
    return <button className="bg-yellow-500" onClick={props.onClick}>{props.children}</button>
}

export default SearchSliderButton;