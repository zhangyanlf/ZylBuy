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

//导入外部json数据
var Home_04 = require('../../LocalData/XMG_Home_D4.json');

var CommonView = require('./ZylMiddleCommonView');

var MiddleBottomView = React.createClass({

    getDefaultProps(){
        return{
            // 回调函数
            popTopHome: null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewsStyle}>
                    
                </View>
                {/*下部分*/}
                <View style={styles.bottomViewsStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },
     
    //下面部分的所有子组件
    renderBottomItem(){
        //组件数组
        var itemArr = [];
        var  dataSArr = Home_04.data;
        //遍历
        for (var i = 0; i < dataSArr.length; i++){
            //取出单独的数据
            var itemData = dataSArr[i];
            itemArr.push(
                <CommonView
                    key={i}
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
        }
        return itemArr;
    },
    // 继续往父级界面传递数据
    popToTopView(data){
        // 继续执行回调函数
        this.props.popTopHome(data);
    },



    dealWithImgUrl(url){
        if (url.search('w.h') == -1){//没有找到
            return url;
        } else {
            return url.replace('w.h','120.90');
        }
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    topViewsStyle: {
        
    },
    bottomViewsStyle: {
        //设置主轴方向
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

//输出组件类
module.exports = MiddleBottomView;