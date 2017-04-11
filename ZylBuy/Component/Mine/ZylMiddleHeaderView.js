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
    Platform,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var Shop = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*--上半部分--*/}
                {this.renderTopView()}
                {/*--下半部分--*/}
                {this.renderBottomView()}


            </View>
        );
    },
    //上半部分View
    renderTopView(){
        return(

            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.topViewStyle}>
                    <Image source={{uri: 'see'}} style={styles.leftIconStyle}/>
                    <View style={styles.centerViewStyle}>
                        <Text style={{fontSize:18, color:'white', fontWeight: 'bold'}}>Zyl电商</Text>
                        <Image source={{uri: 'avatar_vip'}} style={{width: 17, height: 17}}/>
                    </View>
                    {/*右边箭头*/}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8 ,height:13,marginRight: 8}}/>
                </View>
            </TouchableOpacity>

        )
    },
    // 下半部分
    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )

    },
    renderBottomItem(){
        //数组
        var itemArr= [];
        //数据数组
        var data = [{'number':100,'title':'代金券'}, {'number':12,'title':'评价'}, {'number':50,'title':'收藏'}];
        //遍历组件装入数组
        for (var i = 0; i < data.length; i++) {
            var item = data[i];

            itemArr.push(
                <TouchableOpacity key={i} activeOpacity={0.5}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color: 'white'}}>{item.title}</Text>
                        <Text style={{color: 'white'}}>{item.number}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        //返回数组
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        height:Platform.OS == 'ios'? 360 : 160,
        backgroundColor:'rgba(255,96,0,1.0)'
    },
    topViewStyle : {
        flexDirection: 'row',
        marginTop:Platform.OS == 'ios'? 240: 40,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    centerViewStyle: {
        flexDirection: 'row',
        width: width * 0.72
    },
    leftIconStyle: {
        width: 70,
        height: 70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)'
    },
    bottomViewStyle: {
        flexDirection: 'row',

        //绝对定位
        position: 'absolute',
        bottom: 0

    },
    bottomInnerViewStyle: {
        width: (width / 3) + 1,
        height: 40,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white'

    }
});

//输出组件类
module.exports = Shop;
