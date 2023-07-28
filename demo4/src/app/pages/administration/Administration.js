import React from "react";
import {Route, Switch, Link } from 'react-router-dom';


import Groupes from "./Groupes";
 export function Administration(){
    return (
      <div className="administration">
      <nav>
        <ul>
        
          <li>
            <Link to="/administration/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/administration/Groupes">Groupes</Link>
          </li>
        </ul>
      </nav>

    </div>
  );

}export default Administration;
