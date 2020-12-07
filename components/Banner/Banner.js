/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import {Text, StyleSheet, View} from 'react-native';
import React from 'react';

class Banner extends React.Component {
    render(){
        return (
            <View style={styles.bannerContainer}>
                <Text style={styles.banner}>Newlywed Game</Text>
            </View>
        );
    }
    
} 

const styles = StyleSheet.create({
    banner: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontFamily: "Arial",
        textShadowColor: "black",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5
    },
    bannerContainer: {
        backgroundColor: '#0b5351',
        width: '100%',
        display: "flex",
        justifyContent: "center",
        padding: 20
    }
});

export default Banner;
