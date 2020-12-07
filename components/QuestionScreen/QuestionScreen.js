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

import { Banner } from '../../components/Banner';
import QuestionBuilder from '../../components/service-components/QuestionBuilder';
import QuestionScreenInput from '../../components/QuestionScreenInput/QuestionScreenInput';
import QuestionScreenLocked from '../../components/QuestionScreenLocked/QuestionScreenLocked';
import QuestionScreenReveal from '../../components/QuestionScreenReveal/QuestionScreenReveal';

class QuestionScreen extends React.Component {

  answer = '';

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 'abcd',
      answerLocked: false,
      answerRevealed: false
    }

    this.lockAnswer = this.lockAnswer.bind(this);
    this.revealAnswer = this.revealAnswer.bind(this);
    this.setUIControl = this.setUIControl.bind(this);
    this.getNextQuestion = this.getNextQuestion.bind(this);

  }

  componentDidMount() {
    this.initializeQuestions(this.props.numberOfQuestions);
  }

  initializeQuestions(numberOfQuestions) {

    QuestionBuilder.initializeQuestions(numberOfQuestions);
    QuestionBuilder.getCurrentQuestion().then((currentQuestion) => {
      console.log('currentQuestion');
      console.log(currentQuestion);
      this.setState({
        currentQuestion: currentQuestion
      });
    });
  }


  getNextQuestion() {

    
    QuestionBuilder.getNextQuestion().then((nextQuestion) => {
      if (nextQuestion == null) {
        //End the game
        console.log('the game is over');
        this.props.endGame();
      } else {
        this.setState({
          currentQuestion: nextQuestion
        });
        console.log('updated question:')
      }
        
      this.answer = '';
      this.setState({ answerRevealed: false })
      this.setState({ answerLocked: false })
    });

  }

  lockAnswer(answer){
    console.log('lock answer');
    this.answer = answer;
    this.setState({ answerLocked: true });
  }

  revealAnswer() {
    this.setState({ answerLocked: false });
    this.setState({ answerRevealed: true });
  }

  setUIControl() {
    let uiControl = (<QuestionScreenInput question={this.state.currentQuestion} lockAnswer={this.lockAnswer}></QuestionScreenInput>);

    if (this.state.answerLocked) {
      uiControl = (<QuestionScreenLocked question={this.state.currentQuestion} revealAnswer={this.revealAnswer}></QuestionScreenLocked>);
    } else if (this.state.answerRevealed) {
      uiControl = (<QuestionScreenReveal answer={this.answer} getNextQuestion={this.getNextQuestion}></QuestionScreenReveal>);
    }

    return uiControl;

  }


  render() {

    let uiControl = this.setUIControl();

    return (
      <View style={styles.background}>

        <StatusBar />
        <SafeAreaView style={styles.backgroundTwo} >
          <View style={styles.mainFormat}>
            <Banner></Banner>
            <View style={styles.questionScreenContent}>
              {uiControl}
            </View>
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
  mainFormat: {
    flex: 1,
    backgroundColor: 'gray'
  },
  questionScreenContent: {
    backgroundColor: "orange",
    flex: 1,
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


export default QuestionScreen;