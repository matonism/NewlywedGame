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
import CustomButton from '../../components/CustomButton/CustomButton';

class QuestionScreen extends React.Component {

    answer = '';
    displayedAnswer = '****************';

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            answerLocked: false
        }
    }

    componentDidMount(){
      this.setState({isLoading: false});
      this.setState({answerLocked: false});
      this.setState({answerRevealed: false});

      this.submit = this.submit.bind(this);
      this.revealAnswer = this.revealAnswer.bind(this);
      this.setUIControl = this.setUIControl.bind(this);
      this.nextQuestion = this.nextQuestion.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(text){
      this.answer = text;
    }
    
    submit(){
        console.log('pressed');
        this.setState({isLoading: true});

        setTimeout(() => {
          this.setState({answerLocked: true})
          this.setState({isLoading: false});
        }, 2000)

        //Local version
        //lock in answer for 2 seconds
        //click to reveal

        //Server version
        //show loading screen
        //make callout to server to submit answer
        //on success, show next screen deciding results
        //hide loading screen
    }

    revealAnswer(){
      this.displayedAnswer = this.answer;
      this.setState({answerLocked: false});
      this.setState({answerRevealed: true});
    }

    nextQuestion(){
      this.answer = '';
      this.displayedAnswer = '****************';
      this.setState({answerRevealed: false})
      this.setState({answerLocked: false})
      this.setState({isLoading: false});
      this.props.getNextQuestion();
    }

    setUIControl(){
      let uiControl = (
        <View style={styles.content}>
          <Text style={styles.questionText}>{this.props.questionText}</Text>
          <TextInput style={styles.textInput} placeholder='Answer...' onChangeText={text => this.onChangeText(text)}/>
          <CustomButton title='Submit' onPress={this.submit}></CustomButton>
        </View>
      );

      if(this.state.isLoading){
       uiControl = (
        <View style={styles.content}>
            <Text style={styles.questionText}>{this.props.questionText} {"\n"} Locking in your answer...</Text> 
            {/* <Text style={styles.questionText}>Please wait while others are answering...</Text> */}
            <ActivityIndicator size="large" color="white" />
        </View>
        )
      }else if(this.state.answerLocked){
        uiControl = (
          <View style={styles.content}>
            <Text style={styles.questionText}>{this.props.questionText} {"\n"} {this.displayedAnswer}</Text>     
            <CustomButton title='Reveal Answer' onPress={this.revealAnswer}></CustomButton>
          </View>
         )
      }else if(this.state.answerRevealed){
        uiControl = (
          <View style={styles.content}>
            <Text style={styles.questionText}>{this.props.questionText} {"\n"} {this.displayedAnswer}</Text>     
            <CustomButton title='Next Question' onPress={this.nextQuestion}></CustomButton>
          </View>
         )
      }

      return uiControl;

    }


    render(){

      let uiControl = this.setUIControl();

      return (
          <View style={styles.background}>
  
            <StatusBar/>
            <SafeAreaView style={styles.backgroundTwo} >
              {/* <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}> */}              
                  <Banner></Banner>
                  {uiControl}
              {/* </ScrollView> */}
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
  

export default QuestionScreen;