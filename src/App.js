import React from "react";
import "./App.css";
import {Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TutorialsList from './component/TutorialsList';
import Tutorial from './component/Tutorial';
import AddTutorials from './component/AddTutorial'
import Cart from "./component/Cart";

function App(){
  return(
    <div>
       <nav className="navbar navbar-expand navbar-dark bg-dark navbar-nav text-center"> {/* for place in center */}
        <a href="/tutorials" className="navbar-brand">
        </a>
        <div className="text">
          <h2 >Tutorial Data Management</h2>
          </div>
        <div >
        <div className="navbar-nav mr-auto"  >
          <li className="niv-item">
            <Link to={"/tutorials"} className="nav-link">
              <h5>Tutorials List</h5>
            </Link>
          </li>
          <li className="niv-item">
            <Link to={"/add"} className="nav-link">
              <h5>Add Tutorial</h5>
            </Link>
            </li>
            <li className="niv-item">
            <Link to={"/addToCart"} className="nav-link">
              <h5>Add To Cart</h5>
            </Link>
            </li>
            <li className="niv-item">
            <Link to={"/cart"} className="nav-link">
              <h5>Go To Cart</h5>
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
          <Route path="/addToCart" element={<AddTutorials />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>

    </div>
  );
}
export default App;