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
import HomeScreen from './components/HomeScreen/HomeScreen';


import QuestionScreen from './components/QuestionScreen/QuestionScreen';
import QuestionBuilder from './components/service-components/QuestionBuilder';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 'abcd',
      PAGE_HOME_SCREEN: true,
      PAGE_GAME_SCREEN: false,
      PAGE_END_SCREEN: false

    }
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount(){
    console.log('component mounted');

    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.endGame = this.endGame.bind(this);

  }

  startGame(numberOfQuestions){

    QuestionBuilder.initializeQuestions(numberOfQuestions);
    QuestionBuilder.getCurrentQuestion().then((currentQuestion) => {

      this.setState({
        currentQuestion: currentQuestion
      });
      console.log('state in mounted component');
      console.log(this.state);

    });

    this.setState({'PAGE_HOME_SCREEN': false});
    this.setState({'PAGE_GAME_SCREEN': true});
  }

  endGame(){

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

    if(this.state.PAGE_HOME_SCREEN){
      return (
        <HomeScreen startGame={this.startGame}></HomeScreen>
      );
    }else if(this.state.PAGE_GAME_SCREEN){
      return (
        <QuestionScreen questionText={this.state.currentQuestion} getNextQuestion={this.getNextQuestion} endGame={this.endGame}></QuestionScreen>
      );
    }else if(this.state.PAGE_END_SCREEN){

    }else{
      console.log('There was an error.  State in App.js is not correct');
      //Show an error screen
    }
  }

};

export default App;
