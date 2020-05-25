import React, { Suspense , lazy } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

// const Home = lazy(() => import('./routes/Home'));
// const Calculator = lazy(() => import('./routes/Calculator'));

import Home from './routes/Home';
import Calculator from './routes/Calculator';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calculator" component={Calculator} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
