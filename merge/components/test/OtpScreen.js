import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import OtpInputs from "react-native-otp-inputs";
import OTPInputView from '@twotalltotems/react-native-otp-input'


export default class OtpScreen extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} > Enter your verification code </Text>
        <OTPInputView 
          style={{width: '70%', height: 100}}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.inputFieldStyle}
          codeInputHighlightStyle={styles.inputHighlightStyle}
          onCodeFilled = {(code => {
          console.log(`Code is ${code}`)
          })}
        />

        <TouchableOpacity
            style={[styles.buttonContainer, styles.continueButton]}
            onPress={this.continue}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 15,
    fontSize:20
  },
 
  inputFieldStyle: {
    width: 40,
    height: 45,
    margin:5,
    borderWidth: 2,
    borderBottomWidth: 2,
  },

  inputHighlightStyle: { 
    borderColor: "#03DAC6",
  },
  buttonContainer: {
    margin: 20,
    alignItems:'flex-start',
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    marginTop:30,
    width:200,    
    borderWidth: 1,
    borderRadius:30,
    backgroundColor:'transparent',
    borderColor:"#9E00D3"
  },
  continueButton: {
    backgroundColor: "#fff",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.50,
    shadowRadius: 1.35,
    elevation: 5,
  },
  
  btnText: { 
    alignItems:'center',
    color:'#9E00D3',
    fontWeight:'bold'
  },
});
