import React from 'react';
import './homePage.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from '../SignUp/signUp';
import Login from '../Login/login';


class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className='homePage'>
                    <div className='centerPart'>
                        <div className='innerCenter'>
                            <Route exact path="/" component={Login}/>
                            <Route path="/signup" component={SignUp}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default HomePage;
