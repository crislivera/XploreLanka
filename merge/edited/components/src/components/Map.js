import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
//import Currentlocation from './Currentlocation';

export default class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: "",
      latitude: 0,
      longitude: 0,
    };
  }

  componentDidMount() {
    //Get current location and get initial region to this
    navigator.geolocation.getCurrentPosition(
      position =>{
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 20000}
    );
  }

  centerMap() {
    const {latitude,
            longitude,
            latitudeDelta,
            longitudeDelta } = this.state.region;
    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    })    
  }

  render(){
    return(
      <View style={styles.container}>
        {/* <Currentlocation cb={() => { this.centerMap() }} /> */}
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          ref={(map) => {this.map = map}}
          showsUserLocation={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //....StyleSheet.absoluteFillObject
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    //...StyleSheet.absoluteFillObject
     width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    position: 'relative',
    //width:200,
    height:1200,
    marginTop:300,
  },
});