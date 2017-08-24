import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import Routes from "./Routes";

export default function App() {
    return (
        <StyleProvider style={getTheme(material)}>
            <View style={{flex:1}}>
                <Routes />
            </View>
        </StyleProvider>
    );
}
