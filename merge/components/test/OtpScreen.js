import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import OtpInputs from "react-native-otp-inputs";

export default class OtpScreen extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        {/* <OtpInputs style={styles.otpContainer}
          handleChange={code => console.log(code)}
          numberOfInputs={6}
        /> */}
        <Text>Hello</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpContainer: {
   width:100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  text: {
    marginBottom: 15
  }
});