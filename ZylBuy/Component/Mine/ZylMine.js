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
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

/*----d导入外部组件----*/
var CommonMyCell = require('./ZylCommonMyCell');
var MiddleView = require('./ZylMineMiddleView');
var MiddleHeaderView = require('./ZylMiddleHeaderView');

var Mine = React.createClass({

    render() {
        return (
            <ScrollView
                style={styles.scrollViewStyle}
                contentInset={{top: -160}}
                contentOffset={{y: 160}}
            >
                <MiddleHeaderView/>
                <View style={{marginTop: 20}}>
                    <CommonMyCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        RightTitle="查看全部订单"
                    />
                    <MiddleView/>
                </View>
                <View style={{marginTop: 20}}>
                    <CommonMyCell
                    leftIconName="draft"
                    leftTitle="我的钱包"
                    RightTitle="账户余额：￥100"
                    />
                    <CommonMyCell
                        leftIconName="like"
                        leftTitle="抵用券"
                        RightTitle="10张"
                    />
                </View>

                <View style={{marginTop: 20}}>
                    <CommonMyCell
                        leftIconName="card"
                        leftTitle="积分商城"
                    />
                </View>

                <View style={{marginTop: 20}}>
                    <CommonMyCell
                        leftIconName="new_friend"
                        leftTitle="今日推荐"
                        RightIconName="me_new"
                    />
                </View>

                <View style={{marginTop: 20}}>
                    <CommonMyCell
                        leftIconName="pay"
                        leftTitle="我要合作"
                        RightTitle="轻松开店，迎娶白富美"
                    />
                </View>
            </ScrollView>
        );
    },

});

const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: '#e8e8e8'
    }

});

//输出组件类
module.exports = Mine;
