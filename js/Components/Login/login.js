import React from 'react';
import './login.scss';
import 'whatwg-fetch'
import {Link} from 'react-router-dom';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className='login'>
                <div className='title'>Welcome to Messaging</div>
                <div>
                    <input placeholder='Username/ Mobile Number/ Email ID'/>
                </div>
                <div>
                    <input type='password' placeholder='Password'/>
                </div>
                <div>
                    <button>Login to Messaging</button>
                </div>
                <div>
                    <Link to='/signup'>Forgot Password ? </Link>
                    <Link to='/signup'>Sign Up as a New User</Link>
                </div>
            </div>
        );
    }
}

export default Login;
