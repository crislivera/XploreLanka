import * as React from 'react';
import { StyleSheet,TouchableOpacity,SafeView, Image,Text, View, TextInput, Alert, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class UpdateAddress extends React.Component {
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
       
        this.setState({
          fName:await AsyncStorage.getItem('fName'),
          lName:await AsyncStorage.getItem('lName'),
          contact:await AsyncStorage.getItem('contact'),
          email:await AsyncStorage.getItem('email'),
          username:await AsyncStorage.getItem('username'),
          password:await AsyncStorage.getItem('pwd'),
        }) 
      }
      catch(error){
        console.log("error")
      }
    }

    updateAddress = () => {
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

      if(this.state.address==''){
        alert("Please fill the field to update your address")
      }else{
        try {
          axios.post('https://xplorelanka.herokuapp.com/updateUser',data)           
                .then(response=>{
                  console.log(response)
                  var address = response.data.address
                  if(address==this.state.address){
                    AsyncStorage.setItem('address',this.state.address)
                    console.log('Address updated successfully!')
                    alert('Address updated successfully');
                    this.props.navigation.navigate("AccountScreen",{
                      address:this.state.address
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
            placeholder="Enter your address"
            keyboardType="default"
            value={this.state.address}
            onChangeText={(address) => this.setState({address})} 
          />        
          <TouchableOpacity style={[styles.buttonContainer,styles.saveButton]} 
            onPress={() => this.updateAddress()}>
            <Text style={styles.saveText}>Update Address</Text>
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