import logo from './logo.svg';
import './App.css';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import TrendyPage from './components/TrendyPage';


function SearchIndex() {
  return <SearchPage />
}

function TrendyIndex() {
  return <TrendyPage />
}



function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/Search'>Search</Link>
              </li>
              <li>
                <Link to='/Trendy'>Trendy</Link>
              </li>
            </ul>
          </nav>
          <Route path='/Search' ref={SearchIndex} />
          <Route path='/Trendy' ref={TrendyIndex} />
        </div>
      </Router>

    </div>
  );
}

export default App;
