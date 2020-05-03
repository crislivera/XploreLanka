 
import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Alert,AsyncStorage } from 'react-native'
export default class Dateing extends Component {
  constructor(props){
    super(props)
    this.state = {date:''}
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(newText){
    this.setState({
      date:newText
    })
    axios.post('https://xplorelanka.herokuapp.com/prediction',this.state)
    .then(res => {
      Alert.alert(JSON.stringify(res))
    })
  }
  setdate= async()=>{
    await AsyncStorage.setItem('date',this.state.date);
    console.log('datepress : '+this.state.date);
   }
  render(){
    return (
      <DatePicker
        style={{width: 250, marginTop:75, marginLeft:25}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 50
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date})}}
        onPressDate={this.setdate()}
      />
    )
  }

  // async getDataAxios(){
  //   const response =
  //     await axios.get("https://xplorelanka.herokuapp.com/date",
  //         { params: {date: 'date'}}
  //     )
  //   console.log(response.date)
  // }

  
}

