import React, {useState} from 'react';
import { FormattedDate } from 'react-intl';

export default function Dates() {
    const [date, setDate] = useState<string>('');

    return (
        <section>
            <h1>Dates</h1>
            <input
                type="date"
                onChange={(event) => setDate(event.currentTarget.value)}
                value={date}
            />

            <p>
                <FormattedDate value={new Date(date)} />
            </p>
        </section>
    );
}