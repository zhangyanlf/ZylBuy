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
    Platform
} from 'react-native';

var CommonMyCell = React.createClass({
    getDefaultProps(){
        return{
            leftIconName: '',
            leftTitle: '',
            RightIconName: '',
            RightTitle: ''
        }
    },
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: this.props.leftIconName}} style={styles.leftImageStyle}/>
                    <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                 </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    {this.rightSubView()}
                </View>
            </View>
            </TouchableOpacity>
        );
    },
    //右边内容
    rightSubView(){
        return(
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8 ,height:13,marginRight: 8, marginLeft: 5}}/>
            </View>
        )
    },
    //右边具体返回
    renderRightContent(){
        if (this.props.RightIconName.length == 0){//不返回图片
            return(
                <Text style={{color: 'gray'}}>{this.props.RightTitle}</Text>
            )
        } else {
            return(
                <Image source={{uri: this.props.RightIconName}} style={{width: 24 ,height: 13}}/>
            )
        }
    }
});

const styles = StyleSheet.create({
    container: {
        //主轴方向
        flexDirection: 'row',
        //主轴对齐方式
        justifyContent: 'space-between',
        backgroundColor: 'white',

        //垂直居中
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#DEDEDE'
    },
    leftViewStyle: {
        //主轴方向
        flexDirection: 'row',
        //侧轴距中
        alignItems: 'center',
        //高度
        height: Platform.OS == 'ios' ? 40 : 35,
        //左边外边距
        marginLeft: 8

    },
    rightViewStyle: {

    },
    leftImageStyle: {//左边图片宽度
        width: 30,
        height: 30,
        marginRight: 6,
        //设置圆角
        borderRadius: 12
    },
    leftTitleStyle: {
        fontSize: 16
    }
});

//输出组件类
module.exports = CommonMyCell;
