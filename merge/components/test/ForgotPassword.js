import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native'

export default class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  handleEmail = (val, prop) => {
    if(prop=='email'){
      this.setState({
        email:val
      })
    }
  }

  sendEmail = async () => {

    email =this.state.email;
    
    try {
      if(this.state.email== '') {
        Alert.alert(Alert,'Please enter your email!')
      } 
      else {
        fetch('http://localhost:3000/users',{
          method:'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
         body: JSON.stringify({email})
       })
       .then((response)=> response.json())
       .then((res)=>{
         if(res.success === true){
          console.log('Password reset email sent successfully')
           this.setState({
               email: '', 
           })
           this.props.navigate.navigate('Login');
         }
         else{
           Alert.alert(Alert,'Invalid email ');
         }
       })
      }
    }catch (error) {
        error => this.setState({ errorMessage: error.message })
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
                value={this.state.email}
                onChangeText={(value) => this.handleEmail(value, 'email')}
                placeholder='Enter your email'
                autoCapitalize='none'
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
      backgroundColor: '#fff',
      
    },
    formContainer:{
      alignItems: 'center',
      flexGrow:1,
      margin:40
    },
    text: {
      fontSize: 22,
      margin:30,
      color:'#9E00D3',
      justifyContent:'center',
      fontWeight:'bold'
    },
    input: {
      width: '100%',
      marginLeft:15,
      marginRight:15,
      marginBottom: 15,
      paddingBottom: 15,
      alignItems: "center",
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
      marginTop:30,
      width:300,    
      borderWidth: 1,
      borderRadius:30,
      backgroundColor:'transparent',
      borderColor:"#9E00D3"
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
      color:'#9E00D3',
      fontWeight:'bold'
    },
    
  })