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
import EndScreen from './components/EndScreen/EndScreen';


import QuestionScreen from './components/QuestionScreen/QuestionScreen';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      PAGE_HOME_SCREEN: true,
      PAGE_GAME_SCREEN: false,
      PAGE_END_SCREEN: false

    }
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.returnToHome = this.returnToHome.bind(this);
  }

  componentDidMount(){}

  startGame(numberOfQuestions){
    this.setState({'numberOfQuestions': numberOfQuestions});
    this.setState({'PAGE_GAME_SCREEN': true, 'PAGE_HOME_SCREEN': false});
  }

  endGame(){
    this.setState({'PAGE_END_SCREEN': true, 'PAGE_GAME_SCREEN': false});
  }

  returnToHome(){
    this.setState({'PAGE_HOME_SCREEN': true, 'PAGE_END_SCREEN': false});
  }


  render(){

    if(this.state.PAGE_HOME_SCREEN){
      return (
        <HomeScreen startGame={this.startGame}></HomeScreen>
      );
    }else if(this.state.PAGE_GAME_SCREEN){
      return (
        <QuestionScreen numberOfQuestions={this.state.numberOfQuestions} endGame={this.endGame}></QuestionScreen>
      );
    }else if(this.state.PAGE_END_SCREEN){
      return (
        <EndScreen returnToHome={this.returnToHome}></EndScreen>
      );
    }else{
      console.log('There was an error.  State in App.js is not correct');
      //Show an error screen
    }
  }

};

export default App;
