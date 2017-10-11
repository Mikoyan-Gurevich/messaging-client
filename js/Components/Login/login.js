import React from 'react';
import './login.scss';
import 'whatwg-fetch';


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
                        <div className='title'>Connecting every aspect.</div>
                        <div>
                            <input className='userID' placeholder='Username/ Mobile Number/ Email ID'/>
                        </div>
                        <div>
                            <input className='password' type='password' placeholder='Password'/>
                        </div>
                        <div className='signIn'>
                            <button>Sign In</button>
                            <input type='checkbox'/>
                            {/*<span>Keep me signed in</span>*/}
                        </div>
                        {/*<div>
                        <Link to='/signup'>Forgot Password ? </Link>
                        <Link to='/signup'>Sign Up as a New User</Link>
                    </div>*/}
                    </div>
                </div>
                <div className='newUser'>
                    <div>Keep me signed in</div>
                    <div>New User? <span>Sign Up</span></div>
                </div>
            </div>
        );
    }
}

export default Login;
