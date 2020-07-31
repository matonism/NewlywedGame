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
    TextInput,
    View,
    Text,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import React from 'react';



import { Banner } from '../../components/Banner';
import CustomButton from '../../components/CustomButton/CustomButton';


class LoginScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        this.setState({isLoading: false});
        this.login = this.login.bind(this);
    }
    
    login(){
        console.log('pressed');
        this.setState({isLoading: true});
        //show loading screen
        //make callout to server to submit answer
        //on success, show next screen deciding results
        //hide loading screen
    }


    render(){
        if(this.state.isLoading){
            return (
                <View style={styles.background}>
                    <SafeAreaView style={styles.backgroundTwo} >            
                        <Banner></Banner>
                        <View style={styles.content}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    </SafeAreaView>
                </View>
            );
        }else{
            return (
                <View style={styles.background}>
        
                  <StatusBar/>
                  <SafeAreaView style={styles.backgroundTwo} >
                    {/* <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}> */}              
                        <Banner></Banner>
                        <View style={styles.content}>
                          <TextInput style={styles.textInput} placeholder='Nickname...' />
                          <TextInput style={styles.textInput} placeholder='Room Code...' />
                          <CustomButton title='Enter Room' onPress={this.login}></CustomButton>
                        </View>
                    {/* </ScrollView> */}
                  </SafeAreaView>
                
                </View>
            );
        }

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
    textInput: { 
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      padding: 10,
      height: 50, 
      borderColor: 'gray', 
      borderWidth: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      fontSize: 20
    },
    button: {
      width: 120,
      margin: 20,
      marginTop: 10
    }
  
  });
  

export default LoginScreen;