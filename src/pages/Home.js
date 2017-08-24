import React, {Component} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import {Content, Card, CardItem, Button, Row, Col, Icon, Body, Grid} from 'native-base';
import LayoutStyle from 'LayoutStyle';
import MainHeader from 'MainHeader';
import DataList from 'DataList';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        const {courses} = this.state;
        return (
            <View style={LayoutStyle.mainContainer}>
                <MainHeader {...this.props} leftIcon="chevron-left"/>
                <Content>
                    <Grid style={{
                        flex: 1,
                        alignItems: 'center',
                        paddingHorizontal: Dimensions.get('window').width * 0.02
                    }}>
                        <Row style={{marginBottom: 10}}>
                            <DataList/>
                        </Row>
                        <Row style={{flex:1}}>
                            <Text> Set schedule for this element:</Text>
                        </Row>
                    </Grid>
                </Content>
            </View>
        );
    }
}

export default Home;
