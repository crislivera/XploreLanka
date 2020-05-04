import * as React from 'react';
import { StyleSheet,TouchableOpacity, Text, View, TextInput, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class ChangePassword extends React.Component {
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
            currentPassword:'',
            password:'',
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
        const currentPassword = await AsyncStorage.getItem('pwd');
       
        this.setState({
            fName:fName,
            lName:lName,
            address:address,
            contact:contact,
            email:email,
            username:username,
            currentPassword:currentPassword 
        }) 

      }
      catch(error){
        console.log("error")
      }
    }

    updatePassword = () => {
        var currentPassword = this.state.currentPassword;
        
        const data = {
            fName : this.state.fName,
            lName:this.state.lName,
            address : this.state.address,
            contact:this.state.contact,
            email:this.state.email,
            username : this.state.username,
            password:this.state.password
        }

      console.log(data)
      console.log(currentPassword)
      console.log(this.state.currentPwd)

      if(this.state.currentPwd=='' || this.state.password=='' || this.state.confirmPassword==''){
        alert("Please fill all the fields to update your password")
      }else{
          if(currentPassword==this.state.currentPwd){
            if(this.state.password == this.state.confirmPassword){
            try {
                axios.post('https://xplorelanka.herokuapp.com/updateUser',data)           
                .then(response=>{
                console.log(response)
                var password = response.data.password
                    if(password==this.state.password){
                        AsyncStorage.setItem('pwd',this.state.password)
                        console.log('Password updated successfully!')
                        alert('Password updated successfully');
                        this.props.navigation.goBack()
                    }else{
                        alert('Update is unsuccessful. Please try again');
                    }
                })
                    } catch (error) { 
                          console.log("Error"+error)
                  }
              }else{
                  alert("Please enter the same password to confirm")
              }
          }else{
              alert("Invalid current password. Try again")
          }
        
      }     
    } 
            
  
    render() {   
      return (
        <View style={styles.container}> 
        <Text>Enter Your Current Password</Text> 
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            keyboardType="default"
            maxLength={50}
            secureTextEntry={true}
            value={this.state.currentPwd}
            onChangeText={(currentPwd) => this.setState({currentPwd})} 
          />        
          <Text>Enter Your New Password</Text> 
          <TextInput
            style={styles.input}
            placeholder="New Password"
            maxLength={50}
            secureTextEntry={true}
            keyboardType="default"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})} 
          />    
           <TextInput
            style={styles.input}
            placeholder="Confirm password"
            keyboardType="default"
            maxLength={50}
            secureTextEntry={true}
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})} 
          /> 
          <TouchableOpacity style={[styles.buttonContainer,styles.saveButton]} 
            onPress={() => this.updatePassword()}>
            <Text style={styles.saveText}>Update Password</Text>
          </TouchableOpacity>                 
        </View>
        
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: 35,
      backgroundColor: '#fff'
    },

    input: {
      width: '100%',
      marginLeft:5,
      marginRight:5,
      paddingLeft:10,
      paddingTop:10,
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderWidth: 1
    },
  
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin:20,
      width:300,
      backgroundColor:'transparent'
    },
    saveButton: {
      backgroundColor: "#1c39bb",
      shadowColor: "#808080",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      elevation: 3,
    },
    saveText: {
      color: 'white',
      fontWeight:'bold',
      fontSize:17
    },
    
  });