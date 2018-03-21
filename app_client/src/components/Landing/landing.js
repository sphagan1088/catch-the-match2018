import React, { Component } from 'react';
import './App.css';
import Nav from "../Nav/Nav.js";
import Title from "../Title/Title.js";
import Header from "../Header/Header.js";
import AddLeague from "../AddLeague/AddLeague.js";
import Footer from "../Footer/Footer.js";


class landing extends Component {
    render() {
        return (
            <div className = "App">
            <Nav />
            <br/>
            <Header />
            <br/>
            <AddLeague />
            <Footer />
          </div>
        );
    }
}

export default landing; 