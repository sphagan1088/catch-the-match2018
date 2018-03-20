import React, {Component} from "react";
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <main>
            <div>
                <footer class="position-sticky" className="footer">
                &copy; Copyright 2018 Flailing Arms
                </footer>
            </div>
            </main>
        )
    }
}

export default Footer;