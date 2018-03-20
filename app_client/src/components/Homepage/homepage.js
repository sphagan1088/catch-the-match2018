import React, { Component } from 'react';
import Nav from "../Nav/Nav.js";
import Title from "../Title/Title.js";
import Footer from "../Footer/Footer.js";
import "./homepage.css"
import MyForm from './forms.js';

class Home extends Component {
    render() {
        return (
            <div className="App Site">
                <div className="Site-content">

                <Nav />
                <Title />
                <div className="sign-in">
                    <button type="button" className="btn btn-primary btn-lg">Join the Movement</button>
                    <br />
                    <br />
                    <div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            SIGN IN!
                        </button>

                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">SIGN INTO GREATNESS!</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <MyForm />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
        )
    }
}

export default Home; 