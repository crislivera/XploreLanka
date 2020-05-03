import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Image, Animated, ScrollView, StyleSheet, View, Text, TimePickerAndroid ,AsyncStorage, Button,Alert} from 'react-native';

export default class Plan extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Alert.alert("Testing1");
    return (
      <View>
        <ScrollView>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Home")}><Text>Home</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Login")}><Text>Login</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    viewHolder: {
      height: 55,
      backgroundColor: '#ff4081',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4
    },
    headerText: {
      color: 'white',
      fontSize: 25
    },
    buttonDesign: {
      position: 'absolute',
      right: 25,
      bottom: 25,
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonImage: {
      resizeMode: 'contain',
      width: '100%',
    }
  });