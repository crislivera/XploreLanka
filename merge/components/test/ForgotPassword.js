import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,AsyncStorage} from 'react-native'
import axios from 'axios';

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  sendUsername =() => {
    
    const data = {
      username : this.state.username
    }
    AsyncStorage.setItem('username',this.state.username)
    console.log(data);

    if(this.state.username == '') {
      alert('Please enter your username!')
    } 
    else {
      try {
        console.log("data : "+data)
        const url ='https://xplorelanka.herokuapp.com/checkUser?username='+data.username; 
        axios.get(url) 
        .then(response=>{
          console.log(data);
          console.log(response)
          var result = JSON.stringify(response.data)
          if(result=="true"){
            console.log('Username is correct!')
            console.log('Link has been sent to your username successfully')
            alert('Sent a link to you via SMS and E-mail');
            console.log('Link has been sent to your username successfully')
            this.props.navigation.goBack("Login")
            }else{
              alert('Invalid username . Please try again');
            }
       })
      } catch (error) {
        console.log('[ERROR] Get method '+error)
      }
    }
  }  
  
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.text}>Forgot Your Password?</Text>

            <Text style={styles.text2}>Enter your username and we will send you a link via SMS or E-mail to reset your password</Text>
              <TextInput
                style={styles.input}
                name='username'
                placeholder='Enter your username'
                autoCapitalize='none'
                keyboardType="default"
                value={this.state.username}
                onChangeText={(username) => this.setState({username})}
              />  

              <TouchableOpacity style={[styles.buttonContainer,styles.sendButton]} 
                onPress={() => this.sendUsername()}>
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
      flexDirection: "row",
      backgroundColor: '#fff',
    },
    formContainer:{
      alignItems: 'center',
      flexGrow:1,
      margin:40
    },
    text: {
      fontSize: 23,
      margin:30,
      marginBottom:50,
      color:'#1c39bb',
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
     // borderRadius:30,
      backgroundColor:'transparent',
      borderColor:"#1c39bb"
    },
    sendButton: {
      backgroundColor: "#1c39bb",
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
      marginBottom:20,
      fontSize: 16,
      justifyContent:'center',
    },
    btnText: { 
      alignItems:'center',
      color:'#fff',
      fontWeight:'bold'
    },
    
  })