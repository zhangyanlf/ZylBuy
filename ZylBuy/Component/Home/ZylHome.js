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
    TouchableOpacity,
    TextInput,
    Image,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

/*---导入外部组件--*/
var HomeDetail = require('../Home/HomeDetail');
var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}
               <TouchableOpacity onPress={() => this.PushDetail()}>
                <Text style={styles.welcome}>
                    Home
                </Text>
               </TouchableOpacity>
            </View>
        );
    },
    // 首页导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={() => {alert('点击了')}}>
                    <Text style={{color: 'white'}}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder="输入商家、品类、商圈"
                    style={styles.topInputStyles}
                    underlineColorAndroid={'transparent'}
                    multiline={false}
                />
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <TouchableOpacity onPress={() => {alert('点击了')}}>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {alert('点击了')}}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>

            </View>
        )
    },
    //跳转二级页面
    PushDetail(){
        this.props.navigator.push(
            {
                component: HomeDetail,//要跳转的页面
                title: '详情页'
            }
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    topInputStyles: {//设置输入框
        width: width*0.73,
        height: Platform.OS == 'ios' ? 35 : 38,
        backgroundColor: 'white',
        marginTop: Platform.OS == 'ios' ? 18 : 0,
        borderRadius: 18,

        //设置内左边距
        paddingLeft: 10,
        fontSize: 14


    },
    navRightImgStyle: {//设置图片大小
        width: Platform.OS == 'ios' ?28 : 24,
        height: Platform.OS == 'ios' ?28 : 24
    },
    navBarStyle: {//导航条颜色
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1.0)',

        //设置主轴的方向
        flexDirection: 'row',
        //设置侧州的对方方式
        alignItems: 'center',
        //设置主轴的对齐方式
        justifyContent: 'space-around'
    },
    rightViewStyle: {
        flexDirection: 'row',

        height: 64,
        alignItems: 'center'
    }
})

//输出组件类
module.exports = Home;