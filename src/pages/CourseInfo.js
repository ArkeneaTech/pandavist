import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import withLoader from 'WithLoader';
import withToast from 'WithToast';
import {Content, Card, CardItem, Button, Icon, List, ListItem, Thumbnail, Body, H3, H4} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {userLogout} from 'global';
import withUser from 'WithUser';
import withLastAction from 'WithLastAction';
import InnerHeader from 'InnerHeader';
import CourseInfoStyle from 'CourseInfoStyle';
import CourseVideoList from 'CourseVideoList';
import API from 'AppUtils';
import { Actions } from 'react-native-router-flux';

class CourseInfo extends Component {

    constructor(props) {
        super(props);
        this.courseInfo = null;
        this.state = {
            course: [],
        }
        this._getCourseDetails = this._getCourseDetails.bind(this);
        this._subscribeCourse = this._subscribeCourse.bind(this);
    }

    componentWillMount() {
        const {courseId, setLastAction} = this.props;
        setLastAction(null);
        this._getCourseDetails(courseId);
    }

    _getCourseDetails = (courseId) => {
        const {loader, toast} = this.props;
        loader(true);
        API.getCourseDetailsWithVideo({courseId: courseId})
            .then((responseJson) => {
                loader(false);
                const {status, data} = responseJson;
                (status && this.courseInfo) ? this.setState({
                    course: data,
                }) : toast({type: 'error', message: 'Something went wrong! Please try again!'});
            });
    }

    _subscribeCourse = (courseId) => {
        const {loader, toast, user, setLastAction} = this.props;
        if (user != null) {
            loader(true);
            API.subscribeToCourse({courseId: courseId})
                .then((responseJson) => {
                    loader(false);
                    const {status, message} = responseJson;
                    (status) ? toast({type: 'success', text: message}) : toast({type: 'error', text: message});
                    Actions.Home();
                });
        } else {
            toast({type: 'success', text: 'Login required!'});
            setLastAction({routeName:'CourseInfo',params:{courseId}});
            Actions.Login();
        }
    }

    render() {
        const {course} = this.state;
        return (
            <View style={CourseInfoStyle.layout} ref = { (ref) => { this.courseInfo = ref}}>
                <InnerHeader {...this.props}/>
                <Content>
                    <Grid style={{alignItems: 'flex-start'}}>
                        <Row>
                            <Card>
                                <CardItem >
                                    <View style={{flex: 0, flexDirection: 'row'}}>
                                        <View style={CourseInfoStyle.courseImageContainer}>
                                            <Image style={CourseInfoStyle.courseThumb} square
                                                   source={{uri: course.image}}/>
                                        </View>
                                        <View style={CourseInfoStyle.courseContent}>
                                            <View style={{flexDirection:'column', alignSelf: 'flex-start'}}>
                                                <Text numberOfLines={2}
                                                      style={CourseInfoStyle.courseTitle}>{course.title}</Text>
                                                <Text numberOfLines={4}
                                                      style={CourseInfoStyle.courseDescription}>{course.description}</Text>
                                            </View>
                                            <View style={{flex: 1,flexDirection:'row', alignSelf: 'flex-end'}}>
                                                <Button subscribeBtn danger transparent
                                                        onPress={this._subscribeCourse.bind(this, course._id)}>
                                                    <Icon name="plus"/>
                                                </Button>
                                            </View>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </Row>
                        <Row style={{marginBottom: 10}}>
                            {
                                ( course.videos && course.videos.length > 0)
                                    ?
                                    <CourseVideoList {...this.props} videos={course.videos}/>
                                    :
                                    false
                            }
                        </Row>

                    </Grid>
                </Content>

            </View>
        );
    }
}

export default withUser(withLoader(withToast(withLastAction(CourseInfo))));
