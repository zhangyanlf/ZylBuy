/**
 * Created by zhaofei on 17/4/12.
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
    ListView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

/*导入外部组件*/
var  CommonCell = require('./ZylBottomCommonCell')
//导入玩不Json数据
var HotChannelData = require('../../LocalData/XMG_Home_D6.json');

var HotChannel = React.createClass({
    getDefaultProps(){
        return{
            popToHotDetail: ''
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*上班部分*/}
                <CommonCell
                    leftIcon="rm"
                    leftTitle="热门频道"
                    rightTitle="查看全部"
                />
                {/*下半部分*/}
                <View style={styles.hotBottomStyle}>
                    {this.renderHotChannelView()}
                </View>

            </View>
        );
    },
    renderHotChannelView(){
        //声明一个存储数组
        var hotChannelArr = [];
        //取出数据
        var hotChannelData = HotChannelData.data;
        for (var i = 0; i < hotChannelData.length; i++){
            //取出单独数组
            var hotData = hotChannelData[i];

            //存入数组
            hotChannelArr.push(
              <HotChannelView
                  hotTitle={hotData.mainTitle}
                  hotSubTitle={hotData.deputyTitle}
                  hotOtherDesc={hotData.HOT}
                  hotEntranceImg={hotData.entranceImgUrl}
                  key={i}
                  target={hotData.target}
                popToHotChannel={(url) => this.popToHot(url)}
              />
            );
        }
        //返回数组
        return hotChannelArr;
    },
    popToHot(url){
        if (this.props.popToHotDetail == null) return;
        //执行回调
        this.props.popToHotDetail(url);
    }

});

var HotChannelView = React.createClass({
    getDefaultProps(){
        return{
            hotTitle:'',
            hotSubTitle: '',
            hotEntranceImg: '',
            target: '',
            popToHotChannel: ''


        }
    },
    render(){
        return(
            <TouchableOpacity onPress={() => {this.popToHotChannalDetail(this.props.target)}}>
                <View style={styles.hotInnerViewStyle}>
                    {/*左边View*/}
                    <Text style={{color: 'rgba(132,132,132,1.0)',fontSize:18, marginBottom: 5}}>{this.props.hotTitle}</Text>
                    <Text style={{color: 'rgba(162,162,162,1.0)', marginBottom: 5}}>{this.props.hotSubTitle}</Text>
                    {/*右边图片*/}
                    <Image source={{uri: this.dealWithImgUrl(this.props.hotEntranceImg)}} style={styles.hotEntranceImgStyle}/>

                </View>

            </TouchableOpacity>
        )
    },

    popToHotChannalDetail(url){
        if (this.props.target == null) return;
        //执行回调
        this.props.popToHotChannel(url)
    },
    dealWithImgUrl(url){
        if (url.search('w.h') == -1){//没有找到
            return url;
        } else {
            return url.replace('w.h','90.80');
        }
    }

});



const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    hotBottomStyle: {
      flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        alignItems: 'center'

    },
    hotEntranceImgStyle: {
        width: 100,
        height:90,
        //内容模式
        resizeMode: 'contain'
    },
    hotInnerViewStyle: {
        alignItems: 'center',
        marginTop: 10,
        marginLeft: (width - 100*3) / (3 + 1) + 1,
        marginBottom: 10,
    }
});

//输出组件类
module.exports = HotChannel;