import * as React from 'react';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
//import Date from '../components/src/components/Date';
import Button from '../components/src/components/Button';
import Search from '../components/src/components/Search';
import Map from '../components/src/components/Map';
import Currentlocation from '../components/src/components/Currentlocation';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Map/>
        <Currentlocation/>
        <View style={styles.nav}>
          <Search/>
          <Button/>
        </View>
        <ScrollView>
          <View style={styles.nav2}>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#fff',
    marginTop:20,
    flexWrap:'wrap',
    height:150,
    width:400,
    borderRadius:30,
    marginLeft:7,
  },

  nav2: {
    backgroundColor: '#fff',
    marginTop:400,
    flexWrap:'wrap',
    height:450,
    width:400,
    borderRadius:30,
    marginLeft:7,
  },
});