import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const ParentContainer = styled.div`
    width: 80%;
    margin: auto;
    height: 200px;
    background-color: red;
`;
const catwalk = keyframes`
    0% {background-position: 0 0;}
    100% {background-position: 0 -2400px;}
`;

const Tuna = styled.div`
    background: url(http://stash.rachelnabors.com/animation-workshop/sprite_catwalk.png) 0 0 no-repeat; 
    animation: ${catwalk} 1s steps(12) infinite;
    height: 200px;
    width: 400px;
    margin: 100px auto 0;
`;
class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (<div>
            <ParentContainer>
                <Tuna />
            </ParentContainer>
        </div>);
    }
}

export default Gallery;
