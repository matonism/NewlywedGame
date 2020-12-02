/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';


import QuestionScreen from './components/QuestionScreen/QuestionScreen';
import QuestionBuilder from './components/service-components/QuestionBuilder';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 'abcd',
      NUMBER_OF_QUESTIONS: 2
    }
  }

  componentDidMount(){
    console.log('component mounted');
    this.getNextQuestion = this.getNextQuestion.bind(this);
    QuestionBuilder.initializeQuestions(this.state.NUMBER_OF_QUESTIONS);
    QuestionBuilder.getCurrentQuestion().then((currentQuestion) => {
      this.setState({
        currentQuestion: currentQuestion
      });
      console.log('state in mounted component')
      console.log(this.state)

    });

  }

  getNextQuestion(){
    console.log('getting next question');
    QuestionBuilder.getNextQuestion().then((nextQuestion) => {
      if(nextQuestion == null){
        //End the game
        console.log('the game is over');
      }else{
        this.setState({
          currentQuestion: nextQuestion
        });
        console.log('updated question:')
      }
    });

  }

  render(){

    return (
      <QuestionScreen questionText={this.state.currentQuestion} getNextQuestion={this.getNextQuestion}></QuestionScreen>
    );
  }

};

export default App;
