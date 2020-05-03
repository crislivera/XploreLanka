import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

//make the code according to the video

export default class Currentlocation extends React.Component {
render(){
    return(
        <View style={styles.container}>
            <MaterialIcons
                name="my-location"
                color="#000000"
                size={25}
                onPress={() => {}} />
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        zIndex:9,
        position: 'absolute',
        width:45,
        height:45,
        backgroundColor: '#fff',
        borderRadius:50,
        shadowColor: '#000000',
        elevation:9,
        shadowRadius:5,
        shadowOpacity:0.8,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop:560,
        marginLeft:350,
    },
})