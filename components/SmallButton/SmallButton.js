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
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';


class SmallButton extends React.Component {

    constructor(props){
        super(props);

        let buttonStyle = styles;
        if(this.props.buttonStyle){
            buttonStyle = this.props.buttonStyle;
        }

        this.state = {
            style: buttonStyle
        }
            
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={this.state.style.buttonContainer}>
                <Text style={this.state.style.buttonText}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#0b5351",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignSelf: "center",
        marginHorizontal: 10
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

});

export default SmallButton