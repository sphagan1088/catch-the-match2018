import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Title from "./components/Title/Title.js";
import Header from "./components/Header/Header.js";
import AddLeague from "./components/AddLeague/AddLeague.js";
import Cards from "./components/Cards/Cards.js";
import Footer from "./components/Footer/Footer.js";


class App extends Component {
  constructor(){
    state = {
      data: []
    }
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className = "App">
        <Nav />
        <Title />
        <Header />
        <AddLeague />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
