import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './background.scss';
import SignUp from '../SignUp/signUp';
import HomePage from '../HomePage/homePage';

//import SuperContainer from '../SuperContainer/superContainer';

class Background extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className='background'>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/signup" component={SignUp}/>
                    {/*<SuperContainer/>*/}
                </div>
            </Router>
        );
    }
}

export default Background;
