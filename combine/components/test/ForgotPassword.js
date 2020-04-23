import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet,TextInput } from 'react-native'

export default class ForgotPassword extends React.Component {
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Forgot Password?</Text>
           
          </SafeAreaView>
        )
      }

  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 150
    },
    text: {
      color: '#333',
      fontSize: 24,
      marginLeft: 25
    },
    
  })