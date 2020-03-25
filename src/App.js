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
function App(props) {
  console.log('app.js', props)
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
    {/* </Router> */}
    </div>
  );
}

export default App;
