import React from 'react';
import './App.css';
import TaskList from './component/TaskList';
import TaskAdd from './component/TaskAdd';
import {
  Switch,
  Route,
} from "react-router-dom";
function App(props) {
  return (
    <div className="App">     
      <div>
        <Switch>
          <Route path="/add">
            <TaskAdd />
          </Route>
          <Route path="/">
            <TaskList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
