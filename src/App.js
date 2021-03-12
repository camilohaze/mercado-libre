import './App.css';

import Search from './pages/Search/Search';
import Result from './pages/Result/Result';
import ProductDetail from './pages/ProductDetail/ProductDetail'

import Topbar from './components/Topbar/Topbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className={'App__content'}>
        <div className={'container'}>
          <Switch>
            <Route exact path="/items">
              <Result />
            </Route>
            <Route exact path="/items/:id">
              <ProductDetail />
            </Route>
            <Route exact path="/">
              <Search />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
