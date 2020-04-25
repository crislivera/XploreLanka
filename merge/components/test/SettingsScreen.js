import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';


export default function SettingsScreen({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <OptionButton
        icon="md-person"
        label="Account"
        onPress={ ()=> navigation.navigate('AccountScreen')}
      />

      <OptionButton
        icon="md-notifications"
        label="Notifications"
        onPress={ ()=> navigation.navigate('Notifications')}
      />

      <OptionButton
        icon="ios-alert"
        label="About"
        onPress={ ()=> navigation.navigate('About')}
      />

      <OptionButton
        icon="ios-log-out"
        label="Logout"
        onPress={ ()=> navigation.navigate('Logout')}
        isLastOption
      />

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>From</Text>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>Informates</Text>
        </View>
      </View>
   
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 20,
  },
  option: {
    backgroundColor: '#fff',
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
  infoText: {
    color:"#ac00e6",
    fontSize:20,
  },
  infoTextContainer: {
    borderRadius:7,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    backgroundColor:'#fff',
    flex:1,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        marginTop:260
      },
      android: {
        elevation: 5,
        marginTop:243,
      },
    }),
    paddingVertical: 20,
    paddingLeft:25,
  },
  tabBarInfoText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
    paddingLeft:5,
  },
});
