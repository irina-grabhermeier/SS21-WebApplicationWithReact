import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import styled from 'styled-components';
import Locale from './components/Locale';
import Numbers from './components/Numbers';
import Date from './components/Date';
import Text from './components/Text';

const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-color: #333;
    padding: 0px;
    background-color: lightblue;
    color: black;
    font-weight: bold;
`;

const StyledLi = styled.li`
    float: left;
    height: 100%;
    padding: 10px;
    &:hover {
        background-color: pink;
    };
`;


function App() {

  const [locale, setLocale] = useState('de');

  const onDropDownChange = (selected: string) => {
    setLocale(selected);
  }

  return (
    <div className="App">

      <Router>
        <div>
          <nav>
            <StyledUl>
              <StyledLi>
                <NavLink to='/numbers' activeStyle={{
                  fontWeight: 'bold',
                  background: 'pink', // red
                }}>Numbers</NavLink>
              </StyledLi>
              <StyledLi>
                <NavLink to='/date' activeStyle={{
                  fontWeight: 'bold',
                  background: 'pink', // red
                }}>Date</NavLink>
              </StyledLi>
              <StyledLi>
                <NavLink to='/text' activeStyle={{
                  fontWeight: 'bold',
                  background: 'pink', // red
                }}>Text</NavLink>
              </StyledLi>
              <StyledLi>
                <Locale onDropDownChange={onDropDownChange} />
              </StyledLi>
            </StyledUl>
          </nav>

          <Switch>
            <Route exact path="/numbers">
              <Numbers locale={locale} />
            </Route>
            <Route path="/date">
              <Date locale={locale} />
            </Route>
            <Route path="/text">
              <Text locale={locale} />
            </Route>
          </Switch>

        </div>
      </Router>

    </div>
  );
}

export default App;
