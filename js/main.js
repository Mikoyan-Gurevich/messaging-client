import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Homepage from './Components/HomePage/homePage';
//import * as OfflinePluginRuntime from 'offline-plugin/runtime';

//OfflinePluginRuntime.install();

ReactDOM.render(<Homepage/>, document.getElementById('app'));
