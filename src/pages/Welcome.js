import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Content, Button, Icon, H1, Col, Row, Grid } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Wallpaper from 'Wallpaper';
import Logo from 'Logo';
import withToast from 'WithToast';
import withLastAction from 'WithLastAction';
import withLoader from 'WithLoader';
import withUser from 'WithUser';
import LayoutStyle from 'LayoutStyle';
import WelcomeStyle from 'WelcomeStyle';

class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        const { user } = nextProps;
        return (user == null)
    }

    componentWillReceiveProps(nextProps) {
        const { user, lastAction, sceneKey} = nextProps;
        (user != null && sceneKey == 'Welcome')
            ? (lastAction == null)
                ? Actions.Home()
                : Actions.push(lastAction.routeName,lastAction.params)
            : true;
    }

    render () {
        return (
            <Wallpaper>
                <Content>
                    <Grid style={{alignItems: 'center'}}>
                        <Row size={40}>
                            <Col style={LayoutStyle.logoContainer}>
                                <Logo/>
                          </Col>
                        </Row>
                        <Row size={20}>
                            <Col style={WelcomeStyle.container}>
                                <H1>WELCOME TO</H1>
                                <H1> 2TUBE</H1>
                            </Col>
                        </Row>
                        <Row size={60}>
                            <Col style={WelcomeStyle.container}>
                                <Button block danger iconRight onPress={() => Actions.Login()}>
                                    <Icon iconLeft name="lock" size={35} color="white"/>
                                    <Text style={LayoutStyle.whiteText}>Login</Text>
                                </Button>
                                <Button block iconRight onPress={() => Actions.MarketPlace()}>
                                    <Text style={LayoutStyle.whiteText}>Skip Login For Now</Text>
                                    <Icon iconRight name="angle-double-right" size={35} color="white"/>
                                </Button>
                                <Button light block onPress={() => Actions.Info()}>
                                    <Text> Info </Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Wallpaper>
        );
    }
}

export default withUser(withToast(withLoader(withLastAction(Welcome))));
