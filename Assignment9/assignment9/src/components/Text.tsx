
type Props = {
    locale: string;
}

const Text = ({ locale }: Props) => {
    return (
        <div>
            <p>text</p>
            <p>{locale}</p>
        </div>
    )
}

export default Text;