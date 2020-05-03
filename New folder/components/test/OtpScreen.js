import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert ,AsyncStorage} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import axios from 'axios';

export default class OtpScreen extends React.Component {
 
  constructor(props) {
    super(props);
    this._retrieveData(); 
    this.state = { 
        fName: '',
        lName:'',
        address: '',
        contact:'',
        email: '',
        username:'', 
        password: '',
        otp:'',
    }
  }

  _retrieveData = async () => {
    try {
      const fName = await AsyncStorage.getItem('fName');
      const lName = await AsyncStorage.getItem('lName');
      const address = await AsyncStorage.getItem('address');
      const contact = await AsyncStorage.getItem('contact');
      const email = await AsyncStorage.getItem('email');
      const username = await AsyncStorage.getItem('username');
      const password = await AsyncStorage.getItem('password');

      this.setState({
        fName:fName,
        lName:lName,
        address:address,
        contact:contact,
        email:email,
        username:username,
        password:password
      }) 

      if (fName != null || lName!=null || address!=null && contact!=null && email!=null && username!=null && password !=null) {
        console.log('Values are not null')
   
      }
    } catch (error) {
      console.log('Error')
    }
  };

  resendOTP = ()=>{ 

    const data={
      fName:this.state.fName,
      lName:this.state.lName,
      address:this.state.address,
      contact:this.state.contact,
      email:this.state.email,
      username:this.state.username,
      password:this.state.password,
    }
    
    console.log(data);
    try {
      axios.post('https://xplorelanka.herokuapp.com/resendOTP',data)
      .then(response=>{
      console.log(response)
      Alert.alert(alert,'Successfully sent your verification code via SMS!')
      })
    }catch (error) {       
       console.log(error)
    }        
  }
 

  resendMail = ()=>{

    const data={
      fName:this.state.fName,
      lName:this.state.lName,
      address:this.state.address,
      contact:this.state.contact,
      email:this.state.email,
      username:this.state.username,
      password:this.state.password,
    }
    
    try {
      axios.post('https://xplorelanka.herokuapp.com/resendMail',data)
      .then(response=>{
      console.log(response)
      Alert.alert(alert,'Successfully sent your verification code via E-mail!')
        })
    }catch (error) {       
       console.log(error)
    }     
  
} 

verifyOTP = ()=>{

  const data={
    fName:this.state.fName,
    lName:this.state.lName,
    address:this.state.address,
    contact:this.state.contact,
    email:this.state.email,
    username:this.state.username,
    password:this.state.password,
    otp:this.state.otp
  }
  
  console.log(data);

    if(this.state.otp === '') {
      alert('Please enter the verification code');
    } 
    else {
      try {
        axios.post('https://xplorelanka.herokuapp.com/verifyOTP',data)
        .then(response=>{
        console.log(response)
        Alert.alert(JSON.stringify(response))
        var var1 = JSON.stringify(response.data)
        if(var1=="true"){
          console.log('User verified successfully!')
          Alert.alert(alert,'Successfully verified')                
          this.props.navigation.navigate("Login")
        }else{
          Alert.alert('Verification failed. Please try again');
        }
      })
    } catch (error) {
      console.log(error)
    }       
}
} 

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} > Enter your verification code </Text>
      <OTPInputView style={{width: '70%', height: 100}}
        pinCount={6}
        style={{width: '70%', height: 100}}
        codeInputFieldStyle={styles.inputFieldStyle}
        codeInputHighlightStyle={styles.inputHighlightStyle}
        value={this.state.otp}
        onCodeFilled = {(otp)=> this.setState({otp})}
      />

      <TouchableOpacity
          style={[styles.buttonContainer, styles.continueButton]}
          onPress={() => this.verifyOTP()}>
        <Text style={styles.btnText}>VERIFY</Text>
      </TouchableOpacity>

        <Text 
          style={styles.resendText}
          onPress={() => this.resendOTP()}>
          Click here to resend the code through SMS
        </Text>
        
        <Text style={styles.text2}> OR </Text>

        <Text 
          style={styles.resendText}
          onPress={() => this.resendMail()}>
          Click here to resend your code through E-mail 
        </Text>
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
    fontSize:22,
    color:"#1c39bb",
    fontWeight:'bold'
  },
 
  inputFieldStyle: {
    width: 40,
    height: 45,
    margin:5,
    borderWidth: 2,
    borderBottomWidth: 2,
    color:'black',
    fontSize:20
  },
  inputHighlightStyle: { 
    borderColor: "#ccc",
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
    marginBottom:20,
    width:200,    
    borderWidth: 1,
    borderColor:"#1c39bb"
  },
  continueButton: {
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
  btnText: { 
    alignItems:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:17
  },

  resendText: {
    color: '#1c39bb',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:20,
    marginTop:30,
    marginBottom:15,
    fontSize:17,
    fontWeight:'bold'
   
  },
  text2: {
    color: '#1c39bb',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:20,
    marginTop:10,
    fontSize:15,
    fontWeight:'bold',
    
  }
});
