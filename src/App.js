import React from 'react';
import './App.css';
import TaskList from './component/TaskList';
import TaskAdd from './component/TaskAdd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">+</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add">
            <TaskAdd />
          </Route>
          <Route path="/">
            <TaskList />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
