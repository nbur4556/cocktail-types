const alphabetLetters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const SearchLetterList: React.FC = () => {
    return <ul>
        {alphabetLetters.map((letter: string, index: number): JSX.Element => {
            return <li key={index}>{letter}</li>
        })}
    </ul>
}

export default SearchLetterList;