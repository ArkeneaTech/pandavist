/**
 * @providesModule DataList
 */

import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

import { NOPREVIEW } from 'global';
import LayoutStyle from 'LayoutStyle';

const listdata = [
    {
        text: 'Hindu Meditation',
        note: '10-20 min',
        image: require('../assets/images/image1.png'),
    },
    {
        text: 'Hindu Meditation',
        note: '15-20 min',
        image: require('../assets/images/image2.png'),
    },
    {
        text: 'Hindu Meditation',
        note: '5-15 min',
        image: require('../assets/images/image3.png'),
    }

];

export default class DataList extends Component {

    render() {

        return (
            <View style={{flex:1}}>
                <DeckSwiper
                    dataSource={listdata}
                    renderItem={item =>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={item.image} />
                                    <Body>
                                    <Text>{item.text}</Text>
                                    <Text note>{item.note}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                    }
                />
            </View>
        );
    }
}
