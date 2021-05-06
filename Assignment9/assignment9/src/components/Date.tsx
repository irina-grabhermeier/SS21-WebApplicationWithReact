
type Props = {
    locale: string;
}

const Date = ({ locale }: Props) => {
    return (
        <div>
            <p>date</p>
            <p>{locale}</p>
        </div>
    )
}

export default Date;