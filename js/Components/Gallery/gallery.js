import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './gallery.scss';

const ParentContainer = styled.div`
width: 80%;
margin: auto;
height: 200px;
background-color: red;
`
class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return <div>
            <ParentContainer />
        </div>
    }
}

export default Gallery;