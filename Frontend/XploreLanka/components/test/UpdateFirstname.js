import * as React from 'react';
import { StyleSheet,TouchableOpacity,SafeView, Image,Text, View, TextInput, Alert, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class UpdateFirstname extends React.Component {
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
        password:'',
      }
    }
    
    _retrieveData = async () => {
      try {
        const lName = await AsyncStorage.getItem('lName');
        const address = await AsyncStorage.getItem('address');
        const contact = await AsyncStorage.getItem('contact');
        const email = await AsyncStorage.getItem('email');
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('pwd');
       
        this.setState({
          lName:lName,
          address:address,
          contact:contact,
          email:email,
          username:username,
          password:password,
        }) 
      }
      catch(error){
        console.log("error")
      }
    }

    updateFirstName = () => {
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

      if(this.state.fName==''){
        alert("Please fill the field to update your first name")
      }else{
        try {
          axios.post('https://xplorelanka.herokuapp.com/updateUser',data)           
                .then(response=>{
                  console.log(response)
                  var result = response.data.fName
                  if(result==this.state.fName){
                    AsyncStorage.setItem('fName',this.state.fName)
                    console.log('first name updated successfully!')
                    alert('First name updated successfully');
                    this.props.navigation.goBack()
                  }else{
                    alert('Update is unsuccessfull. Please try again');
                  }
                })
          } catch (error) { 
                console.log("Error"+error)
        }
      }     
    } 
            
  
    render() {   
      return (
        <View style={styles.container}>  
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            keyboardType="default"
            value={this.state.fName}
            onChangeText={(fName) => this.setState({fName})} 
          />        
          <TouchableOpacity style={[styles.buttonContainer,styles.saveButton]} 
            onPress={() => this.updateFirstName()}>
            <Text style={styles.saveText}>Update First Name</Text>
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
    //  borderRadius:30,
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