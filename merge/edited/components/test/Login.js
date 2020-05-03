import * as React from 'react';
import { StyleSheet,Text,View,TextInput,TouchableOpacity,Image,Alert,AsyncStorage,SafeAreaView} from 'react-native';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pwd: '',
    }
  }

  login = () =>{
    console.log('testing1')
    const data = {
     username:this.state.username,
     pwd:this.state.pwd
    }

    if(this.state.username == '' || this.state.pwd == '') {
      Alert.alert(alert,'Please fill all the fields!');
    } 
    else {
      try {
        axios.post('https://xplorelanka.herokuapp.com/signInUser',data) 
        .then((response)=>{
          // console.log(response)
          console.log(JSON.stringify(response.data.username))
          var username = response.data.username
          var password = response.data.password
          var verify = JSON.stringify(response.data.verify)
          if(username == this.state.username && password == this.state.pwd  && verify =="true"){
            console.log('User logged-in successfully!')

            AsyncStorage.setItem('fName',response.data.fName)
            AsyncStorage.setItem('lName',response.data.lName)
            AsyncStorage.setItem('address',response.data.address)
            AsyncStorage.setItem('contact',response.data.contact)
            AsyncStorage.setItem('email',response.data.email)
            AsyncStorage.setItem('username',response.data.username)
            AsyncStorage.setItem('pwd',response.data.password)
            AsyncStorage.setItem('userID',JSON.stringify(response.data.userID))

            this.props.navigation.navigate("Plan")

            // alert("You have logged in")
          }else if(username==this.state.username && password==this.state.pwd  && verify =="false"){
            Alert.alert('You need to verify your account');

            AsyncStorage.setItem('fName',response.data.fName)
            AsyncStorage.setItem('lName',response.data.lName)
            AsyncStorage.setItem('address',response.data.address)
            AsyncStorage.setItem('contact',response.data.contact)
            AsyncStorage.setItem('email',response.data.email)
            AsyncStorage.setItem('username',response.data.username)
            AsyncStorage.setItem('pwd',response.data.password)

            this.props.navigation.navigate("OtpScreen",{
              fName:this.state.fName,
              lName:this.state.lName,
              address:this.state.address,
              contact:this.state.contact,
              email:this.state.email,
              username:this.state.username,
              pwd:this.state.pwd
            })
          }else {
            Alert.alert('Invalid user details. Try again');
          }
         })
      } catch (error) {
          console.log("error")
      }
      
    }
    
  }
  
 

  render() {
    return (
      
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style = {styles.logo}
            source={require('../../assets/xl.png')}/>
          
        </View> 
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput 
                style={styles.inputs}
                placeholder="Username"
                keyboardType="default"
                value={this.state.username}
                onChangeText={(username) => this.setState({username})}/>
          </View>
        
          <View style={styles.inputContainer}>
            <TextInput 
                style={styles.inputs}
                placeholder="Password"
                maxLength={50}
                secureTextEntry={true}
                value={this.state.pwd}
                onChangeText={(pwd) => this.setState({pwd})}/>
          </View>

          <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={this.login}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={styles.forgotPassword}
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={styles.signup}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.signupText}>Don't have an account? Signup</Text>
          </TouchableOpacity>
  
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:'#fff'
  },
  logo:{
    width:250,
    height:210,
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:2,
    justifyContent:'center',
  },
  formContainer:{
    alignItems: 'center',
    flexGrow:1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    borderColor: '#F5FCFF',
    backgroundColor: '#fff',
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#fff',
    flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    marginBottom:20,
    width:300,
   // borderRadius:30,
    borderColor:"#ac00e6",
    backgroundColor:'transparent'
  },
  
  loginButton: {
    backgroundColor: "#ac00e6",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 8,
  },
  loginText: {
    color: 'white',
    fontWeight:'bold',
  },
  forgotPassword: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    marginBottom:20,
  },

  forgotPasswordText:{
    color:"#ac00e6",
    fontSize:17,
    fontWeight:'bold',
  },
  signup: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
  },
  signupText:{
    color:"#ac00e6",
    fontSize:18,
    fontWeight:'bold',
  }
}); 
