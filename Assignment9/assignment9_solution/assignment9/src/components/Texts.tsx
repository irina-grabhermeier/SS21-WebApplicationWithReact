import React, {useState} from 'react';
import { FormattedMessage } from 'react-intl';

export default function Texts() {
    const [number, setNumber] = useState<number>(0);
    const [gender, setGender] = useState<string>('male');

    return (
        <section>
            <h1>Texts</h1>
            <input
                type="number"
                onChange={(event) => setNumber(parseInt(event.currentTarget.value))}
                value={number}
            />
            <select onChange={(event) => setGender(event.currentTarget. value)} value={gender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <p>
                <FormattedMessage id="party" values={{number, gender}} />
            </p>
        </section>
    );
}