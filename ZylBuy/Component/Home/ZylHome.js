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
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

/*---导入外部组件--*/
var HomeDetail = require('../Home/HomeDetail');
var TopView= require('./ZylTopView');
var HomeMiddleView = require('./ZylHomeMeddleView');
var MiddleBottomView = require('./ZylMiddleBottomView');
var ShopCenter = require('./ZylShopCenter');
var ShopCenterDetailView = require('./ZylShopCenterDetailView');
var GeustYouLike = require('./ZylGuestYourLike');
var HotChannel = require('./ZylHotChannel');
var HotDetailView = require('./ZylHotDetailView');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}
                {/*首页主要内容*/}
                <ScrollView>
                    {/*头部View*/}
                    <TopView/>
                    {/*中间的View*/}
                    <HomeMiddleView/>
                    {/*下半部分*/}
                    <MiddleBottomView
                        popTopHome={(data) => this.pushToDetail(data)}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView = {(url)=>this.pushToShopCenterDetail(url)}
                    />
                    {/*热门频道*/}
                    <HotChannel
                        popToHotDetail =  {(url)=>this.pushToHotChannalDetail(url)}
                    />
                    {/*猜你喜欢*/}
                    <GeustYouLike/>

                </ScrollView>
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
    pushToHotChannalDetail(url){
        this.props.navigator.push(
            {
                component: HotDetailView, // 要跳转的版块
                passProps:{'url': this.dealWithHotChannalUrl(url)}
            }
        );
    },

    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component: ShopCenterDetailView, // 要跳转的版块
                passProps:{'url': this.dealWithShopCenterUrl(url)}
            }
        );
    },
    // 跳转到二级界面
    pushToDetail(data){
        this.props.navigator.push(
            {
                component: HomeDetail, // 要跳转的版块
                passProps:{'url': this.dealWithUrl(data)}
            }
        );
    },

    //处理URl
    dealWithHotChannalUrl(url){

        return url.replace('imeituan://www.meituan.com/web/?url=', '').replace('imeituan://www.meituan.com/web/search?url=' ,'').replace('imeituan://www.meituan.com/web?url=' ,'').replace('imeituan://www.meituan.com/hotel/hybrid/web?url=', '').replace('imeituan', 'https');
    },

    dealWithShopCenterUrl(url){

        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    },
    dealWithUrl(url){

        return url.replace('imeituan://www.meituan.com/web?url=', '');
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEDEDE',
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