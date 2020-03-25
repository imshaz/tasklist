import React from 'react'
import {
    withRouter, Link
  } from "react-router-dom";
import App from '../App';


function Layout(props) {
  const {pathname} =props.history.location
    return (
        <div>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
             
            <li>
            {pathname!=="/add"?<Link to="/add">+</Link>:null}
            </li>
          </ul>
        </nav>

        <App/>
            
        </div>
    )
}


export default withRouter(Layout)