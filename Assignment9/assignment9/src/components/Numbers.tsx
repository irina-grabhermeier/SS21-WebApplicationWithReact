
type Props = {
    locale: string;
}

const Numbers = ({ locale }: Props) => {
    return (
        <div>
            <p>num</p>
            <p>{locale}</p>
        </div>
    )
}

export default Numbers;