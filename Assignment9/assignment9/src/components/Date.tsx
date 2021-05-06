import React, { useState } from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';

type Props = {
    locale: string;
}

const DateCom = ({ locale }: Props) => {

    const [date, setDate] = useState(new Date())
    return (
        <IntlProvider locale={locale}>

            <h2>Formatted Date</h2>
            <input type='date' onChange={(event) => setDate(new Date(event.target.value))} />
            <br />
            <FormattedDate value={date} />

        </IntlProvider>
    );
}

export default DateCom;