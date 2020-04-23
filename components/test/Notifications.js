import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function About() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View></View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  codeHighlightText: {
    color:"blue",
    fontSize:20,
  },
  codeHighlightContainer: {
    borderRadius:7,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'relative',
    bottom:0 ,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'flex-start',
    backgroundColor: '#fdfdfd',
    paddingVertical: 20,
    paddingLeft:25,
    marginTop:235,
    
  },
  tabBarInfoText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
    paddingLeft:5,
  },
});
