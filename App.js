import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './App/navigation/AuthNavigator';
import React, { Component } from 'react'



export default class App extends Component {

 render(){
  
  return(
    <NavigationContainer>
        <AuthNavigator></AuthNavigator>
    </NavigationContainer>
   )
  }
 }




