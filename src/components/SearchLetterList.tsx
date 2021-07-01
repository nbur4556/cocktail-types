const alphabetLetters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

interface ILetterList {
    browseByLetter: (e: React.MouseEvent) => void
}

const SearchLetterList: React.FC<ILetterList> = (props) => {
    return <ul className="flex flex-wrap justify-center 2xl:gap-12 gap-7 p-3">
        {alphabetLetters.map((letter: string, index: number): JSX.Element => {
            return <li key={index} className="font-semibold cursor-pointer" onClick={props.browseByLetter} data-letter={letter} >{letter}</li>
        })}
    </ul>
}

export default SearchLetterList;