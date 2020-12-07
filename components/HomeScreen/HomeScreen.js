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
import { Picker } from '@react-native-community/picker'
import React from 'react';
// import { Picker } from '@react-native-community/picker';

import { Banner } from '../../components/Banner';
import CustomButton from '../../components/CustomButton/CustomButton';
import SmallButton from '../../components/SmallButton/SmallButton';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numberOfQuestions: 10,
      isLoading: true,
      answerLocked: false
    }

    this.setSelectedValue = this.setSelectedValue.bind(this);
    this.initializeGame = this.initializeGame.bind(this);
  }

  componentDidMount() {}


  getNumberOfQuestionOptions() {
    let maxNumberOfQuestions = 20;

    let options = [];
    for (let i = 1; i <= maxNumberOfQuestions; i++) {
      let stringValue = i.toString();
      options.push(
        <Picker.Item key={stringValue} label={stringValue} value={i}></Picker.Item>
      );
    }

    let picker = (
      <View style={styles.pickerContainer}>
        <Picker style={styles.picker}
          prompt="Select number of questions" 
          dropdownIconColor="#F0agFF"
          selectedValue={this.state.numberOfQuestions} 
          onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
        >
          {options}
        </Picker>
      </View>
    )

    return picker;
  }

  setSelectedValue(value) {
    this.setState({'numberOfQuestions': value});
  }

  initializeGame() {
    this.props.startGame(this.state.numberOfQuestions);
  }


  render() {

    let picker = this.getNumberOfQuestionOptions();

    return (
      <View style={styles.background}>
        <StatusBar />
        <SafeAreaView style={styles.safeArea} >
          <View style={styles.mainFormat}>
            <Banner></Banner>
            <View style={styles.homeContent}>
              
              <Text style={styles.promptText}>Select a number of questions</Text>
              <View style={styles.inlineControls}>
                {picker}
                <SmallButton title='Go' onPress={this.initializeGame}></SmallButton>
              </View>
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
  safeArea: {
    backgroundColor: 'tan',
    flex: 1
  },
  mainFormat: {
    flex: 1,
    backgroundColor: '#00A9A5'
  },
  homeContent: {
    backgroundColor: "#00A9A5",
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20
  },
  promptText: {
    fontSize: 25,
    textAlign: "left",
    color: "white",
    opacity: 0.9
  },
  inlineControls: {
    marginVertical: 10,
    backgroundColor: "#00A9A5",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickerContainer: {
    backgroundColor: "white",
    flex: 1
  }

});


export default HomeScreen;