/**
 * Created by zhaofei on 17/4/11.
 */
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

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var CommonView = React.createClass({
    getDefaultProps(){
      return{
          title: '',
          subTitle: '',
          rightIcon: '',
          titleColor: '',
          tplurl: '', //下级界面url路径
          //回掉函数
          callBackClickCell: null,

      }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
            <View style={styles.container}>
                {/*左边*/}
                <View>
                    <Text style={[{color: this.props.titleColor}, styles.titlesStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                {/*右边*/}
                <Image source={{uri: this.props.rightIcon}} style={{width: 60, height:43, resizeMode: 'contain'}}/>
            </View>
            </TouchableOpacity>
        );
    },
    // 点击了cell
    clickCell(data){
        // 判断处理
        if (this.props.callBackClickCell == null) return;
        // 执行回调函数
        this.props.callBackClickCell(data);
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width : width * 0.5 - 1,
        height: 59,
        flexDirection: 'row',
        marginBottom: 1,

        alignItems: 'center',
        justifyContent: 'space-around',
        marginRight: 1
    },
    titlesStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subTitleStyle: {
        color: 'gray'
    }

});

//输出组件类
module.exports = CommonView;