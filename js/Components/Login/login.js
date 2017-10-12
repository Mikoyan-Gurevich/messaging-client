import React from 'react';
import './login.scss';
import 'whatwg-fetch';
import {Link} from 'react-router-dom';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className='superContainer'>
                <div className='logoContainer'>
                </div>
                <div className='loginContainer'>
                    <div className='konnect'>Konnect</div>
                    <div className='login'>
                        <label className='title'>Connecting every aspect.</label>
                        <input className='userID' placeholder='Username/ Mobile Number/ Email ID'/>
                        <input className='password' type='password' placeholder='Password'/>
                        <div className='signIn'>
                            <button>Sign In</button>
                            <input type='checkbox'/>
                        </div>
                    </div>
                </div>
                <div className='newUser'>
                    <div>Keep me signed in</div>
                    <div>New User? <Link to='/signup'>Sign Up</Link></div>
                </div>
            </div>
        );
    }
}

export default Login;
