import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Title from "./components/Title/Title.js";
import Header from "./components/Header/Header.js";
import AddLeague from "./components/AddLeague/AddLeague.js";
import Footer from "./components/Footer/Footer.js";


class App extends Component {
  render() {
    return (
      <div className = "App">
        <Nav />
        <Title />
        <Header />
        <AddLeague />
        <Footer />
      </div>
    );
  }
}

export default App;
