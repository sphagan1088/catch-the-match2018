import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Homepage/homepage";
import landing from "./components/Landing/landing";
import profile from "./components/Profile/profile";
import Nav from "./components/Nav/Nav.js";
import Title from "./components/Title/Title.js";
import Header from "./components/Header/Header.js";
import AddLeague from "./components/AddLeague/AddLeague.js";
import Footer from "./components/Footer/Footer.js";


class App extends Component {
  render() {
    return (
      <div className="App">>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
              <Route exact path="/landing" component={landing}/>
                <Route exact path="/profile" component={profile}/>
           </div>
        </Router>
        </div>
            )
          }
        };
        
        export default App;
