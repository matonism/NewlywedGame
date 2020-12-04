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
import {Picker} from '@react-native-community/picker'
import React from 'react';
// import { Picker } from '@react-native-community/picker';

import { Banner } from '../../components/Banner';
import CustomButton from '../../components/CustomButton/CustomButton';

class HomeScreen extends React.Component {

    numberOfQuestions = 3;

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            isLoading: true,
            answerLocked: false
        }
        this.setSelectedValue = this.setSelectedValue.bind(this);
        this.initializeGame = this.initializeGame.bind(this);
    }

    componentDidMount(){
      console.log('mounting HomeScreen');
    }

    // setSelectedValue(value){
    //   this.numberOfQuestions = value;
    // }
    
    initializeGame(){
      console.log('in startGame method');
      console.log(this.props);
      this.props.startGame(this.numberOfQuestions);
      console.log('after props');
    }

    getNumberOfQuestionOptions(){
      let maxNumberOfQuestions = 20;

      let options = [];
      for(let i = 0; i < maxNumberOfQuestions; i++){
        let stringValue = i.toString();
        options.push(<Picker.Item key={stringValue} label={stringValue} value={i}></Picker.Item>);
      }

      let picker = (
        <Picker class="questionText" prompt="Select number of questions" 
          selectedValue={this.numberOfQuestions}
          //onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
          >
            {options}
        </Picker>
      )

      return picker;
    }

    setSelectedValue(itemValue){

    }


    render(){

      let picker = this.getNumberOfQuestionOptions();

      return (

        
        <View style={styles.background}>
  
        <StatusBar/>
        <SafeAreaView style={styles.backgroundTwo} >
          {/* <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}> */}              
              <Banner></Banner>
              {picker}
              <CustomButton title='Start Game' onPress={this.initializeGame}></CustomButton>
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
  

export default HomeScreen;