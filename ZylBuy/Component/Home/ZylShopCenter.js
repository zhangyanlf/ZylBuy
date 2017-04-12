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
    ScrollView,
    TouchableOpacity
} from 'react-native';

/*--引入外部组件类--*/
var BottomCommonCell = require('./ZylBottomCommonCell');

/*--引入外部json--*/
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var ShopCenter = React.createClass({
    getDefaultProps(){
      //毁掉函数
        return{
            popToHomeView: null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <BottomCommonCell
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle={Home_D5.tips}
                />
                {/*下部分*/}
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true} //横向
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },
    //返回下部分所有的Item
    renderAllItem(){
        //定义组件数组
        var itemArr = [];
        //取出数据
        var shopData = Home_D5.data;
        //遍历
        for (var i = 0; i < shopData.length; i++){
            //取出单个数据
            var data = shopData[i];
            itemArr.push(
                <ShopCenterItem
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    key={i}
                    popToShopCenter = {(url)=>this.popTopHome(url)}
                />
            );

        }
        //返回
        return itemArr;
    },
    popTopHome(url){
        //判断
        if (this.props.popToHomeView == null) return;

        //执行回调
        this.props.popToHomeView(url)
    }

});

var ShopCenterItem = React.createClass({
    getDefaultProps(){
       return{
           shopImage: '',
           shopSale: '',
           shopName: '',
           detailurl: '',
           popToShopCenter: null
       }
    },
    render(){
        return(
            <TouchableOpacity onPress={() => this.clickItem(this.props.detailurl)}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri: this.props.shopImage}} style={styles.shopImageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    clickItem(url){
        //判断
        if (this.props.detailurl == null) return;

        //执行回调
        this.props.popToShopCenter(url)
    }

});



const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    shopImageStyle: {
        width: 120,
        height: 80,
        borderRadius: 8,
        marginBottom: 5
    },
    scrollViewStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10

    },
    itemViewStyle: {
        margin: 8,

    },
    shopSaleStyle: {
        //绝对定位
        position: 'absolute',
        left: 0,
        bottom :30,
        backgroundColor: 'orange',
        color: 'white',
        padding:2,
        fontSize: 13
    },
    shopNameStyle: {
        textAlign: 'left',
        marginTop: 5
    }


});

//输出组件类
module.exports = ShopCenter;