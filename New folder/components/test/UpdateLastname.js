import * as React from 'react';
import { StyleSheet,TouchableOpacity,SafeView, Image,Text, View, TextInput, Alert, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class UpdateLastname extends React.Component {
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
        const fName = await AsyncStorage.getItem('fName');
        const address = await AsyncStorage.getItem('address');
        const contact = await AsyncStorage.getItem('contact');
        const email = await AsyncStorage.getItem('email');
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('pwd');
       
        this.setState({
          fName:fName,
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

    updateLastName = () => {
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

      if(this.state.lName==''){
        alert("Please fill the required field to update your last name")
      }else{
        try {
          axios.post('https://xplorelanka.herokuapp.com/updateUser',data)           
                .then(response=>{
                  console.log(response)
                  var result = response.data.lName
                  if(result==this.state.lName){
                    AsyncStorage.setItem('lName',this.state.lName)
                    console.log('Last name updated successfully!')
                    alert('Last name updated successfully');
                    this.props.navigation.navigate("AccountScreen",{
                      lName:this.state.lName
                    })
  
                  }else{
                    alert('Update is unsuccessful. Please try again');
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
            placeholder="Enter your last name"
            keyboardType="default"
            value={this.state.lName}
            onChangeText={(lName) => this.setState({lName})} 
          />        
          <TouchableOpacity style={[styles.buttonContainer,styles.saveButton]} 
            onPress={() => this.updateLastName()}>
            <Text style={styles.saveText}>Update Last Name</Text>
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