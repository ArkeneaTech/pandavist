/**
 * @providesModule MainHeader
 */
import React, {Component} from 'react';
import {View, Dimensions, Text, TouchableOpacity,StatusBar} from 'react-native';
import {Header, Left, Body, Right, Button,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import LayoutStyle from 'LayoutStyle';
import {SCREEN_TITLE} from 'global';

export default class MainHeader extends Component {

    render() {
        const {leftIcon} = this.props;

        return (
            <View style={LayoutStyle.headerLayout}>
                <StatusBar
                    barStyle={'light-content'}
                />
                <View style={LayoutStyle.headerContainer}>
                    <View style={{width:Dimensions.get('window').width * 0.15}}>
                        <Icon name={leftIcon} style={[LayoutStyle.headerIcon, {
                            fontSize: (Dimensions.get('window').height + Dimensions.get('window').width) * 0.025
                        }]}/>

                    </View>
                    <View style={{flex:1,width:Dimensions.get('window').width}}>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize:(Dimensions.get('window').height + Dimensions.get('window').width) * 0.018,
                            alignSelf: "center",
                            alignContent: "center",
                            fontWeight:'bold',
                        }}>Home</Text>
                    </View>

                </View>
            </View>
        );
    }
}
