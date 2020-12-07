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
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import React from 'react';

import CustomButton from '../../components/CustomButton/CustomButton';

class QuestionScreenLocked extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.revealAnswer = this.revealAnswer.bind(this);
  }

  componentDidMount() {
  }

  revealAnswer(){
    this.props.revealAnswer();
  }

  render() {

    return (
      <View style={styles.content}>
        <View style={styles.questionSubTextSection}>
          <Text style={styles.questionSubText}>{this.props.question}</Text>
        </View>
        <View style={styles.promptTextSection}>
          <Text style={styles.promptText}>Wait for partner to answer...</Text>
        </View>
        <View style={styles.buttonSection}>
          <CustomButton title='Click to Reveal Answer' onPress={this.revealAnswer}></CustomButton>
        </View>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#00A9A5",
    flex: 1,
    justifyContent: "space-between",
    textAlign: 'center'
  },
  questionSubTextSection: {
    margin: 20,
  },
  questionSubText: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
    color: "white"
  },
  promptTextSection: {
    marginTop: -80,
    marginHorizontal: 20
  },
  promptText: {
    fontSize: 40,
    textAlign: "center",
    marginHorizontal: 10,
    color: "white"
  },
  buttonSection: {
    marginVertical: 40,
  }

});


export default QuestionScreenLocked;