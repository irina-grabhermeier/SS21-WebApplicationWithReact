import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import {IntlProvider} from 'react-intl';
import Dates from './Dates';
import Navigation from './Navigation';
import Numbers from './Numbers';
import Texts from './Texts';

const messages: Record<string, Record<string, string>> = {
    en: {
        party: 'There {number, plural, =0 {are no persons} =1 {is one person} other {are {number} persons}} on {gender, select, male {his} female {her} other {the}} party!',
    },
    de: {
        party: 'Es {number, plural, =0 {sind keine Personen} =1 {ist eine Person} other {sind {number} Personen}} auf {gender, select, male {seiner} female {ihrer} other {der}} Party!',
    },
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function App(): JSX.Element {
    const history = useHistory();
    const query = useQuery();
    const locale = query.get('locale') || 'en';

    function handleLocaleChange(locale: string) {
        history.push({search: '?locale=' + locale});
    }

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <select onChange={(event) => handleLocaleChange(event.currentTarget.value)} value={locale}>
                <option value="en">English</option>
                <option value="de">German</option>
            </select>
            <Navigation />
            <Switch>
                <Route path="/numbers">
                    <Numbers />
                </Route>
                <Route path="/dates">
                    <Dates />
                </Route>
                <Route path="/texts">
                    <Texts />
                </Route>
            </Switch>
        </IntlProvider>
    );
}