import React from 'react';
import './homePage.scss';
import {Link} from 'react-router-dom';


class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div><Link to='/signup'>Sign Up Now !</Link></div>
        );
    }
}

export default HomePage;
