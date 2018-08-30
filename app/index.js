import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
//import HomeScreen from './Screens/homescreen';
import HomeTab from './Screens/hometab';
import SearchTab from './Screens/searchTab';
import LikeTab from './Screens/likesTab';
import ProfileTab from './Screens/profileTab';
import Icon from 'react-native-vector-icons/Ionicons';
// class App extends React.Component {
//   render() {
//     return (
<StatusBar translucent={false} barStyle="light-content" />      

export default createBottomTabNavigator(
   {
     HomeTab:{
       screen:HomeTab,
       navigationOptions:{
        tabBarIcon:() =>
        <Icon name="ios-home" size={24}/>
        
      }
    },
    SearchTab:{
      screen:SearchTab,
      navigationOptions:{
        tabBarIcon:() =>
        <Icon name="ios-search" size={24}/>
        
      }


      },
   LikeTab:{
    screen:LikeTab,
    navigationOptions:{
      tabBarIcon:() =>
      <Icon name="ios-heart" size={24}/>
      
    }

 },
 ProfileTab:{
  screen:ProfileTab,
  navigationOptions:{
    tabBarIcon:() =>
    <Icon name="ios-person" size={24}/>
    
  }
}

   },
   {
     animationEnabled:true,
     swipeEnabled:true,
    
   },
    {
     tabBarOptions:{
       activeTintColor:"red",
       inactiveTintColor:"black",
       showLabel:true,
       showIcon:true
     }
    
   });