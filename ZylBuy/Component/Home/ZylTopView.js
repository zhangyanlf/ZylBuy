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
    ListView,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//引入外部数据源
var TopMenu = require('../../LocalData/TopMenu.json');

//引入外部组件
var TopListView = require('./ZylTopListView');

var TopView = React.createClass({
    getInitialState(){
      return{
          activePage: 0
      }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    //当一帧滚动结束时候调用
    onScrollAnimationEnd(e){
        //求出当前的页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

        //更新状态机
        this.setState({
            activePage: currentPage
        });
    },


    //ScrollView内部组件
    renderScrollItem() {
        //定义组件数组
        var itemArr = [];
        //定义一个颜色数组 ---数据数组
        var datarArr = TopMenu.data;
        //遍历创建组件
        for (var i = 0; i < datarArr.length; i++) {
            itemArr.push(
               <TopListView
                   key={i}
                   dataArr={datarArr[i]}
               />
            );
        }
        //返回组件数组
        return itemArr;
    },

    //页码（指示器）
    renderIndicator(){
        //指示器数字
        var indicatorArr = [], style;
        for (var i = 0; i < 2; i++){
            //设置圆点的样式
            style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
            );
        }
        //返回数字
        return indicatorArr;
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    indicatorViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

//输出组件类
module.exports = TopView;