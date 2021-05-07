import React, { useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';

type Props = {
    locale: string;
}

const Text = ({ locale }: Props) => {

    const [amount, setAmount] = useState(0);
    const [gender, setGender] = useState('female');

    const messages = {
        hello_world: 'Hello World!',
        hallo_welt: 'Hallo Welt!',

        pears: "There are {amount} {numerus} in {pronoun} garden.",
        birnen: "Es gibt {amount} {numerus} in {pronoun} Garten."

    };

    const switch_pronoun = (): string => {
        switch (locale) {
            case 'de': return (gender === 'female') ? 'ihrem' : 'seinem';
            default: return (gender === 'female') ? 'her' : 'his';
        }
    }

    const switch_amount = (): string => {
        if (amount > 0) {
            return amount.toString();
        }
        switch (locale) {
            case 'de': return 'keine';
            default: return 'no';
        }
    }

    const switch_numerus = (): string => {
        switch (locale) {
            case 'de': return (amount === 1) ? 'Birne' : 'Birnen';
            default: return (amount === 1) ? 'pear' : 'pears';
        }
    }

    return (
        <IntlProvider locale={locale} messages={messages}>
            <input type='number' onChange={(event) => setAmount(parseInt(event.target.value))} />
            <select defaultValue='female' onChange={(event) => setGender(event.target.value)}>
                <option value='female'>&#9792;</option>
                <option value='male'>&#9794;</option>
            </select>
            <br />
            <FormattedMessage id={locale === 'de' ? 'hallo_welt' : 'hello_world'} />
            <br />
            <FormattedMessage id={locale === 'de' ? 'birnen' : 'pears'}
                values={{
                    amount: switch_amount(),
                    pronoun: switch_pronoun(),
                    numerus: switch_numerus()
                }} />
        </IntlProvider>
    );
}

export default Text;