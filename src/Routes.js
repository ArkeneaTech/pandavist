import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './pages/Home';
export default () => (
    <Router>
        <Scene key="root">
            <Scene  type="reset" key="Home" component={Home} hideNavBar={true} initial/>
        </Scene>
    </Router>
);
