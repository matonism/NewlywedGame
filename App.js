/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';


import { Banner } from './components/Banner';

class App extends React.Component {
  render(){
    return (
      <View style={styles.background}>
        <StatusBar/>
        <SafeAreaView style={styles.backgroundTwo} >
          {/* <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}> */}
            
            
              
              <Banner></Banner>
              <View style={styles.content}>
                <Text style={styles.questionText}>What is your partners biggest pet peeve?</Text>
                
                <TextInput style={styles.textInput} placeholder='Answer...' />
              </View>
              


          {/* </ScrollView> */}
        </SafeAreaView>
      
      </View>
    );
  }
};


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
  textInput: { 
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1,
    backgroundColor: 'white'
  }

});

export default App;
