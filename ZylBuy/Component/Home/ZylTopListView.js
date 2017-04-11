/**
 * Created by zhaofei on 17/4/10.
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
    ListView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');


var TopListView = React.createClass({
    getDefaultProps(){
        return{
            dataArr: []
        }
    },

    getInitialState() {
        //创建数据源
        var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})

        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentNiewStyle}
                scrollEnabled={false}

            />
        );
    },

    //具体Cell
    renderRow(rowData) {
        return(
            <View style={styles.cellStyle}>
                <Image source={{uri: rowData.image}} style={{width: 52, height: 52}}/>
                <Text style={{fontSize: 12}}>{rowData.title}</Text>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    contentNiewStyle: {
        //多个cell在同一行显示
        flexWrap: 'wrap',
        //主轴方向
        flexDirection: 'row',
        width: width
    },
    cellStyle: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: (width - 70*5) / (5 + 1)
    }
});

//输出组件类
module.exports = TopListView;