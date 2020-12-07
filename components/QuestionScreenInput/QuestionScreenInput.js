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

class QuestionScreenInput extends React.Component {

  answer = '';

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }

    this.submit = this.submit.bind(this);
    this.setUIControl = this.setUIControl.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: false });

  }

  onChangeText(text) {
    this.answer = text;
  }

  submit() {
    // this.setState({ isLoading: true });

    // setTimeout(() => {
    //   this.setState({ isLoading: false });
      this.props.lockAnswer(this.answer);
    // }, 2000)

    //Local version
    //lock in answer for 2 seconds
    //click to reveal

    //Server version
    //show loading screen
    //make callout to server to submit answer
    //on success, show next screen deciding results
    //hide loading screen
  }

  setUIControl() {
    let uiControl = (
      <View style={styles.content}>
        <Text style={styles.questionText}>{this.props.question}</Text>
        <TextInput style={styles.textInput} placeholder='Answer...' onChangeText={text => this.onChangeText(text)} />
        <CustomButton title='Submit' onPress={this.submit}></CustomButton>
      </View>
    );

    // if (this.state.isLoading) {
    //   uiControl = (
    //     <View style={styles.content}>
    //       <Text style={styles.questionText}>{this.props.question} {"\n"} Locking in your answer...</Text>
    //       <ActivityIndicator size="large" color="white" />
    //     </View>
    //   )
    // } 

    return uiControl;

  }


  render() {
    let uiControl = this.setUIControl();
    return uiControl;
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


export default QuestionScreenInput;