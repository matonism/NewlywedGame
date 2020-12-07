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
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import React from 'react';

import CustomButton from '../../components/CustomButton/CustomButton';

class QuestionScreenReveal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {

    return (
      <View style={styles.background}>

        <StatusBar />
        <SafeAreaView style={styles.backgroundTwo} >
          <View style={styles.content}>
            <Text style={styles.questionText}>{this.props.answer}</Text>
            <CustomButton title='Next Question' onPress={this.props.getNextQuestion}></CustomButton>
          </View>
        </SafeAreaView>

      </View>
    );


  }

}



const styles = StyleSheet.create({
  background: {
    backgroundColor: 'purple',
    flex: 1
  },
  backgroundTwo: {
    backgroundColor: 'tan',
    flex: 1
  },
  content: {
    backgroundColor: "#00A9A5",
    flex: 6,
    justifyContent: 'center'
  },
  scrollView: {
    backgroundColor: "blue",
    flex: 1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: 'orange'
  },
  questionText: {
    textAlign: 'center',
    marginTop: -80,
    padding: 20,
    fontSize: 30,
    color: 'white'
  },
  answerText: {
    textAlign: 'center',
    marginTop: -80,
    padding: 20,
    fontSize: 30,
    color: 'white'
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    padding: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10
  },
  button: {
    width: 120,
    margin: 20,
    marginTop: 10
  }

});


export default QuestionScreenReveal;