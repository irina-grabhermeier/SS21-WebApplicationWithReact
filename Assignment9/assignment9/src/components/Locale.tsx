
type Props = {
    onDropDownChange: (optionValue: string) => void
}

const Locale = ({ onDropDownChange }: Props) => {

    return (
        <select onChange={(event) => onDropDownChange(event.target.value)} defaultValue='de'>
            <option value='de'>de</option>
            <option value='en'>en</option>
        </select>);
}

export default Locale;