import * as React from 'react';
import { StyleSheet,TouchableOpacity, Image,Text, View, TextInput, Alert, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        fName: '',
        lName: '',
        address:'',
        contact: '',
        email: '',
        username: '', 
        password:''
      }
    }

    emailValidator=(value) =>{
      console.log(value);
      var id = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if (id.test(value) === false) {
        console.log("Invalid email");
        alert("Your email id is invalid")
        return false
      }
      else {
        this.setState({ email: value })
        AsyncStorage.setItem('email',this.state.email)
        console.log("Email is Correct");
      }
    
    return true
  }

  contactValidator=(value) =>{

    if (isNaN(value)) {
      Alert.alert('Enter a valid contact number');
      return false
    } else {
      this.setState({contact: value,});
      console.log('Contact number is valid');
    }
    return true
  }
    
    signupUser = () => {
      
      const data ={
        fName:this.state.fName,
        lName:this.state.lName,
        address:this.state.address,
        contact:this.state.contact,
        email:this.state.email,
        username:this.state.username,
        password:this.state.password    
      }

      AsyncStorage.setItem('fName',this.state.fName)
      AsyncStorage.setItem('lName',this.state.lName)
      AsyncStorage.setItem('address',this.state.address)
      AsyncStorage.setItem('contact',this.state.contact)
      AsyncStorage.setItem('email',this.state.email)
      AsyncStorage.setItem('username',this.state.username)
      AsyncStorage.setItem('password',this.state.password)
      console.log(data);
      
      
        if(this.state.fName == '' || this.state.lName == '' || this.state.contact == '' || this.state.address == '' || this.state.email == '' || this.state.username == '' || this.state.password == '' || this.state.confirmPassword == '') {
          alert('Please fill all the fields!');
        } else {
          if (this.state.password !== this.state.confirmPassword) {
            alert('Please enter the same password!');
          } else if(this.emailValidator(this.state.email) && this.contactValidator(this.state.contact)){
            try {
              axios.post('https://xplorelanka.herokuapp.com/signUpUser',data)           
              .then(response=>{
                console.log(response)
                var result = JSON.stringify(response.data)
                if(result=="true"){
                  console.log('User registered successfully!')
                  alert('Registered successfully! You will get a code via SMS for verification');
                  this.props.navigation.navigate("OtpScreen",{
                    fName:this.state.fName,
                    lName:this.state.lName,
                    address:this.state.address,
                    contact:this.state.contact,
                    email:this.state.email,
                    username:this.state.username,
                    password:this.state.password
                  })

                }else{
                  alert('Registration is unsuccessfull. Please try again');
                }
              })
            } catch (error) { 
              console.log(error)
            }
          } 
        }  
      }      
  
    
    render() {   
      return (
        <ScrollView>
        <View style={styles.container}>  
             <View style={styles.logoContainer}>
                <Image
                  style = {styles.logo}
                  source={require('../../assets/xl.png')}
                  >
                </Image>
              </View> 
               
          <TextInput
            style={styles.input}
            placeholder="First Name"
            keyboardType="default"
            value={this.state.fName}
            onChangeText={(fName) => this.setState({fName})} 
          />    
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            keyboardType="default"
            value={this.state.lName}
            onChangeText={(lName) => this.setState({lName})} 
          />  
          <TextInput
            style={styles.input}
            placeholder="Address"
            keyboardType="default"
            value={this.state.address}
            onChangeText={(address) => this.setState({address})} 
          />  
          <TextInput
            style={styles.input}
            placeholder="Mobile number[Country Code][Area Code][Phone Num]"
            keyboardType="phone-pad"
            maxLength={15}
            value={this.state.contact}
            onChangeText={(contact) => this.setState({contact})} 
          />    
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Email"
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
      
          />

          <TextInput
            style={styles.input}
            placeholder="UserName"
            keyboardType="default"
            value={this.state.username}
            onChangeText={(username) => this.setState({username})} 
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})} 
            maxLength={50}
            secureTextEntry={true}
          /> 

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})} 
            maxLength={50}
            secureTextEntry={true}
          />    
          
          <TouchableOpacity style={[styles.buttonContainer,styles.signupButton]} 
            onPress={() => this.signupUser()}>
            <Text style={styles.signupText}>SIGNUP</Text>
          </TouchableOpacity>
  
          <TouchableOpacity 
              style={styles.login}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginText}>Already Registered? Click here to Login</Text>
          </TouchableOpacity>
                                   
        </View>
        </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    logo:{
      width:200,
      height:200,
      margin:15,
      justifyContent: 'center',
     
    },
    logoContainer:{
      alignItems: 'center',
      flexGrow:1,
      justifyContent:'center',  
    },

    input: {
      width: '100%',
      marginLeft:5,
      marginRight:5,
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin:20,
      width:300,
    //  borderRadius:30,
      backgroundColor:'transparent'
    },
    signupButton: {
      backgroundColor: "#ac00e6",
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      elevation: 5,
    },
    signupText: {
      color: 'white',
      fontWeight:'bold',
    },
    login: {
      height:35,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10,
      marginBottom:20,
    },

    loginText: {
      color: '#ac00e6',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:20,
      fontSize:17,
      fontWeight:'bold',
    }
  });