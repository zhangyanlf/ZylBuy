/**
 * Created by zhaofei on 17/4/11.
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
    TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

/*引入外部组件*/
var CommonView = require('./ZylMiddleCommonView');


//引入外部数据
var TopMIddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var HomeMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*左边的View*/}
                {this.renderLeftView()}
                {/*右边的View*/}
                <View>
                    {this.renderRightView()}
                </View>

            </View>
        );
    },
    //左边的View
    renderLeftView(){
        //拿到对应的数据
        var data = TopMIddleData.dataLeft[0];

        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => {alert(data.title)}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: data.img1}} style={styles.leftImagesStyle}/>
                    <Image source={{uri: data.img2}} style={styles.leftImagesStyle}/>
                    <Text style={{color: 'gray'}}>{data.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color: '#0dadd5', marginRight: 5, fontSize: 12}}>{data.price}</Text>
                        <Text style={{color: 'orange', backgroundColor: 'yellow', fontSize: 12}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    //右边的View
    renderRightView(){
        //组件数组
        var itemArr = [];
        //取出集体数据
        var rightData = TopMIddleData.dataRight;
        //遍历
        for (var i = 0; i < rightData.length; i++){
            //取出单独的数据
            var data = rightData[i];
            itemArr.push(
              <CommonView
                  key={i}
                  title={data.title}
                  subTitle={data.subTitle}
                  rightIcon={data.rightImage}
                   titleColor={data.titleColor}
              />
            );
        }
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        //改变主轴方向
        flexDirection: 'row'

    },
    leftImagesStyle: {
        width: 120,
        height: 30,

        //内容模式
        resizeMode: 'contain'

    },
    leftViewStyle: {
        width: width * 0.5,
        height:119,
        backgroundColor: 'white',
        marginRight: 1,

        //水平居中
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//输出组件类
module.exports = HomeMiddleView;