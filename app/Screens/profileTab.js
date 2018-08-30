import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style'
class ProfileTab extends React.Component {
    render() {
         return (
           <View style={{flex:1}}>
          {/* <Icon style={{paddingLeft:10}} name="ios-camera-outline" size={30}/> */}
          {/* <Text>Instagram</Text> */}
          <Text>profiletab</Text>
         {/* <Icon  name="ios-send-outline" size={30}/> */}
          </View>
         );
      }
     }
  export default ProfileTab;