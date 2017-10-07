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
            <div className='homePage'>
                <div className='centerPart'>
                    <div className='innerCenter'>
                        <div className='title'>Welcome to Messaging</div>
                        <div>
                            <input placeholder='Username/ Mobile Number/ Email ID'/>
                        </div>
                        <div>
                            <input  type='password' placeholder='Password'/>
                        </div>
                        <div><button>Login to Messaging</button></div>
                        <div>
                            <Link to='/signup'>Forgot Password ? </Link>
                            <Link to='/signup'>Sign Up as a new user</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
