import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../style'
class HomeTab extends React.Component {
    render() {
        return (
          <View style={styles.header}>
          <Icon style={{paddingLeft:10}} name="ios-camera-outline" size={30}/>
          <Text>Instagram</Text>
          
          <Icon  name="ios-send-outline" size={30}/>
          </View>
        );
      }
    }
  export default HomeTab;