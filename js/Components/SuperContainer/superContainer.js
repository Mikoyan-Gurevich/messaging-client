import React from 'react';
import './superContainer.scss';
import avatar from '../../../avatar.png';

const contactsMockData = [
    {
        id: 1,
        name: 'Gaurav Sharma',
        time: '14:30',
        message: 'Hi !',
    },
    {
        id: 2,
        name: 'Saurabh Sharma',
        time: '13:30',
        message: 'Hey !',
    }
];

class SuperContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    getContactCard(obj) {
        return (
            <div className='contact'>
                <div className='contactLeft'>
                    <img src={avatar}/>
                </div>
                <div className='contactRight'>
                    <div className='upper'>
                        <div className='name'>{obj.name}</div>
                        <div className='time'>{obj.time}</div>
                    </div>
                    <div className='lower'>{obj.message}</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='superContainer'>
                This will contain the main UI
            </div>
        );
    }
}

export default SuperContainer;
