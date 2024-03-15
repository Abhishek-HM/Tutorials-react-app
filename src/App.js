import React from "react";
import "./App.css";
import {Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TutorialsList from './component/TutorialsList';
import Tutorial from './component/Tutorial';
import AddTutorials from './component/AddTutorial'

function App(){
  return(
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          EY
        </a>
        <div >
        <div className="navbar-nav mr-auto"  >
          <li className="niv-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="niv-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
            </li>
        </div>
        </div>
      </nav>

      <div className="countainer mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList />} />
          <Route path="/tutorials" element={<TutorialsList />} />
          <Route path="/add" element={<AddTutorials />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>

    </div>
  );
}
export default App;