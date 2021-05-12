import React, { useState } from 'react';
import { FormattedNumber } from 'react-intl';

export default function Numbers() {
    const [number, setNumber] = useState<number>(0);

    return (
        <section>
            <h1>Numbers</h1>
            <input
                type="number"
                onChange={(event) => setNumber(parseInt(event.currentTarget.value))}
                value={number}
            />
            <p>
                <FormattedNumber value={number} />
            </p>
            <p>
                <FormattedNumber style="unit" unit="kilobyte" value={number} />
            </p>
            <p>
                <FormattedNumber style="currency" currency="EUR" value={number} />
            </p>
            <p>
                <FormattedNumber style="currency" currency="EUR" minimumFractionDigits={5} value={number} />
            </p>
        </section>
    );
}