//Interfaces
interface ISliderButtonProps {
    onClick: () => void,
    children: React.ReactNode
}

const SearchSliderButton: React.FC<ISliderButtonProps> = (props) => {
    return <button className="text-xl font-semibold p-3" onClick={props.onClick}>{props.children}</button>
}

export default SearchSliderButton;