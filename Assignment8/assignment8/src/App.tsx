import React, { useEffect } from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import TrendyPage from './components/TrendyPage';
import { observer, useLocalObservable } from 'mobx-react';
import Store from './components/Store';
import { autorun } from 'mobx';
import styled from 'styled-components';

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

  const createStore = (): Store => {
    return new Store();
  }

  const store = useLocalObservable(createStore);

  useEffect(() => {
    return (): void => store.destroy();
  }, []);

  const disposer = autorun(() => {
    // This method can be used to automatically send a request in a store when page changes.
    console.log(store.trendyGifs, store.searchGifs);
  })

  return (
    <div className="App">

      <Router>
        <div>

          <nav>
            <StyledUl>
              <StyledLi>
                <NavLink to='/Search' activeStyle={{
                  fontWeight: 'bold',
                  background: 'pink', // red
                }}>Search</NavLink>
              </StyledLi>
              <StyledLi>
                <NavLink to='/Trendy' activeStyle={{
                  fontWeight: 'bold',
                  background: 'pink', // red
                }}>Trendy</NavLink>
              </StyledLi>
            </StyledUl>
          </nav>

          <Switch>
            <Route exact path="/Search">
              <SearchPage store={store} />
            </Route>
            <Route path="/Trendy">
              <TrendyPage store={store} />
            </Route>
          </Switch>

        </div>
      </Router>

    </div>
  );
}

export default observer(App);
