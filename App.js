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
      currentQuestion: 'abcd'
    }
  }

  componentDidMount(){
    console.log('component moundets');
    QuestionBuilder.initializeQuestions(10);
    QuestionBuilder.getCurrentQuestion().then((currentQuestion) => {
      this.setState({
        currentQuestion: currentQuestion
      });
      console.log('state in mounted component')
      console.log(this.state)

    });

  }

  render(){

    return (
      <QuestionScreen questionText={this.state.currentQuestion}></QuestionScreen>
    );
  }

};

export default App;
