import { FormattedMessage, IntlProvider } from 'react-intl';

type Props = {
    locale: string;
}

const Text = ({ locale }: Props) => {

    const messages = {
        hello_person: 'Hello {name}',
    };
    return (
        <IntlProvider locale={locale} messages={messages}>
            <FormattedMessage id="hello_person" values={{ name: 'Du' }} />
        </IntlProvider>
    );
}

export default Text;