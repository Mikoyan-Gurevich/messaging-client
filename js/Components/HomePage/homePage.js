import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './homePage.scss';
import SignUp from '../SignUp/signUp';
import Login from '../Login/login';
import Chat from '../Chat/chat';


class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className='homePage'>
                    <Route exact path="/" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/chat" component={Chat}/>
                </div>
            </Router>
        );
    }
}

export default HomePage;
