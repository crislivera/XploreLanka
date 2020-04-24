import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native'

export default class ForgotPassword extends React.Component {
  handlePasswordReset = async (values, actions) => {
    const { email } = values
  
    try {
      await this.props.firebase.passwordReset(email)
      console.log('Password reset email sent successfully')
      this.props.navigation.navigate('Login')
    } catch (error) {
      actions.setFieldError('general', error.message)
    }
  }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.text}>Forgot Your Password?</Text>
            <Text style={styles.text2}>Enter your e-mail address and we will send you a link to reset your password</Text>
              <TextInput
                style={styles.input}
                name='email'
               // value={values.email}
              //  onChangeText={handleChange('email')}
                placeholder='Enter your email'
                autoCapitalize='none'
               // onBlur={handleBlur('email')}
                keyboardType="email-address"
              />  

              <TouchableOpacity style={[styles.buttonContainer,styles.sendButton]} 
                onPress={() => this.sendEmail()}>
                <Text style={styles.btnText}>SEND</Text>
              </TouchableOpacity>
             </View>
          </View>
        )
      }  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
     // justifyContent:'center',
      backgroundColor: '#fff',
     // alignItems:'center'
      
    },
    formContainer:{
      alignItems: 'center',
      flexGrow:1,
     // backgroundColor: 'blue',
      margin:40
    },
    text: {
      fontSize: 22,
      margin:30,
      justifyContent:'center',
      fontWeight:'bold'
    },
    input: {
      width: '100%',
      marginLeft:15,
      marginRight:15,
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1,
      fontSize:15
    },
    buttonContainer: {
      margin: 20,
      alignItems:'flex-start',
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin:20,
      width:200,
      
      borderWidth: 1,
      borderRadius:20,
      backgroundColor:'transparent'
    },
    sendButton: {
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
    
    text2: { 
      marginBottom:10,
      fontSize: 16,
      justifyContent:'center',
      
    },
    btnText: { 
      alignItems:'center',
     
    },
    
  })