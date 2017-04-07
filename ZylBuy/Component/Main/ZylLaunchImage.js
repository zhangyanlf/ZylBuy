/**
 * Created by zhaofei on 17/4/7.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/*--导入外埠组件---*/
var Main = require('./ZylMain');
var Launch = React.createClass({
    render() {
        return (
           <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}/>
        );
    },
    //复杂操作 ：定时器 网络请求
    componentDidMount(){
        //定时：隔两秒换到ain
        setTimeout(() => {
            //页面切换
            this.props.navigator.replace({
               component: Main, //具体路由的板块
            });
        },1000);
    }
});

const styles = StyleSheet.create({
    launchImageStyle: {
        flex: 1
    }
});

//输出组件类
module.exports = Launch;