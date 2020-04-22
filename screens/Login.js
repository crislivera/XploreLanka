import * as React from 'react';
import { StyleSheet,Text,View,TextInput,TouchableOpacity,Image,Alert,AsyncStorage,SafeAreaView} from 'react-native';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  updateValue = (val, prop) => {
    if(prop=='username'){
      this.setState({
        username:val
      })
    }
    else if(prop=='password'){
      this.setState({
        password:val
      })
    }
    
  }

  login = () =>{

    let collection={}
        collection.username=this.state.username,
        collection.password=this.state.password
        
       
    if(this.state.email == '' || this.state.password == '') {
      Alert.alert(Alert,'Please fill all the fields!')
    } 
    else {
      fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({collection})
     })
     .then((response)=> response.json())
     .then((res)=>{
       if(res.success === true){
        console.log('User logged-in successfully!')
         AsyncStorage.setItem('user',res.user);
         this.setState({
             email: '', 
             password: ''
         })
         this.props.navigate.navigate('Plan');
       }
       else{
         Alert.alert(Alert,'Invalid user');
       }
     })
     .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  

  render() {
    return (
      
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style = {styles.logo}
            source={require('../assets/images/xl.png')}/>
          
        </View> 
        <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="default"
              underlineColorAndroid='transparent'
              value={this.state.username}
              onChangeText={(value) => this.updateValue(value, 'username')}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={this.state.password}
              onChangeText={(value) => this.updateValue(value, 'password')}/>
              
        </View>

        <TouchableOpacity 
            style={styles.forgotPassword}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.buttonText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.login}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.buttonText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have an account? Signup
        </Text>
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
    backgroundColor: 'white',
  },
  logo:{
    width:250,
    height:210,
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'center',
  },

  formContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'center',
  },
  inputContainer: {
    borderColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
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
    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  forgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
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
    elevation: 19,
  },
  loginText: {
    color: 'white',
    fontWeight:'bold',
  },
  buttonText:{
    color:"#ac00e6",
    fontWeight:'bold'
  }
}); 
