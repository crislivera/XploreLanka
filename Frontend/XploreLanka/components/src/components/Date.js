import React, { Component } from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class Date extends Component {
  state = {
    hand: 'right',  
  }

  render() {
    return (
      <View style={StyleSheet.drg}>
        <Picker
          selectedValue={this.state.hand}
          onValueChange={hand => this.setState({ hand })}
          style={{ width: 100, marginTop:-1, marginLeft:24,}}
          mode="dropdown">
          <Picker.Item label="Date" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
          <Picker.Item label="24" value="24" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="26" value="26" />
          <Picker.Item label="27" value="27" />
          <Picker.Item label="28" value="28" />
          <Picker.Item label="29" value="29" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="31" value="31" />
        </Picker>

        <Picker
          selectedValue={this.state.hand}
          onValueChange={hand => this.setState({ hand })}
          style={{ width: 100, marginTop:-216, marginLeft:149}}
          mode="dropdown">
          <Picker.Item label="Month" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
        </Picker>

        <Picker
          selectedValue={this.state.hand}
          onValueChange={hand => this.setState({ hand })}
          style={{ width: 100, marginTop:-216, marginLeft:274}}
          mode="dropdown">
          <Picker.Item label="Year" value="0" />
          <Picker.Item label="2020" value="2020" />
          <Picker.Item label="2021" value="2021" />
          <Picker.Item label="2022" value="2022" />
          <Picker.Item label="2023" value="2023" />
          <Picker.Item label="2024" value="2024" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dev: {
    marginTop: 900,
  }
});