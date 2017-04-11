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
    TouchableOpacity
} from 'react-native';

/*--导入外部的json数据--*/
var MiddleData = require('./MiddleData.json');

var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },
    renderAllItem(){
        //定义一个数组
        var itemArr = [];
        //遍历
        for (var i = 0;i < MiddleData.length;i++){
            //取出单独的数据
            var data = MiddleData[i];
            //创建组件装入数组
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} titleName={data.titleName}/>
            );
        }
        //返回
        return itemArr;
    }
});

var InnerView = React.createClass({
    getDefaultProps(){
      return{
          iconName: '',
          titleName: ''
      }
    },
    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => {alert(this.props.titleName)}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri: this.props.iconName}} style={{width: 30, height: 20,marginBottom: 3}}/>
                    <Text style={{color:'gray', fontSize: 12}}>{this.props.titleName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        //设置主轴对齐方式
        justifyContent: 'space-around'

    },
    innerViewStyle: {
        width: 70,
        height:70,

        //水平和垂直居中
        justifyContent: 'center',
        alignItems:'center'
    }
});

//输出组件类
module.exports = MineMiddleView;