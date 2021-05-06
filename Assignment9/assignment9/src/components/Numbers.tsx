import { FormattedNumber, IntlProvider } from 'react-intl';

type Props = {
    locale: string;
}

const Numbers = ({ locale }: Props) => {
    return (
        <IntlProvider locale={locale}>
            <FormattedNumber value={1000.95} />
            <br />
            <FormattedNumber style="unit" unit="kilobyte" value={1000.95} />
            <br />
            <FormattedNumber currency="EUR" style="currency" value={1000.95} />
            <br />
            <FormattedNumber
                currency="EUR"
                minimumFractionDigits={5}
                style="currency"
                value={1000.95}
            />
        </IntlProvider>
    );
}

export default Numbers;