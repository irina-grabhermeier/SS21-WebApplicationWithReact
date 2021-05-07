import React, { useState } from 'react';
import { FormattedNumber, IntlProvider } from 'react-intl';

type Props = {
    locale: string;
}

const Numbers = ({ locale }: Props) => {

    const [currentValue, setcurrentValue] = useState(0);

    return (
        <IntlProvider locale={locale}>
            <input type='number' onChange={(event) => setcurrentValue(parseInt(event.target.value))} />
            <br />
            <FormattedNumber value={currentValue} />
            <br />
            <FormattedNumber style="unit" unit="kilobyte" value={currentValue} />
            <br />
            <FormattedNumber currency="EUR" style="currency" value={currentValue} />
            <br />
            <FormattedNumber
                currency="EUR"
                minimumFractionDigits={5}
                style="currency"
                value={currentValue}
            />
        </IntlProvider>
    );
}

export default Numbers;