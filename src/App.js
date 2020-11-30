import { Switch, Route, Link } from 'react-router-dom';
import TestRequest from './components/TestRequest'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Kapliff React Lab
        </a>
        <div className="navbar-nav mr-auto">
          <li>
            <Link to={"/request"} className="nav-link">
              Test Request
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={['/request']} component={TestRequest} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
