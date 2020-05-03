import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { Button } from 'galio-framework';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default function Search() {
  return (
    <View>
        <Button
          round size="small"
          color="#fff" style={styles.but}
          onPress={() => navigation.navigate("Details")}
        >
        <Text>Search</Text></Button>
    </View>
    // <View>
    //     {/* <Button
    //       style={styles.but}
    //       title="Search"
    //       //onPress={() => }
    //     /> */}
    //     {/* <TouchableHighlight
    //       style={styles.submit}
    //       //onPress={() => this.submitSuggestion(this.props)}
    //       underlayColor='#fff'>
    //         <Text style={styles.submitText}>Search</Text>
    //     </TouchableHighlight> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  but: {
    marginTop: 0,
    alignSelf: 'center',
    width: 300,
    marginLeft: 45,
  },
  submit:{
    marginRight:40,
    marginLeft:74,
    marginTop:86,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:40,
    borderWidth: 1,
    borderColor: '#fff',
    width: 250,
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
  }
});