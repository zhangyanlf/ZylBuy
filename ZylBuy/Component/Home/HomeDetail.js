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
    TouchableOpacity
} from 'react-native';

var HomeDetail = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.popHome()}>
                    <Text style={styles.welcome}>
                        Home详情
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },
    popHome(){
        this.props.navigator.pop()
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
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
});

//输出组件类
module.exports = HomeDetail;