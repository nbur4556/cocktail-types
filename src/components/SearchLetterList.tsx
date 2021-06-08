const alphabetLetters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

interface ILetterList {
    setBrowseLetter: (letter: string) => void
}

const SearchLetterList: React.FC<ILetterList> = (props) => {
    const handleBrowseLetter = (e: React.MouseEvent): void => {
        const setLetter: string | null = e.currentTarget.getAttribute('data-letter');

        if (setLetter) {
            props.setBrowseLetter(setLetter);
        }
    }

    return <ul className="flex gap-5">
        {alphabetLetters.map((letter: string, index: number): JSX.Element => {
            return <li key={index} onClick={handleBrowseLetter} data-letter={letter} >{letter}</li>
        })}
    </ul>
}

export default SearchLetterList;